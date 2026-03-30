<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'

const lastUpdated = 'March 30, 2026'

const example1 = ref(`
#include <stdio.h>

int main()
{
	int x = 10;
	int *ptr = &x;

	printf("Value of x: %d\\n", x);
	printf("Address of x: %p\\n", &x);
	printf("Pointer value (address): %p\\n", ptr);
	return 0;
`)

const pointerDeclaration = ref(`
int *ptr;
`)

const addressOfOperator = ref(`
int x = 5;
int *ptr = &x;
`)

const deferencingOperator = ref(`
#include <stdio.h>

int main()
{
	int x = 5;
	int *ptr = &x;

	printf("%d\\n", *ptr);
	return 0;
}
`)

const modifyingValuesUsingPointers = ref(`
#include <stdio.h>

int main()
{
	int x = 10;
	int *ptr = &x;

	*ptr = 20;
	printf("x = %d\\n", x);
	return 0;
}
`)

const pointersAndFunctions = ref(`
#include <stdio.h>

void changeValue(int *n)
{
	*n = 50;
}

int main()
{
	int x = 10;

	changeValue(&x);
	printf("x = %d\\n", x);
	return 0;
}
`)

const pointersAndArrays = ref(`
#include <stdio.h>

int main()
{
	int arr[3] = {1, 2, 3};
	int *ptr = arr;

	printf("%d\\n", *ptr);			 // 1
	printf("%d\\n", *(ptr + 1)); // 2
	printf("%d\\n", *(ptr + 2)); // 3

	return 0;
}
`)

const uninitializedPointers = ref(`
int *ptr;
*ptr = 10; // dangerous (random memory)
`)

const forgettingAddressOperator = ref(`
int x = 10;
int *ptr = x; // wrong
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Pointers in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-500 mb-2 text-lg">
			Pointers are one of the most powerful features in C. They allow you to work directly with memory by storing the
			address of variables instead of just their values.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			What is a Pointer?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			A pointer is a variable that stores the memory address of another variable.
			<CodeBlock :code="example1" language="c" />
			Think of it like:
			<ul class="list-disc list-inside space-y-1">
				<li>x = the actual value (10)</li>
				<li>&x = the address of x</li>
				<li>ptr = stores that address</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Pointer Declaration
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			To declare a pointer, use *.
			<CodeBlock :code="pointerDeclaration" language="c" />
			This means:
			<ul class="list-disc list-inside space-y-1">
				<li>ptr is a pointer to an integer.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Address of Operator (&)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The & operator gives the address of a variable.
			<CodeBlock :code="addressOfOperator" language="c" />
			<ul class="list-disc list-inside space-y-1">
				<li>&x = "Where is x stored in memory?"</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Dereferencing Operator (*)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The * operator is used to access the value stored at an address.
			<CodeBlock :code="deferencingOperator" language="c" />
			<ul class="list-disc list-inside space-y-1">
				<li>*ptr = "Go to that address and get the value"</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Modifying Values Using Pointers
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Pointers can change the value of a variable directly.
			<CodeBlock :code="modifyingValuesUsingPointers" language="c" />
			This is very useful in functions later.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Pointers and Functions
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Pointers allow functions to modify original variables.
			<CodeBlock :code="pointersAndFunctions" language="c" />
			This is called pass by reference.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Pointers and Arrays
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Arrays and pointers are closely related.
			<CodeBlock :code="pointersAndArrays" language="c" />
			This array name <i>arr</i> acts like a pointer to the first element.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Why Pointers Matter
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Pointers are used for:
			<ul class="list-disc list-inside space-y-1">
				<li>Modifying variables inside functions.</li>
				<li>Working with arrays efficiently.</li>
				<li>Dynamic memory allocation (malloc).</li>
				<li>Handling large data efficiently.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Common Mistakes
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<span class="text-gray-800">Uninitialized pointers</span>
			<CodeBlock :code="uninitializedPointers" language="c" />

			<span class="text-gray-800">Forgetting &</span>
			<CodeBlock :code="forgettingAddressOperator" language="c" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Summary
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Pointer = variable that stores an address</li>
				<li>& = gets address</li>
				<li>* = gets value at address</li>
				<li>Can modify original variables.</li>
				<li>Useful for arrays and functions.</li>
			</ul>
		</p>
	</TutorialMainLayout>
</template>