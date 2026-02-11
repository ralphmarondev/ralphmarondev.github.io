<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/blog/components/CodeBlock.vue'
import OutputBlock from '@/blog/components/OutputBlock.vue'
import UsefulLinks from '@/blog/components/UsefulLinks.vue'

const lastUpdated = 'February 11, 2026'

const firstProgram = ref(`
#include <iostream>

int main() {
    // This prints Hello, World! to the console
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
`)

const links = [
	{title: 'Variables', route: '/blog/cpp-variables'},
	{title: 'Data Types', route: '/blog/cpp-data-types'},
	{title: 'Operators', route: '/blog/cpp-operators'},
	{title: 'Input and Output', route: '/blog/cpp-input-output'},
	{title: 'Conditional Statements', route: '/blog/cpp-conditional-statements'},
	{title: 'Loops', route: '/blog/cpp-loops'},
	{title: 'Functions', route: '/blog/cpp-functions'},
	{title: 'Object-Oriented Programming', route: '/blog/cpp-oop-introduction'}
]
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C++ Language Introduction</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated: {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-2 text-lg">
			C++ is a general-purpose programming language developed by Bjarne Stroustrup in 1979 as an extension of the C
			language.
			It introduced object-oriented programming features, along with other enhancements, to support complex software
			development.
			C++ is widely used for system software, game development, real-time simulation, and high-performance applications.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">Why Learn C++?</h2>
		<p class="text-gray-500 mb-2 text-lg">
			C++ is known for its performance, flexibility, and versatility. It provides:
			<ul class="list-disc list-inside space-y-1 text-gray-500">
				<li>Low-level memory control like C</li>
				<li>High-level abstractions with classes and objects</li>
				<li>Rich Standard Template Library (STL) for data structures and algorithms</li>
			</ul>
			Learning C++ gives you the foundation to understand both procedural and object-oriented programming,
			as well as prepare for learning other languages like Java or C#.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">Writing Your First C++ Program</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Here is a simple C++ program demonstrating the basic syntax and structure:
		</p>
		<CodeBlock :code="firstProgram" language="cpp" />
		<p class="text-gray-500 mb-2 text-lg">
			Output:
			<OutputBlock output="Hello, World!" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">Understanding the Structure of a C++ Program</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Every C++ program follows a basic structure:
		</p>

		<p class="text-gray-600 mb-2 text-xl">
			1. Header File Inclusion <span class="bg-pink-50 px-2 rounded-lg">#include &lt;iostream&gt;</span>
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			Header files contain function declarations and classes. <span class="bg-pink-50 px-2 rounded-lg">iostream</span>
			provides
			input/output objects like <span class="bg-pink-50 px-2 rounded-lg">std::cout</span> and
			<span class="bg-pink-50 px-2 rounded-lg">std::cin</span>.
		</p>

		<p class="text-gray-600 mb-2 text-xl">
			2. Main Function Declaration <span class="bg-pink-50 px-2 rounded-lg">(int main())</span>
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			The main() function is the entry point. Returning 0 signals successful execution.
		</p>

		<p class="text-gray-600 mb-2 text-xl">
			3. Statements and Output
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			Statements in C++ end with a semicolon <span class="bg-pink-50 px-2 rounded-lg">(;)</span>. The
			<span class="bg-pink-50 px-2 rounded-lg">std::cout</span> object
			outputs text to the console, and <span class="bg-pink-50 px-2 rounded-lg">std::endl</span> adds a newline.
		</p>

		<p class="text-gray-600 mb-2 text-xl">
			4. Comments
		</p>
		<p class="text-gray-500 mb-2 text-lg">
			Comments are ignored by the compiler and are used for notes: <span class="bg-pink-50 px-2 rounded-lg">// This is a comment</span>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">Running a C++ Program</h2>
		<p class="text-gray-500 mb-2 text-lg">
			To run a C++ program, you need:
			<ul class="list-disc list-inside space-y-1 text-gray-500">
				<li>A text editor or IDE to write your code</li>
				<li>A C++ compiler like g++, clang, or MSVC to convert your code into an executable</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">Applications of C++</h2>
		<p class="text-gray-500 mb-2 text-lg">
			C++ is used in various fields:
			<ul class="list-disc list-inside space-y-1 text-gray-500">
				<li>Game Development: Unreal Engine, graphics-intensive games</li>
				<li>System Software: Operating systems, device drivers</li>
				<li>High-Performance Applications: Trading software, simulations</li>
				<li>Embedded Systems: Robotics, IoT devices</li>
				<li>Desktop Applications: Adobe Photoshop, Chrome</li>
				<li>Scientific Computing: Simulations, modeling</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">History of C++</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Developed as "C with Classes" by Bjarne Stroustrup in 1979, C++ evolved through ANSI/ISO standards including
			C++98, C++03, C++11, C++14, C++17, and C++20. It combines the efficiency of C with object-oriented and generic
			programming features.
		</p>

		<UsefulLinks :links="links" />
	</MainLayout>
</template>