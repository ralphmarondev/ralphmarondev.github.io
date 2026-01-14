<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import ImageCard from '@/views/memories/memory-list/ImageCard.vue'
import {computed, onMounted, ref, watch} from 'vue'
import {useMemoriesStore} from '@/store/useMemoriesStore.ts'
import MemoryListItem from '@/views/memories/memory-list/MemoryListItem.vue'
import type {Memory} from '@/types/memory'
import {useAuthStore} from '@/store/useAuthStore.ts'

const store = useMemoriesStore()
const filteredMemories = ref<Memory[]>([])
const searchQuery = ref('')
const selectedYear = ref('All')
const showYearDropdown = ref(false)
const viewMode = ref<'grid' | 'list'>('grid')

const userStore = useAuthStore()
const userEmail = ref('')

const currentYear = new Date().getFullYear()
const startYear = 2023
const years = ref([
	'All',
	...Array.from({length: currentYear - startYear + 1}, (_, i) => (startYear + i).toString()).reverse()
])

const recentCount = computed(() => {
	const oneMonthAgo = new Date()
	oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1)
	return filteredMemories.value.filter(memory => {
		const uploadDate = new Date(memory.date)
		return uploadDate > oneMonthAgo
	}).length
})

const favoriteCount = computed(() => {
	return filteredMemories.value.filter(memory => memory.isFavorite).length
})

const getYearCount = (year: string) => {
	if (year === 'All') return store.memories.length
	return store.memories.filter(memory =>
			memory.date.startsWith(year)
	).length
}

const selectYear = (year: string) => {
	selectedYear.value = year
	showYearDropdown.value = false
}

const applyFilters = () => {
	let results = store.memories

	if (selectedYear.value !== 'All') {
		results = results.filter((memory) => {
			return memory.date.startsWith(selectedYear.value)
		})
	}

	if (searchQuery.value.trim() !== '') {
		const q = searchQuery.value.toLowerCase()
		results = results.filter((memory) => {
			return memory.title.toLowerCase().includes(q) ||
					(memory.description && memory.description.toLowerCase().includes(q)) ||
					(memory.tags && memory.tags.some(tag => tag.toLowerCase().includes(q)))
		})
	}

	filteredMemories.value = results
}

watch([searchQuery, selectedYear, () => store.memories], applyFilters)

onMounted(async () => {
	if (!userStore.user) {
		await userStore.fetchUser()
	}

	if (userStore.user?.email) {
		userEmail.value = userStore.user.email
		await store.fetchMemories(userEmail.value)
		applyFilters()
	} else {
		filteredMemories.value = []
	}
})
</script>

<template>
	<MainLayout>
		<div class="mb-8 md:mb-12">
			<div
					class="relative overflow-hidden rounded-2xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 dark:from-gray-800/50 dark:via-gray-700/50 dark:to-gray-800/50 p-6 md:p-8">
				<div class="relative z-10">
					<h1 class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">
						My Memory Journal 📔
					</h1>
					<p class="text-gray-600 dark:text-gray-400 max-w-2xl">
						{{ filteredMemories.length }} precious moments captured
						<span v-if="selectedYear !== 'All'">from {{ selectedYear }}</span>
						<span v-else>across {{ years.length - 1 }} years</span>
					</p>
				</div>
				<div class="absolute right-4 top-4 opacity-20">
					<i class="bx bx-heart text-6xl text-pink-500"></i>
				</div>
			</div>
		</div>

		<div class="mb-8">
			<div class="hidden md:flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
				<div class="relative flex-1 max-w-2xl">
					<i class="bx bx-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg z-10"></i>
					<input
							v-model="searchQuery"
							type="text"
							placeholder="Search memories by title, description, or feelings..."
							class="w-full pl-12 pr-4 py-3.5 rounded-xl border-0 bg-white dark:bg-gray-800 dark:text-gray-100 shadow-soft focus:shadow-lg focus:ring-2 focus:ring-pink-500/50 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500"
					/>
					<div class="absolute right-3 top-1/2 -translate-y-1/2">
						<span class="text-xs text-gray-400 dark:text-gray-500">
							{{ searchQuery ? `${filteredMemories.length} results` : '' }}
						</span>
					</div>
				</div>

				<div class="flex items-center gap-3 w-full lg:w-auto">
					<div class="relative group">
						<div
								class="flex items-center gap-2 px-4 py-3 rounded-xl bg-white dark:bg-gray-800 shadow-soft cursor-pointer hover:shadow-md transition-all duration-300"
								@click="showYearDropdown = !showYearDropdown">
							<i class="bx bx-calendar text-pink-500"></i>
							<span class="font-medium text-gray-700 dark:text-gray-300">
								{{ selectedYear === 'All' ? 'All Years' : selectedYear }}
							</span>
							<i class="bx bx-chevron-down text-gray-400 transition-transform duration-300"
							   :class="{ 'rotate-180': showYearDropdown }"></i>
						</div>

						<transition name="dropdown">
							<div v-if="showYearDropdown"
							     class="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-2 z-20 border border-gray-100 dark:border-gray-700 max-h-64 overflow-y-auto">
								<div class="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
									<p class="text-xs font-medium text-gray-500">Select Year</p>
								</div>
								<div v-for="year in years"
								     :key="year"
								     @click="selectYear(year)"
								     class="px-4 py-2.5 hover:bg-pink-50 dark:hover:bg-gray-700 cursor-pointer transition-colors flex items-center justify-between"
								     :class="{ 'bg-pink-50 dark:bg-gray-700': selectedYear === year }">
									<span class="text-gray-700 dark:text-gray-300">
										{{ year === 'All' ? 'All Years' : year }}
									</span>
									<span v-if="year !== 'All'"
									      class="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
										{{ getYearCount(year) }}
									</span>
								</div>
							</div>
						</transition>
					</div>

					<button
							class="px-4 py-3 rounded-xl bg-white dark:bg-gray-800 shadow-soft hover:shadow-md transition-all duration-300 flex items-center gap-2 group">
						<i class="bx bx-sort text-gray-600 dark:text-gray-400 group-hover:text-pink-500"></i>
						<span class="font-medium text-gray-700 dark:text-gray-300">
							Sort
						</span>
					</button>

					<router-link
							to="/new-memory"
							class="px-5 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
						<i class="bx bx-plus text-lg"></i>
						<span>New Memory</span>
					</router-link>
				</div>
			</div>

			<div class="md:hidden space-y-3">
				<div class="relative">
					<i class="bx bx-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg z-10"></i>
					<input
							v-model="searchQuery"
							type="text"
							placeholder="Search memories..."
							class="w-full pl-12 pr-4 py-3 rounded-xl border-0 bg-white dark:bg-gray-800 dark:text-gray-100 shadow-soft focus:shadow-lg focus:ring-2 focus:ring-pink-500/50 transition-all duration-300 placeholder-gray-400 dark:placeholder-gray-500 text-sm"
					/>
					<div class="absolute right-3 top-1/2 -translate-y-1/2">
						<span class="text-xs text-gray-400 dark:text-gray-500">
							{{ searchQuery ? `${filteredMemories.length} results` : '' }}
						</span>
					</div>
				</div>

				<div class="flex items-center gap-2">
					<div class="relative group flex-1">
						<div
								class="flex items-center justify-between gap-2 px-3 py-2.5 rounded-xl bg-white dark:bg-gray-800 shadow-soft cursor-pointer hover:shadow-md transition-all duration-300"
								@click="showYearDropdown = !showYearDropdown">
							<div class="flex items-center gap-2">
								<i class="bx bx-calendar text-pink-500 text-sm"></i>
								<span class="font-medium text-gray-700 dark:text-gray-300 text-sm">
									{{ selectedYear === 'All' ? 'All Years' : selectedYear }}
								</span>
							</div>
							<i class="bx bx-chevron-down text-gray-400 text-sm transition-transform duration-300"
							   :class="{ 'rotate-180': showYearDropdown }"></i>
						</div>

						<transition name="dropdown">
							<div v-if="showYearDropdown"
							     class="absolute left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl py-2 z-20 border border-gray-100 dark:border-gray-700 max-h-64 overflow-y-auto">
								<div class="px-3 py-2 border-b border-gray-100 dark:border-gray-700">
									<p class="text-xs font-medium text-gray-500">Select Year</p>
								</div>
								<div v-for="year in years"
								     :key="year"
								     @click="selectYear(year)"
								     class="px-4 py-2.5 hover:bg-pink-50 dark:hover:bg-gray-700 cursor-pointer transition-colors flex items-center justify-between"
								     :class="{ 'bg-pink-50 dark:bg-gray-700': selectedYear === year }">
									<span class="text-sm text-gray-700 dark:text-gray-300">
										{{ year === 'All' ? 'All Years' : year }}
									</span>
									<span v-if="year !== 'All'"
									      class="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700">
										{{ getYearCount(year) }}
									</span>
								</div>
							</div>
						</transition>
					</div>

					<button
							class="flex-1 px-3 py-2.5 rounded-xl bg-white dark:bg-gray-800 shadow-soft hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 group">
						<i class="bx bx-sort text-gray-600 dark:text-gray-400 text-sm group-hover:text-pink-500"></i>
						<span class="font-medium text-gray-700 dark:text-gray-300 text-sm">
							Sort
						</span>
					</button>
				</div>

				<router-link
						to="/new-memory"
						class="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2">
					<i class="bx bx-plus"></i>
					<span class="text-sm">New Memory</span>
				</router-link>
			</div>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
			<div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-soft hover:shadow-md transition-all duration-300">
				<div class="flex items-center gap-3">
					<div class="w-12 h-12 rounded-xl bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center">
						<i class="bx bx-images text-pink-600 dark:text-pink-400 text-xl"></i>
					</div>
					<div>
						<p class="text-2xl font-bold text-gray-800 dark:text-gray-100">
							{{ filteredMemories.length }}
						</p>
						<p class="text-sm text-gray-500 dark:text-gray-400">Total Memories</p>
					</div>
				</div>
			</div>

			<div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-soft hover:shadow-md transition-all duration-300">
				<div class="flex items-center gap-3">
					<div class="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
						<i class="bx bx-calendar-heart text-purple-600 dark:text-purple-400 text-xl"></i>
					</div>
					<div>
						<p class="text-2xl font-bold text-gray-800 dark:text-gray-100">
							{{ years.length - 1 }}
						</p>
						<p class="text-sm text-gray-500 dark:text-gray-400">Years Covered</p>
					</div>
				</div>
			</div>

			<div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-soft hover:shadow-md transition-all duration-300">
				<div class="flex items-center gap-3">
					<div class="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
						<i class="bx bx-trending-up text-blue-600 dark:text-blue-400 text-xl"></i>
					</div>
					<div>
						<p class="text-2xl font-bold text-gray-800 dark:text-gray-100">
							{{ recentCount }}
						</p>
						<p class="text-sm text-gray-500 dark:text-gray-400">This Month</p>
					</div>
				</div>
			</div>

			<div class="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-soft hover:shadow-md transition-all duration-300">
				<div class="flex items-center gap-3">
					<div class="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
						<i class="bx bx-heart text-green-600 dark:text-green-400 text-xl"></i>
					</div>
					<div>
						<p class="text-2xl font-bold text-gray-800 dark:text-gray-100">
							{{ favoriteCount }}
						</p>
						<p class="text-sm text-gray-500 dark:text-gray-400">Favorites</p>
					</div>
				</div>
			</div>
		</div>

		<div v-if="filteredMemories.length > 0">
			<div class="flex items-center justify-between mb-6">
				<h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
					Your Memories
					<span class="text-sm font-normal text-gray-500 ml-2">
						({{ filteredMemories.length }})
					</span>
				</h2>
				<div class="flex items-center gap-2">
					<button @click="viewMode = 'grid'"
					        :class="['p-2 rounded-lg transition-colors',
							viewMode === 'grid'
							? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600'
							: 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700']">
						<i class="bx bx-grid text-xl"></i>
					</button>
					<button @click="viewMode = 'list'"
					        :class="['p-2 rounded-lg transition-colors',
							viewMode === 'list'
							? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600'
							: 'text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700']">
						<i class="bx bx-list-ul text-xl"></i>
					</button>
				</div>
			</div>

			<div v-if="viewMode === 'grid'"
			     class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
				<ImageCard
						v-for="memory in filteredMemories"
						:key="memory.id"
						:memory="memory"
						class="hover:scale-[1.02] transition-transform duration-300"
				/>
			</div>

			<div v-else class="space-y-3">
				<MemoryListItem
						v-for="(memory, index) in filteredMemories"
						:key="index"
						:memory="memory"
				/>
			</div>
		</div>

		<div v-else class="text-center py-16">
			<div class="max-w-md mx-auto">
				<div
						class="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center">
					<i class="bx bx-image-add text-3xl text-pink-600 dark:text-pink-400"></i>
				</div>
				<h3 class="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
					{{ searchQuery ? 'No memories found' : 'No memories yet' }}
				</h3>
				<p class="text-gray-600 dark:text-gray-400 mb-8">
					{{
						searchQuery
								? 'Try different keywords or clear your search'
								: 'Start documenting your precious moments by creating your first memory'
					}}
				</p>
				<router-link
						to="/memories/new"
						class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
					<i class="bx bx-plus"></i>
					Create First Memory
				</router-link>
			</div>
		</div>

		<div v-if="filteredMemories.length > 0 && selectedYear === 'All'"
		     class="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800">
			<h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-6">
				Memory Timeline
			</h3>
			<div class="relative">
				<div class="h-2 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-full"></div>
				<div class="flex justify-between mt-2">
					<span class="text-xs text-gray-500">{{ startYear }}</span>
					<span class="text-xs text-gray-500">{{ currentYear }}</span>
				</div>
			</div>
		</div>
	</MainLayout>
</template>