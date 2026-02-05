<template>
  <pre
		  class="bg-gray-50 text-gray-900 p-4 rounded-lg border-2 border-pink-400 overflow-x-auto leading-snug"
  >
    <code v-html="highlightedCode"></code>
  </pre>
</template>

<script setup lang="ts">
import {computed} from 'vue'

const props = defineProps<{
	code: string
	language: string
}>()

// C keywords for highlighting
const cKeywords = [
	'int', 'return', 'if', 'else', 'while', 'for', 'void', 'char', 'float', 'double',
	'struct', 'union', 'const', 'sizeof', 'switch', 'case', 'break', 'continue'
]

const highlightedCode = computed(() => {
	let escaped = props.code
			.replace(/&/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')

	if (props.language === 'c') {
		// Highlight C keywords
		cKeywords.forEach(k => {
			const regex = new RegExp(`\\b${k}\\b`, 'g')
			escaped = escaped.replace(regex, `<span class="text-pink-600 font-bold">${k}</span>`)
		})

		// Highlight comments
		escaped = escaped.replace(/(\/\/.*)/g, `<span class="text-green-600 italic">$1</span>`)
	}

	return escaped
})
</script>
