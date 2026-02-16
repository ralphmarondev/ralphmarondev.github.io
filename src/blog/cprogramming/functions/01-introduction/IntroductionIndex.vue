<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'
import UsefulLinks from '@/blog/components/UsefulLinks.vue'
import {ref} from 'vue'
import CodeBlock from '@/blog/components/CodeBlock.vue'
import OutputBlock from '@/blog/components/OutputBlock.vue'

const lastUpdated = 'February 16, 2026'

// Example 1: No arguments, no return
const example1Code = ref(`
#include <stdio.h>

void greet() {
    printf("Greetings, brave traveler!\\n");
}

int main() {
    greet(); // call the function
    return 0;
}
`)
const example1Output = ref(`
Greetings, brave traveler!
`)

// Example 2: Arguments, no return
const example2Code = ref(`
#include <stdio.h>

void forgeSword(int length) {
    printf("Forged a sword of length %d\\n", length);
}

int main() {
    forgeSword(12);
    forgeSword(15);
    forgeSword(20);
    return 0;
}
`)
const example2Output = ref(`
Forged a sword of length 12
Forged a sword of length 15
Forged a sword of length 20
`)

// Example 3: No arguments, return value
const example3Code = ref(`
#include <stdio.h>

int totalEnergy() {
    int crystal1 = 150, crystal2 = 200, crystal3 = 100;
    return crystal1 + crystal2 + crystal3;
}

int main() {
    int energy = totalEnergy();
    printf("Total magic energy: %d\\n", energy);
    return 0;
}
`)
const example3Output = ref(`
Total magic energy: 450
`)

// Example 4: Arguments and return value
const example4Code = ref(`
#include <stdio.h>

int totalYield(int field1, int field2) {
    return field1 + field2;
}

int main() {
    int f1, f2;
    printf("Enter yield of field 1 and field 2: ");
    scanf("%d %d", &f1, &f2);
    int total = totalYield(f1, f2);
    printf("Total produce is: %d\\n", total);
    return 0;
}
`)
const example4Output = ref(`
Enter yield of field 1 and field 2: 30 45
Total produce is: 75
`)

// Example 5: Multiple calls
const example5Code = ref(`
#include <stdio.h>

int square(int num) {
    return num * num;
}

int main() {
    int a, b, c;
    printf("Enter 3 numbers: ");
    scanf("%d %d %d", &a, &b, &c);
    printf("Squares: %d %d %d\\n", square(a), square(b), square(c));
    return 0;
}
`)
const example5Output = ref(`
Enter 3 numbers: 2 4 5
Squares: 4 16 25
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
	{title: 'Loops', route: '/blog/c-loops'}
]
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Learning Functions in C: A Story of Wizards and Blacksmiths</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated: {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-6 text-lg">
			Functions in C are like special spells or tools in a wizard's tower or a blacksmith's workshop.
			You can write a piece of logic once and reuse it whenever needed. This keeps your code organized,
			clean, and easier to manage.
		</p>

		<!-- Example 1 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">1. Greeting Adventurers (No Arguments, No Return)</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Imagine you are entering an enchanted forest. A mystical voice guides you to greet every adventurer
			who enters. We can define a function <span class="bg-pink-50 px-2 rounded-lg">greet()</span> that
			simply prints a warm greeting. No input is needed, and it doesn't return anything.
			<CodeBlock :code="example1Code" language="c" />
			Output:
			<OutputBlock :output="example1Output" />
		</p>

		<!-- Example 2 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">2. Forging Swords (Arguments, No Return)</h2>
		<p class="text-gray-500 mb-2 text-lg">
			In a small village, you are the blacksmith. Your apprentice gives you lengths for swords to forge.
			We define <span class="bg-pink-50 px-2 rounded-lg">forgeSword(int length)</span> that takes
			a sword length and prints the crafted sword. Each time you call it, it uses the input to print a message.
			<CodeBlock :code="example2Code" language="c" />
			Output:
			<OutputBlock :output="example2Output" />
		</p>

		<!-- Example 3 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">3. Crystal Energy (No Arguments, Return Value)</h2>
		<p class="text-gray-500 mb-2 text-lg">
			In the wizard tower, magical crystals hold energy. You need a function that calculates the total energy.
			We define <span class="bg-pink-50 px-2 rounded-lg">totalEnergy()</span> which sums the crystal powers
			and returns it. Main stores the returned value and prints it.

			<CodeBlock :code="example3Code" language="c" />
			Output:
			<OutputBlock :output="example3Output" />
		</p>
		<!-- Example 4 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">4. Farmer’s Yield (Arguments and Return Value)</h2>
		<p class="text-gray-500 mb-2 text-lg">
			A farmer wants to calculate the combined produce from two fields. We define
			<span class="bg-pink-50 px-2 rounded-lg">totalYield(int field1, int field2)</span> that returns
			the sum of yields. Main reads values from the user, calls the function, and prints the total.
			<CodeBlock :code="example4Code" language="c" />
			Output:
			<OutputBlock :output="example4Output" />
		</p>

		<!-- Example 5 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">5. Magical Squares (Multiple Calls)</h2>
		<p class="text-gray-500 mb-2 text-lg">
			In the kingdom library, a sage wants to study the square of numbers. We define
			<span class="bg-pink-50 px-2 rounded-lg">square(int num)</span> that returns the square.
			The user enters multiple numbers, and we call the function for each, printing the results.
			This demonstrates reusing the same logic multiple times.
			<CodeBlock :code="example5Code" language="c" />
			Output:
			<OutputBlock :output="example5Output" />
		</p>

		<UsefulLinks :links="links" />
	</MainLayout>
</template>