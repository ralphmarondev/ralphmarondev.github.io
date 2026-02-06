<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'
import CodeBlock from '@/blog/components/CodeBlock.vue'
import {ref} from 'vue'

const lastUpdated = 'February 6, 2026'

const declaringVariableExample = ref(`
#include <stdio.h>

int main() {
	int age = 20; // integer variable
	float height = 5.7; // floating-point variable
	char grade = 'A'; // character variable

	printf("Age %d\\n", age);
	printf("Height: %.1f\\n", height);
	printf("Grade: %c\\n", grade);

	return 0;
}
`)
const declaringMultipleVariableExample = ref(`
	int a, b, c;
	float x, y;
	int cutenessLevel, stressLevel;
`)
const accessingVariableExample = ref(`
#include <stdio.h>
int main() {
	int num = 3;
	printf("%d", num);
	return 0;
}
`)
const changingStoredValueExample = ref(`
#include <stdio.h>

int main() {
	int number  = 10;
	printf("Initial value: %d\\n", number);

	number = 25;
	printf("Updated value: %d\\n", number);

	number = number + 5;
	printf("After adding 5: %d\\n", number);

	return 0;
}
`)

const variablesInExpressionsExample = ref(`
#include <stdio.h>

int main() {
	int sum1 = 20 + 40;

	int a = 20, b = 40;
	int sum2 = a + b;

	printf("%d\\n%d", sum1, sum2);
	return 0;
}
`)
const memoryAllocationExample = ref(`
#include <stdio.h>

int main() {
	int num = 22;
	printf("%d bytes", sizeof(num));
	return 0;
}
`)
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Variables in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			A variable in C is a <i>named memory location</i> used to store data that can change while the program is running.
			Instead of remembering complex memory addresses, we use meaningful names to access and manipulate data easily.
			<br>
			Think of a variable as a container: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>The <i>name</i> is the label on the container.</li>
				<li>The <i>data type</i> defines what kind of data it can store.</li>
				<li>The <i>value</i> is the actual data inside it.</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Why Do We Need Variables?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Without variables, programming would be extremely difficult because: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>We would have to remember exact memory addresses.</li>
				<li>We could not reuse values easily.</li>
				<li>Programs would be unreadable and error-prone.</li>
			</ul>
			Variables allow us to:
			<ul class="list-disc list-inside space-y-1">
				<li>Store data</li>
				<li>Reuse data</li>
				<li>Modify data during program execution</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Declaring Variables in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			To create a variable in C, we must specify:
			<ul class="list-decimal list-inside space-y-1">
				<li>Data type</li>
				<li>Variable name</li>
			</ul>
			Syntax: <br> <br>
			<span class="bg-pink-50 py-2 px-4 rounded-lg">
				data_type variable_name;
			</span> <br> <br>
			Example: <br>
			<span>
				int age; <br>
				float height; <br>
				char grade; <br>
			</span> <br>

			Here: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">int</span>,
					<span class="bg-pink-50 px-2 rounded-lg">float</span>, and
					<span class="bg-pink-50 px-2 rounded-lg">char</span> are data types.
				</li>
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">age</span>,
					<span class="bg-pink-50 px-2 rounded-lg">height</span>, and
					<span class="bg-pink-50 px-2 rounded-lg">grade</span> are variable names
				</li>
			</ul>
			Important: <br>
			Every variable must be declared before it is used.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Declaring and Initializing Variables
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Initialization means assigning an initial value to a variable.
			<span class="text-gray-700 text-xl">Example:</span> <br>
			<CodeBlock :code="declaringVariableExample" language="c" />
			<span class="text-gray-700 text-xl">Output</span> <br>
			Age: 20 <br>
			Height: 5.7 <br>
			Grade: A <br>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Declaring Multiple Variables
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			We can declare multiple variables of the same data type in a single statement using commas.
			<CodeBlock :code="declaringMultipleVariableExample" language="c" />
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Rules for Naming Variables in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			A variable name must follow these rules:
			<ol class="list-decimal list-inside space-y-1">
				<li>It can contain letters, digits, and underscores.</li>
				<li>It must start with a letter or underscore.</li>
				<li>It cannot start with a digit.</li>
				<li>No spaces are allowed.</li>
				<li>It must not be a C keyword.</li>
				<li>It must be unique within its scope.</li>
			</ol>
			<span class="text-gray-700 text-xl">Valid Variable Names</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">int total;</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">float average_score;</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">char _grade;</span> <br>

			<span class="text-gray-700 text-xl">Invalid Variable Names</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">int 1number; // starts with digit</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">float total marks; // space not allowed</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">char return; // keyword</span> <br>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Variable Initialization
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			When a variable is declared without initialization, it contains a garbage value. <br>
			That is why initialization is important. <br>

			<span class="text-gray-700 text-xl">Initialization at Declaration</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">int age = 20;</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">float height = 5.7;</span> <br>

			<span class="text-gray-700 text-xl">Initialization After Declaration</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">char grade;</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">grade = 'A';</span> <br>
			Both approaches are valid. <br>

			<span class="text-pink-700">Note:</span>
			The value assigned must match the declared data type.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Accessing Variables
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			To access the value stored in a variable, we simply use its name.
			<CodeBlock :code="accessingVariableExample" language="c" />
			Output: <span class="bg-pink-50 px-4 rounded-lg">3</span> <br>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Changing Stored Values
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The value of a variable can be updated anytime using the assignment operator (=).
			<CodeBlock :code="changingStoredValueExample" language="c" />
			Output: <br>
			<span class="bg-pink-50 px-4 rounded-lg">Initial value: 10</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">Update value: 25</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">After adding 5: 30</span> <br>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Using Variables in Expressions
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Variables can be used anywhere a value is expected.<br>
			<CodeBlock :code="variablesInExpressionsExample" language="c" />
			Output: <br>
			<span class="bg-pink-50 px-4 rounded-lg">60</span> <br>
			<span class="bg-pink-50 px-4 rounded-lg">60</span> <br>
			This shows that variables act as substitutes for values.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Memory Allocation of variables
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			When a variable is declared, the compiler:
			<ul class="list-disc list-inside space-y-1">
				<li>Knows the variable name.</li>
				<li>Knows the data type.</li>
			</ul>
			Memory is allocated when the variable is defined (usually at declaration in C). <br>
			The amount of memory depends on the data type. <br>
			<CodeBlock :code="memoryAllocationExample" language="c" />
			Output: <br>
			<span class="bg-pink-50 px-4 rounded-lg">4 bytes</span><br>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Where Are Variables Stored in Memory?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Variables are stored in different memory locations depending on their storage class, such as: <br>
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">auto</span></li>
				<li><span class="bg-pink-50 px-2 rounded-lg">static</span></li>
				<li><span class="bg-pink-50 px-2 rounded-lg">extern</span></li>
				<li><span class="bg-pink-50 px-2 rounded-lg">register</span></li>
			</ul>
			You'll usually start with automatic variables, and later topics will explain storage classes in detail.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Summary
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Variables are named memory locations.</li>
				<li>They store data that can change during execution.</li>
				<li>Every variable needs a data type.</li>
				<li>Variables must be declared before use.</li>
				<li>Initialization prevents garbage values.</li>
				<li>Variables make programs readable and reusable.</li>
			</ul>
		</p>
	</MainLayout>
</template>