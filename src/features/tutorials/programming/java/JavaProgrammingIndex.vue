<script setup lang="ts">
import MainLayout from '@/shared/layouts/TutorialMainLayout.vue'

const lastUpdated = 'April 26, 2026'

const sections = [
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
	}
]
</script>

<template>
	<MainLayout>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Java Programming Tutorial</h1>
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