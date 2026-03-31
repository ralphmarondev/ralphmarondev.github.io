<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 31, 2026'

// Problem 1
const emptyProgram = ref(`
// Your code goes here
`)
const problem1Output = ref(`
Enter an integer: -10
Enter a float: -5.75
Absolute integer: 10
Absolute float: 5.75
`)
const showSolution1 = ref(false)
const problem1Solution = ref(`
#include <stdio.h>

int main()
{
	int a;
	float b;

	printf("Enter an integer: ");
	scanf("%d", &a);

	printf("Enter a float: ");
	scanf("%f", &b);

	printf("Absolute integer: %d\\n", abs(a));
	printf("Absolute float: %.2f\\n", fabs(b));

	return 0;
}
`)

const showSolution2 = ref(false)
const problem2Output = ref(`
Enter base: 2
Enter exponent: 3
2 raised to 3 = 8.00
Enter a number for square root: 16
Square root: 4.00
`)
const problem2Solution = ref(`
#include <stdio.h>
#include <math.h>

int main()
{
	double base, result;
	int exponent;
	double num;

	printf("Enter base: ");
	scanf("%lf", &base);

	printf("Enter exponent: ");
	scanf("%d", &exponent);

	result = pow(base, exponent);
	printf("%.0lf raised to %d = %.2lf\\n", base, exponent, result);

	printf("Enter a number for square root: ");
	scanf("%lf", &num);

	printf("Square root: %.2lf\n", sqrt(num));
	return 0;
}
`)

const showSolution3 = ref(false)
const problem3Output = ref(`
Enter a number: 5.7
Ceil: 6
Floor: 5
Round: 6
`)
const problem3Solution = ref(`
#include <stdio.h>
#include <math.h>

int main()
{
	double num;

	printf("Enter a number: ");
	scanf("%lf", &num);

	printf("Ceil: %.0lf\\n", ceil(num));
	printf("Floor: %.0lf\\n", floor(num));
	printf("Round: %.0lf\\n", round(num));

	return 0;
}
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C Programming Quest: The Standard Library Awakens</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated: {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-6 text-lg">
			Deep within the world of C programming lies a powerful collection of tools known as the <b>Standard Library</b>.
			<br>
			Unlike basic syntax, these are ancient utilities crafted by master programmers long ago, designed to make
			computation faster, easier, and more powerful. <br>
			But something has gone wrong... <br>
			The Standard Library has been scattered across three regions: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>The Math Temple (&lt;math.h&gt;</li>
				<li>The String Archives (&lt;string.h&gt;</li>
				<li>The Utility Core (&lt;stdlib.h&gt;, &lt;ctype.h&gt;</li>
			</ul>
			To restore balance, you must recover each ability and prove your mastery.
		</p>

		<!-- Problem 1 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 1: The Math Temple</h2>
		<p class="text-gray-500 mb-4 text-lg">
			You enter the Math Temple where numbers float mysteriously. A guardian asks you: <br>
			"Show me the true form of negative numbers!"
			Instructions: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Ask the user for a negative integer and a negative float.</li>
				<li>Print their absolute values.</li>
			</ul>
		</p>
		<CodeBlock :code="emptyProgram" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run:</p>
		<OutputBlock :output="problem1Output" />
		<div class="mt-3">
			<button
					@click="showSolution1 = !showSolution1"
					class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
				{{ showSolution1 ? 'Hide Solution' : 'Show Solution' }}
			</button>
		</div>
		<div v-if="showSolution1" class="mt-3">
			<CodeBlock :code="problem1Solution" language="c" />
		</div>

		<!-- Problem 2 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 2: The Power Chamber</h2>
		<p class="text-gray-500 mb-4 text-lg">
			In a chamber of energy, a voice tells you: <br>
			"Raise numbers... and find their roots!" <br>
			Instructions: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Ask the user for a base and exponent. Print the result of base ^ exponent.</li>
				<li>Ask the user for a number to compute its square root.</li>
			</ul>
		</p>
		<CodeBlock :code="emptyProgram" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run:</p>
		<OutputBlock :output="problem2Output" />
		<div class="mt-3">
			<button
					@click="showSolution2 = !showSolution2"
					class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
				{{ showSolution2 ? 'Hide Solution' : 'Show Solution' }}
			</button>
		</div>
		<div v-if="showSolution2" class="mt-3">
			<CodeBlock :code="problem2Solution" language="c" />
		</div>

		<!-- Problem 3 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 3: The Rounding Trial</h2>
		<p class="text-gray-500 mb-4 text-lg">
			You step into a hall where numbers are floating... but not whole <br>
			"Round them wisely!" whispers a spirit. <br>
			Instructions: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Ask the user for a floating-point number.</li>
				<li>Print its ceil, floor, and round.</li>
			</ul>
		</p>
		<CodeBlock :code="emptyProgram" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run:</p>
		<OutputBlock :output="problem3Output" />
		<div class="mt-3">
			<button
					@click="showSolution3 = !showSolution3"
					class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
				{{ showSolution3 ? 'Hide Solution' : 'Show Solution' }}
			</button>
		</div>
		<div v-if="showSolution3" class="mt-3">
			<CodeBlock :code="problem3Solution" language="c" />
		</div>
	</TutorialMainLayout>
</template>