<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'
import UsefulLinks from '@/blog/components/UsefulLinks.vue'
import {ref} from 'vue'
import CodeBlock from '@/blog/components/CodeBlock.vue'
import OutputBlock from '@/blog/components/OutputBlock.vue'

const lastUpdated = 'February 16, 2026'

// Problem 1
const problem1Code = ref(`
// Your code goes here
`)
const problem1OutputA = ref(`
Enter a number: 5
Counting up to 5:
1
2
3
4
5
`)

// Problem 2
const problem2Code = ref(`
// Your code goes here
`)
const problem2OutputA = ref(`
Enter a number: 4
Factorial of 4 is 24
`)

// Problem 3
const problem3Code = ref(`
// Your code goes here
`)
const problem3OutputA = ref(`
Enter number of students: 3
Enter score for student 1: 80
Enter score for student 2: 90
Enter score for student 3: 75
Average score = 81.666667
`)

// Problem 4
const problem4Code = ref(`
// Your code goes here
`)
const problem4OutputA = ref(`
Enter a number: 7
7 Multiplication Table:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70
`)

// Problem 5
const problem5Code = ref(`
// Your code goes here
`)
const problem5OutputA = ref(`
You are checking the first 5 numbers for even or odd:
1 is odd
2 is even
3 is odd
4 is even
5 is odd
`)

const links = [
	{title: 'Introduction to C', route: '/blog/c-introduction'},
	{title: 'Compilation Process', route: '/blog/c-compilation-process'},
	{title: 'Identifiers', route: '/blog/c-identifiers'},
	{title: 'Keywords', route: '/blog/c-keywords'},
	{title: 'Variables', route: '/blog/c-variables'},
	{title: 'Data Types', route: '/blog/c-data-types'},
	{title: 'Input and Output', route: '/blog/c-input-output'},
	{title: 'Operators', route: '/blog/c-operators'},
	{title: 'Conditional Statements', route: '/blog/c-conditionals'},
	{title: 'Loops', route: '/blog/c-loops'}
]
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C Programming Quiz: Loops</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated: {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-6 text-lg">
			In this quiz, you will use loops to automate repetitive tasks. Each problem is presented as a short story where
			you must repeat actions, calculate totals, or generate sequences.
			Follow the instructions carefully and print the output exactly as shown.
		</p>

		<!-- Problem 1 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 1: Counting Up</h2>
		<p class="text-gray-500 mb-4 text-lg">
			You are helping a young wizard apprentice practice counting spells. The master asks you to count up to a certain
			number provided by the apprentice.
			Use a <span class="bg-pink-50 px-2 rounded-lg">for loop</span> and a variable
			<span class="bg-pink-50 px-2 rounded-lg">int n</span> to read the number. Print each number on a new line until
			you reach the target.
			The apprentice will learn faster if the numbers are displayed one by one in order.
		</p>
		<CodeBlock :code="problem1Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run:</p>
		<OutputBlock :output="problem1OutputA" />

		<!-- Problem 2 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 2: Factorial Calculator</h2>
		<p class="text-gray-500 mb-4 text-lg">
			In the kingdom's math guild, scribes calculate factorials for magical rituals. Ask the user for a number <span
				class="bg-pink-50 px-2 rounded-lg">int n</span> and use a
			<span class="bg-pink-50 px-2 rounded-lg">for loop</span> to calculate the factorial. Print the result.
			The higher the factorial, the stronger the ritual!
		</p>
		<CodeBlock :code="problem2Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run:</p>
		<OutputBlock :output="problem2OutputA" />

		<!-- Problem 3 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 3: Average Student Score</h2>
		<p class="text-gray-500 mb-4 text-lg">
			You are a teacher in a school with a row of eager students. Ask for the number of students using
			<span class="bg-pink-50 px-2 rounded-lg">int n</span>. Then, for each student, read their score into a variable
			<span class="bg-pink-50 px-2 rounded-lg">int score</span> and accumulate the total using a loop. After all inputs,
			calculate and print the average score.
			Your job is to encourage students by reporting their performance in a neat summary.
		</p>
		<CodeBlock :code="problem3Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run:</p>
		<OutputBlock :output="problem3OutputA" />

		<!-- Problem 4 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 4: Multiplication Table</h2>
		<p class="text-gray-500 mb-4 text-lg">
			A traveling merchant needs to prepare multiplication tables to teach apprentices. Ask the user for a number <span
				class="bg-pink-50 px-2 rounded-lg">int n</span> and print the multiplication table from 1 to 10 using a loop.
			Each line should clearly show the multiplier, multiplicand, and the result. The apprentices will use this table to
			memorize numbers quickly.
		</p>
		<CodeBlock :code="problem4Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run:</p>
		<OutputBlock :output="problem4OutputA" />

		<!-- Problem 5 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 5: Even-Odd Checker</h2>
		<p class="text-gray-500 mb-4 text-lg">
			In a small village, a sage asks you to check whether the first few numbers are even or odd. Use a
			<span class="bg-pink-50 px-2 rounded-lg">for loop</span> and print each number with its type (even or odd).
			This will help young villagers learn patterns in numbers and prepare them for larger mathematical challenges.
		</p>
		<CodeBlock :code="problem5Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run:</p>
		<OutputBlock :output="problem5OutputA" />

		<UsefulLinks :links="links" />
	</MainLayout>
</template>