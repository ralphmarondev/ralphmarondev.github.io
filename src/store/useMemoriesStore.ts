import {defineStore} from 'pinia'
import {ref} from 'vue'
import {db} from '@/firebase.ts'
import {collection, getDocs, orderBy, query} from 'firebase/firestore'
import type {Memory} from '@/types/memory.ts'

export const useMemoriesStore = defineStore('memories', () => {
  const memories = ref<Memory[]>([])
  const loaded = ref(false)
  const error = ref<string | null>(null)

  const fetchMemories = async () => {
    if (loaded.value) return

    error.value = null
    const startYear = 2023
    const endYear = 2030

    const yearCollections = Array.from(
      {length: endYear - startYear + 1},
      (_, i) => `memories_${startYear + i}`
    )

    const allMemories: Memory[] = []

    for (const year of yearCollections) {
      try {
        const memoriesRef = collection(db, year)
        const q = query(memoriesRef, orderBy('date', 'desc'))
        const querySnapshot = await getDocs(q)

        if (!querySnapshot.empty) {
          const docs = querySnapshot.docs
          .map((doc) => {
            const data = doc.data() as Omit<Memory, 'id' | 'image'>
            return {
              id: doc.id,
              ...data,
              image: data.images?.[0] || '',
              year: year.replace('memories_', ''),
              isDeleted: data.isDeleted || false
            }
          })
          .filter(memory => !memory.isDeleted)

          allMemories.push(...docs)
        }
      } catch (err: any) {
        if (err.code === 'failed-precondition' || err.code === 'not-found') {
          console.log(`Collection ${year} doesn't exist yet, skipping...`)
        } else {
          console.error(`Error fetching from ${year}:`, err)
          error.value = `Error loading memories from ${year}: ${err.message}`
        }
      }
    }
    allMemories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    memories.value = allMemories
    loaded.value = true
  }

  const refreshMemories = async () => {
    loaded.value = false
    await fetchMemories()
  }

  const getMemoryById = (id: string, year?: string): Memory | undefined => {
    return memories.value.find(memory =>
      memory.id === id && (!year || memory.year === year)
    )
  }

  const getDeletedMemories = (): Memory[] => {
    return memories.value.filter(memory => memory.isDeleted === true)
  }

  return {
    memories: memories,
    fetchMemories: fetchMemories,
    loaded: loaded,
    error: error,
    refreshMemories: refreshMemories,
    getMemoryById: getMemoryById,
    getDeletedMemories: getDeletedMemories
  }
})