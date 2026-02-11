<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'

const lastUpdated = 'February 11, 2026'

const sections = [
	{
		title: 'Basics',
		description: 'Understand the fundamentals of C++ programming including variables, operators, input/output, and control flow.',
		topics: [
			{title: 'Introduction to C++', route: '/blog/cpp-introduction'},
			{title: 'Identifiers', route: '/blog/cpp-identifiers'},
			{title: 'Keywords', route: '/blog/cpp-keywords'},
			{title: 'Variables', route: '/blog/cpp-variables'},
			{title: 'Data Types', route: '/blog/cpp-data-types'},
			{title: 'Input and Output', route: '/blog/cpp-input-output'},
			{title: 'Operators', route: '/blog/cpp-operators'},
			{title: 'Conditional Statements', route: '/blog/cpp-conditional-statements'},
			{title: 'Loops', route: '/blog/cpp-loops'},
			{title: 'Quiz: Basics', route: '/blog/cpp-quiz-basics'}
		]
	},
	{
		title: 'Functions',
		description: 'Learn how to write modular and reusable code using functions, parameter passing, recursion, and scope.',
		topics: [
			{title: 'Functions', route: '/blog/cpp-functions'},
			{title: 'Parameter Passing Techniques', route: '/blog/cpp-parameter-passing'},
			{title: 'Return Types', route: '/blog/cpp-return-types'},
			{title: 'Main Function', route: '/blog/cpp-main-function'},
			{title: 'Recursion', route: '/blog/cpp-recursion'},
			{title: 'Inline Functions', route: '/blog/cpp-inline-functions'},
			{title: 'Nested Functions', route: '/blog/cpp-nested-functions'},
			{title: 'Quiz: Functions', route: '/blog/cpp-quiz-functions'}
		]
	},
	{
		title: 'Arrays & Strings',
		description: 'Explore collection types, including arrays and strings, and learn how to manipulate them efficiently.',
		topics: [
			{title: 'Arrays', route: '/blog/cpp-arrays'},
			{title: 'Multi-dimensional Arrays', route: '/blog/cpp-multi-dimensional-arrays'},
			{title: 'Strings', route: '/blog/cpp-strings'},
			{title: 'String Functions', route: '/blog/cpp-string-functions'},
			{title: 'Quiz: Arrays & Strings', route: '/blog/cpp-quiz-arrays-strings'}
		]
	},
	{
		title: 'Pointers & Memory Management',
		description: 'Learn about pointers, dynamic memory, and memory management for efficient and safe programs.',
		topics: [
			{title: 'Pointers Basics', route: '/blog/cpp-pointers'},
			{title: 'Pointer Arithmetic', route: '/blog/cpp-pointer-arithmetic'},
			{title: 'Dynamic Memory Allocation', route: '/blog/cpp-dynamic-memory'},
			{title: 'Memory Leaks & Safety', route: '/blog/cpp-memory-safety'},
			{title: 'Quiz: Pointers & Memory', route: '/blog/cpp-quiz-pointers-memory'}
		]
	},
	{
		title: 'Object-Oriented Programming (OOP)',
		description: 'Master classes, objects, inheritance, polymorphism, and encapsulation to write structured C++ programs.',
		topics: [
			{title: 'Classes and Objects', route: '/blog/cpp-classes-objects'},
			{title: 'Constructors & Destructors', route: '/blog/cpp-constructors-destructors'},
			{title: 'Inheritance', route: '/blog/cpp-inheritance'},
			{title: 'Polymorphism', route: '/blog/cpp-polymorphism'},
			{title: 'Encapsulation & Access Modifiers', route: '/blog/cpp-encapsulation'},
			{title: 'Operator Overloading', route: '/blog/cpp-operator-overloading'},
			{title: 'Quiz: OOP', route: '/blog/cpp-quiz-oop'}
		]
	},
	{
		title: 'Standard Template Library (STL)',
		description: 'Use C++’s STL to simplify programming with containers, iterators, algorithms, and function objects.',
		topics: [
			{title: 'Vectors', route: '/blog/cpp-stl-vectors'},
			{title: 'Lists', route: '/blog/cpp-stl-lists'},
			{title: 'Maps & Sets', route: '/blog/cpp-stl-maps-sets'},
			{title: 'Algorithms', route: '/blog/cpp-stl-algorithms'},
			{title: 'Iterators', route: '/blog/cpp-stl-iterators'},
			{title: 'Quiz: STL', route: '/blog/cpp-quiz-stl'}
		]
	},
	{
		title: 'Advanced Topics',
		description: 'Dive into advanced C++ topics such as file handling, templates, exception handling, and multithreading.',
		topics: [
			{title: 'File I/O', route: '/blog/cpp-file-io'},
			{title: 'Templates', route: '/blog/cpp-templates'},
			{title: 'Exception Handling', route: '/blog/cpp-exception-handling'},
			{title: 'Multithreading', route: '/blog/cpp-multithreading'},
			{title: 'Quiz: Advanced Topics', route: '/blog/cpp-quiz-advanced'}
		]
	}
]
</script>

<template>
	<MainLayout>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">C++ Programming Tutorial</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated: {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-8 text-lg">
			C++ is a powerful general-purpose programming language that extends C with object-oriented and
			generic programming features. This tutorial guides beginners from the basics of programming to
			advanced topics like memory management, object-oriented programming, and the Standard Template Library (STL).
			<br>
			By the end of this tutorial, you should be able to write structured, reusable, and efficient C++ programs.
		</p>

		<div class="space-y-8">
			<section v-for="section in sections" :key="section.title">
				<h2 class="text-2xl font-semibold text-gray-800 mb-2">{{ section.title }}</h2>
				<p class="text-gray-500 mb-4 text-lg">{{ section.description }}</p>

				<ul class="list-disc list-inside space-y-1 text-pink-500">
					<li v-for="topic in section.topics" :key="topic.route">
						<router-link
								:to="topic.route"
								class="underline text-lg hover:text-pink-700"
								target="_blank"
								rel="noopener noreferrer"
						>
							{{ topic.title }}
						</router-link>
					</li>
				</ul>
			</section>
		</div>
	</MainLayout>
</template>