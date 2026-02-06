<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/blog/components/CodeBlock.vue'

const lastUpdated = 'February 6, 2026'

const multipleDataTypesExample = ref(`
#include <stdio.h>

int main() {
	int age = 20;
	float height = 5.7;
	double pi = 3.14159;
	char grade = 'A';

	printf("Age: %d\\n", age);
	printf("Height: %.1f\\n", height);
	printf("Pi: %.5lf\\n", pi);
	printf("Grade: %c\\n", grade);

	return 0;
}
`)
const integerExample = ref(`
#include <stdio.h>

int main() {
	int var = 22;
	printf("var = %d", var);
	return 0;
}
`)
const characterExample = ref(`
#include <stdio.h>

int main() {
	char c = 'A';
	printf("ch = %c", ch);
	return 0;
}
`)
const floatingPointExample = ref(`
#include <stdio.h>

int main() {
	float al = 12.45;
	printf("val = %f", val);
	return 0;
}
`)
const doubleExample = ref(`
#include <stdio.h>

int main() {
	double val = 1.4521;
	printf("val = %f", val);
	return 0;
}
`)
const functionWithNoReturnExample = ref(`
#include <stdio.h>

void greet() {
	printf("Hello, welcome!\\n");
	printf("My Instructor is cute :)\\n");
}

int main() {
	greet();
	return 0;
}
`)
const sizeOfDataTypeExample = ref(`
#include <stdio.h>

int main() {
	printf("The size of int: %d\\n", sizeof(int));
	printf("The size of char: %d\\n", sizeof(char));
	printf("The size of float: %d\\n", sizeof(float));
	printf("The size of double: %d\\n", sizeof(double));

	return 0;
}
`)
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Data Types in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			Every variable in C has an associated data type.<br>
			A data type tells the compiler:<br>
			<ul class="list-disc list-inside space-y-1">
				<li>What kind of data a variable can store.</li>
				<li>How much memory to allocate.</li>
				<li>How the data should be interpreted.</li>
			</ul>
			For example:
			<ul class="list-disc list-inside space-y-1">
				<li>Numbers without decimals: integers</li>
				<li>Numbers with decimals: floating-point</li>
				<li>Single characters: character type</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			C Is a Statically Typed Language
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			C is a statically typed language, which means:
			<ul class="list-disc list-inside space-y-1">
				<li>The data type of a variable must be specified at declaration.</li>
				<li>Once declared, the type cannot be changed.</li>
			</ul>
			<span class="bg-pink-50 px-2 rounded-lg">int x = 10; // valid</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">int x = 5; // valid</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">int x = 3.14; // not recommended (data loss)</span> <br>
			The compiler strictly enforces data types to ensure correctness and efficiency.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Basic (Primary) Data Types in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			C provides several basic data types that are used to build programs. The most commonly used ones are:
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">int</span></li>
				<li><span class="bg-pink-50 px-2 rounded-lg">char</span></li>
				<li><span class="bg-pink-50 px-2 rounded-lg">float</span></li>
				<li><span class="bg-pink-50 px-2 rounded-lg">double</span></li>
				<li><span class="bg-pink-50 px-2 rounded-lg">void</span></li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Example Using Multiple Data Types
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="multipleDataTypesExample" language="c" />
			Output: <br>
			<span class="bg-pink-50 px-2 rounded-lg">Age: 20</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">Height: 5.7</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">Pi: 3.14159</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">Grade: A</span> <br>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Integer Data Type (int)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">int</span> data type is used to store whole numbers.

			<span class="text-gray-700 text-xl">Characteristics</span> <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Stores positive, negative, or zero values.</li>
				<li>Size: typically 4 bytes.</li>
				<li>Range: -2,147,483,648 to 2,147,483,647</li>
				<li>Format specifier: <span class="bg-pink-50 px-2 rounded-lg">%d</span></li>
			</ul>
			Example: <br>
			<CodeBlock :code="integerExample" language="c" />
			Output: <br>
			<span class="bg-pink-50 px-2 rounded-lg">var = 22</span> <br>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Character Data Type (int)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">char</span> data type stores a single character.

			<span class="text-gray-700 text-xl">Characteristics</span> <br>
			<ul class="list-disc list-inside space-y-1">
				<li>
					Stores one character like
					<span class="bg-pink-50 px-2 rounded-lg">'A'</span>,
					<span class="bg-pink-50 px-2 rounded-lg">'b'</span>,
					<span class="bg-pink-50 px-2 rounded-lg">'5'</span>
				</li>
				<li>Size: 1 byte.</li>
				<li>Range: -128 to 127 (signed by default)</li>
				<li>Format specifier: <span class="bg-pink-50 px-2 rounded-lg">%c</span></li>
			</ul>
			Example: <br>
			<CodeBlock :code="characterExample" language="c" />
			Output: <br>
			<span class="bg-pink-50 px-2 rounded-lg">ch = A</span> <br>
			<span class="text-pink-700">Note: </span> Internally, characters are stored using ASCII values.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Floating-Point Data Type (float)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">float</span> data type stores decimal numbers with limited precision.

			<span class="text-gray-700 text-xl">Characteristics</span> <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Used for numbers with fractional parts.</li>
				<li>Size: 4 bytes.</li>
				<li>Approximate range: 3.4e-38 to 3.4e+38</li>
				<li>Format specifier: <span class="bg-pink-50 px-2 rounded-lg">%f</span></li>
			</ul>
			Example: <br>
			<CodeBlock :code="floatingPointExample" language="c" />
			Output: <br>
			<span class="bg-pink-50 px-2 rounded-lg">val = 12.450000</span> <br>
			<span class="text-pink-700">Note: </span> Use <span class="bg-pink-50 px-2 rounded-lg">double</span> when
			precision matters (scientific calculations, finance, physics).
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Double Data Type (double)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">double</span> data type stores decimal numbers with higher precision
			than float.

			<span class="text-gray-700 text-xl">Characteristics</span> <br>
			<ul class="list-disc list-inside space-y-1">
				<li>More precise than <span class="bg-pink-50 px-2 rounded-lg">float</span></li>
				<li>Size: 8 bytes.</li>
				<li>Approximate range: 1.7e-308 to 1.7e+308</li>
				<li>Format specifier: <span class="bg-pink-50 px-2 rounded-lg">%lf</span></li>
			</ul>
			Example: <br>
			<CodeBlock :code="doubleExample" language="c" />
			Output: <br>
			<span class="bg-pink-50 px-2 rounded-lg">val = 1.452100</span> <br>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Void Data Type (void)
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">void</span> data type represent no value. <br>

			<span class="text-gray-700 text-xl">Common Uses of </span> <span class="bg-pink-50 px-2 rounded-lg">void</span>
			<br>
			<ol class="list-decimal list-inside space-y-1">
				<li>Functions that return nothing.</li>
				<li>Generic pointers <span class="bg-pink-50 px-2 rounded-lg">(void*)</span></li>
			</ol>
			Example: <br>
			<CodeBlock :code="functionWithNoReturnExample" language="c" />
			Output: <br>
			<span class="bg-pink-50 px-2 rounded-lg">Hello, welcome!</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">My Instructor is cute :)</span> <br>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Size of Data Type in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The size of data types depends on the system architecture and compiler. <br>
			To determine sizes, C provides the <span class="bg-pink-50 px-2 rounded-lg">sizeof()</span> operator. <br>

			Example: <br>
			<CodeBlock :code="sizeOfDataTypeExample" language="c" />
			Output (Typical 64-bit System): <br>
			<span class="bg-pink-50 px-2 rounded-lg">The size of int: 4</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">The size of char: 1</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">The size of float: 4</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">The size of double: 8</span> <br>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Data Type Modifiers
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			C provides modifiers that can change the size or range of data types: <br>

			<ul class="list-disc list-inside space-y-1">
				<li>short</li>
				<li>long</li>
				<li>signed</li>
				<li>unsigned</li>
			</ul>
			Example: <br>
			<span class="bg-pink-50 px-2 rounded-lg">unsigned int count;</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">long double value;</span> <br>
			These modifiers help optimize memory and control ranges.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Literals in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Literals are fixed constant values assigned directly to variables. <br>

			Example: <br>
			<span class="bg-pink-50 px-2 rounded-lg">int x = 10; // integer literal</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">float y = 3.14; // floating-point literal</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">char c = 'A'; // character literal</span> <br>

			Literals: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Occupy memory</li>
				<li>Do not have names</li>
				<li>Cannot be modified</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Type Conversion in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Type conversion is the process of converting one data type into another.
			<ol class="list-decimal list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">Implicit (Automatic)</span>: done by compiler.</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">Explicit (Type Casting)</span>: done by programmer.</li>
			</ol>
			Example: <br>
			<span class="bg-pink-50 px-2 rounded-lg">int a = 5;</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">float b = a; // implicit conversion</span> <br>
			More advanced type conversion will be discussed later with operators.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Summary
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Data types define what kind of data a variable can store.</li>
				<li>C is statically typed.</li>
				<li>
					Common data types:
					<span class="bg-pink-50 px-2 rounded-lg">int</span>,
					<span class="bg-pink-50 px-2 rounded-lg">char</span>,
					<span class="bg-pink-50 px-2 rounded-lg">float</span>,
					<span class="bg-pink-50 px-2 rounded-lg">double</span>,
					<span class="bg-pink-50 px-2 rounded-lg">void</span>
				</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">sizeof()</span> helps determine memory usage.</li>
				<li>Modifiers adjust size and range.</li>
				<li>Literals represent fixed values.</li>
				<li>Type conversion allows flexibility in operations.</li>
			</ul>
		</p>
	</MainLayout>
</template>