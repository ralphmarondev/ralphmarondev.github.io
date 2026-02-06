<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'

const lastUpdated = 'February 5, 2026'

const sections = [
	{
		title: 'Basics',
		description: 'Understand the fundamentals of C programming including data storage, program flow, and essential ' +
				'operations. This section sets the foundation for writing simple C programs.',
		topics: [
			{title: 'C Introduction', route: '/blog/c-introduction'},
			{title: 'Compilation Process', route: '/blog/c-compilation-process'},
			{title: 'Identifiers', route: '/blog/c-identifiers'},
			{title: 'C Keywords', route: '/blog/c-keywords'},
			{title: 'C Variables', route: '/blog/c-variables'},
			{title: 'Data Type in C', route: '/blog/c-data-types'},
			{title: 'Quiz: C Basics | Variables | Data Types', route: '/blog/c-quiz-basics'},
			{title: 'Input and Output in C', route: '/blog/c-input-output'},
			{title: 'Operators', route: '/blog/c-operators'},
			{title: 'Quiz: Input and Output | Operators', route: '/blog/c-quiz-io-operators'},
			{title: 'Conditional Statements', route: '/blog/c-conditional-statements'},
			{title: 'Loops', route: '/blog/c-loops'},
			{title: 'Quiz: Conditional Statements and Loops', route: '/blog/c-quiz-conditional-loops'}
		]
	},
	{
		title: 'Functions',
		description: 'Learn how to create modular, reusable code using functions. Explore parameter passing, return types, ' +
				'recursion, and how functions make program easier to manage.',
		topics: [
			{title: 'Functions in C', route: '/blog/c-programming-language'},
			{title: 'Parameter Passing Techniques', route: '/blog/c-programming-language'},
			{title: 'Main Function', route: '/blog/c-programming-language'},
			{title: 'Recursion', route: '/blog/c-programming-language'},
			{title: 'Inline Function', route: '/blog/c-programming-language'},
			{title: 'Nested Functions', route: '/blog/c-programming-language'},
			{title: 'Quiz: Functions', route: '/blog/c-programming-language'}
		]
	},
	{
		title: 'Compound Data Types',
		description: 'Dive into arrays, pointers, strings, functions, structures, and unions. Understand how to store, manipulate, ' +
				'and organize more complex data efficiently.',
		topics: [
			{title: 'C Arrays', route: '/blog/c-programming-language'},
			{title: 'Pointers in C', route: '/blog/c-programming-language'},
			{title: 'C Strings', route: '/blog/c-programming-language'},
			{title: 'Quiz: Array | Pointers | Strings', route: '/blog/c-programming-language'},
			{title: 'Structures', route: '/blog/c-programming-language'},
			{title: 'Unions', route: '/blog/c-programming-language'},
			{title: 'Enumeration (enum)', route: '/blog/c-programming-language'},
			{title: 'Quiz: Structure & Union', route: '/blog/c-programming-language'}
		]
	},
	{
		title: 'Memory Management',
		description: 'Learn how C manages memory manually, including dynamic allocation and avoiding memory leaks. This ' +
				'section is crucial for writing efficient programs.',
		topics: [
			{title: 'Program\'s Memory Layout', route: '/blog/c-programming-language'},
			{title: 'Dynamic Memory Allocation', route: '/blog/c-programming-language'},
			{title: 'Memory Leaks', route: '/blog/c-programming-language'},
			{title: 'Quiz: Memory Management', route: '/blog/c-programming-language'}
		]
	}
]
</script>

<template>
	<MainLayout>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">C Programming Tutorial</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-10 text-lg">
			C is a powerful general-purpose programming language developed in 1972 by Dennis M. Ritchie at Bell Laboratories.
			It serves as the foundation for many modern programming languages like C++ and Java.
			This tutorial provides a structured learning path for beginners to understand C from the basics up to memory
			management and complex data handling. <br>
			By the end of this tutorial, you should be able to write well-structured C programs, understand program flow, use
			functions effectively, and maange memory safely.
		</p>

		<div class="space-y-12">
			<div v-for="section in sections" :key="section.title">
				<h2 class="text-2xl font-semibold text-gray-800 mb-2">{{ section.title }}</h2>
				<p class="text-gray-500 mb-4 text-lg">{{ section.description }}</p>

				<ul class="list-disc list-inside space-y-1 text-pink-500">
					<li v-for="topic in section.topics" :key="topic.route">
						<router-link :to="topic.route" class="underline text-lg hover:text-pink-700">{{ topic.title }}</router-link>
					</li>
				</ul>
			</div>
		</div>
	</MainLayout>
</template>