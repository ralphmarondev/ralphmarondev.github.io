<script setup lang="ts">
import {onMounted, ref, watch} from 'vue'
import Prism from 'prismjs'

const props = defineProps<{
	code: string
	language: string
}>()

const normalizedCode = () => {
	const lines = props.code.split('\n')
	const trimmedLines = lines.filter((line, i) => i === 0 || line.trim() !== '')

	const indent = Math.min(
			...trimmedLines
					.filter(line => line.trim().length)
					.map(line => {
						const match = line.match(/^(\s*)/)
						return match && match[1] ? match[1].length : 0
					})
	)
	return trimmedLines.map(line => line.slice(indent)).join('\n')
}

const highlighted = ref('')

const highlight = () => {
	const lang = Prism.languages[props.language] || Prism.languages.c
	highlighted.value = Prism.highlight(normalizedCode(), lang!, props.language)
}

watch(() => props.code, highlight, {immediate: true})

onMounted(highlight)
</script>

<template>
	<div class="my-2">
    <pre
		    class="
        rounded-lg border-2 border-pink-400
        bg-white px-4
        text-xs sm:text-sm
        leading-snug
        whitespace-pre-wrap break-words
        overflow-hidden
        box-border
        max-w-full
        md:max-w-3xl
      "
    >
      <code v-html="highlighted" class="language-c"></code>
    </pre>
	</div>
</template>

<style scoped>
pre {
	//background-color: #fdf6f0;
	box-sizing: border-box;
}

code {
	font-family: 'Courier New', monospace;
	font-size: 1rem;
	white-space: pre-wrap;
	word-break: break-word;
}
</style>