<script setup lang="ts">
defineProps<{
	title?: string  // optional, defaults to "Task"
}>()
</script>

<template>
	<div class="mb-6 p-4 bg-pink-50 border-l-4 border-pink-400 rounded-md shadow-sm">
		<h2 class="font-semibold text-lg text-pink-700 mb-2">
			📝 {{ title || 'Task' }}
		</h2>
		<div class="text-gray-700 text-lg">
			<slot />
		</div>
	</div>
</template>