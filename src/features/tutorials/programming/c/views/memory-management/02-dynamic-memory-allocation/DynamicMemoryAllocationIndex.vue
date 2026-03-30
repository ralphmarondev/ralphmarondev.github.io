<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'

const lastUpdated = 'March 30, 2026'


</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Dynamic Memory Allocation in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-500 mb-2 text-lg">
			Dynamic memory allocation allows you to <b>request memory at runtime</b> instead of declaring everything in
			advance.
			<br>
			This memory comes from the heap.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Why Do We Need Dynamic Memory?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">

		</p>
	</TutorialMainLayout>
</template>