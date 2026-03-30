<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'

const lastUpdated = 'March 30, 2026'

const codeSegment = ref(`
#include <stdio.h>

int main()
{
	printf("Hello World");
	return 0;
}
`)

const dataSegment = ref(`
int globalVar = 10;
static int count = 5;
`)

const stackFunctionCalls = ref(`
void cutenessLevel()
{
	int x = 10; // stored in stack
}
`)

const heapMemory = ref(`
#include <stdlib.h>

int *ptr = (int*) malloc(sizeof(int));
*ptr = 25;

free(ptr);
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Program Memory Layout in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-500 mb-2 text-lg">
			When a C program runs, it doesn't just throw variables randomly into memory. Instead, memory is organized into
			different sections, each with a specific purpose.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Big Picture Idea
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Think of memory like a building with floors:
			<ul class="list-disc list-inside space-y-1">
				<li>Top = Stack</li>
				<li>Middle = Heap</li>
				<li>Bottom = Data and Code</li>
			</ul>
			Each "floor" stores different things.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Code (Text) Segment
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			This section stores the actual instructions of your program.
			<CodeBlock :code="codeSegment" language="c" />

			Key points:
			<ul class="list-disc list-inside space-y-1">
				<li>Contains compiled functions (main, etc.)</li>
				<li>Read-only (cannot be changed while running)</li>
				<li>Executed by the CPU</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Data Segment (Global and Static Variables)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Stores variables that exist for the entire program lifetime.
			<CodeBlock :code="dataSegment" language="c" />

			Key points:
			<ul class="list-disc list-inside space-y-1">
				<li>Created before main() starts.</li>
				<li>Exists until program ends.</li>
				<li>Includes: Initialized variables, Uninitialized (BSS).</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Stack (Function Calls & Local Variables)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The stack handles function calls and local variables.
			<CodeBlock :code="stackFunctionCalls" language="c" />

			Key points:
			<ul class="list-disc list-inside space-y-1">
				<li>Stores: Local variables, function calls</li>
				<li>Automatically managed</li>
				<li>Very fast</li>
				<li>Memory is freed when function ends</li>
			</ul>
			Too many calls = <b>stack overflow</b>.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Heap (Dynamic Memory)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The heap is used when you <b>manually request memory</b>.
			<CodeBlock :code="heapMemory" language="c" />

			Key points:
			<ul class="list-disc list-inside space-y-1">
				<li>Used for dynamic memory (malloc).</li>
				<li>Managed manually.</li>
				<li>More flexible bu slower.</li>
				<li>Must be freed (free()).</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			How They Work Together
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Here's the flow
			<ul class="list-disc list-inside space-y-1">
				<li>Code = runs instructions</li>
				<li>Data = stores global/static variables</li>
				<li>Stack = handles function calls</li>
				<li>Heap = handles dynamic memory</li>
			</ul>

			Fun fact
			<ul class="list-disc list-inside space-y-1">
				<li>Stack grows <b>downward</b>.</li>
				<li>Heap grows <b>upward</b>.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Why This Matters (For You)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			You don't need to memorize everything here. <br>
			But understanding this helps you:
			<ul class="list-disc list-inside space-y-1">
				<li>Avoid crashes.</li>
				<li>Understand pointers better.</li>
				<li>Use memory safely.</li>
				<li>Debug issues more easily.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Summary
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Memory is divided into:
			<ul class="list-disc list-inside space-y-1">
				<li>Code = instructions</li>
				<li>Data = global/static variables</li>
				<li>Stack = local variables & functions</li>
				<li>Heap = dynamic memory</li>
			</ul>
			Stack = automatic & fast <br>
			Heap = manual & flexible
		</p>
	</TutorialMainLayout>
</template>