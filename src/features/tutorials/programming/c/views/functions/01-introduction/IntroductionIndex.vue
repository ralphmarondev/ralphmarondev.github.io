<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 30, 2026'

const simpleFunction = ref(`
#include <stdio.h>

// Function definition
int square (int x) {
	return x * x;
}

int main() {
	// Function call
	int result = square(5);

	printf("Square of 5 is: %d!\\n", result);
	return 0;
}
`)

const functionSyntax = ref(`
return_type function_name(parameters) {
	// function body
	return value;
}
`)

const functionDeclaration = ref(`
int add(int a, int b);
`)

const functionDefinition = ref(`
int add(int a, int b) {
	return a + b;
}
`)

const functionCallSample1 = ref(`
int result = add(5, 3);
`)

const functionProgram1 = ref(`
#include <stdio.h>

int add(int a, int b)
{
	return a + b;
}

int main()
{
	int result = add(5, 3);

	printf("The sum is: %d\\n", result);
	return 0;
}
`)

const libraryFunction = ref(`
#include <stdio.h>
#include <math.h>
`)

const userDefinedFunction1 = ref(`
void greet()
{
	printf("Hello!\\n");
}
`)

const userDefinedFunction2 = ref(`
void greet(char name[])
{
	printf("Hello %s!\\n", name);
}
`)

const userDefinedFunction3 = ref(`
void getCutenessLevel()
{
	return 100;
}
`)

const userDefinedFunction4 = ref(`
void add(int a, int b)
{
	return a + b;
}
`)


</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Functions in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-2 text-lg">
			A function is a named block of code that performs a specific task. <br>
			It can:
			<ul class="list-disc list-inside space-y-1">
				<li>Take input called parameters.</li>
				<li>Process same logic.</li>
				<li>Return a result (optional).</li>
			</ul>
			Instead of writing the same code multiple times, you can reuse a function whenever needed.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			What use functions?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Functions help you:
			<ul class="list-disc list-inside space-y-1">
				<li>Avoid repeating code.</li>
				<li>Keep programs clean and organized.</li>
				<li>Make logic easier to understand.</li>
				<li>Make logic easier to understand.</li>
				<li>Break complex problems into smaller parts.</li>
			</ul>
			Think of a function like a tool, you build it once, then use it anytime.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			How functions work?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="simpleFunction" language="c" />
			Output:
			<OutputBlock output="Square of 5 is: 25" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			How functions work?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ol class="list-decimal list-inside space-y-1">
				<li>You define the function.</li>
				<li>You call the function.</li>
				<li>The program jumps to that function.</li>
				<li>It executes the code.</li>
				<li>It returns a value (if needed).</li>
				<li>Program continues where it left off.</li>
			</ol>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Function Syntax
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="functionSyntax" language="c" />
			Breakdown:
			<ul class="list-disc list-inside space-y-1">
				<li>Return type: type of value returned (int, float, void).</li>
				<li>Function name: identifier of the function.</li>
				<li>Parameters: inputs to the function.</li>
				<li>Function body: code insdie {}.</li>
				<li>Return statement: sends value back.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Function Declaration (Prototype)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Tells the compiler that a function exists:
			<CodeBlock :code="functionDeclaration" language="c" />
			<ul class="list-disc list-inside space-y-1">
				<li>No body.</li>
				<li>Usually placed before main().</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Function Definition
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Contains the actual logic.
			<CodeBlock :code="functionDefinition" language="c" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Why Do We Need Declaration?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			if the function is written below main(), the compiler needs to know about it first. <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Declaration = This function exists.</li>
				<li>Definition = This is what it does.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Calling a Function
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			To use a function, just write its name followed by parentheses.
			<CodeBlock :code="functionCallSample1" language="c" />
			Example:
			<CodeBlock :code="functionProgram1" language="c" />
			Output:
			<OutputBlock output="The sum is: 8" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Types of Functions in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ol class="list-decimal list-inside space-y-1">
				<li>Library Functions</li>
				<li>User-defined Functions</li>
			</ol>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Library Functions
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Built-in functions provided by C. <br>
			Examples:
			<ol class="list-decimal list-inside space-y-1">
				<ul class="list-disc list-inside space-y-1">
					<li>printf()</li>
					<li>scanf()</li>
					<li>sqrt()</li>
				</ul>
			</ol>
			You just included the needed header file:
			<CodeBlock :code="libraryFunction" language="c" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			User-Defined Functions
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Functions that you create.<br>
			They come in 4 types: <br>

			<span class="text-gray-900">1. No Arguments, No Return Value</span>
			<CodeBlock :code="userDefinedFunction1" language="c" />

			<span class="text-gray-900">2. With Arguments, No Return Value</span>
			<CodeBlock :code="userDefinedFunction2" language="c" />

			<span class="text-gray-900">3. No Arguments, With Return Value</span>
			<CodeBlock :code="userDefinedFunction3" language="c" />

			<span class="text-gray-900">2. With Arguments, With Return Value</span>
			<CodeBlock :code="userDefinedFunction4" language="c" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Behind the Scenes: Memory
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			When a function is called:
			<ul class="list-disc list-inside space-y-1">
				<li>A new memory space is created (called a stack frame).</li>
				<li>Variables inside the function are stored there.</li>
				<li>After execution, the memory is automatically removed.</li>
			</ul>
			This is why variables inside functions are <b>temporary</b> and <b>independent</b>.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Disadvantages of Functions
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Slight performance overhead due to function calls.</li>
				<li>Too many small functions can be confusing.</li>
				<li>Harder to trace if poorly organized.</li>
				<li>Variables are local (not shared easily).</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Key Takeaways
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Functions make code <b>reusable and organized.</b></li>
				<li>Most real programmers rely heavily on functions.</li>
			</ul>
		</p>
	</TutorialMainLayout>
</template>