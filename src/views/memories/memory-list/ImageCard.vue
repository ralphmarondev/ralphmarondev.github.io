<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import {getFileUrl} from '@/utils/storageUtils.ts'

const props = defineProps<{
	id: string
	image?: string | null
	title: string
	date: string
	description?: string
	tags?: string[]
	isFavorite?: boolean
	location?: string
	images?: string[]
	videos?: string[]
}>()

const emit = defineEmits<{
	toggleFavorite: [id: string]
}>()

const imageUrl = ref<string>('')
const isFavorite = ref(props.isFavorite || false)

const formattedDate = computed(() => {
	try {
		const date = new Date(props.date)
		return date.toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		})
	} catch {
		return props.date
	}
})

const timeAgo = computed(() => {
	try {
		const now = new Date()
		const postDate = new Date(props.date)
		const diffTime = Math.abs(now.getTime() - postDate.getTime())
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

		if (diffDays === 0) return 'Today'
		if (diffDays === 1) return 'Yesterday'
		if (diffDays < 7) return `${diffDays} days ago`
		if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
		if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
		return `${Math.floor(diffDays / 365)} years ago`
	} catch {
		return 'Recently'
	}
})

const imagesCount = computed(() => props.images?.length || 0)
const videosCount = computed(() => props.videos?.length || 0)
const getTotalMediaCount = computed(() => imagesCount.value + videosCount.value)

onMounted(async () => {
	try {
		if (props.images && props.images.length > 0 && props.images?.[0]) {
			imageUrl.value = await getFileUrl(props.images[0])
		} else if (props.image) {
			imageUrl.value = await getFileUrl(props.image)
		}
	} catch (err) {
		console.error('Error loading image:', err)
	}
})

const toggleFavorite = (e: Event) => {
	e.preventDefault()
	e.stopPropagation()
	isFavorite.value = !isFavorite.value
	emit('toggleFavorite', props.id)
}
</script>

<template>
	<router-link
			:to="`details/${id}`"
			class="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-2xl transition-all duration-500 overflow-hidden">
		<div class="relative w-full h-48 overflow-hidden">
			<img
					v-if="imageUrl"
					:src="imageUrl"
					:alt="title"
					loading="lazy"
					class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
			/>
			<div v-else
			     class="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
				<div class="text-center">
					<i class="bx bx-image text-4xl text-gray-400 dark:text-gray-500 mb-2"></i>
					<p class="text-sm text-gray-500 dark:text-gray-400">No image</p>
				</div>
			</div>

			<div
					class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

			<button
					@click.prevent="toggleFavorite"
					class="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 dark:bg-gray-800/90 flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
					:title="isFavorite ? 'Remove from favorites' : 'Add to favorites'">
				<i class="bx text-lg"
				   :class="isFavorite
             ? 'bxs-heart text-pink-500'
             : 'bx-heart text-gray-400 group-hover:text-pink-400'"></i>
			</button>

			<div class="absolute bottom-3 left-3">
        <span
		        class="px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm">
          {{ formattedDate }}
        </span>
			</div>

			<div v-if="getTotalMediaCount > 1" class="absolute bottom-3 right-3">
        <span class="px-2 py-1 rounded-full bg-black/70 text-white text-xs font-medium">
          +{{ getTotalMediaCount - 1 }}
        </span>
			</div>
		</div>

		<div class="p-4 md:p-5">
			<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 line-clamp-1 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
				{{ title }}
			</h3>
			<p v-if="description" class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
				{{ description }}
			</p>
			<div v-if="location" class="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-3">
				<i class="bx bx-map mr-1"></i>
				<span class="truncate">{{ location }}</span>
			</div>
			<div v-if="tags && tags.length > 0" class="flex flex-wrap gap-1.5 mb-4">
        <span v-for="tag in tags.slice(0, 2)" :key="tag"
              class="px-2 py-1 rounded-full text-xs bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300">
          {{ tag }}
        </span>
				<span v-if="tags.length > 2"
				      class="px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
          +{{ tags.length - 2 }}
        </span>
			</div>

			<div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
				<div class="flex items-center">
					<i class="bx bx-time mr-1"></i>
					<span>{{ timeAgo }}</span>
				</div>
				<div class="flex items-center text-xs text-gray-500 dark:text-gray-400">
          <span v-if="imagesCount > 0" class="flex items-center mr-2">
            <i class="bx bx-image mr-1"></i>
            {{ imagesCount }}
          </span>
					<span v-if="videosCount > 0" class="flex items-center">
            <i class="bx bx-video mr-1"></i>
            {{ videosCount }}
          </span>
				</div>
			</div>
		</div>

		<div
				class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500">
		</div>
	</router-link>
</template>

<style scoped>
.shadow-soft {
	box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.08),
	0 2px 8px -1px rgba(0, 0, 0, 0.04);
}
</style>