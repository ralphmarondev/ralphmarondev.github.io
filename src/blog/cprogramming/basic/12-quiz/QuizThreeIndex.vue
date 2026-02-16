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
Enter your age: 15
You are a teenager.
`)
const problem1OutputB = ref(`
Enter your age: 25
You are an adult.
`)

// Problem 2
const problem2Code = ref(`
// Your code goes here
`)
const problem2OutputA = ref(`
Enter a number: 7
7 is odd.
`)
const problem2OutputB = ref(`
Enter a number: 12
12 is even.
`)

// Problem 3
const problem3Code = ref(`
// Your code goes here
`)
const problem3OutputA = ref(`
Enter exam score: 88
Grade = B
`)
const problem3OutputB = ref(`
Enter exam score: 95
Grade = A
`)

// Problem 4
const problem4Code = ref(`
// Your code goes here
`)
const problem4OutputA = ref(`
Enter the day number (1-7): 3
Today is Wednesday.
`)
const problem4OutputB = ref(`
Enter the day number (1-7): 6
Today is Saturday.
`)

// Problem 5
const problem5Code = ref(`
// Your code goes here
`)
const problem5OutputA = ref(`
Enter temperature in Celsius: 28
It's a warm day. Wear light clothes.
`)
const problem5OutputB = ref(`
Enter temperature in Celsius: 10
It's a cold day. Wear a jacket.
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
	{title: 'Conditional Statements', route: '/blog/c-conditionals'}
]
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C Programming Quiz: Conditional Statements</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated: {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-6 text-lg">
			In this quiz, you will use variables, read input, and make decisions using conditional statements.
			Each problem is presented as a short story. Follow the instructions carefully, and print the output exactly as
			shown.
		</p>

		<!-- Problem 1 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 1: Age Classification</h2>
		<p class="text-gray-500 mb-4 text-lg">
			On a bright morning, you meet new villagers visiting the town square. You need to determine their age category.
			Ask the villager for their age using <span class="bg-pink-50 px-2 rounded-lg">int age</span>.
			If the age is less than 18, print "You are a teenager." Otherwise, print "You are an adult."
			Think of yourself as a friendly town guide, giving advice and greeting people based on their stage in life.
		</p>
		<CodeBlock :code="problem1Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem1OutputA" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 2:</p>
		<OutputBlock :output="problem1OutputB" />

		<!-- Problem 2 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 2: Odd or Even Number</h2>
		<p class="text-gray-500 mb-4 text-lg">
			In a magical market, a wizard challenges you to determine whether a given number is odd or even.
			Use <span class="bg-pink-50 px-2 rounded-lg">int number</span> to store the input.
			If the number is divisible by 2, print "
			number is even." Otherwise, print "
			number is odd."
			Your ability to quickly identify even and odd numbers will impress the magical creatures watching
			nearby.
		</p>
		<CodeBlock :code="problem2Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem2OutputA" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 2:</p>
		<OutputBlock :output="problem2OutputB" />

		<!-- Problem 3 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 3: Exam Grade</h2>
		<p class="text-gray-500 mb-4 text-lg">
			You are assisting a teacher in a quiet schoolroom filled with the smell of chalk and the murmur of students.
			Ask the student for their exam score using <span class="bg-pink-50 px-2 rounded-lg">int score</span>.
			If the score is 90 or above, print "Grade = A."
			If the score is between 80 and 89, print "Grade = B." Otherwise, print "Grade = C."
			Your task is to assign grades fairly and encourage students according to their performance.
		</p>
		<CodeBlock :code="problem3Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem3OutputA" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 2:</p>
		<OutputBlock :output="problem3OutputB" />

		<!-- Problem 4 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 4: Day of the Week</h2>
		<p class="text-gray-500 mb-4 text-lg">
			In a kingdom with a rotating schedule of festivals, each day has its own name. Ask the user to input a day number
			(1-7) using <span class="bg-pink-50 px-2 rounded-lg">int day</span>.
			If 1, print "Today is Monday"; if 2, print "Today is Tuesday"; … up to 7 for Sunday.
			You are the royal scheduler, ensuring that each day’s festival is correctly announced to villagers.
		</p>
		<CodeBlock :code="problem4Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem4OutputA" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 2:</p>
		<OutputBlock :output="problem4OutputB" />

		<!-- Problem 5 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 5: Weather Advice</h2>
		<p class="text-gray-500 mb-4 text-lg">
			As the village weather guide, you need to give advice based on the temperature. Ask the user to enter the
			temperature in Celsius using <span class="bg-pink-50 px-2 rounded-lg">int temperature</span>.
			If it’s 20 or above, print "It's a warm day. Wear light clothes."
			If below 20, print "It's a cold day. Wear a jacket."
			Your guidance will help villagers dress appropriately and stay comfortable throughout the day.
		</p>
		<CodeBlock :code="problem5Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem5OutputA" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 2:</p>
		<OutputBlock :output="problem5OutputB" />

		<UsefulLinks :links="links" />
	</MainLayout>
</template>