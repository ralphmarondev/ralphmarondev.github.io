<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'

const lastUpdated = 'February 5, 2026'

const sections = [
	{
		title: 'Basics',
		description: 'Understand the fundamentals of C programming including data storage, program flow, and essential ' +
				'operations. This section sets the foundation for writing simple C programs.',
		topics: [
			{title: 'C Introduction', route: '/c-introduction'},
			{title: 'Compilation Process in C', route: '/c-compilation-process'},
			{title: 'Identifiers in C', route: '/c-identifiers'},
			{title: 'C Keywords', route: '/c-keywords'},
			{title: 'C Variables', route: '/c-variables'},
			{title: 'Data Type in C', route: '/c-data-types'},
			{title: 'Quiz: C Basics | Variables | Data Types', route: '/c-quiz-basics'},
			{title: 'Input and Output in C', route: '/c-input-output'},
			{title: 'Operators in C', route: '/c-operators'},
			{title: 'Quiz: Input and Output | Operators', route: '/c-quiz-io-operators'},
			{title: 'Conditional Statements in C', route: '/c-conditional-statements'},
			{title: 'Quiz: Conditional Statements in C', route: '/c-quiz-conditional-statements'},
			{title: 'Loops in C', route: '/c-loops'},
			{title: 'Quiz: Loops in C', route: '/c-quiz-loops'}
		]
	},
	{
		title: 'Functions',
		description: 'Learn how to create modular, reusable code using functions. Explore parameter passing, return types, ' +
				'recursion, and how functions make program easier to manage.',
		topics: [
			{title: 'Functions in C', route: '/c-functions'},
			{title: 'Main Function', route: '/c-main-function'},
			// {title: 'Recursion', route: '/c-recursion'},
			{title: 'Quiz: Functions', route: '/c-quiz-functions'}
		]
	},
	{
		title: 'Arrays, Strings & Structures',
		description: 'Dive into arrays, strings, and structures. Understand how to store, manipulate, ' +
				'and organize more complex data efficiently.',
		topics: [
			{title: 'C Arrays', route: '/c-arrays'},
			{title: 'C Strings', route: '/c-strings'},
			{title: 'Quiz: Array and Strings', route: '/c-quiz-array'},
			{title: 'Structures', route: '/c-structures'},
			{title: 'Quiz: Structures', route: '/c-quiz-structure'}
		]
	},
	{
		title: 'Pointers',
		description: 'Learn how pointers work in C, how they store memory addresses, and how they are used with arrays and functions.',
		topics: [
			{title: 'Introduction to Pointers', route: '/c-pointers'},
			{title: 'Quiz: Pointers', route: '/c-pointers-quiz'}
		]
	},
	{
		title: 'Standard Library',
		description: 'Learn commonly used built-in functions provided by C for math operations, string manipulation, and general utilities.',
		topics: [
			{title: 'Math Functions in C', route: '/c-math-functions'},
			{title: 'String Functions in C', route: '/c-string-functions'},
			{title: 'Type Casting & Utility Functions', route: '/c-utility-functions'},
			{title: 'Quiz: Standard Library', route: '/c-quiz-standard-library'}
		]
	},
	{
		title: 'File Handling',
		description: 'Learn how to read from and write to files in C. This is essential for storing data permanently.',
		topics: [
			{title: 'File Handling Basics', route: '/c-file-handling'},
			{title: 'Quiz: File Handling', route: '/c-quiz-file'}
		]
	},
	{
		title: 'Memory Management',
		description: 'Learn how C manages memory manually, including dynamic allocation and avoiding memory leaks. This ' +
				'section is crucial for writing efficient programs.',
		topics: [
			{title: 'Program\'s Memory Layout', route: '/c-memory-layout'},
			{title: 'Dynamic Memory Allocation', route: '/c-dynamic-memory'},
			{title: 'Memory Leaks', route: '/c-memory-leaks'},
			{title: 'Quiz: Memory Management', route: '/c-quiz-memory-management'}
		]
	},
	{
		title: 'What\'s Next?',
		description: 'Strengthen your understanding by reviewing common C programs and solving additional practice problems. This section helps you recognize patterns and improve problem-solving skills.',
		topics: [
			{title: 'Common C Programs', route: '/c-common-programs'},
			{title: 'Loops and Arrays Programs', route: '/c-solved-loops-arrays'},
			{title: 'Advanced Programs (All Concepts)', route: '/c-solved-all-concepts'}
		]
	}
]
</script>

<template>
	<TutorialMainLayout
			title="C Programming">
		<h1 class="text-4xl font-bold text-gray-800 mb-2">C Programming Tutorial</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-8 text-lg">
			C is a powerful general-purpose programming language developed in 1972 by Dennis M. Ritchie at Bell Laboratories.
			It serves as the foundation for many modern programming languages like C++ and Java.
			This tutorial provides a structured learning path for beginners to understand C from the basics up to memory
			management and complex data handling. <br>
			By the end of this tutorial, you should be able to write well-structured C programs, understand program flow, use
			functions effectively, and manage memory safely.
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
							<!--								target="_blank"-->
							<!--								rel="noopener noreferrer"-->
							{{ topic.title }}
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</TutorialMainLayout>
</template>