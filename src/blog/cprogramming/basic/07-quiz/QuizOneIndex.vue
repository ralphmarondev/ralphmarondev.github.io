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
Hi! Welcome to the magical world of C Programming.
`)

// Problem 2
const problem2Code = ref(`
// Your code goes here
`)
const problem2OutputA = ref(`
Age = 20
Height = 5.9
`)

// Problem 3
const problem3Code = ref(`
// Your code goes here
`)
const problem3OutputA = ref(`
Hi, I'm the new apprentice wizard in the castle library.
The Maximum Power is 100.
`)

// Problem 4
const problem4Code = ref(`
// Your code goes here
`)
const problem4OutputA = ref(`
I hereby declare that the starting power of x is 5 and y is 10!
`)

// Problem 5
const problem5Code = ref(`
// Your code goes here
`)
const problem5OutputA = ref(`
Count = 8
Average = 7.5
Grade = A
`)

const links = [
	{title: 'C Introduction', route: '/blog/c-introduction'},
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
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C Programming Quiz: Introduction and Basics</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated: {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-6 text-lg">
			Dive into the world of C programming through detailed story-driven scenarios. Each problem immerses you in a
			mini-adventure or situation where you must use variables, assign values, and display outputs exactly as described.
		</p>

		<!-- Problem 1 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 1: Magical Welcome</h2>
		<p class="text-gray-500 mb-4 text-lg">
			After stepping through a shimmering portal, you find yourself in the heart of the magical world of C Programming.
			The air is thick with floating symbols and glowing code fragments. A friendly guide with a long, flowing robe
			approaches you, holding a scroll of instructions and a quill. They smile and say that all new adventurers must
			greet the world with a magical welcome message.
			Your task is to compose the greeting using a <span class="bg-pink-50 px-2 rounded-lg">string</span> variable named
			<span class="bg-pink-50 px-2 rounded-lg">welcomeMessage</span>. Carefully craft the message, assign it to your
			variable, and print it exactly as expected so that the magical guide can record your arrival.
		</p>
		<CodeBlock :code="problem1Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem1OutputA" />

		<!-- Problem 2 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 2: Village Scribe</h2>
		<p class="text-gray-500 mb-4 text-lg">
			You have been summoned to the bustling village of Codeville as the royal scribe. Citizens are lining up to have
			their details recorded for the kingdom’s census. Children run past you, elders wave politely, and merchants
			display their goods in the sun. Among the many details you must record, two pieces are most important for today’s
			task: age and height.
			Use an <span class="bg-pink-50 px-2 rounded-lg">int age</span> and a <span class="bg-pink-50 px-2 rounded-lg">float height</span>
			to store each citizen’s information. Print them in the format expected by the royal archives so that the census is
			perfectly logged and the villagers’ information is preserved for generations.
		</p>
		<CodeBlock :code="problem2Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem2OutputA" />

		<!-- Problem 3 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 3: Apprentice Wizard</h2>
		<p class="text-gray-500 mb-4 text-lg">
			Deep within the ancient castle library, rows of towering bookshelves stretch into the shadows. Dust motes dance in
			the sunlight streaming through stained-glass windows. As a newly appointed apprentice wizard, you have been
			entrusted with recording the power level of a mysterious spell you discovered. The head wizard emphasizes
			accuracy, reminding you that magical records must never be wrong.
			Use a <span class="bg-pink-50 px-2 rounded-lg">const int maxPower</span> variable to store the spell’s maximum
			power. Print this value exactly as required, so that your entry is properly documented in the Great Tome of
			Spells.
		</p>
		<CodeBlock :code="problem3Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem3OutputA" />

		<!-- Problem 4 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 4: Knights of Numbers</h2>
		<p class="text-gray-500 mb-4 text-lg">
			In the kingdom of Numbers, two renowned knights are preparing for the legendary Grand Tournament of Arithmetic.
			The castle grounds are filled with banners fluttering in the wind, trumpets announcing the day’s challenges, and
			spectators eagerly awaiting the competition. Your mission as the royal chronicler is to record the starting
			strength of each knight.
			Use <span class="bg-pink-50 px-2 rounded-lg">int x</span> for the first knight and
			<span class="bg-pink-50 px-2 rounded-lg">int y</span> for the second knight. Carefully print the initial strengths
			so the king’s council can strategize the matches and keep accurate records for posterity.
		</p>
		<CodeBlock :code="problem4Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem4OutputA" />

		<!-- Problem 5 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 5: Young Scientist</h2>
		<p class="text-gray-500 mb-4 text-lg">
			In a bustling laboratory brimming with bubbling potions, humming machines, and scrolls of calculations scattered
			across tables, you are the young scientist assigned to document today’s experiment. Assistants dash back and
			forth, notes fly through the air, and the head scientist occasionally peeks over your shoulder to ensure accuracy.
			Your task is to record the number of trials, calculate the average result, and determine the grade.
			Use <span class="bg-pink-50 px-2 rounded-lg">int count</span>, <span class="bg-pink-50 px-2 rounded-lg">float average</span>,
			and <span class="bg-pink-50 px-2 rounded-lg">char grade</span>. Print all details exactly as specified so that the
			results are safely archived in the laboratory’s official records.
		</p>
		<CodeBlock :code="problem5Code" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run 1:</p>
		<OutputBlock :output="problem5OutputA" />

		<UsefulLinks :links="links" />
	</MainLayout>
</template>