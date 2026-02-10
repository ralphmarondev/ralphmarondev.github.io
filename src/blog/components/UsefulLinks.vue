<script setup lang="ts">
defineProps<{
	title?: string
	links: { title: string; route: string }[]
}>()
</script>

<template>
	<section class="mt-6">
		<h3 class="text-xl font-semibold text-gray-800 mb-4">{{ title ?? 'Related Topics' }}</h3>

		<div class="flex flex-wrap gap-3">
			<router-link
					v-for="topic in links"
					:key="topic.route"
					:to="topic.route"
					class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg px-4 py-2 text-pink-600 dark:text-pink-400 hover:bg-pink-50 dark:hover:bg-pink-900 transition-colors shadow-sm hover:shadow-md"
			>
				{{ topic.title }}
			</router-link>
		</div>
	</section>
</template>