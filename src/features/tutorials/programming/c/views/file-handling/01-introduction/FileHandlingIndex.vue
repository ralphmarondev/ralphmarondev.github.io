<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 30, 2026'

const filePointer = ref(`
#include <stdio.h>

int main()
{
	FILE *fp; // declare a file pointer
	fp = NULL; // initialize it

	return 0;
}
`)

const openingFile = ref(`
#include <stdio.h>

int main()
{
	FILE *fp;

	// open file for writing
	fp = fopen("myfile.txt", "w");

	if (fp == NULL)
	{
		printf("Error opening file!\\n");
		return 1;
	}

	printf("Filed opened successfully!\\n");
	fclose(fp);
	return 0;
}
`)

const writingToAFile = ref(`
#include <stdio.h>

int main()
{
	FILE *fp = fopen("myfile.txt", "w");
	if (fp == NULL) return 1;

	fprintf(fp, "Hello, C File Handling!\\n);
	fprintf(fp, "Writing numbers: %d, %f\\n", 100, 3.14);

	fclose(fp);
	printf("Data written to file.\\n");
	return 0;
}
`)

const writingToAFileOutput = ref(`
Hello, C File Handling!
Writing numbers: 100, 3.140000
`)

const usingFputs = ref(`
fputs("Welcome to C Files!\\n", fp);
`)

const readingFromAFile = ref(`
#include <stdio.h>

int main()
{
	FILE *fp = fopen("myfile.txt", "r");
	char str[50];
	int num;
	float fnum;

	if (fp == NULL) return 1;

	fscanf(fp, "%[^\\n]\\n%d, %f", str, &num, &fnum);
	printf("Read from file: \\n%s\\n%d\\n%f\\n", str, num, fnum);

	fclose(fp);
	return 0;
}
`)

const usingFgets = ref(`
fgets(str, 50, fp);
`)

const usingFgetc = ref(`
char ch;

while ((ch == fgetc(fp)) != EOF)
{
	putchar(ch);
}
`)

const closingAFile = ref(`
fclose(fp);
`)

const checkingForEndOfFile = ref(`
while(!feof(fp))
{
	char ch = fgetc(fp);
	putchar(ch);
}
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C File Handling Tutorial</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-500 mb-2 text-lg">
			C provides a set of <b>standard library functions</b> to read from and write to files using the &lt;stdio.h&gt;
			library. This tutorial introduces the fundamentals of file handling: opening, reading, writing, and closing files.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			File Pointers and FILE
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			In C, files are accessed through <b>file pointers</b> of type FILE*. Think of a file pointer as a handle to a file
			that allows you to perform operations on it.

			<CodeBlock :code="filePointer" language="c" />
			Always initialize your file pointer to NULL before opening a file to avoid undefined behavior.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Opening a File - fopen()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Use fopen() to open a file. It requires two parameters: filename and mode. <br>
			<span class="text-gray-800">File Modes</span> <br>
			<ul class="list-disc list-inside space-y-1">
				<li>r = Read: file must exists</li>
				<li>w = Write: create a new file or overwrite existing</li>
				<li>a = Append: add to the end of the file</li>
				<li>r+ = Read/Write: file must exist</li>
				<li>w+ = Read/Write: create new or overwrite</li>
				<li>a+ = Read/Append: file created if not exist</li>
			</ul>

			<CodeBlock :code="openingFile" language="c" />
			Output:
			<OutputBlock output="File opened successfully!" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Writing to a File - fprintf() and fputs()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<span class="text-gray-800">Using fprintf()</span> <br>
			Works like printf(), but writes to a file instead of console.
			<CodeBlock :code="writingToAFile" language="c" />
			Output:
			<OutputBlock :output="writingToAFileOutput" />

			<span class="text-gray-800">Using fputs()</span> <br>
			Writes a string only.
			<CodeBlock :code="usingFputs" language="c" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Reading from a File - fscanf() and fgets(), fgetc()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<span class="text-gray-800">Using fscanf()</span> <br>
			Similar to scanf() but reads from a file.
			<CodeBlock :code="readingFromAFile" language="c" />

			<span class="text-gray-800">Using fgets()</span> <br>
			Reads one line at a time including spaces.
			<CodeBlock :code="usingFgets" language="c" />

			<span class="text-gray-800">Using fgetc()</span> <br>
			Reads one character at a time. Useful for character processing.
			<CodeBlock :code="usingFgetc" language="c" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Closing a File - fclose()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Always close a file when done to release resources.
			<CodeBlock :code="closingAFile" language="c" />
			Forgetting to close files can lead to memory leaks or data not being written properly.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Checking for End of File - feof()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			feof() checks if the end of the file has been reached.
			<CodeBlock :code="checkingForEndOfFile" language="c" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Summary
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Use FILE* to handle files in C.</li>
				<li>Open files with fopen() and close with fclose().</li>
				<li>Read/write using fscanf(), fprintf(), fgets(), fputs(), fgetc().</li>
				<li>Check end-of-file with eof().</li>
			</ul>
		</p>
	</TutorialMainLayout>
</template>