<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import {getFileUrl} from '@/utils/storageUtils.ts'
import type {Memory} from '@/types/memory.ts'

const props = defineProps<{
	memory: Memory
}>()

const emit = defineEmits<{
	toggleFavorite: [id: string]
}>()

const imageUrl = ref<string>('')
const showActions = ref(false)

const getTotalMediaCount = computed(() => props.memory.images.length + props.memory.videos.length)

const formatDate = (dateString: string) => {
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

const getTimeAgo = (dateString: string) => {
	try {
		const now = new Date()
		const date = new Date(dateString)
		const diffTime = Math.abs(now.getTime() - date.getTime())
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

		if (diffDays === 0) return 'today'
		if (diffDays === 1) return 'yesterday'
		if (diffDays < 7) return `${diffDays} days ago`
		if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
		if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
		return `${Math.floor(diffDays / 365)} years ago`
	} catch {
		return 'recently'
	}
}

const toggleFavorite = (e: Event) => {
	e.preventDefault()
	e.stopPropagation()
	emit('toggleFavorite', props.memory.id)
}

onMounted(async () => {
	try {
		if (props.memory.images.length > 0 && props.memory.images?.[0]) {
			imageUrl.value = await getFileUrl(props.memory.images[0])
		}
	} catch (err) {
		console.error('Error loading image:', err)
	}
})
</script>

<template>
	<router-link
			:to="`details/${memory.id}`"
			class="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col sm:flex-row">
		<div class="w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
			<img
					v-if="imageUrl"
					:src="imageUrl"
					:alt="memory.title"
					class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
					loading="lazy"
			/>
			<div v-else
			     class="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-700 dark:to-gray-800">
				<i class="bx bx-image text-3xl text-gray-400 dark:text-gray-500"></i>
			</div>
		</div>

		<div class="flex-1 p-4 md:p-5">
			<div class="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
				<div>
					<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
						{{ memory.title }}
					</h3>
					<div class="flex items-center gap-2 flex-wrap">
            <span class="inline-flex items-center text-xs text-gray-500 dark:text-gray-400">
              <i class="bx bx-calendar mr-1"></i>
              {{ formatDate(memory.date) }}
            </span>
						<span v-if="memory.location"
						      class="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 flex items-center">
              <i class="bx bx-map mr-1"></i>
              {{ memory.location }}
            </span>

						<span v-if="memory.year"
						      class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
              {{ memory.year.replace('memories_', '') }}
            </span>

						<span v-if="memory.isFavorite" class="text-xs text-yellow-500">
              <i class="bx bxs-star"></i>
            </span>
					</div>
				</div>

				<div class="flex items-center gap-1 sm:self-start">
					<button
							@click.prevent="toggleFavorite"
							class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
							:title="memory.isFavorite ? 'Remove from favorites' : 'Add to favorites'">
						<i :class="memory.isFavorite ? 'bx bxs-heart text-pink-500' : 'bx bx-heart text-gray-400'"></i>
					</button>
					<button
							@click.prevent="showActions = !showActions"
							class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
						<i class="bx bx-dots-vertical-rounded text-gray-400"></i>
					</button>
				</div>
			</div>
			<p v-if="memory.description" class="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
				{{ memory.description }}
			</p>
			<div v-if="memory.tags && memory.tags.length > 0" class="flex flex-wrap gap-1.5 mb-4">
        <span
		        v-for="tag in memory.tags.slice(0, 3)"
		        :key="tag"
		        class="px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
          {{ tag }}
        </span>
				<span v-if="memory.tags.length > 3"
				      class="px-2 py-1 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
          +{{ memory.tags.length - 3 }}
        </span>
			</div>
			<div class="flex items-center gap-3 mb-4">
				<div v-if="memory.images && memory.images.length > 0"
				     class="flex items-center text-xs text-gray-500 dark:text-gray-400">
					<div class="w-8 h-8 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center mr-2">
						<i class="bx bx-image text-pink-600 dark:text-pink-400 text-sm"></i>
					</div>
					<span>{{ memory.images.length }} photo{{ memory.images.length > 1 ? 's' : '' }}</span>
				</div>

				<div v-if="memory.videos && memory.videos.length > 0"
				     class="flex items-center text-xs text-gray-500 dark:text-gray-400">
					<div class="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-2">
						<i class="bx bx-video text-purple-600 dark:text-purple-400 text-sm"></i>
					</div>
					<span>{{ memory.videos.length }} video{{ memory.videos.length > 1 ? 's' : '' }}</span>
				</div>
			</div>

			<div class="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
				<div class="flex items-center gap-3">
					<span class="flex items-center">
            <i class="bx bx-collection mr-1"></i>
            {{ getTotalMediaCount }} media
          </span>
					<span class="text-gray-400 dark:text-gray-500">
            {{ getTimeAgo(memory.date) }}
          </span>
				</div>
				<div class="flex items-center gap-2">
					<span class="text-gray-400">Click to view details</span>
					<i class="bx bx-chevron-right text-gray-400 group-hover:text-pink-500 transition-colors"></i>
				</div>
			</div>
		</div>
	</router-link>
</template>