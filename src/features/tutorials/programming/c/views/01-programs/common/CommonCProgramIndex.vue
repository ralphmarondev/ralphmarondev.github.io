<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'

const lastUpdated = 'March 31, 2026'

const sections = [
	{
		title: 'Easy - Get Comfortable with Basics',
		description: 'These programs help you get familiar with variables, data types, operators, input/output, and simple ' +
				'formatting. A perfect warm-up before moving to more challenging tasks!',
		topics: [
			{title: 'Print Hello Sir Ralph', route: '/c/print-hello-sir-ralph'},
			{title: 'Swap Two Numbers', route: '/c/swap-two-numbers'},
			{title: 'Be precise in C', route: '/c/be-precise-in-c'},
			{title: 'Last Digit of a Number', route: '/c/last-digit-of-a-number'},
			{title: 'Compute a / b', route: '/c/compute-a-over-b'},
			{title: 'Compare Two Numbers', route: '/c/compare-two-numbers'},
			{title: 'Positive, Negative, or Zero', route: '/c/positive-negative-or-zero'},
			{title: 'Sum of N Numbers', route: '/c/sum-of-n-numbers'}
		]
	},
	{
		title: 'Medium - Apply Your Logic',
		description: 'Once you\'re comfortable with the basics, these programs help you use control statements, loops, ' +
				'and simple calculations to solve practical problems.',
		topics: [
			{title: 'Even/Odd Checker', route: '/c/even-odd-checker'},
			{title: 'Greatest of Three Numbers', route: '/c/greatest-of-three-numbers'},
			{title: 'Leap Year Checker', route: '/c/leap-year-checker'},
			{title: 'FizzBuzz Challenge', route: '/c/fizz-challenge'},
			{title: 'Simple Calculator', route: '/c/simple-calculator'},
			{title: 'First digit of a Number', route: '/c/first-digit-of-a-number'},
			{title: 'Count Digits', route: '/c/count-digits'}
		]
	}
]
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Common C Programs</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-8 text-lg">
			C fundamentals are the building blocks of all programming. Mastering them gives you a strong foundation for
			tackling bigger and more interesting problems.
			<br>
			The best way to learn is by doing. This page collects <b>practice programs</b> that cover everything from basic
			printing to simple logic, loops, and calculations.
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