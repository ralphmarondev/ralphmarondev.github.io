<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import Prism from 'prismjs'
import 'prismjs/components/prism-c.js'

const props = defineProps<{
	output: string
}>()

const normalizedOutput = () => {
	return props.output
			.replace(/\r\n/g, '\n')     // normalize line endings
			.replace(/^\n+/, '')        // remove leading empty lines
			.replace(/\n+$/, '')
}

const highlighted = ref('')

const highlight = () => {
	highlighted.value = Prism.highlight(normalizedOutput(), Prism.languages.c!, 'c')
}

watch(() => props.output, highlight, {immediate: true})

onMounted(highlight)
</script>

<template>
	<div class="my-2 w-[80%]">
    <pre
		    class="
			    w-full
			    flex items-center
			    rounded-lg border-2 border-pink-400
			    bg-pink-100 px-4 py-3
			    text-xs sm:text-sm
			    leading-snug
			    whitespace-pre-wrap break-words
			    box-border
			  "
    >
  <code v-html="highlighted"></code>
</pre>

	</div>
</template>

<style scoped>
pre {
	box-sizing: border-box;
}

code {
	font-family: 'Courier New', monospace;
	font-size: 1rem;
	white-space: pre-wrap;
	word-break: break-word;
}
</style>