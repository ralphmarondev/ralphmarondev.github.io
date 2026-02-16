<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'
import UsefulLinks from '@/blog/components/UsefulLinks.vue'
import {ref} from 'vue'
import CodeBlock from '@/blog/components/CodeBlock.vue'

const lastUpdated = 'February 16, 2026'

const printingSimpleText = ref(`
#include <stdio.h>

int main() {
    // Display a simple message
    printf("Welcome to C programming!\\n");
    return 0;
}
`)

const printingVariables = ref(`
#include <stdio.h>

int main() {
    int age = 20;

    // Print an integer variable
    printf("The value of age is %d.\\n", age);

    return 0;
}
`)

const printingVariableWithText = ref(`
#include <stdio.h>

int main() {
    char name[100] = "Student";
    int age = 20;

    printf("%s is %d years old.\\n", name, age);

    return 0;
}
`)

const usingFputsForString = ref(`
#include <stdio.h>

int main() {
    fputs("This is printed using fputs()\\n", stdout);
    return 0;
}
`)

const readingIntegerUsingScanf = ref(`
#include <stdio.h>

int main() {
    int age;

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("You entered: %d\\n", age);

    return 0;
}
`)

const readingCharacterUsingScanf = ref(`
#include <stdio.h>

int main() {
    char initial;

    printf("Enter a character: ");
    scanf(" %c", &initial);

    printf("The character entered is: %c\\n", initial);

    return 0;
}
`)

const readSingleWordUsingScanf = ref(`
#include <stdio.h>

int main() {
    char word[50];

    printf("Enter a word: ");
    scanf("%s", word);

    printf("You entered: %s\\n", word);

    return 0;
}
`)

const readFullLineUsingFgets = ref(`
#include <stdio.h>

int main() {
    char line[100];

    printf("Enter a full line: ");
    fgets(line, sizeof(line), stdin);

    printf("You entered: %s", line);

    return 0;
}
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
	{title: 'Conditional Statements', route: '/blog/c-conditional-statements'},
	{title: 'Loops', route: '/blog/c-loops'}
]
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Input and Output in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			In programming, input and output (I/O) are essential concepts. Input allows a program to receive data from the
			user or another source, while output allows a program to display information to the user. In C, most I/O
			operations are handled using functions from the standard input/output library
			<span class="bg-pink-50 px-2 rounded-lg">&lt;stdio.h&gt;</span>.
			<br>
			Among these, the most common functions are:

			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">printf()</span> - for displaying output to the console.</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">scanf()</span> - for reading input from the user.</li>
			</ul>
			Understanding these functions is fundamental because almost every program interacts with the user in some way.
			This module will provide examples of basic I/O operations, covering text output, variable output, formatted
			output, and reading input for different data types.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			1. Printing Simple Text
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The simplest form of output is printing a message or text to the console. This is done using the
			<span class="bg-pink-50 px-2 rounded-lg">printf()</span> function.

			<CodeBlock :code="printingSimpleText" language="c" />

			Explanation:
			<ul class="list-disc list-inside space-y-1">
				<li>The text inside the quotes <span class="bg-pink-50 px-2 rounded-lg">" "</span> is called a string.</li>
				<li>The <span class="bg-pink-50 px-2 rounded-lg">\n</span> at the end is an escape sequence for a newline, which
				    moves the cursor to the next line.
				</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			2. Printing Variables
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Variables store data that can be displayed on the screen. To print the value of a variable, format specifiers are
			used as placeholders.
			<CodeBlock :code="printingVariables" language="c" />

			Explanation:
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">%d</span> is the format specifier for integer.</li>
				<li>The variable <span class="bg-pink-50 px-2 rounded-lg">age</span> replaces the placeholder
					<span class="bg-pink-50 px-2 rounded-lg">%d</span> in the output.
				</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			3. Printing Variables with Text
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Combining variables with descriptive text makes output more readable.
			<CodeBlock :code="printingVariableWithText" language="c" />

			Explanation:
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">%s</span> is the format specifier for strings.</li>
				<li>Format specifiers allow multiple variables of different types to be displayed in a single message.</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			4. Using <span class="bg-pink-50 px-2 rounded-lg">fputs()</span> for Strings
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">fputs()</span> function can print a string to the console without
			formatting.
			<CodeBlock :code="usingFputsForString" language="c" />

			Explanation:
			<ul class="list-disc list-inside space-y-1">
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">stdout</span> refers to the standard output (usually the console)
				</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">fputs()</span> is useful when formatting is not required.</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			5. Reading an Integer Using <span class="bg-pink-50 px-2 rounded-lg">scanf()</span>
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Input allows the program to accept data from the user. To read an integer:
			<CodeBlock :code="readingIntegerUsingScanf" language="c" />

			Explanation:
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">%d</span> indicates that an integer is expected.</li>
				<li>The <span class="bg-pink-50 px-2 rounded-lg">&</span> operator provides the memory address of the variable,
				    so <span class="bg-pink-50 px-2 rounded-lg">scanf()</span> knows where to store the input.
				</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			6. Reading a Character Using <span class="bg-pink-50 px-2 rounded-lg">scanf()</span>
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="readingCharacterUsingScanf" language="c" />

			Explanation:
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">%s</span> reads a string until the first space.</li>
				<li>It cannot read sentences or words with spaces.</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			8. Reading a Full Line Using <span class="bg-pink-50 px-2 rounded-lg">fgets()</span>
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			To read multiple words or full lines, <span class="bg-pink-50 px-2 rounded-lg">fgets()</span> is preferred.
			<CodeBlock :code="readFullLineUsingFgets" language="c" />

			Explanation:
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">fgets()</span> reads up to
					<span class="bg-pink-50 px-2 rounded-lg">n - 1</span> characters to prevent overflow.
				</li>
				<li>It includes spaces, making it suitable for full names, sentences, or phrases.</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Summary
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Output functions: <span class="bg-pink-50 px-2 rounded-lg">printf()</span>,
					<span class="bg-pink-50 px-2 rounded-lg">fputs()</span></li>
				<li>Input functions: <span class="bg-pink-50 px-2 rounded-lg">scanf()</span>,
					<span class="bg-pink-50 px-2 rounded-lg">fgets()</span></li>
				<li>Format specifiers: <span class="bg-pink-50 px-2 rounded-lg">%d</span> (integer),
					<span class="bg-pink-50 px-2 rounded-lg">%c</span> (character),
					<span class="bg-pink-50 px-2 rounded-lg">%s</span> (string)
				</li>
				<li>
					Tips:
					<ul class="list-disc list-inside space-y-1 ml-6">
						<li>Always handle spaces and newlines carefully.</li>
						<li>Use <span class="bg-pink-50 px-2 rounded-lg">fgets()</span> for reading multiple words to avoid input
						    issues.
						</li>
					</ul>
				</li>
			</ul>
		</p>

		<UsefulLinks :links="links" />
	</MainLayout>
</template>