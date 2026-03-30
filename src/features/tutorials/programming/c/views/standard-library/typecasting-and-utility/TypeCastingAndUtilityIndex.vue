<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 30, 2026'

const implicitTypecastingSample = ref(`
#include <stdio.h>

int main()
{
	int a = 5;
	double b = 2.0;

	double result = a / b; // int is automatically promoted to double
	printf("Result: %.2f\\n", result);
	return 0;
}
`)

const explicitTypecastingSample = ref(`
#include <stdio.h>

int main()
{
	double num = 9.78;
	int integerPart;

	integerPart = (int)num; // explicitly convert double to int
	printf("Double: %.2f, After casting to int: %d\\n", num, integerPart);
	return 0;
}
`)

const terminateProgram = ref(`
#include <stdio.h>
#include <stdlib.h>

int main()
{
	printf("Hello, before exit!\\n");
	exit(0);
	printf("This will not be printed.\\n"); // won't execute
	return 0;
}
`)

const systemProgram = ref(`
#include <stdio.h>
#include <stdlib.h>

int main()
{
	printf("Listing files in the directory:\\n");
	system("dir"); // On Windows, use "ls" on Linux/macOS
	return 0;
}
`)

const systemProgramOutput = ref(`
Listing files in the directory:
(file/folder list)
`)

const randomNumber = ref(`
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main()
{
	srand(time(0)); // seed for random numbers
	printf("Random number: %d\\n", rand() % 100); // 0 - 99
	return 0;
}
`)

const characterUtility = ref(`
#include <stdio.h>
#include <ctype.h>

int main()
{
	char ch = 'a';

	printf("Is '%c' a digit? %d\\n", ch, isdigit(ch));
	printf("Is '%c' a letter? %d\\n", ch, isalpha(ch));
	printf("Uppercase of '%c': %c\\n", ch, toupper(ch));
	printf("Lowercase of '%c': %c\\n", ch, tolower(ch));

	return 0;
}
`)

const characterUtilityOutput = ref(`
Is 'a' a digit? 0
Is 'a' a letter? 1
Uppercase of 'a': A
Lowercase of 'Z': z
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C Typecasting and Utility Functions</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-500 mb-2 text-lg">
			C provides tools for converting data types (typecasting) and utility functions to manage your program or process
			character. This tutorial explains how to use them effectively.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Typecasting in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Typecasting is converting a value from one data type to another. It is useful when you want precise control over
			operations between different data types. <br>

			<span class="text-gray-800">Implicit Typecasting</span> <br>
			C automatically converts a smaller type to a larger type (link int to float) during operations.
			<CodeBlock :code="implicitTypecastingSample" language="c" />
			Output:
			<OutputBlock output="Result: 2.50" />

			<span class="text-gray-800">Explicit Typecasting</span> <br>
			You can manually convert a value using parentheses.
			<CodeBlock :code="explicitTypecastingSample" language="c" />
			Output:
			<OutputBlock output="Double: 9.78, After casting to int: 9" />
			Tip: Typecasting can also be used for operations like dividing integers but wanting floating-point result
			(float)a/b;
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Utility Functions - &lt;stdlib.h&gt;
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			C provides many handy functions for program control, random numbers, and memory. <br>
			Here are some common ones: <br>

			<span class="text-gray-800">exit() - Terminate Program</span> <br>
			exit(status) terminates program immediately.
			<ul class="list-disc list-inside space-y-1">
				<li>0 usually means successful termination.</li>
				<li>Non-zero indicates an error.</li>
			</ul>
			<CodeBlock :code="terminateProgram" language="c" />
			Output:
			<OutputBlock output="Hello, before exit!" />

			<span class="text-gray-800">system() - Execute Shell Commands</span> <br>
			You can run system commands from C using system().
			<CodeBlock :code="systemProgram" language="c" />
			Output:
			<OutputBlock :output="systemProgramOutput" />
			Use system() carefully; it can be risky if user input is passed directly. <br>

			<span class="text-gray-800">rand() and srand() - Random Numbers</span> <br>
			Generate pseudo-random numbers.
			<CodeBlock :code="randomNumber" language="c" />
			Output:
			<OutputBlock output="Random number: 67" />
			Tip: srand(time(0)) ensures you get different random numbers each time program runs.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Character Utility Functions - &lt;ctype.h&gt;
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The &lt;ctype.h&gt; library provides functions for checking and transforming characters:
			<CodeBlock :code="characterUtility" language="c" />
			Output:
			<OutputBlock :output="characterUtilityOutput" />
			Tip: isalpha(), isdigit(), isspace(), isalnum() are all super useful when validating input.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Summary
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Typecasting: Convert values explicitly (int)num or rely on automatic conversions.</li>
				<li>Utility Fucntions: exit(), system(), rand(), srand() help control the program, generate random numbers, or
				    run system commands.
				</li>
				<li>Character Functions: &lt;ctype.h&gt; functions like isalpha(), isdigit(), toupper(), and tolower() help
				    process and validate character data.
				</li>
			</ul>
		</p>
	</TutorialMainLayout>
</template>