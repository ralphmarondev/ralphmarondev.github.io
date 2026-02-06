<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'

const lastUpdated = 'February 5, 2026'
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C Language Introduction</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-10 text-lg">
			C is a general-purpose procedural programming language developed by Dennis Ritchie in 1972 at Bell Laboratories,
			part of AT&T. It was primarily designed as a system programming language for writing the UNIX operating system.
			Over the years, C has grown beyond system programming and is now widely used in many fields of software
			development, including operating systems, embedded systems, compilers, databases, networking, game engines, and
			real-time systems.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Why Learn C?
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			C is often referred to as the “mother of all programming languages”, because many modern programming languages
			such as Java, PHP, and JavaScript borrow syntax and concepts from C, either directly or indirectly. Learning C
			first provides a strong foundation in programming fundamentals, including how memory works, working with pointers,
			managing resources, and understanding the internal workings of a computer.
		</p>
		<p class="text-gray-500 mb-4 text-lg">
			Understanding C gives learners the skills needed to approach other modern programming languages more easily,
			because it emphasizes the core principles of programming and system-level thinking. For anyone serious about
			software development, especially in areas like systems, embedded devices, or performance-critical applications,
			knowing C is invaluable.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Writing Your First C Program
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Here is a simple C program that demonstrates the basic structure and syntax:
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			<!--			#include <stdio.h>-->

			<!--			int main(void) {-->
			<!--			// This prints "Hello World" to the screen-->
			<!--			printf("Hello World");-->
			<!--			return 0;-->
			<!--			}'-->
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			Output:
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Understanding the Structure of C Program
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Every C program follows a specific structure. Writing code outside this structure can lead to compilation errors.
			Let’s break down the components of a simple program:
		</p>

		<!--1.	Header File Inclusion-->
		<p class="text-gray-500 mb-2 text-lg">
			1. Header File Inclusion
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			Header files contain function declarations and macros that can be shared between multiple source files. Lines
			starting with # are handled by the preprocessor, which runs before compilation. In our example, stdio.h provides
			functions for input and output, like printf(). Other common header files include:
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1 text-gray-500">
				<li>stddef.h - defines useful types and macros</li>
				<li>stdint.h - defines integer types with exact widths.</li>
			</ul>
		</p>

		<!--2. Main Function Declaration-->
		<p class="text-gray-500 mb-2 text-lg">
			2. Main Function Declaration (int main())
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			The main() function is the entry point of a C program. Execution starts here. The int indicates that the function
			returns an integer value, typically used by the operating system to determine whether the program terminated
			successfully (0) or with an error.
		</p>

		<p class="text-gray-500 mb-2 text-lg">
			3. Body of the Main Function
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			Everything inside the curly braces {} is the body of the main function. This is where all statements,
			calculations, and function calls take place.
		</p>

		<p class="text-gray-500 mb-2 text-lg">
			4. Comments
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			Comments are ignored by the compiler and are used for documentation or notes.
		</p>

		<p class="text-gray-500 mb-2 text-lg">
			5. Statements
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			Statements are instructions for the compiler. Each statement in C ends with a semicolon (;).
		</p>

		<p class="text-gray-500 mb-2 text-lg">
			6. Return Statement
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			This signals the end of the main function and optionally returns a value to the operating system. 0 usually
			indicates successful execution.
		</p>

		<!--!!! RUNNING A C PROGRAM-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Running a C Program
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			To run a C program, you need a development environment, which includes: <br>
			<ul class="list-disc list-inside space-y-1 text-gray-500">
				<li>A text editor to write your code.</li>
				<li>A compiler to convert your source code into an executable program.</li>
			</ul>
		</p>

		<!--!!! APPLICATIONS OF C-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Applications of C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			C is used in a wide range of real-world applications, including:
			<ul class="list-disc list-inside space-y-1 text-gray-500">
				<li>Operating System: Core components of Linux, Windows, macOS</li>
				<li>Embedded Systems: Programming devices like microwaves, printers, and washing machines.</li>
				<li>Game Development: High-performance game engines, like the Doom engine.</li>
				<li>Compilers and Interpreters: C is used to build compilers and interpreters, including parts of CPython.</li>
				<li>Database Engines: Software like MySQL is implemented in C for efficiency.</li>
				<li>IoT Devices: Sensors and home automation systems often rely on C for low-level programming.</li>
				<li>Desktop Applications: Lightweight, high-performance applications, such as Notepad++.</li>
			</ul>
		</p>

		<!--!!! HISTORY OF C-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			History of C
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			C was developed to provide low-level memory access, high performance, and portability. Over the years, C has
			evolved with standards like ANSI C, C99, C11, and C23, adding modern features while maintaining its simplicity.
		</p>
	</MainLayout>
</template>