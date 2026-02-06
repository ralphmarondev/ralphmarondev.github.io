<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'

const lastUpdated = 'February 6, 2026'
const stdio = '#include <stdio.h>'
const define = '#define add(a,b)'
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Compilation Process in C (Behind the Scenes)</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-2 text-lg">
			C programs cannot run directly on a computer. <br>
			Before a C program can execute, it must be converted into machine code, which is the language understood by the
			computer's processor. <br>
			This conversion is done by a compiler. <br>
			C is often called a mid-level language because: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>it looks readable to humans, and</li>
				<li>it can still work very close to hardware</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			What is Compilation?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<span class="bg-pink-50 px-2 rounded-lg">Compilation</span>
			is the process of converting C source code (.c file) into an executable program that the operating system can run.
			<br>
			Behind the scenes, this process is not a single step, it happens in four phases.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Overview of the Compilation Phases
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			When a C program is compiled, it passes through the following stages:
			<ol class="list-decimal list-inside space-y-1">
				<li>Preprocessing</li>
				<li>Compilation</li>
				<li>Assembly</li>
				<li>Linking</li>
			</ol>
			Each stage produces an intermediate output before finally generating an executable.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			How Do We Compile and Run a C Program?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			To compile and run a C program, we need:
			<ul class="list-disc list-inside space-y-1">
				<li>A code editor</li>
				<li>A C compiler (commonly GCC)</li>
			</ul>
			Below is a typical workflow using GCC on Linux.

			<span class="text-gray-600 text-xl">Step 1: Creating a C Source File</span> <br>
			Create a file with a .c extension: <br>
			<span class="bg-pink-50 px-2 rounded-lg">vim filename.c</span> <br>
			(You can also use any editor like VS Code, Nano, or Notepad on Windows.) <br>

			Example program: <br>
			// code goes here <br>

			<span class="text-gray-600 text-xl">Step 2: Compiling the Program</span> <br>
			Use the GCC compiler:<br>
			<span class="bg-pink-50 px-2 rounded-lg">gcc filename.c -o filename</span> <br>
			Common GCC Options <br>
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">-Wall</span> - enables all warnings (recommended)</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">-o</span> - specifies output file name</li>
			</ul>
			Example: <br>
			<span class="bg-pink-50 px-2 rounded-lg">gcc -Wall filename.c -o filename</span> <br>
			If there are no errors, GCC generates an executable file.

			<span class="text-gray-600 text-xl">Step 3: Executing the Program</span> <br>
			Run the executable:<br>
			<span class="bg-pink-50 px-2 rounded-lg">./filename // Linux or macOS</span> <br>
			<span class="bg-pink-50 px-2 rounded-lg">filename // Windows</span> <br>
			The program executes and prints the output.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			What Happens Inside the Compilation Process?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Let's now look at what the compiler actually does internally. <br>
			To see all intermediate files, compile using: <br>
			<span class="bg-pink-50 px-2 rounded-lg">gcc -Wall -save-temps filename.c -o filename</span> <br>
			This command generates multiple files representing each compilation phase.

			<span class="text-gray-600 text-xl">1. Preprocessing Phase</span> <br>
			Input: <span class="bg-pink-50 px-2 rounded-lg">filename.c</span> <br>
			Output: <span class="bg-pink-50 px-2 rounded-lg">filename.i</span> <br>
			This phase prepares the code for compilation. <br>

			<span class="text-gray-600 text-xl">What Happens Here?</span> <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Comments are removed.</li>
				<li>Macros are expanded.</li>
				<li>Header files are included.</li>
				<li>Conditional compilation is resolved.</li>
			</ul>
			Example effects: <br>
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">{{ stdio }}</span> is replaced with actual library code.</li>
				<li>Macros like <span class="bg-pink-50 px-2 rounded-lg">{{ define }}</span> are expanded.</li>
				<li>Comments disappear completely.</li>
			</ul>
			The output file <span class="bg-pink-50 px-2 rounded-lg">filename.i</span> is pure C code, but much longer. <br>

			<span class="text-gray-600 text-xl">2. Compilation Phase</span> <br>
			Input: <span class="bg-pink-50 px-2 rounded-lg">filename.i</span> <br>
			Output: <span class="bg-pink-50 px-2 rounded-lg">filename.s</span> <br>

			In this phase: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>The preprocessed code is checked for syntax errors.</li>
				<li>Code is translated into assembly language.</li>
			</ul>
			The output <span class="bg-pink-50 px-2 rounded-lg">filename.s</span> contains assembly instructions specific to
			the system architecture. <br>
			Assembly is still human-readable, but very low-level. <br>

			<span class="text-gray-600 text-xl">3. Assembly Phase</span> <br>
			Input: <span class="bg-pink-50 px-2 rounded-lg">filename.s</span> <br>
			Output: <span class="bg-pink-50 px-2 rounded-lg">filename.o</span> <br>
			The assembler converts assembly code into machine code. <br>

			At this stage: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Instructions become binary.</li>
				<li>Function call (like printf) are not yet resolved.</li>
				<li>The file is not executable.</li>
			</ul>
			The output file is called an object file. <br>

			<span class="text-gray-600 text-xl">4. Linking Phase</span> <br>
			Input: One or more <span class="bg-pink-50 px-2 rounded-lg">.o</span> files<br>
			Output: Executable file <br>

			The linker: <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Resolves function calls.</li>
				<li>Links standard libraries (like stdio).</li>
				<li>Adds startup and cleanup code.</li>
			</ul>

			For example: <br>
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">printf</span> is linked to its actual implementation.</li>
				<li>Code for handling command-line arguments is added.</li>
			</ul>
			This is why the executable file is larger than the object file.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Static vs Dynamic Linking
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<span class="text-gray-600 text-xl">Static Linking</span> <br>
			<ul class="list-disc list-inside space-y-1">
				<li>All library code is copied into the executable.</li>
				<li>Produces larger executables.</li>
				<li>No external dependencies.</li>
			</ul>

			<span class="text-gray-600 text-xl">Dynamic Linking (Default in GCC)</span> <br>
			<ul class="list-disc list-inside space-y-1">
				<li>Only references to libraries added.</li>
				<li>Libraries are loaded at runtime.</li>
				<li>Smaller executable size.</li>
			</ul>
			<span class="bg-pink-50 px-2 rounded-lg">printf()</span> is usually dynamically linked.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Why Should You Care About the Compilation Process?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Understanding compilation helps you:
			<ul class="list-disc list-inside space-y-1">
				<li>Debug errors more effectively.</li>
				<li>Understand linker errors.</li>
				<li>Optimize performance.</li>
				<li>Work with large projects.</li>
				<li>Appreciate how C interacts with hardware.</li>
			</ul>
			You don't need to memorize all phases now, but knowing they exists is essential.
		</p>
	</MainLayout>
</template>