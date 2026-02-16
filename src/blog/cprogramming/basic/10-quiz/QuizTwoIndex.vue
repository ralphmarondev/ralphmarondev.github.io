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
Hi there! Can you tell me your favorite number? 42
Got it! Your favorite number is 42
`)
const problem1OutputB = ref(`
Hi there! Can you tell me your favorite number? 7
Got it! Your favorite number is 7
`)

// Problem 2
const problem2Code = ref(`
// Your code goes here
`)
const problem2OutputA = ref(`
Enter the number of apples and oranges: 10 4
Total fruits = 14
Difference (apples - oranges) = 6
Product (apples * oranges) = 40
Division (apples / oranges) = 2
`)
const problem2OutputB = ref(`
Enter the number of apples and oranges: 12 6
Total fruits = 18
Difference (apples - oranges) = 6
Product (apples * oranges) = 72
Division (apples / oranges) = 2
`)

// Problem 3
const problem3Code = ref(`
// Your code goes here
`)
const problem3OutputA = ref(`
Enter points for challenge 1 and challenge 2: 3 5
Your combined score is: 34
`)
const problem3OutputB = ref(`
Enter points for challenge 1 and challenge 2: 5 7
Your combined score is: 74
`)

// Problem 4
const problem4Code = ref(`
// Your code goes here
`)
const problem4OutputA = ref(`
How many coins do you have? 7
How many candies do you have? 3
Original coins = 7, candies = 3
After receiving 1 more coin: 8
After eating 1 candy: 2
`)
const problem4OutputB = ref(`
How many coins do you have? 100
How many candies do you have? 105
Original coins = 100, candies = 105
After receiving 1 more coin: 101
After eating 1 candy: 104
`)

// Problem 5
const problem5Code = ref(`
// Your code goes here
`)
const problem5OutputA = ref(`
Enter chairs and tables: 5 2
Total items = 7
Difference (chairs - tables) = 3
Chairs * Tables = 10
Chairs / Tables = 2
`)
const problem5OutputB = ref(`
Enter chairs and tables: 8 3
Total items = 11
Difference (chairs - tables) = 5
Chairs * Tables = 24
Chairs / Tables = 2
`)

const links = [
	{title: 'Introduction to C', route: '/blog/c-introduction'},
	{title: 'Compilation Process', route: '/blog/c-compilation-process'},
	{title: 'Identifiers', route: '/blog/c-identifiers'},
	{title: 'Keywords', route: '/blog/c-keywords'},
	{title: 'Variables', route: '/blog/c-variables'},
	{title: 'Data Types', route: '/blog/c-data-types'},
	{title: 'Input and Output', route: '/blog/c-input-output'},
	{title: 'Operators', route: '/blog/c-operators'}
]
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C Programming Quiz: Input/Output Basics</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated: {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-6 text-lg">
			Each problem is written as a story. Follow the instructions carefully, declare the variables exactly as specified,
			and print the outputs exactly as shown.
		</p>

		<!-- Problem 1 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 1: Favorite Number Chat</h2>
		<p class="text-gray-500 mb-4 text-lg">
			While strolling through a park bathed in the golden light of late afternoon, you encounter a lively friend who is
			fascinated with numbers. They excitedly lean in and ask you to share your favorite number, insisting it has a
			magical quality that could brighten the day. You reach into your bag of enchanted items, carefully select the
			number that holds personal significance, and prepare a cheerful response that acknowledges their curiosity. Use an
			<span class="bg-pink-50 px-2 rounded-lg">int</span> variable named <span class="bg-pink-50 px-2 rounded-lg">favoriteNumber</span>,
			ask the user for input, and print a warm, friendly message including the number exactly as shown.
		</p>
		<CodeBlock :code="problem1Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem1OutputA" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 2:</p>
		<OutputBlock :output="problem1OutputB" />

		<!-- Problem 2 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 2: Fruit Market Calculations</h2>
		<p class="text-gray-500 mb-4 text-lg">
			The marketplace is bustling with chatter, colorful stalls, and the aroma of ripe fruits. You, as the assistant of
			the village’s most meticulous fruit vendor, have been tasked with helping a customer select the perfect number of
			apples and oranges. Carefully record the counts of each fruit using <span class="bg-pink-50 px-2 rounded-lg">int apples</span>
			and <span class="bg-pink-50 px-2 rounded-lg">int oranges</span>. Perform calculations to determine the total
			number of fruits, the difference between apples and oranges, their product, and integer division. Ensure your
			output matches the format exactly so the royal market inspectors can quickly verify the records.
		</p>
		<CodeBlock :code="problem2Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem2OutputA" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 2:</p>
		<OutputBlock :output="problem2OutputB" />

		<!-- Problem 3 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 3: Magical Game Score</h2>
		<p class="text-gray-500 mb-4 text-lg">
			In the heart of an enchanted forest, a daring player navigates through a series of mystical challenges. Two
			powerful forest guardians challenge the player to feats of skill, granting points for success. Use
			<span class="bg-pink-50 px-2 rounded-lg">int score1</span> and
			<span class="bg-pink-50 px-2 rounded-lg">int score2</span> to hold the points obtained in each challenge. The
			combined score is determined by summing the squares of the individual scores, reflecting both effort and skill.
			Print the result to showcase the player's valor in the magical arena.
		</p>
		<CodeBlock :code="problem3Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem3OutputA" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 2:</p>
		<OutputBlock :output="problem3OutputB" />


		<!-- Problem 4 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 4: Coins and Candies Tracker</h2>
		<p class="text-gray-500 mb-4 text-lg">
			In a quaint, sunlit workshop filled with jars of candies and stacks of coins, you sit at a polished wooden table.
			Each coin and candy has a story, representing small rewards and treats. Track the number of coins and candies
			using <span class="bg-pink-50 px-2 rounded-lg">int coins</span> and <span class="bg-pink-50 px-2 rounded-lg">int candies</span>.
			Ask for the current amounts, then simulate adding a coin to celebrate a minor victory and removing a candy for a
			sweet snack. Print both the original and updated amounts, preserving the story of each item.
		</p>
		<CodeBlock :code="problem4Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem4OutputA" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 2:</p>
		<OutputBlock :output="problem4OutputB" />

		<!-- Problem 5 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 5: Party Items Tracker</h2>
		<p class="text-gray-500 mb-4 text-lg">
			You are setting up a vibrant backyard birthday celebration with colorful streamers fluttering in the breeze and
			cheerful music playing. Two friends approach, carrying the furniture they promised to bring. Use
			<span class="bg-pink-50 px-2 rounded-lg">int chairs</span> and
			<span class="bg-pink-50 px-2 rounded-lg">int tables</span> to store the counts they provide. Perform calculations
			to determine the total number of items, the difference between chairs and tables, the product, and the integer
			division. Print the results clearly, so you can arrange the party efficiently and make sure everyone has a seat
			and table.
		</p>
		<CodeBlock :code="problem5Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem5OutputA" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 2:</p>
		<OutputBlock :output="problem5OutputB" />

		<UsefulLinks :links="links" />
	</MainLayout>
</template>