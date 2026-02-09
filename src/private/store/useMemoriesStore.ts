import {defineStore} from 'pinia'
import {ref} from 'vue'
import type {Memory} from '@/private/types/memory.ts'
import {collection, doc, getDocs, orderBy, query, setDoc, updateDoc} from 'firebase/firestore'
import {db} from '@/firebase.ts'
import {useAuthStore} from '@/private/store/useAuthStore.ts'
import {getDownloadURL, getStorage, ref as storageRef, uploadBytes} from 'firebase/storage'

export const useMemoriesStore = defineStore('memories', () => {
	const memories = ref<Memory[]>([])
	const loaded = ref(false)
	const error = ref<string | null>(null)

	const fetchMemories = async (userEmail: string) => {
		if (loaded.value) return
		error.value = null

		try {
			const memoriesRef = collection(db, `users/${userEmail}/memories`)
			const q = query(memoriesRef, orderBy('date', 'desc'))
			const snapshot = await getDocs(q)

			memories.value = snapshot.docs.map(doc => {
				const data = doc.data() as Omit<Memory, `id`>
				return {id: doc.id, ...data}
			})
			loaded.value = true
		} catch (error: any) {
			console.error(error)
			error.value = error.message || 'Failed to fetch memories'
		}
	}

	const refreshMemories = async (userEmail: string) => {
		loaded.value = false
		await fetchMemories(userEmail)
	}

	const getMemoryById = (id: string): Memory | undefined => {
		return memories.value.find((memory) => memory.id === id)
	}

	const getDeletedMemories = (): Memory[] => {
		return memories.value.filter(m => m.isDeleted)
	}

	const updateMemory = async (id: string, updates: Partial<Memory>, userEmail: string) => {
		const index = memories.value.findIndex(m => m.id === id)
		if (index === -1) return

		// @ts-ignore
		memories.value[index] = {...memories.value[index], ...updates}

		try {
			const docRef = doc(db, `users/${userEmail}/memories`, id)
			await updateDoc(docRef, updates)
		} catch (error: any) {
			console.error('Failed to update memory:', error)
		}
	}

	const createMemory = async (form: Partial<Memory>, images: File[], videos: File[]) => {
		const authStore = useAuthStore()
		const userEmail = authStore.user?.email

		if (!userEmail) throw new Error('User not authenticated')

		const uploadFiles = async (files: File[], folder: 'images' | 'videos') => {
			const storage = getStorage()
			return Promise.all(
				files.map(async file => {
					const fileRef = storageRef(storage, `users/${userEmail}/${folder}/${Date.now()}_${file.name}`)
					await uploadBytes(fileRef, file)
					return getDownloadURL(fileRef)
				})
			)
		}

		const imageUrls = images.length ? await uploadFiles(images, 'images') : []
		const videoUrls = videos.length ? await uploadFiles(videos, 'videos') : []

		const generateMemoryId = (dateString: string) => {
			const date = new Date(dateString)
			const year = date.getFullYear()
			const month = String(date.getMonth() + 1).padStart(2, '0')
			const day = String(date.getDate()).padStart(2, '0')
			const randomSuffix = Math.random().toString(36).substring(2, 6)
			return `${year}-${month}-${day}-${randomSuffix}`
		}
		const memoryId = generateMemoryId(form.date || new Date().toISOString())

		const memoryData: Memory = {
			...(form as Memory),
			images: imageUrls,
			videos: videoUrls,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString(),
			isDeleted: false
		}

		const docRef = doc(db, `users/${userEmail}/memories`, memoryId)
		await setDoc(docRef, memoryData)

		// update local store
		// @ts-ignore
		memories.value.unshift({id: memoryId, ...memoryData})

		return memoryId
	}

	return {
		memories,
		loaded,
		error,
		fetchMemories,
		refreshMemories,
		getMemoryById,
		getDeletedMemories,
		updateMemory,
		createMemory
	}
})