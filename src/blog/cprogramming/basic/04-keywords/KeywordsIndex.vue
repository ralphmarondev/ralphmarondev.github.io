<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'
import CodeBlock from '@/blog/components/CodeBlock.vue'
import {ref} from 'vue'

const lastUpdated = 'February 6, 2026'

const controlFlowProgramExample = ref(`
if (age >= 18) {
	printf("Adult");
} else {
	printf("Minor");
}
`)
const userDefinedTypeProgramExample = ref(`
struct Student {
	int id;
	char grade;
};
`)
const invalidProgramExample = ref(`
#include <stdio.h>

int main() {
	int return = 10;
	printf("%d", return);
	return 0;
}
`)
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Keywords in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			In C programming, keywords are words that already have a fixed meaning defined by the C language itself. <br>

			These words are understood directly by the compiler, and each one performs a specific role while the program is
			being compiled and executed. <br>

			Think of keywords as reserved commands of the language.
			Just like you cannot change the meaning of traffic signs, you cannot change the meaning of C keywords. <br>

			Because of this: <br>
			<ul class="list-disc list-inside space-y-1 text-gray-500">
				<li>Keywords cannot be used as names.</li>
				<li>Keywords cannot be modified.</li>
				<li>Keywords must be used exactly as defined.</li>
			</ul>

			If we try to use keyword as a variable name, function name, or any other identifier, the compile will immediately
			throw an error.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Why Keywords Exist
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Keywords form the core grammar of the C language. <br>
			They help the compiler understand: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>What type of data you are using.</li>
				<li>How the program should flow.</li>
				<li>Where memory should be allocated.</li>
				<li>When a function should return a value.</li>
				<li>How structures and user-defined types are created.</li>
			</ul>
			Without keywords, C would not have rules or structure, it would just be random text.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			List of Keywords in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			C has a fixed set of 32 keywords (in standard C):
			<table>
				<tr>
					<td>auto</td>
					<td>break</td>
					<td>case</td>
					<td>char</td>
				</tr>
				<tr>
					<td>const</td>
					<td>continue</td>
					<td>default</td>
					<td>do</td>
				</tr>
				<tr>
					<td>double</td>
					<td>else</td>
					<td>enum</td>
					<td>extern</td>
				</tr>
				<tr>
					<td>float</td>
					<td>for</td>
					<td>goto</td>
					<td>if</td>
				</tr>
				<tr>
					<td>int</td>
					<td>long</td>
					<td>register</td>
					<td>return</td>
				</tr>
				<tr>
					<td>short</td>
					<td>signed</td>
					<td>sizeof</td>
					<td>static</td>
				</tr>
				<tr>
					<td>struct</td>
					<td>switch</td>
					<td>typedef</td>
					<td>union</td>
				</tr>
				<tr>
					<td>unsigned</td>
					<td>void</td>
					<td>volatile</td>
					<td>while</td>
				</tr>
			</table>
			You do not need to memorize all of them at once. <br>
			Instead, it's better to understand them by category, which makes learning much easier.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Categories of Keywords in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<span class="text-gray-700 text-xl">1. Data Type Keywords</span> <br>
			These keywords define what kind of data a variable can store. <br>
			Keywords: <br>
			<span class="bg-pink-50 px-2 rounded-lg">char</span>,
			<span class="bg-pink-50 px-2 rounded-lg">int</span>,
			<span class="bg-pink-50 px-2 rounded-lg">float</span>,
			<span class="bg-pink-50 px-2 rounded-lg">double</span>,
			<span class="bg-pink-50 px-2 rounded-lg">void</span>,
			<span class="bg-pink-50 px-2 rounded-lg">short</span>,
			<span class="bg-pink-50 px-2 rounded-lg">long</span>,
			<span class="bg-pink-50 px-2 rounded-lg">signed</span>,
			<span class="bg-pink-50 px-2 rounded-lg">unsigned</span>
			<br>

			Explanation: <br>
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">int</span>: stores integer</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">float</span>: stores decimal numbers</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">char</span>: stores single characters</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">void</span>: represents 'no value'</li>
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">signed/unsigned</span>
					: control whether negative values are allowed
				</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">short/long</span>: control memory size and range</li>
			</ul>

			<span class="text-gray-700 text-xl">2. Control Flow Keywords</span> <br>
			These keywords control how the program executes and which code runs.<br>
			Keywords: <br>
			<span class="bg-pink-50 px-2 rounded-lg">if</span>,
			<span class="bg-pink-50 px-2 rounded-lg">else</span>,
			<span class="bg-pink-50 px-2 rounded-lg">switch</span>,
			<span class="bg-pink-50 px-2 rounded-lg">case</span>,
			<span class="bg-pink-50 px-2 rounded-lg">default</span>,
			<span class="bg-pink-50 px-2 rounded-lg">for</span>,
			<span class="bg-pink-50 px-2 rounded-lg">while</span>,
			<span class="bg-pink-50 px-2 rounded-lg">do</span>,
			<span class="bg-pink-50 px-2 rounded-lg">break</span>,
			<span class="bg-pink-50 px-2 rounded-lg">continue</span>
			<br>
			Explanation: <br>
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">if / else</span>: decision making</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">for, while, do</span>: loops</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">break</span>: exit a loop or switch</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">continue</span>: skip to next iteration</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">switch, case, default</span>: multi-choice decision</li>
			</ul>
			Example:
			<CodeBlock :code="controlFlowProgramExample" language="c" />

			<span class="text-gray-700 text-xl">3. Storage Class keywords</span> <br>
			These keywords control scope, lifetime, and memory behavior of variables.<br>
			Keywords: <br>
			<span class="bg-pink-50 px-2 rounded-lg">auto</span>,
			<span class="bg-pink-50 px-2 rounded-lg">register</span>,
			<span class="bg-pink-50 px-2 rounded-lg">static</span>,
			<span class="bg-pink-50 px-2 rounded-lg">extern</span>
			<br>
			Explanation: <br>
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">auto</span>: default storage (rarely used explicitly)</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">register</span>: suggests storing variable in CPU register</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">static</span>: preserves value between function calls</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">extern</span>: accesses variables defined in another file</li>
			</ul>
			These keywords are important in advanced C programming and large projects. <br>

			<span class="text-gray-700 text-xl">4. Operator and Utility Keywords</span> <br>
			These keywords help with memory size, jumps, and type definitions.<br>
			Keywords: <br>
			<span class="bg-pink-50 px-2 rounded-lg">sizeof</span>,
			<span class="bg-pink-50 px-2 rounded-lg">return</span>,
			<span class="bg-pink-50 px-2 rounded-lg">goto</span>,
			<span class="bg-pink-50 px-2 rounded-lg">typedef</span>
			<br>
			Explanation: <br>
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">sizeof</span>: finds memory size of a variable</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">return</span>: sends value back from a function</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">typedef</span>: creates custom type names</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">goto</span>: jumps to a labeled statement (rarely recommended)</li>
			</ul>
			Example:
			<span class="bg-pink-50 px-4 rounded-lg">
				return 0;
			</span> <br>

			<span class="text-gray-700 text-xl">5. Type Qualifier Keywords</span> <br>
			These keywords modify how variables behave, not what they store.<br>
			Keywords: <br>
			<span class="bg-pink-50 px-2 rounded-lg">const</span>,
			<span class="bg-pink-50 px-2 rounded-lg">volatile</span>
			<br>
			Explanation: <br>
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">const</span>: value cannot be changed</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">volatile</span>: value may change unexpectedly (hardware-related)
				</li>
			</ul>
			Example: <br>
			<span class="bg-pink-50 px-4 rounded-lg">
				const int max = 100;
			</span> <br>

			<span class="text-gray-700 text-xl">6. User-Defined Type Keywords</span> <br>
			These keywords allow programmers to create custom data structures.<br>
			Keywords: <br>
			<span class="bg-pink-50 px-2 rounded-lg">struct</span>,
			<span class="bg-pink-50 px-2 rounded-lg">union</span>,
			<span class="bg-pink-50 px-2 rounded-lg">enum</span>
			<br>
			Explanation: <br>
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">struct</span>: groups different data types</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">union</span>: shares memory between variables</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">enum</span>: defines named integer constants</li>
			</ul>
			Example:
			<CodeBlock :code="userDefinedTypeProgramExample" language="c" />
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Categories of Keywords in C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Understanding the difference between these two is very important.<br>
			<span class="text-gray-700 text-xl">Keywords</span> <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Reserved words in C</li>
				<li>Have predefined meaning</li>
				<li>Cannot be used as names</li>
				<li>Part of the C language syntax</li>
			</ul>
			Examples: <br>
			<span class="bg-pink-50 px-2 rounded-lg">int</span>,
			<span class="bg-pink-50 px-2 rounded-lg">return</span>,
			<span class="bg-pink-50 px-2 rounded-lg">if</span>,
			<span class="bg-pink-50 px-2 rounded-lg">while</span>
			<br>

			<span class="text-gray-700 text-xl">Identifiers</span> <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Names given by programmers</li>
				<li>Used for variables, functions, arrays, structures</li>
				<li>Must follow naming rules</li>
				<li>Cannot be keywords</li>
			</ul>
			Examples: <br>
			<span class="bg-pink-50 px-2 rounded-lg">total</span>,
			<span class="bg-pink-50 px-2 rounded-lg">count</span>,
			<span class="bg-pink-50 px-2 rounded-lg">sum</span>,
			<span class="bg-pink-50 px-2 rounded-lg">calculate</span>
			<br>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			What Happens If We Use a Keyword as an Identifier?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The compiler will throw an error, because it gets confused between language rules and user-defined names.

			<span class="text-gray-700 text-xl">Invalid Example</span> <br>
			<CodeBlock :code="invalidProgramExample" language="c" />

			<span class="text-gray-700 text-xl">Complier Error (Explanation)</span> <br>
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">return</span> is a keyword</li>
				<li>Compiler expects it to be used to send a value back</li>
				<li>Using it as a variable name breaks the grammar of C</li>
			</ul>
			That's why the program fails to compile.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Key Points to Remember
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Keywords are reserved words in C</li>
				<li>They have special meaning to the compiler</li>
				<li>They cannot be used as identifiers</li>
				<li>Keywords form the foundation of C syntax</li>
				<li>Learn them by category, not by memorization</li>
			</ul>
		</p>
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