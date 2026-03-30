<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 30, 2026'

const strlenSample = ref(`
#include <stdio.h>
#include <string.h>

int main()
{
	char str[] = "Hello World";

	printf("Length: %d\\n", strlen(str));
	return 0;
`)

const strcpySample = ref(`
#include <stdio.h>
#include <string.h>

int main()
{
	char source[] = "Ralph";
	char destination[20];

	strcpy(destination, source);
	printf("Destination string: %s\\n", destination);
	return 0;
}
`)

const comparingStrings = ref(`
#include <stdio.h>
#include <string.h>

int main()
{
	char str1[] = "Apple";
	char str2[] = "Orange";

	int result = strcmp(str1, str2);

	if(result == 0)
		printf("Both strings are equal.\\n");
	else if(result < 0)
		printf("%s comes before %s\\n", str1, str2);
	else
		printf("%s comes after %s\\n", str1, str2);

	return 0;
}
`)

const strcatSample = ref(`
#include <stdio.h>
#include <string.h>

int main()
{
	char first[20] = "Hello";
	char second[20] = "World!";

	strcat(first, second);
	printf("Concatenated string: %s\\n", first);
	return 0;
}
`)

const passingStringsToFunctions = ref(`
#include <stdio.h>

void printString(char str[])
{
	printf("String: %s\\n", str);
}

int main()
{
	char myStr[] = "Hello Functions!";
	printString(myStr);
	return 0;
}
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C String Functions</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-500 mb-2 text-lg">
			Strings in C are arrays of characters ending with a null character '\0'. The C Standard Library provides many
			functions to make working with strings easier. In this tutorial, we will cover the most important functions like
			length, copy, compare, and concatenation, plus a few extras to manipulate strings efficiently.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			String Length - strlen()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The strlen() function returns the number of characters in a string excluding the null character.
			<CodeBlock :code="strlenSample" language="c" />
			Output:
			<OutputBlock output="Length: 11" />
			Note: strlen() counts only actual characters, not the '\0' terminator.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Copying Strings - strcpy()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The strcpy() function copies one string into another. Make sure the destination array is large enough to hold the
			copies string plus the null character.
			<CodeBlock :code="strcpySample" language="c" />
			Output:
			<OutputBlock output="Destination string: Ralph" />
			Note: strlen() counts only actual characters, not the '\0' terminator.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Comparing Strings - strcmp()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The strcmp() function compares two strings lexicographically.
			<ul class="list-disc list-inside space-y-1">
				<li>Returns 0 if both strings are equal.</li>
				<li>Returns a positive value if the first string is greater.</li>
				<li>Returns a negative value if the first string is smaller.</li>
			</ul>
			<CodeBlock :code="comparingStrings" language="c" />
			Output:
			<OutputBlock output="Apple comes before Orange" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Concatenating Strings - strcat()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The strcat() function appends one string to the end of another. <br>
			Make sure the destination array has enough space to hold the final combined string.
			<CodeBlock :code="strcatSample" language="c" />
			Output:
			<OutputBlock output="Concatenated string: Hello, World!" />
		</p>

		<!--		Other useful functions-->
		<!--		| Function | Description | Example |-->
		<!--		| -&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; | &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; | &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45; |-->
		<!--		| `strncpy()` | Copies a limited number of characters | `strncpy(dest, src, n);` |-->
		<!--		| `strncat()` | Concatenates a limited number of characters | `strncat(dest, src, n);` |-->
		<!--		| `strchr()` | Finds first occurrence of a character | `strchr(str, 'a');` |-->
		<!--		| `strrchr()` | Finds last occurrence of a character | `strrchr(str, 'a');` |-->
		<!--		| `strstr()` | Finds first occurrence of a substring | `strstr(str, "World");` |-->
		<!--		| `toupper()` | Converts character to uppercase (from `-->
		<!--		&lt;ctype.h&gt;`) | `toupper('a');` |-->
		<!--		| `tolower()` | Converts character to lowercase (from `-->
		<!--		&lt;ctype.h&gt;`) | `tolower('A');` |-->


		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Passing Strings to Functions
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			You can pass strings to functions as you would pass arrays:
			<CodeBlock :code="passingStringsToFunctions" language="c" />
			Output:
			<OutputBlock output="String: Hello Functions!" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Summary
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Strings in C are arrays of characters terminated with '\0'.</li>
				<li>Use &lt;string.h&gt; for string functions and &lt;ctype.h&gt; for character functions.</li>
				<li>Always ensure the destination arrays are large enough.</li>
				<li>Standard library functions make string manipulation easier: strlen(), strcpy(), strcmp(), strcat()</li>
			</ul>
		</p>
	</TutorialMainLayout>
</template>