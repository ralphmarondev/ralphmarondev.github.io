<script setup lang="ts">
import {ref} from 'vue'
import MainLayout from '@/blog/layouts/MainLayout.vue'
import CodeBlock from '@/blog/components/CodeBlock.vue'
import OutputBlock from '@/blog/components/OutputBlock.vue'
import UsefulLinks from '@/blog/components/UsefulLinks.vue'

const lastUpdated = 'February 5, 2026'

const identifierExample1 = ref(`
// Defining a variable
int val = 10;

// Defining a function
void func() { }
`)

const variableIdentifierProgram = ref(`
#include <stdio.h>

int main()
{
	// Creating a variable with identifier 'var'
	int var;

	// Assigning a value
	var = 10;

	// Using the variable in a printf statement
	printf("%d", var);

	return 0;
}
`)
const functionIdentifierProgram = ref(`
#include <stdio.h>

// Function named 'sum'
int sum(int a, int b)
{
	return a + b;
}

int main()
{
	// Calling the function using its identifier
	printf("%d", sum(10, 20));
	return 0;
}
`)
const program1 = ref(`
#include <stdio.h>

int main()
{
	int const = 90;
	return 0;
}
`)
const outputProgram1 = ref(`
./main.c: 5:14: error: expected identifier or '(' before '=' token
int const = 90;`
)

const links = [
	{title: 'Introduction to C', route: '/blog/c-introduction'},
	{title: 'Compilation Process', route: '/blog/c-compilation-process'},
	{title: 'Keywords', route: '/blog/c-keywords'},
	{title: 'Variables', route: '/blog/c-variables'},
	{title: 'Data Types', route: '/blog/c-data-types'},
	{title: 'Input and Output', route: '/blog/c-input-output'},
	{title: 'Operators', route: '/blog/c-operators'},
	{title: 'Conditional Statements', route: '/blog/c-conditional-statements'},
	{title: 'Loops', route: '/blog/c-loops'}
]
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Identifiers in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			In C programming, an identifier is a name that you assign to various program elements, such as variables,
			functions, arrays, structures, or other user-defined items. Essentially, an identifier allows you to refer to a
			program element later in the code in a clear and meaningful way.
			<br>
			For Example:
			<CodeBlock :code="identifierExample1" language="c" />
			In the above snippet, <span class="bg-pink-50 px-2 rounded-lg">val</span> and
			<span class="bg-pink-50 px-2 rounded-lg">func</span> are identifiers - unique names chosen by the programmer to
			refer to a variable
			and a function, respectively.
		</p>

		<!--!!! RULES FOR NAMING IDENTIFIERS-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Rules for Naming Identifiers
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			When creating identifiers in C, there are specific rules you must follow: <br>
			<ol class="list-decimal list-inside space-y-1 text-gray-500 mb-2">
				<li>
					<span class="text-gray-600">Allowed characters: </span><br>
					<ul class="list-disc list-inside space-y-1 text-gray-500">
						<li>Uppercase letters: A-Z</li>
						<li>Lowercase letters: a-z</li>
						<li>Digits: 0-9</li>
						<li>Underscore: _</li>
					</ul>
				</li>
				<li>
					<span class="text-gray-600">Starting character:</span> The first character of an identifier must be a letter
					                                                       or an underscore. It cannot be a
					                                                       digit.
				</li>
				<li>
					<span class="text-gray-600">Case sensitivity:</span>
					Identifiers are case-sensitive, meaning Value and value
					would be treated as two different
					identifiers.
				</li>
				<li>
					<span class="text-gray-600">No keywords:</span> Identifiers cannot be C keywords like int, return, if, while,
					                                                etc.
				</li>
			</ol>
			Following these rules ensures that your identifiers are valid and won't cause compilation errors.
		</p>

		<!--!!! -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Variable Identifier
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="variableIdentifierProgram" language="c" />
			Output:
			<OutputBlock output="10" />
			Here, var is the identifier for the integer variable, which we can use throughout the program to store and access
			the value 10.
			<br>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Function Identifier
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="functionIdentifierProgram" language="c" />
			Output:
			<OutputBlock output="30" />
			In this example, sum is an identifier for a user-defined function. Using meaningful names like this helps make the
			program readable and understandable.
		</p>

		<!--!!! NAMING CONVENTIONS-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Naming Conventions
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Although C doesn’t enforce strict naming conventions, following widely accepted guidelines can improve readability
			and make your code easier to maintain. Common conventions include:
			<br>
			<span class="text-gray-600">For Variables:</span><br>
			<ul class="list-disc list-inside space-y-1 text-gray-500">
				<li>Use camelCase: frequencyCount, personName, isCute</li>
				<li>Constants are often written in UPPER_SNAKE_CASE: MAX_SIZE, PI, SUPER_CUTE</li>
				<li>Begin variable names with a lowercase letter.</li>
				<li>Use descriptive names that indicate the variable's purpose.</li>
			</ul>
			<span class="text-gray-600">For Functions:</span><br>
			<ul class="list-disc list-inside space-y-1 text-gray-500">
				<li>Use camelcase: getName(), countFrequency(), cutenessLevel()</li>
				<li>Function names should typically be verbs or verb phrases describing an action.</li>
			</ul>
			<span class="text-gray-600">For Structures:</span><br>
			<ul class="list-disc list-inside space-y-1 text-gray-500">
				<li>Use PascalCase: Car, Person</li>
				<li>Structure names should usually be nouns or noun phrases.</li>
			</ul>
		</p>

		<!--!!! KEYWORD VS IDENTIFIERS-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Keywords vs Identifiers
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			It is important to understand the difference between keywords and identifiers:
			<table>
				<tr>
					<th>Feature</th>
					<th>Keyword</th>
					<th>Identifier</th>
				</tr>
				<tr>
					<td>Definition</td>
					<td>Reserved word in C with a predefined meaning.</td>
					<td>User-defined name for variables, functions, etc.</td>
				</tr>
				<tr>
					<td>Usage</td>
					<td>Controls program structure and flow (int, return, if).</td>
					<td>Refers to programmer-defined elements (age, sum, totalAmount, cutenessLevel).</td>
				</tr>
				<tr>
					<td>Modifiability</td>
					<td>Cannot be changed or reused.</td>
					<td>Can be freely created and used.</td>
				</tr>
				<tr>
					<td>Case sensitivity</td>
					<td>Keywords are case-sensitive (int != Int)</td>
					<td>Identifiers are also case-sensitive (age != Age)</td>
				</tr>
			</table>
		</p>

		<!--!!! -->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			What Happens if You Use a Keyword as an Identifier?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Using a C keyword as an identifier will result in a compilation error. For example: <br>
			<CodeBlock :code="program1" language="c" />
			Output: <br>
			<OutputBlock :output="outputProgram1" />
			This demonstrate why it's important to avoid keywords when naming your identifiers.
		</p>

		<UsefulLinks :links="links" />
	</MainLayout>
</template>

<style scoped>
table, th, td {
	border: 1px solid black;
	border-collapse: collapse;
	padding: 10px;
	text-align: center;
}
</style>