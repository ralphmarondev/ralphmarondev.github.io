<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 30, 2026'

const introduction = ref(`
'\\0' // null character (marks the end)
`)

const creatingAString = ref(`
#include <stdio.h>

int main()
{
	char str[] = "Ralph";

	printf("The string is: %s\\n", str);
	return 0;
}
`)

const whatIsHappening = ref(`
char str[] = "Ralph";
`)

const whatIsHappening2 = ref(`
{ 'R', 'a', 'l', 'p', 'h', '\\0' )
`)

const accessingCharacters = ref(`
#include <stdio.h>

int main()
{
	char str[] = "Ralph";

	printf("%c", str[0]); // First character
	return 0;
}
`)

const updatingString = ref(`
#include <stdio.h>

int main()
{
	char str[] = "Ralph";
	str[0] = 'M';

	printf("%s", str);
	return 0;
}
`)

const stringLength = ref(`
#include <stdio.h>
#include <string.h>

int main()
{
	char str[] = "Ralph";

	printf("%d", strlen(str));
	return 0;
}
`)

const takingStringInput = ref(`
#include <stdio.h>

int main()
{
	char str[20];

	scanf("%s", str);
	printf("%s", str);

	return 0;
}
`)

const scanfWithScanSet = ref(`
scanf("%[^\\n]s", str);
`)

const usingFgets = ref(`
#include <stdio.h>

int main()
{
	char str[] = "Ralph";

	fgets(str, 20, stdin);
	printf("%s", str);
	return 0;
}
`)

const passingStringToFunctions = ref(`
#include <stdio.h>

void printStr(char str[])
{
	printf("%s", str);
}

int main()
{
	char str[] = "Ralph";
	printStr(str);
	return 0;
}
`)

const stringLiterals = ref(`
#include <stdio.h>

int main()
{
	const char str[] = "Ralph Maron";

	printf("%s\\n", str);
	return 0;
}
}
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Strings in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-500 mb-2 text-lg">
			A <b>string in C</b> is simply a collection of characters stored in an array and ending with a special character:
			<CodeBlock :code="introduction" language="c" />
			C does not have a built-in string type. <br>
			Instead, we use char arrays.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Creating a String
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="creatingAString" language="c" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			What's happening?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="whatIsHappening" language="c" />
			This actually becomes:
			<CodeBlock :code="whatIsHappening2" language="c" />
			This is added automatically. <br>
			It tells C where the string ends.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Accessing Characters
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Since a string is an array, you can access characters using an index:
			<CodeBlock :code="accessingCharacters" language="c" />
			Output:
			<OutputBlock output="R" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Updating a String
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			You can modify characters using their index:
			<CodeBlock :code="updatingString" language="c" />
			Output:
			<OutputBlock output="Malph" />
			Just make sure:
			<ul class="list-disc list-inside space-y-1">
				<li>You don't go out of bounds.</li>
				<li>The array is large enough if replacing content.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			String Length
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			To find the length of string, use strlen():
			<CodeBlock :code="stringLength" language="c" />
			Output:
			<OutputBlock output="5" />
			The null character '\0' is not counted.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Taking String Input
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<span class="text-gray-600">1. Using scanf() (basic)</span>
			<CodeBlock :code="takingStringInput" language="c" />
			Stops reading at space. <br>
			Input:
			<OutputBlock output="Hello World Goodbye" />
			Output:
			<OutputBlock output="Hello" />

			<span class="text-gray-600">2. Using scanf() with scanset</span>
			<CodeBlock :code="scanfWithScanSet" language="c" />
			<ul class="list-disc list-inside space-y-1">
				<li>Reads until newline</li>
				<li>Allows spaces</li>
			</ul>

			<span class="text-gray-600">3. Using fgets() (recommended)</span>
			<CodeBlock :code="usingFgets" language="c" />
			<ul class="list-disc list-inside space-y-1">
				<li>Reads full line (including spaces)</li>
				<li>Safer for input</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Passing Strings to Functions
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="passingStringToFunctions" language="c" />
			Strings can be passed just like arrays.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			String Literals
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			A string literal is just text inside quotes:
			<CodeBlock :code="stringLiterals" language="c" />
			<span class="text-gray-600">Key Notes</span>
			<ul class="list-disc list-inside space-y-1">
				<li>Automatically ends with '\0'.</li>
				<li>Should not be modified.</li>
				<li>Best practice: use const.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Key Takeways
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Strings in C are:
			<ul class="list-disc list-inside space-y-1">
				<li>Arrays of char</li>
				<li>Always end with '\0'</li>
			</ul>
			Common operations:
			<ul class="list-disc list-inside space-y-1">
				<li>Access = str[index]</li>
				<li>Length = strlen()</li>
				<li>Input = fgets() (best choice)</li>
			</ul>
		</p>
	</TutorialMainLayout>
</template>