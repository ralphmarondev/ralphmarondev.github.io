<script setup lang="ts">
defineProps<{
	src: string
	alt?: string
	caption?: string
}>()
</script>

<template>
	<div class="my-2 flex flex-col">
		<img
				:src="src"
				:alt="alt"
				class="
        max-w-full
        md:max-w-3xl
        rounded-xl
        border
        border-gray-200
        shadow-sm
        bg-white
      "
		/>

		<p
				v-if="caption"
				class="mt-2 text-sm text-gray-500 italic text-center max-w-3xl"
		>
			{{ caption }}
		</p>
	</div>
</template>