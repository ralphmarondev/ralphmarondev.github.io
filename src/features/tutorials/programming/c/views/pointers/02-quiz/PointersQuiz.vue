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
Enter a number: 10
Value of n: 10
Address of n: 0x....
Value using pointer: 10
`)
const showSolution1 = ref(false)
const problem1Solution = ref(`
#include <stdio.h>

int main()
{
	int n;
	int *ptr;

	printf("Enter a number: ");
	scanf("%d", &n);

	ptr = &n;
	printf("Value of n: %d\\n", n);
	printf("Address of n: %p\\n", &n);
	printf("Value using pointer: %d\\n", *ptr);
	return 0;
}
`)

const showSolution2 = ref(false)
const problem2Output = ref(`
Enter a number: 5
Updated value: 15
`)
const problem2Solution = ref(`
#include <stdio.h>

int main()
{
	int n;
	int *ptr;

	printf("Enter a number: ");
	scanf("%d", &n);

	ptr = &n;
	*ptr = *ptr + 10;

	printf("Updated value: %d\\n", n);
	return 0;
}
`)

const showSolution3 = ref(false)
const problem3Output = ref(`
Enter two numbers: 3 7
After swap:
a = 7, b = 3
`)
const problem3Solution = ref(`
#include <stdio.h>

void swap(int *a, int *b)
{
	int temp = *a;
	*a = *b;
	*b = temp;
}

int main()
{
	int a, b;

	printf("Enter two numbers: ");
	scanf("%d %d", &a, &b);

	swap(&a, &b);

	printf("After swap:\\n");
	printf("a = %d, b = %d\\n", a, b);
	return 0;
}
`)

const showSolution4 = ref(false)
const problem4Output = ref(`
Enter number of elements: 3
Enter value 1: 5
Enter value 2: 10
Enter value 3: 15
Sum = 30
`)
const problem4Solution = ref(`
#include <stdio.h>

int main()
{
	int n, sum = 0;

	printf("Enter number of elements: ");
	scanf("%d", &n);

	int arr[n];
	int *ptr = arr;

	for(int i = 0; i < n; i++)
	{
		printf("Enter value %d: ", i + 1);
		scanf("%d", ptr + i);
	}

	for (int i = 0; i < n; i++)
	{
		sum += *(ptr + i);
	}

	printf("Sum = %d\\n", sum);
	return 0;
}
`)

const showSolution5 = ref(false)
const problem5Output = ref(`
Enter a number: 4
Square of 4 is 16
`)
const problem5Solution = ref(`
#include <stdio.h>

void square(int *n)
{
	*n = (*n) * (*n);
}

int main()
{
	int n, oldN;

	printf("Enter a number: ");
	scanf("%d", &n);

	oldN = n;
	square(&n);
	printf("Square of %d is %d\\n", oldN, n);
}
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C Programming Quiz: Pointers</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated: {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-6 text-lg">
			In a hidden academy of programmers, students are finally introduced to one of the most powerful (and mysterious)
			tools in C - pointers! <br>

			Unlike normal variables, pointers don't just store values... they store <b>where values live in memory.</b> <br>
			Mastering them means you can control data directly, efficiently, and like a true engineer. <br>

			Your mission is to complete each task and prove that you think like a memory wizard.
		</p>

		<!-- Problem 1 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 1: The Memory Seer</h2>
		<p class="text-gray-500 mb-4 text-lg">
			A young apprentice has just discovered that every variable lives somewhere in memory. Curios, they ask you: <br>
			"Can you show me not just the value... but where it lives?" <br>
			Ask the user for a number and store it in <span class="bg-pink-50 px-2 rounded-lg">int n</span>. <br>
			Create a pointer that stores its address. <br>

			Print: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>the value of <span class="bg-pink-50 px-2 rounded-lg">n</span></li>
				<li>the address of <span class="bg-pink-50 px-2 rounded-lg">n</span></li>
				<li>the value using the pointer</li>
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
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 2: The Invisible Touch</h2>
		<p class="text-gray-500 mb-4 text-lg">
			A wizard challenges you: <br>
			"Change the value... without touching the variable directly." <br>
			Ask the user for a number. <br>
			Use a pointer to add 10 to the value.
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
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 3: The Great Swap Spell</h2>
		<p class="text-gray-500 mb-4 text-lg">
			Two enchanted numbers have been mixed up, and only a proper spell can swap them back. <br>
			The catch? <br>
			"You must swap them using a function... without returning anything." <br>
			Ask the user for two numbers. <br>
			Use a function with pointers to swap their values.
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

		<!-- Problem 4 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 4: The Array Gatekeeper</h2>
		<p class="text-gray-500 mb-4 text-lg">
			You are guarding a vault of numbers. Each value must be stored and accessed carefully. <br>
			A senior mage tells you: <br>
			"Use pointers... not just arrays." <br>
			Ask the user for the number of elements. <br>
			Use a pointer to input values into an array and compute the total sum.
		</p>
		<CodeBlock :code="emptyProgram" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run:</p>
		<OutputBlock :output="problem4Output" />
		<div class="mt-3">
			<button
					@click="showSolution4 = !showSolution4"
					class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
				{{ showSolution4 ? 'Hide Solution' : 'Show Solution' }}
			</button>
		</div>

		<div v-if="showSolution4" class="mt-3">
			<CodeBlock :code="problem4Solution" language="c" />
		</div>

		<!-- Problem 5 -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2 mt-6">Problem 5: The Power of Reference</h2>
		<p class="text-gray-500 mb-4 text-lg">
			A master programmer gives you a final challenge: <br>
			"Create a function that doesn't return anything... yes still changes everything." <br>
			Aks the user for a number. <br>
			Create a function that squares the number using a pointer.
		</p>
		<CodeBlock :code="emptyProgram" language="c" />
		<p class="text-gray-500 mb-2 text-lg">Sample Run:</p>
		<OutputBlock :output="problem5Output" />
		<div class="mt-3">
			<button
					@click="showSolution5 = !showSolution5"
					class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
				{{ showSolution5 ? 'Hide Solution' : 'Show Solution' }}
			</button>
		</div>

		<div v-if="showSolution5" class="mt-3">
			<CodeBlock :code="problem5Solution" language="c" />
		</div>
	</TutorialMainLayout>
</template>