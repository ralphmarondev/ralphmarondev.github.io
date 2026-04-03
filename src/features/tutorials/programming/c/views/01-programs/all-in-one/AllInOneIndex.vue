<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'

const lastUpdated = 'April 3, 2026'

const sections = [
	{
		title: 'Beginner-Friendly Combined Programs',
		description: 'These programs combine basic concepts like loops, conditionals, arrays, and simple functions. Perfect for reinforcing fundamentals in practical scenarios.',
		topics: [
			{title: 'Odd or Even Checker', route: '/c/all/odd-even-checker'},
			{title: 'Sum of First N Numbers', route: '/c/all/sum-first-n-numbers'},
			{title: 'Factorial Using Function', route: '/c/all/factorial-function'},
			{title: 'Palindrome String Checker', route: '/c/all/palindrome-string'},
			{title: 'Reverse an Array', route: '/c/all/reverse-array'}
		]
	},
	{
		title: 'Intermediate Challenges',
		description: 'Programs that use multiple concepts together: loops, arrays, strings, functions, and conditionals. These will help you develop problem-solving skills.',
		topics: [
			{title: 'Print Star Patterns', route: '/c/all/star-patterns'},
			{title: 'Left/Right Rotate Array', route: '/c/all/rotate-array'},
			{title: 'Count Occurrences in Array', route: '/c/all/count-array'},
			{title: 'Calculator Using Functions', route: '/c/all/calculator-functions'},
			{title: 'Fibonacci Sequence', route: '/c/all/fibonacci-sequence'}
		]
	},
	{
		title: 'Advanced Mega Challenges',
		description: 'These programs combine almost all C concepts: loops, arrays, strings, functions, pointers, file handling, and dynamic memory. Prepare to apply everything you learned!',
		topics: [
			{title: 'Menu-Driven Student Record Program', route: '/c/all/student-record'},
			{title: 'Read/Write Numbers from File', route: '/c/all/file-io-numbers'},
			{title: 'Separate Even & Odd Numbers Using Pointers', route: '/c/all/even-odd-pointers'},
			{title: 'Matrix Operations (2D Array + Functions)', route: '/c/all/matrix-operations'},
			{title: 'Mini Guessing Game', route: '/c/all/guessing-game'}
		]
	}
]
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-solved-all-concepts">
		<h1 class="text-4xl font-bold text-gray-800 mb-2">All-in-One C Programs</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-8 text-lg">
			This section contains C programs that combine multiple concepts in one challenge.
			You will find exercises that involve loops, arrays, strings, functions, conditionals, pointers, file handling, and
			more.
			<br>
			Each program is designed to test your understanding and help you apply concepts together in practical scenarios.
		</p>

		<div class="space-y-8">
			<div v-for="section in sections" :key="section.title">
				<h2 class="text-2xl font-semibold text-gray-800 mb-2">{{ section.title }}</h2>
				<p class="text-gray-500 mb-4 text-lg">{{ section.description }}</p>

				<ul class="list-disc list-inside space-y-1 text-pink-500">
					<li v-for="topic in section.topics" :key="topic.route">
						<router-link
								:to="topic.route"
								class="underline text-lg hover:text-pink-700">
							{{ topic.title }}
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</TutorialMainLayout>
</template>