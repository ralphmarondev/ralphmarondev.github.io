<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'

const lastUpdated = 'April 26, 2026'

const sections = [
	{
		title: 'Introduction to Java',
		description: 'Learn what Java is, why it is widely used, and how it runs on different platforms using the JVM.',
		topics: [
			{title: 'What is Java?', route: '/java-introduction'},
			{title: 'Install Java (JDK Setup)', route: '/java-installation'},
			{title: 'JVM, JRE, and JDK', route: '/java-jvm-jre-jdk'},
			{title: 'First Java Program', route: '/java-hello-world'},
			{title: 'Quiz: Introduction to Java', route: '/java-quiz-intro'}
		]
	},

	{
		title: 'Java Basics',
		description: 'Build a strong foundation in Java syntax, variables, and core programming concepts.',
		topics: [
			{title: 'Data Types', route: '/java-data-types'},
			{title: 'Variables', route: '/java-variables'},
			{title: 'Operators', route: '/java-operators'},
			{title: 'Input and Output', route: '/java-input-output'},
			{title: 'Identifiers and Keywords', route: '/java-identifiers-keywords'},
			{title: 'Quiz: Java Basics', route: '/java-quiz-basics'}
		]
	},

	{
		title: 'Control Flow',
		description: 'Learn how to control program execution using decision-making and loops.',
		topics: [
			{title: 'If-Else Statements', route: '/java-if-else'},
			{title: 'Switch Case', route: '/java-switch'},
			{title: 'Loops (for, while, do-while)', route: '/java-loops'},
			{title: 'Break and Continue', route: '/java-jump-statements'},
			{title: 'Quiz: Control Flow', route: '/java-quiz-control-flow'}
		]
	},

	{
		title: 'Methods and Arrays',
		description: 'Understand reusable code blocks and how to store multiple values efficiently.',
		topics: [
			{title: 'Methods in Java', route: '/java-methods'},
			{title: 'Method Overloading', route: '/java-method-overloading'},
			{title: 'Arrays', route: '/java-arrays'},
			{title: 'Multidimensional Arrays', route: '/java-2d-arrays'},
			{title: 'Quiz: Methods and Arrays', route: '/java-quiz-methods-arrays'}
		]
	},

	{
		title: 'Object-Oriented Programming (OOP)',
		description: 'Master Java OOP concepts such as classes, objects, inheritance, polymorphism, abstraction, and encapsulation.',
		topics: [
			{title: 'Classes and Objects', route: '/java-classes-objects'},
			{title: 'Constructors', route: '/java-constructors'},
			{title: 'Encapsulation', route: '/java-encapsulation'},
			{title: 'Inheritance', route: '/java-inheritance'},
			{title: 'Polymorphism', route: '/java-polymorphism'},
			{title: 'Abstraction', route: '/java-abstraction'},
			{title: 'Quiz: OOP', route: '/java-quiz-oop'}
		]
	},

	{
		title: 'Strings and Exception Handling',
		description: 'Learn how Java handles text processing and runtime error management.',
		topics: [
			{title: 'Strings in Java', route: '/java-strings'},
			{title: 'String Methods', route: '/java-string-methods'},
			{title: 'Exception Handling', route: '/java-exceptions'},
			{title: 'Try-Catch-Finally', route: '/java-try-catch'},
			{title: 'Quiz: Strings and Exceptions', route: '/java-quiz-strings-exceptions'}
		]
	},

	{
		title: 'Advanced Java Concepts',
		description: 'Explore advanced Java features used in real-world software development.',
		topics: [
			{title: 'Java Collections Framework', route: '/java-collections'},
			{title: 'ArrayList and HashMap', route: '/java-arraylist-hashmap'},
			{title: 'Multithreading', route: '/java-multithreading'},
			{title: 'File Handling', route: '/java-file-handling'},
			{title: 'Quiz: Advanced Java', route: '/java-quiz-advanced'}
		]
	},

	{
		title: 'What’s Next?',
		description: 'Apply everything you learned through practice problems and mini-projects.',
		topics: [
			{title: 'Java Practice Problems', route: '/java-practice-problems'},
			{title: 'Mini Projects in Java', route: '/java-mini-projects'},
			{title: 'Final Java Review Quiz', route: '/java-final-quiz'}
		]
	}
]
</script>

<template>
	<TutorialMainLayout
			title="Java Programming">
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Java Programming Tutorial</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-8 text-lg">
			Java is a powerful, object-oriented programming language widely used for building web applications, mobile apps,
			and enterprise systems. This tutorial provides a structured learning path from basic syntax to advanced Java
			concepts,
			helping you develop strong programming and problem-solving skills.
			<br><br>
			By the end of this tutorial, you will be able to write clean Java programs, apply object-oriented principles,
			and build real-world applications.
		</p>

		<div class="space-y-8">
			<div v-for="section in sections" :key="section.title">
				<h2 class="text-2xl font-semibold text-gray-800 mb-2">{{ section.title }}</h2>
				<p class="text-gray-500 mb-4 text-lg">{{ section.description }}</p>

				<ul class="list-disc list-inside space-y-1 text-pink-500">
					<li v-for="topic in section.topics" :key="topic.route">
						<router-link
								:to="topic.route"
								class="underline text-lg hover:text-pink-700"
						>
							{{ topic.title }}
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</TutorialMainLayout>
</template>