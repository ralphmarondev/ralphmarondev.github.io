<script setup lang="ts">
defineProps<{
	title?: string  // optional, defaults to "Task"
}>()
</script>

<template>
	<div class="mb-6 p-4 bg-pink-50/30 border-l-2 border-pink-300 rounded-md">
		<h2 class="font-semibold text-md text-pink-600 mb-1">
			📝 {{ title || 'Task' }}
		</h2>
		<div class="text-gray-700 text-base leading-relaxed">
			<slot />
		</div>
	</div>
</template>