<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'

const lastUpdated = 'April 3, 2026'

const sections = [
	{
		title: 'Easy - Get Comfortable with Loops',
		description: 'These programs help you get familiar with loops in C. Start with simple repetition tasks and gradually explore nested loops.',
		topics: [
			{title: 'Print Numbers 1 to 10', route: '/c/loops/print-1-to-10'},
			{title: 'Print Even Numbers up to N', route: '/c/loops/print-even-numbers'},
			{title: 'Print Odd Numbers up to N', route: '/c/loops/print-odd-numbers'},
			{title: 'Sum of First N Numbers', route: '/c/loops/sum-first-n-numbers'},
			{title: 'Factorial of a Number', route: '/c/loops/factorial'},
			{title: 'Print Multiplication Table', route: '/c/loops/multiplication-table'}
		]
	},
	{
		title: 'Medium - Arrays in Action',
		description: 'These programs help you work with arrays. Learn to traverse, manipulate, and analyze array data efficiently.',
		topics: [
			{title: 'Print All Elements of an Array', route: '/c/arrays/print-elements'},
			{title: 'Print Array in Reverse', route: '/c/arrays/print-reverse'},
			{title: 'Sum of Array Elements', route: '/c/arrays/sum-elements'},
			{title: 'Average of Array Elements', route: '/c/arrays/average-elements'},
			{title: 'Find Maximum and Minimum in Array', route: '/c/arrays/max-min'},
			{title: 'Count Occurrences of a Number', route: '/c/arrays/count-occurrences'}
		]
	},
	{
		title: 'Advanced - Nested Loops & Combined Problems',
		description: 'These programs combine loops and arrays to solve slightly more complex problems and introduce nested loops.',
		topics: [
			{title: 'Reverse an Array', route: '/c/arrays/reverse-array'},
			{title: 'Left Rotate an Array by One', route: '/c/arrays/left-rotate'},
			{title: 'Right Rotate an Array by One', route: '/c/arrays/right-rotate'},
			{title: 'Separate Even and Odd Elements into Two Arrays', route: '/c/arrays/separate-even-odd'},
			{title: 'Sum of 2D Array (Matrix)', route: '/c/arrays/sum-2d-array'},
			{title: 'Print Star Patterns (Nested Loops)', route: '/c/loops/star-patterns'}
		]
	}
]
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Loops And Arrays</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-8 text-lg">
			This section contains solved programs that demonstrate the use of loops and arrays in C. Start with simple tasks
			like printing numbers and summing elements, then explore more advanced problems with nested loops, array
			manipulation, and practical samples.
			<br>
			Each program comes with full code so you can see how it works step by step.
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