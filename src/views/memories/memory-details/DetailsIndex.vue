<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import {useRoute} from 'vue-router'
import {onMounted, onUnmounted, ref} from 'vue'
import {db} from '@/firebase.ts'
import {doc, getDoc, updateDoc} from 'firebase/firestore'
import {getFileUrl} from '@/utils/storageUtils.ts'
import router from '@/router'

const route = useRoute()
const id = route.params.id as string
const year = id.slice(0, 4)

const item = ref<any>(null)
const loading = ref(true)

const imageUrls = ref<string[]>([])
const videoUrls = ref<string[]>([])
const videoPlayers = ref<HTMLVideoElement[]>([])

const isPlaying = ref<boolean[]>([])
const isMuted = ref<boolean[]>([])
const videoProgress = ref<number[]>([])
const currentTime = ref<number[]>([])
const videoDuration = ref<number[]>([])

const showModal = ref(false)
const activeIndex = ref(0)

const setVideoRef = (el: any, index: number) => {
	if (el && videoPlayers.value[index] !== el) {
		videoPlayers.value[index] = el
	}
}

const formatTime = (seconds: number) => {
	if (!seconds || isNaN(seconds)) return '0:00'

	const mins = Math.floor(seconds / 60)
	const secs = Math.floor(seconds % 60)
	return `${mins}:${secs.toString().padStart(2, '0')}`
}

const formatCompactDate = (dateString: string) => {
	try {
		const date = new Date(dateString)
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		})
	} catch {
		return dateString
	}
}

const toggleFavorite = async () => {
	if (!item.value) return

	try {
		const docRef = doc(db, `memories_${year}`, id)
		await updateDoc(docRef, {
			isFavorite: !item.value.isFavorite
		})

		item.value.isFavorite = !item.value.isFavorite
	} catch (error) {
		console.error('Error updating favorite status:', error)
	}
}

const openModal = (index: number) => {
	activeIndex.value = index
	showModal.value = true
	document.body.style.overflow = 'hidden'
}

const closeModal = () => {
	showModal.value = false
	document.body.style.overflow = 'auto'
}

const nextImage = () => {
	activeIndex.value = (activeIndex.value + 1) % imageUrls.value.length
}

const prevImage = () => {
	activeIndex.value = (activeIndex.value - 1 + imageUrls.value.length) % imageUrls.value.length
}

const togglePlay = (event: Event, index: number) => {
	event.stopPropagation()
	const video = videoPlayers.value[index]

	if (!video) return

	if (video.paused) {
		video.play()
		isPlaying.value[index] = true
	} else {
		video.pause()
		isPlaying.value[index] = false
	}
}

const playVideo = (index: number) => {
	const video = videoPlayers.value[index]
	if (video) {
		video.play()
		isPlaying.value[index] = true
	}
}

const handleTimeUpdate = (event: Event, index: number) => {
	const video = event.target as HTMLVideoElement
	if (video) {
		currentTime.value[index] = video.currentTime
		videoProgress.value[index] = (video.currentTime / video.duration) * 100

		if (video.currentTime >= video.duration) {
			isPlaying.value[index] = false
		}
	}
}

const toggleMute = (index: number) => {
	const video = videoPlayers.value[index]
	if (video) {
		video.muted = !video.muted
		isMuted.value[index] = video.muted
	}
}

const toggleFullscreen = (event: Event, index: number) => {
	event.stopPropagation()
	const video = videoPlayers.value[index]
	if (!video) return

	if (!document.fullscreenElement) {
		if (video.requestFullscreen) {
			video.requestFullscreen()
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen()
		}
	}
}

const initializeVideoStates = () => {
	isPlaying.value = new Array(videoUrls.value.length).fill(false)
	isMuted.value = new Array(videoUrls.value.length).fill(false)
	videoProgress.value = new Array(videoUrls.value.length).fill(0)
	currentTime.value = new Array(videoUrls.value.length).fill(0)
	videoDuration.value = new Array(videoUrls.value.length).fill(0)
}

const handleKeydown = (e: KeyboardEvent) => {
	if (!showModal.value) return

	switch (e.key) {
		case 'Escape':
			closeModal()
			break
		case 'ArrowLeft':
			prevImage()
			break
		case 'ArrowRight':
			nextImage()
			break
	}
}

const handleVideoLoaded = (index: number) => {
	const video = videoPlayers.value[index]
	if (video && video.duration) {
		videoDuration.value[index] = video.duration
	}
}

onMounted(async () => {
	try {
		const docRef = doc(db, `memories_${year}`, id)
		const docSnap = await getDoc(docRef)

		if (docSnap.exists()) {
			const data = docSnap.data()

			if (data.isDeleted === true) {
				await router.push({name: 'not-found'})
				return
			}

			if (data.images && Array.isArray(data.images)) {
				imageUrls.value = await Promise.all(
						data.images.map(async (path: string) => {
							try {
								return await getFileUrl(path)
							} catch {
								return '/favicon.jpg'
							}
						})
				)
			}

			if (data.videos && Array.isArray(data.videos) && data.videos.length > 0) {
				videoUrls.value = await Promise.all(
						data.videos.map(async (path: string) => {
							try {
								return await getFileUrl(path)
							} catch {
								return ''
							}
						})
				)

				setTimeout(() => {
					initializeVideoStates()
				}, 100)
			}

			item.value = {id: docSnap.id, ...data}
		} else {
			console.error('No such document found!')
		}
	} catch (err) {
		console.error('Error fetching details:', err)
	} finally {
		loading.value = false
	}

	window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
	videoPlayers.value.forEach(video => {
		if (video) {
			video.pause()
			video.src = ''
			video.load()
		}
	})

	window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
	<MainLayout>
		<div class="mb-4 md:mb-6">
			<router-link
					to="/memories"
					class="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 dark:text-pink-400 dark:hover:text-pink-300 transition-colors text-sm md:text-base">
				<i class="bx bx-arrow-back text-lg md:text-xl"></i>
				<span class="font-medium">Back to Memories</span>
			</router-link>
		</div>

		<div v-if="loading" class="max-w-5xl mx-auto">
			<div class="animate-pulse">
				<span
						class="w-full h-56 sm:h-64 md:h-80 lg:h-96 bg-gray-200 dark:bg-gray-700 rounded-xl md:rounded-2xl mb-4 md:mb-6"></span>
				<span class="h-7 bg-gray-200 dark:bg-gray-700 rounded-lg w-3/4 mb-3 md:mb-4"></span>

				<div class="flex gap-2 md:gap-3 mb-4 md:mb-6">
					<span v-for="i in 4" :key="i" class="h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex-1"></span>
				</div>
			</div>
		</div>

		<div v-else-if="item" class="max-w-5xl mx-auto">
			<div class="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 rounded-xl md:rounded-2xl overflow-hidden
                  shadow-lg md:shadow-xl mb-4 md:mb-6 group">
				<img
						:src="imageUrls[0] || '/favicon.jpg'"
						:alt="item.title"
						class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
				/>

				<!-- Overlay Gradient -->
				<div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

				<!-- Content on Image -->
				<div class="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
					<div class="flex items-center gap-1.5 md:gap-2 mb-2 flex-wrap">
						<div class="px-2 md:px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs md:text-sm">
							{{ year }}
						</div>
						<div v-if="item.isFavorite" class="px-2 md:px-3 py-1 rounded-full bg-pink-500/80 text-xs md:text-sm
                                               backdrop-blur-sm flex items-center gap-1">
							<i class="bx bxs-star text-xs md:text-sm"></i>
							<span class="hidden sm:inline">Favorite</span>
						</div>
						<div v-if="imageUrls.length > 1" class="px-2 md:px-3 py-1 rounded-full bg-black/60 text-xs md:text-sm
                                                    backdrop-blur-sm flex items-center gap-1">
							<i class="bx bx-images text-xs md:text-sm"></i>
							<span>{{ imageUrls.length }}</span>
						</div>
						<div v-if="videoUrls.length > 0" class="px-2 md:px-3 py-1 rounded-full bg-blue-500/80 text-xs md:text-sm
                                                    backdrop-blur-sm flex items-center gap-1">
							<i class="bx bx-video text-xs md:text-sm"></i>
							<span>{{ videoUrls.length }}</span>
						</div>
					</div>

					<h1 class="text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 drop-shadow">{{ item.title }}</h1>

					<p v-if="item.subtitle" class="text-sm md:text-base opacity-90 drop-shadow truncate">
						{{ item.subtitle }}
					</p>
				</div>
			</div>

			<!-- Quick Stats - Compact on mobile -->
			<div class="mb-4 md:mb-6">
				<div class="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 flex-wrap">
					<!-- Location -->
					<div v-if="item.location" class="flex items-center gap-1.5 md:gap-2 text-sm md:text-base
                                           text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800
                                           px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-sm">
						<i class="bx bx-map text-pink-500"></i>
						<span class="truncate max-w-[120px] md:max-w-none">{{ item.location }}</span>
					</div>

					<!-- Date -->
					<div class="flex items-center gap-1.5 md:gap-2 text-sm md:text-base
                      text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800
                      px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-sm">
						<i class="bx bx-calendar text-purple-500"></i>
						<span>{{ formatCompactDate(item.date) }}</span>
					</div>

					<!-- Media Count -->
					<div class="flex items-center gap-1.5 md:gap-2 text-sm md:text-base
                      text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800
                      px-3 md:px-4 py-1.5 md:py-2 rounded-lg shadow-sm">
						<i class="bx bx-collection text-blue-500"></i>
						<span>{{ imageUrls.length + videoUrls.length }} media</span>
					</div>
				</div>

				<!-- Tags (if any) -->
				<div v-if="item.tags && item.tags.length > 0" class="flex flex-wrap gap-1.5 md:gap-2">
          <span
		          v-for="tag in item.tags.slice(0, 3)"
		          :key="tag"
		          class="px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm
                   bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
          >
            {{ tag }}
          </span>
					<span v-if="item.tags.length > 3"
					      class="px-2.5 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm
                       bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
            +{{ item.tags.length - 3 }}
          </span>
				</div>
			</div>

			<!-- Main Content -->
			<div class="space-y-4 md:space-y-6">
				<!-- Description Card -->
				<div class="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-sm p-4 md:p-6
                    border border-gray-100 dark:border-gray-700">
					<div class="flex items-center gap-2 mb-3 md:mb-4">
						<div class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-pink-100 dark:bg-pink-900/30
                        flex items-center justify-center">
							<i class="bx bx-note text-pink-600 dark:text-pink-400 text-sm md:text-base"></i>
						</div>
						<h2 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
							Description
						</h2>
					</div>

					<p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
						{{ item.description || 'No description provided for this memory.' }}
					</p>
				</div>

				<!-- Gallery Section -->
				<div v-if="imageUrls.length > 0"
				     class="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-sm p-4 md:p-6
                    border border-gray-100 dark:border-gray-700">
					<div class="flex items-center justify-between mb-3 md:mb-4">
						<div class="flex items-center gap-2">
							<div class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-blue-100 dark:bg-blue-900/30
                          flex items-center justify-center">
								<i class="bx bx-images text-blue-600 dark:text-blue-400 text-sm md:text-base"></i>
							</div>
							<h2 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
								Photos ({{ imageUrls.length }})
							</h2>
						</div>
						<button
								@click="openModal(0)"
								class="text-sm text-pink-600 hover:text-pink-700 dark:text-pink-400
                     dark:hover:text-pink-300 font-medium"
						>
							View All
						</button>
					</div>

					<!-- Gallery Grid - Responsive -->
					<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
						<div
								v-for="(url, i) in imageUrls.slice(0, 4)"
								:key="i"
								@click="openModal(i)"
								class="relative aspect-square rounded-lg md:rounded-xl overflow-hidden cursor-pointer
                     group hover:scale-[1.02] transition-all duration-300"
						>
							<img
									:src="url"
									:alt="`Photo ${i + 1}`"
									class="w-full h-full object-cover transition-transform duration-500
                       group-hover:scale-110"
									loading="lazy"
							/>

							<!-- Overlay on hover -->
							<div class="absolute inset-0 bg-black/0 group-hover:bg-black/20
                          transition-all duration-300 flex items-center justify-center">
								<i class="bx bx-zoom-in text-white text-lg md:text-xl opacity-0 group-hover:opacity-100
                         transform scale-0 group-hover:scale-100 transition-all duration-300"></i>
							</div>

							<!-- More indicator for last item -->
							<div v-if="i === 3 && imageUrls.length > 4"
							     class="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span class="text-white font-semibold text-sm md:text-base">
                  +{{ imageUrls.length - 4 }}
                </span>
							</div>
						</div>
					</div>
				</div>

				<!-- Videos Section - IMPROVED -->
				<div v-if="videoUrls.length > 0"
				     class="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl shadow-sm p-4 md:p-6
                    border border-gray-100 dark:border-gray-700">
					<div class="flex items-center gap-2 mb-3 md:mb-4">
						<div class="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-green-100 dark:bg-green-900/30
                        flex items-center justify-center">
							<i class="bx bx-video text-green-600 dark:text-green-400 text-sm md:text-base"></i>
						</div>
						<h2 class="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100">
							Videos ({{ videoUrls.length }})
						</h2>
					</div>

					<!-- Videos Grid - Responsive -->
					<div class="space-y-4 md:space-y-6">
						<div
								v-for="(url, i) in videoUrls"
								:key="i"
								class="group"
						>
							<!-- Video Player Container -->
							<div class="relative rounded-xl md:rounded-2xl overflow-hidden bg-black
                                shadow-lg transition-all duration-300 group-hover:shadow-xl">
								<video
										:ref="(el) => setVideoRef(el, i)"
										:src="url"
										class="w-full h-auto max-h-[500px] object-contain custom-video"
										:poster="imageUrls[0] || '/favicon.jpg'"
										preload="metadata"
										@click="togglePlay($event, i)"
										@timeupdate="handleTimeUpdate($event, i)"
										@loadedmetadata="handleVideoLoaded(i)"
								></video>

								<!-- Custom Video Controls -->
								<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent
										p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
									<!-- Progress Bar -->
									<div class="w-full h-1.5 bg-gray-600/50 rounded-full mb-3 overflow-hidden">
										<div
												class="h-full bg-green-500 rounded-full transition-all duration-200 progress-bar"
												:style="{ width: `${videoProgress[i] || 0}%` }"
										></div>
									</div>

									<!-- Control Buttons -->
									<div class="flex items-center justify-between">
										<div class="flex items-center gap-3">
											<button
													@click="togglePlay($event, i)"
													class="w-8 h-8 flex items-center justify-center text-white hover:text-green-400 transition-colors"
											>
												<i :class="isPlaying[i] ? 'bx bx-pause text-xl' : 'bx bx-play text-xl'"></i>
											</button>

											<div class="text-sm text-gray-300 font-mono">
												{{ formatTime(currentTime[i] || 0) }} / {{ formatTime(videoDuration[i] || 0) }}
											</div>
										</div>

										<div class="flex items-center gap-2">
											<button
													@click="toggleMute(i)"
													class="w-8 h-8 flex items-center justify-center text-white hover:text-green-400 transition-colors"
											>
												<i :class="isMuted[i] ? 'bx bx-volume-mute' : 'bx bx-volume-full'"></i>
											</button>

											<button
													@click="toggleFullscreen($event, i)"
													class="w-8 h-8 flex items-center justify-center text-white hover:text-green-400 transition-colors"
											>
												<i class="bx bx-fullscreen"></i>
											</button>
										</div>
									</div>
								</div>

								<!-- Play Button Overlay -->
								<div
										v-if="!isPlaying[i]"
										@click="playVideo(i)"
										class="absolute inset-0 flex items-center justify-center cursor-pointer"
								>
									<div class="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/60 backdrop-blur-sm
											flex items-center justify-center transition-transform duration-300
											hover:scale-110 group-hover:opacity-100 opacity-80">
										<i class="bx bx-play text-3xl md:text-4xl text-white"></i>
									</div>
								</div>
							</div>

							<!-- Video Info -->
							<div class="mt-2 px-1">
								<div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
									<span>Video {{ i + 1 }}</span>
									<span v-if="videoDuration[i]" class="font-mono">
										{{ formatTime(videoDuration[i]) }}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Actions Card (Mobile Bottom Sheet Style) -->
				<div class="sticky bottom-4 md:static bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl
                    shadow-lg md:shadow-sm p-4 md:p-6 border border-gray-100 dark:border-gray-700
                    md:mt-6">
					<div class="grid grid-cols-3 gap-2 md:flex md:gap-3">
						<button
								@click="toggleFavorite"
								class="flex flex-col md:flex-row items-center gap-1.5 md:gap-2 px-3 py-2.5 md:px-4 md:py-3
                     rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
						>
							<div class="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900/30
                          flex items-center justify-center group-hover:scale-110 transition-transform">
								<i :class="item.isFavorite ? 'bx bxs-heart text-pink-600 dark:text-pink-400'
                                           : 'bx bx-heart text-gray-400'"></i>
							</div>
							<span class="text-xs md:text-sm text-gray-700 dark:text-gray-300">
                {{ item.isFavorite ? 'Unfavorite' : 'Favorite' }}
              </span>
						</button>

						<button
								class="flex flex-col md:flex-row items-center gap-1.5 md:gap-2 px-3 py-2.5 md:px-4 md:py-3
                     rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
						>
							<div class="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30
                          flex items-center justify-center group-hover:scale-110 transition-transform">
								<i class="bx bx-share text-blue-600 dark:text-blue-400"></i>
							</div>
							<span class="text-xs md:text-sm text-gray-700 dark:text-gray-300">Share</span>
						</button>

						<button
								class="flex flex-col md:flex-row items-center gap-1.5 md:gap-2 px-3 py-2.5 md:px-4 md:py-3
                     rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
						>
							<div class="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30
                          flex items-center justify-center group-hover:scale-110 transition-transform">
								<i class="bx bx-edit text-green-600 dark:text-green-400"></i>
							</div>
							<span class="text-xs md:text-sm text-gray-700 dark:text-gray-300">Edit</span>
						</button>
					</div>
				</div>
			</div>
		</div>

		<!-- Not Found -->
		<div v-else class="max-w-5xl mx-auto text-center py-12 md:py-16">
			<div class="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full
                  bg-gradient-to-r from-pink-100 to-purple-100
                  dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
				<i class="bx bx-image text-xl md:text-2xl text-pink-600 dark:text-pink-400"></i>
			</div>
			<h2 class="text-lg md:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 md:mb-3">Memory Not Found</h2>
			<p class="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6 md:mb-8 max-w-md mx-auto px-4">
				The memory you're looking for doesn't exist or has been removed.
			</p>
			<router-link to="/memories"
			             class="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-xl
               bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm md:text-base
               hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
				<i class="bx bx-arrow-back"></i>
				Back to Memories
			</router-link>
		</div>

		<!-- Image Modal -->
		<transition name="fade">
			<div
					v-if="showModal"
					class="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50"
					@click.self="closeModal"
			>
				<!-- Close Button -->
				<button
						@click="closeModal"
						class="absolute top-4 right-4 md:top-8 md:right-8 text-white text-3xl
                 hover:text-pink-400 transition-colors z-10"
				>
					<i class="bx bx-x"></i>
				</button>

				<!-- Navigation Buttons -->
				<button
						v-if="imageUrls.length > 1"
						@click="prevImage"
						class="absolute left-4 md:left-8 text-white text-4xl hover:text-pink-400
                 transition-colors z-10 p-2"
				>
					<i class="bx bx-chevron-left"></i>
				</button>

				<button
						v-if="imageUrls.length > 1"
						@click="nextImage"
						class="absolute right-4 md:right-8 text-white text-4xl hover:text-pink-400
                 transition-colors z-10 p-2"
				>
					<i class="bx bx-chevron-right"></i>
				</button>

				<!-- Image Container -->
				<div class="relative w-full h-full flex items-center justify-center p-4">
					<img
							:src="imageUrls[activeIndex]"
							:alt="`Gallery image ${activeIndex + 1}`"
							class="max-h-[85vh] max-w-full object-contain rounded-lg"
					/>

					<!-- Image Info -->
					<div class="absolute bottom-4 left-1/2 transform -translate-x-1/2
                      bg-black/60 backdrop-blur-sm text-white px-4 py-2 rounded-full
                      text-sm flex items-center gap-2">
						<span>{{ activeIndex + 1 }} / {{ imageUrls.length }}</span>
						<span class="text-gray-300">•</span>
						<span>{{ item?.title }}</span>
					</div>

					<!-- Image Navigation Dots -->
					<div v-if="imageUrls.length > 1"
					     class="absolute bottom-20 left-1/2 transform -translate-x-1/2
                      flex gap-2">
						<div
								v-for="(_, index) in imageUrls"
								:key="index"
								@click="activeIndex = index"
								class="w-2 h-2 rounded-full cursor-pointer transition-all duration-300"
								:class="activeIndex === index
                ? 'bg-pink-500 w-4'
                : 'bg-white/50 hover:bg-white'"
						></div>
					</div>
				</div>

				<!-- Keyboard shortcuts hint -->
				<div class="absolute bottom-4 right-4 text-white/50 text-sm hidden md:block">
					<span>← → to navigate • Esc to close</span>
				</div>
			</div>
		</transition>
	</MainLayout>
</template>

<style scoped>
video {
	cursor: pointer;
}

/* Custom video controls animation */
.group:hover .custom-controls {
	opacity: 1 !important;
}

/* Video progress bar */
.progress-bar {
	transition: width 0.2s ease;
}
</style>