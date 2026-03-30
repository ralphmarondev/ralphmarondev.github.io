<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 30, 2026'

const whyUseStructures1 = ref(`
char name[50];
int age;
float grade;
`)

const whyUseStructures2 = ref(`
struct Student
{
	char name[50];
	int age;
	float grade;
};
`)

const basicExample = ref(`
#include <stdio.h>

struct A
{
	int x;
}

int main()
{
	struct A a; // create variable
	a.x = 11; // assign value

	printf("%d", a.x);
	return 0;
}
`)

const structureSyntax = ref(`
struct StructureName
{
	datatype member1;
	datatype member2;
};
`)

const accessingStructureMember = ref(`
s1.age = 20;
`)

const usingTypedef = ref(`
typedef struct
{
	int x;
} Point;

Point p1 = {10};
`)

const nestedStructures = ref(`
struct Child
{
	int x;
};

struct Parent
{
	int a;
	struct Child b;
};
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Structures in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			What is a Structure?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			A <b>structure</b> is a user-defined data type that allows you to group different types of data into one unit.
			<br>
			Unlike arrays (same type), structures can store mixed data types.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Why Use Structures?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Without structures:
			<CodeBlock :code="whyUseStructures1" language="c" />
			With structures:
			<CodeBlock :code="whyUseStructures2" language="c" />
			<ul class="list-disc list-inside space-y-1">
				<li>Cleaner</li>
				<li>Organized</li>
				<li>Represent real-world objects</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Basic Example
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="basicExample" language="c" />
			Output:
			<OutputBlock output="11" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Structure Syntax
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="structureSyntax" language="c" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Accessing Structure Member
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Use the dot operator (.)
			<CodeBlock :code="accessingStructureMember" language="c" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Initializing Structures using typedef
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="usingTypedef" language="c" />
			No need to write struct everytime.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Nested Structures
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Structures inside structures:
			<CodeBlock :code="nestedStructures" language="c" />
			Access:
			<OutputBlock output="p.b.x = 5" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Structure Memory
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Structures may have extra unused space.</li>
				<li>This is called padding.</li>
			</ul>
			Helps improve performance.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Real World Use Cases
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Structures are used for:
			<ul class="list-disc list-inside space-y-1">
				<li>Students (name, age, grade)</li>
				<li>Engineering data (length, width, material)</li>
				<li>Data structures (linked list, trees)</li>
				<li>Grouping related data.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Key Takeaways
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Structures group different data types.</li>
				<li>Use typedef for cleaner code.</li>
			</ul>
		</p>
	</TutorialMainLayout>
</template>