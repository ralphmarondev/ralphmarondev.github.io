<template>
	<MainLayout>
		<div class="mb-4 md:mb-6">
			<router-link to="/memories"
			             class="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700
               dark:text-pink-400 dark:hover:text-pink-300 transition-colors text-sm md:text-base">
				<i class="bx bx-arrow-back text-lg md:text-xl"></i>
				<span class="font-medium">Back to Memories</span>
			</router-link>
		</div>
		
		<!-- Main Form -->
		<div class="max-w-4xl mx-auto">
			<!-- Header -->
			<div class="mb-6 md:mb-8">
				<h1 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
					Create New Memory
				</h1>
				<p class="text-gray-600 dark:text-gray-400">
					Preserve your precious moments with photos, videos, and details
				</p>
			</div>
			
			<!-- Form -->
			<form @submit.prevent="submitMemory" class="space-y-6 md:space-y-8">
				<!-- Basic Information Card -->
				<div class="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-sm p-4 md:p-6
                    border border-gray-100 dark:border-gray-700">
					<div class="flex items-center gap-2 mb-4 md:mb-6">
						<div class="w-10 h-10 rounded-lg md:rounded-xl bg-pink-100 dark:bg-pink-900/30
                        flex items-center justify-center">
							<i class="bx bx-edit text-pink-600 dark:text-pink-400"></i>
						</div>
						<h2 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
							Basic Information
						</h2>
					</div>
					
					<div class="space-y-4 md:space-y-6">
						<!-- Title -->
						<div>
							<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Memory Title *
							</label>
							<input
									v-model="form.title"
									type="text"
									placeholder="What's this memory about?"
									required
									class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600
                       bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200
                       focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent
                       transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
							/>
						</div>
						
						<!-- Date -->
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
							<div>
								<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Date *
								</label>
								<input
										v-model="form.date"
										type="date"
										required
										class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200
                         focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent
                         transition-all duration-200"
								/>
							</div>
							
							<!-- Location -->
							<div>
								<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
									Location
								</label>
								<input
										v-model="form.location"
										type="text"
										placeholder="Where did this happen?"
										class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200
                         focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent
                         transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
								/>
							</div>
						</div>
						
						<!-- Description -->
						<div>
							<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Description
							</label>
							<textarea
									v-model="form.description"
									rows="4"
									placeholder="Tell the story behind this memory..."
									class="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600
                       bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200
                       focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent
                       transition-all duration-200 resize-none placeholder-gray-400 dark:placeholder-gray-500"
							></textarea>
							<p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
								{{ form.description?.length || 0 }}/500 characters
							</p>
						</div>
					</div>
				</div>
				
				<!-- Media Upload Card -->
				<div class="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-sm p-4 md:p-6
                    border border-gray-100 dark:border-gray-700">
					<div class="flex items-center gap-2 mb-4 md:mb-6">
						<div class="w-10 h-10 rounded-lg md:rounded-xl bg-blue-100 dark:bg-blue-900/30
                        flex items-center justify-center">
							<i class="bx bx-image text-blue-600 dark:text-blue-400"></i>
						</div>
						<h2 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
							Photos & Videos
						</h2>
					</div>
					
					<!-- Image Upload -->
					<div class="mb-6 md:mb-8">
						<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
							Photos ({{ selectedImages.length }} selected)
						</label>
						
						<!-- Upload Area -->
						<div
								@click="triggerImageInput"
								@dragover.prevent="handleDragOver"
								@drop.prevent="handleImageDrop"
								class="border-2 border-dashed border-gray-300 dark:border-gray-600
                     rounded-xl p-6 md:p-8 text-center cursor-pointer transition-all duration-200
                     hover:border-pink-400 dark:hover:border-pink-500 hover:bg-pink-50/30
                     dark:hover:bg-pink-900/10"
								:class="{ 'border-pink-500 bg-pink-50/50 dark:bg-pink-900/20': isDragging }"
						>
							<div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 dark:bg-blue-900/30
                          flex items-center justify-center">
								<i class="bx bx-cloud-upload text-2xl text-blue-600 dark:text-blue-400"></i>
							</div>
							<p class="text-gray-700 dark:text-gray-300 mb-2 font-medium">
								Drop photos here or click to upload
							</p>
							<p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
								Supports JPG, PNG, WEBP up to 10MB each
							</p>
							<button type="button"
							        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                       bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium
                       hover:shadow-lg transition-all duration-200">
								<i class="bx bx-plus"></i>
								Select Photos
							</button>
						</div>
						
						<!-- Hidden file input -->
						<input
								ref="imageInput"
								type="file"
								multiple
								accept="image/*"
								@change="handleImageSelection"
								class="hidden"
						/>
						
						<!-- Image Previews -->
						<div v-if="selectedImages.length > 0" class="mt-6">
							<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
								<div
										v-for="(image, index) in selectedImages"
										:key="index"
										class="relative aspect-square rounded-lg overflow-hidden group"
								>
									<img
											:src="getImagePreview(image)"
											:alt="`Preview ${index + 1}`"
											class="w-full h-full object-cover"
									/>
									<button
											type="button"
											@click="removeImage(index)"
											class="absolute top-1 right-1 w-6 h-6 rounded-full bg-red-500 text-white
                           flex items-center justify-center opacity-0 group-hover:opacity-100
                           transition-opacity duration-200 hover:scale-110"
									>
										<i class="bx bx-x text-sm"></i>
									</button>
									<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60
                              to-transparent p-2 text-white text-xs">
										{{ formatFileSize(image.size) }}
									</div>
								</div>
							</div>
							
							<!-- Clear All Button -->
							<div class="mt-4 flex justify-end">
								<button
										type="button"
										@click="clearAllImages"
										class="text-sm text-red-600 hover:text-red-700 dark:text-red-400
                         dark:hover:text-red-300 font-medium flex items-center gap-1"
								>
									<i class="bx bx-trash"></i>
									Clear All Photos
								</button>
							</div>
						</div>
					</div>
					
					<!-- Video Upload -->
					<div>
						<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
							Videos ({{ selectedVideos.length }} selected)
						</label>
						
						<div
								@click="triggerVideoInput"
								@dragover.prevent="handleDragOver"
								@drop.prevent="handleVideoDrop"
								class="border-2 border-dashed border-gray-300 dark:border-gray-600
                     rounded-xl p-6 md:p-8 text-center cursor-pointer transition-all duration-200
                     hover:border-green-400 dark:hover:border-green-500 hover:bg-green-50/30
                     dark:hover:bg-green-900/10"
								:class="{ 'border-green-500 bg-green-50/50 dark:bg-green-900/20': isDragging }"
						>
							<div class="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 dark:bg-green-900/30
                          flex items-center justify-center">
								<i class="bx bx-video-plus text-2xl text-green-600 dark:text-green-400"></i>
							</div>
							<p class="text-gray-700 dark:text-gray-300 mb-2 font-medium">
								Drop videos here or click to upload
							</p>
							<p class="text-sm text-gray-500 dark:text-gray-400 mb-4">
								Supports MP4, MOV up to 50MB each
							</p>
							<button type="button"
							        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                       bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium
                       hover:shadow-lg transition-all duration-200">
								<i class="bx bx-plus"></i>
								Select Videos
							</button>
						</div>
						
						<!-- Hidden video input -->
						<input
								ref="videoInput"
								type="file"
								multiple
								accept="video/*"
								@change="handleVideoSelection"
								class="hidden"
						/>
						
						<!-- Video Previews -->
						<div v-if="selectedVideos.length > 0" class="mt-6">
							<div class="space-y-3">
								<div
										v-for="(video, index) in selectedVideos"
										:key="index"
										class="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/30"
								>
									<div class="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900/30
                              flex items-center justify-center flex-shrink-0">
										<i class="bx bx-video text-green-600 dark:text-green-400"></i>
									</div>
									<div class="flex-1 min-w-0">
										<p class="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
											{{ video.name }}
										</p>
										<p class="text-xs text-gray-500 dark:text-gray-400">
											{{ formatFileSize(video.size) }}
										</p>
									</div>
									<button
											type="button"
											@click="removeVideo(index)"
											class="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30
                           text-red-600 dark:text-red-400"
									>
										<i class="bx bx-x"></i>
									</button>
								</div>
							</div>
							
							<!-- Clear All Button -->
							<div class="mt-4 flex justify-end">
								<button
										type="button"
										@click="clearAllVideos"
										class="text-sm text-red-600 hover:text-red-700 dark:text-red-400
                         dark:hover:text-red-300 font-medium flex items-center gap-1"
								>
									<i class="bx bx-trash"></i>
									Clear All Videos
								</button>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Tags & Options Card -->
				<div class="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-sm p-4 md:p-6
                    border border-gray-100 dark:border-gray-700">
					<div class="flex items-center gap-2 mb-4 md:mb-6">
						<div class="w-10 h-10 rounded-lg md:rounded-xl bg-purple-100 dark:bg-purple-900/30
                        flex items-center justify-center">
							<i class="bx bx-purchase-tag text-purple-600 dark:text-purple-400"></i>
						</div>
						<h2 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
							Tags & Options
						</h2>
					</div>
					
					<div class="space-y-4 md:space-y-6">
						<!-- Tags Input -->
						<div>
							<label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
								Tags
							</label>
							<div class="flex flex-wrap gap-2 mb-3">
                <span
		                v-for="(tag, index) in form.tags"
		                :key="index"
		                class="inline-flex items-center gap-1 px-3 py-1.5 rounded-full
                         bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300
                         text-sm"
                >
                  {{ tag }}
                  <button
		                  type="button"
		                  @click="removeTag(index)"
		                  class="hover:text-purple-900 dark:hover:text-purple-200"
                  >
                    <i class="bx bx-x text-xs"></i>
                  </button>
                </span>
							</div>
							<div class="flex gap-2">
								<input
										v-model="newTag"
										type="text"
										placeholder="Add a tag and press Enter"
										@keydown.enter.prevent="addTag"
										class="flex-1 px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200
                         focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent
                         transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 text-sm"
								/>
								<button
										type="button"
										@click="addTag"
										class="px-4 py-2.5 rounded-xl bg-purple-100 dark:bg-purple-900/30
                         text-purple-600 dark:text-purple-400 font-medium hover:bg-purple-200
                         dark:hover:bg-purple-800 transition-colors"
								>
									Add
								</button>
							</div>
							<p class="text-xs text-gray-500 dark:text-gray-400 mt-2">
								Press Enter or click Add to include tags
							</p>
						</div>
						
						<!-- Options -->
						<div class="space-y-4">
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-3">
									<div class="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30
                              flex items-center justify-center">
										<i class="bx bx-heart text-pink-600 dark:text-pink-400"></i>
									</div>
									<div>
										<p class="font-medium text-gray-800 dark:text-gray-200">Mark as Favorite</p>
										<p class="text-sm text-gray-500 dark:text-gray-400">
											Pin this memory to your favorites
										</p>
									</div>
								</div>
								<label class="relative inline-flex items-center cursor-pointer">
									<input
											v-model="form.isFavorite"
											type="checkbox"
											class="sr-only peer"
									/>
									<div class="w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-focus:outline-none
                              peer-focus:ring-4 peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800
                              rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white
                              after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white
                              after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
                              dark:border-gray-600 peer-checked:bg-pink-500"></div>
								</label>
							</div>
						</div>
					</div>
				</div>
				
				<!-- Form Actions -->
				<div class="flex flex-col sm:flex-row gap-3 pt-4">
					<router-link
							to="/memories"
							class="flex-1 px-6 py-3.5 rounded-xl border border-gray-300 dark:border-gray-600
                   text-gray-700 dark:text-gray-300 font-medium text-center
                   hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
					>
						Cancel
					</router-link>
					<button
							type="submit"
							:disabled="isSubmitting"
							class="flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500
                   text-white font-medium hover:shadow-lg hover:scale-[1.02] active:scale-95
                   transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
                   flex items-center justify-center gap-2"
					>
						<i v-if="isSubmitting" class="bx bx-loader-alt animate-spin"></i>
						<i v-else class="bx bx-save"></i>
						{{ isSubmitting ? 'Saving Memory...' : 'Save Memory' }}
					</button>
				</div>
			</form>
		</div>
		
		<!-- Success Toast -->
		<transition name="slide-up">
			<div
					v-if="showSuccessToast"
					class="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 text-white
               rounded-xl shadow-lg p-4 md:p-5 max-w-sm z-50"
			>
				<div class="flex items-center gap-3">
					<div class="w-10 h-10 rounded-full bg-green-400/30 flex items-center justify-center">
						<i class="bx bx-check text-xl"></i>
					</div>
					<div class="flex-1">
						<p class="font-semibold">Memory Saved!</p>
						<p class="text-sm opacity-90">Your memory has been successfully saved.</p>
					</div>
					<button @click="showSuccessToast = false" class="p-1 hover:opacity-80">
						<i class="bx bx-x"></i>
					</button>
				</div>
			</div>
		</transition>
	</MainLayout>
</template>

<script setup lang="ts">
import MainLayout from "@/layouts/MainLayout.vue"; // MOVE THIS TO TOP
import {onMounted, onUnmounted, ref} from 'vue'
import {useRouter} from 'vue-router'
import {db} from '@/firebase.ts'
import {doc, setDoc} from 'firebase/firestore'
import {getDownloadURL, getStorage, ref as storageRef, uploadBytes} from 'firebase/storage'

const router = useRouter()

// Form data
const form = ref({
	title: '',
	date: new Date().toISOString().split('T')[0], // Today's date
	location: '',
	description: '',
	tags: [] as string[],
	isFavorite: false
})

const newTag = ref('')
const selectedImages = ref<File[]>([])
const selectedVideos = ref<File[]>([])
const isDragging = ref(false)
const isSubmitting = ref(false)
const showSuccessToast = ref(false)

// Refs for file inputs
const imageInput = ref<HTMLInputElement>()
const videoInput = ref<HTMLInputElement>()

// Helper functions
const formatFileSize = (bytes: number) => {
	if (bytes === 0) return '0 Bytes'
	const k = 1024
	const sizes = ['Bytes', 'KB', 'MB', 'GB']
	const i = Math.floor(Math.log(bytes) / Math.log(k))
	return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

const getImagePreview = (file: File) => {
	return URL.createObjectURL(file)
}

// Tag management
const addTag = () => {
	if (newTag.value.trim() && !form.value.tags.includes(newTag.value.trim())) {
		form.value.tags.push(newTag.value.trim())
		newTag.value = ''
	}
}

const removeTag = (index: number) => {
	form.value.tags.splice(index, 1)
}

// File handling
const triggerImageInput = () => {
	imageInput.value?.click()
}

const triggerVideoInput = () => {
	videoInput.value?.click()
}

const handleImageSelection = (event: Event) => {
	const input = event.target as HTMLInputElement
	if (input.files) {
		const files = Array.from(input.files).filter(file =>
				file.type.startsWith('image/') && file.size <= 10 * 1024 * 1024 // 10MB limit
		)
		selectedImages.value.push(...files)
	}
	input.value = '' // Reset input
}

const handleVideoSelection = (event: Event) => {
	const input = event.target as HTMLInputElement
	if (input.files) {
		const files = Array.from(input.files).filter(file =>
				file.type.startsWith('video/') && file.size <= 50 * 1024 * 1024 // 50MB limit
		)
		selectedVideos.value.push(...files)
	}
	input.value = '' // Reset input
}

const handleDragOver = (event: DragEvent) => {
	event.preventDefault()
	isDragging.value = true
}

const handleImageDrop = (event: DragEvent) => {
	event.preventDefault()
	isDragging.value = false
	const files = event.dataTransfer?.files
	if (files) {
		const imageFiles = Array.from(files).filter(file =>
				file.type.startsWith('image/') && file.size <= 10 * 1024 * 1024
		)
		selectedImages.value.push(...imageFiles)
	}
}

const handleVideoDrop = (event: DragEvent) => {
	event.preventDefault()
	isDragging.value = false
	const files = event.dataTransfer?.files
	if (files) {
		const videoFiles = Array.from(files).filter(file =>
				file.type.startsWith('video/') && file.size <= 50 * 1024 * 1024
		)
		selectedVideos.value.push(...videoFiles)
	}
}

const removeImage = (index: number) => {
	selectedImages.value.splice(index, 1)
}

const removeVideo = (index: number) => {
	selectedVideos.value.splice(index, 1)
}

const clearAllImages = () => {
	selectedImages.value = []
}

const clearAllVideos = () => {
	selectedVideos.value = []
}

// Upload files to Firebase Storage
const uploadFilesToStorage = async (files: File[], folder: 'images' | 'videos') => {
	const storage = getStorage()
	const uploadPromises = files.map(async (file) => {
		const fileRef = storageRef(storage, `${folder}/${Date.now()}_${file.name}`)
		await uploadBytes(fileRef, file)
		return getDownloadURL(fileRef)
	})
	return Promise.all(uploadPromises)
}

// Helper function to generate date-based ID
const generateMemoryId = (dateString: string): string => {
	const date = new Date(dateString)
	const year = date.getFullYear()
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const day = String(date.getDate()).padStart(2, '0')
	
	// Add random suffix for uniqueness (4 alphanumeric chars)
	const randomSuffix = Math.random().toString(36).substring(2, 6)
	
	return `${year}-${month}-${day}-${randomSuffix}`
}

// Main submit function
const submitMemory = async () => {
	if (!form.value.title.trim() || !form.value.date) {
		alert('Please fill in required fields: Title and Date')
		return
	}
	
	// Validate date is not in the future
	const selectedDate = new Date(form.value.date)
	const today = new Date()
	today.setHours(0, 0, 0, 0) // Reset time to compare dates only
	
	if (selectedDate > today) {
		alert('Memory date cannot be in the future')
		return
	}
	
	isSubmitting.value = true
	
	try {
		// 1. Upload images to storage
		const imageUrls = selectedImages.value.length > 0
				? await uploadFilesToStorage(selectedImages.value, 'images')
				: []
		
		// 2. Upload videos to storage
		const videoUrls = selectedVideos.value.length > 0
				? await uploadFilesToStorage(selectedVideos.value, 'videos')
				: []
		
		// 3. Determine year collection and generate ID
		const memoryDate = new Date(form.value.date)
		const year = memoryDate.getFullYear()
		const collectionName = `memories_${year}`
		
		// Generate date-based ID (e.g., "2025-12-18-abcd")
		const memoryId = generateMemoryId(form.value.date)
		
		// 4. Save to Firestore with custom ID
		const memoryData = {
			title: form.value.title.trim(),
			date: form.value.date,
			location: form.value.location.trim() || null,
			description: form.value.description.trim() || null,
			tags: form.value.tags,
			images: imageUrls,
			videos: videoUrls,
			isFavorite: form.value.isFavorite,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
		}
		
		// Use setDoc with custom ID
		const docRef = doc(db, collectionName, memoryId)
		await setDoc(docRef, memoryData)
		
		// 5. Show success and redirect
		showSuccessToast.value = true
		setTimeout(() => {
			router.push(`/memories/details/${memoryId}`)
		}, 2000)
		
	} catch (error: any) {
		console.error('Error saving memory:', error)
		
		// Handle specific Firebase errors
		if (error.code === 'permission-denied') {
			alert('You do not have permission to save memories. Please check your authentication.')
		} else if (error.code === 'failed-precondition') {
			alert('Could not save memory. Please try again.')
		} else {
			alert('Failed to save memory. Please try again.')
		}
	} finally {
		isSubmitting.value = false
	}
}

// Set default date to today
onMounted(() => {
	form.value.date = new Date().toISOString().split('T')[0]
})

// Clean up object URLs when component unmounts
onUnmounted(() => {
	selectedImages.value.forEach(image => {
		URL.revokeObjectURL(getImagePreview(image))
	})
})
</script>