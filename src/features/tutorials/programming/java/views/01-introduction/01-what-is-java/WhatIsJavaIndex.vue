<script setup lang="ts">
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'

const lastUpdated = 'April 26, 2026'

const helloWorld = ref(`
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
`)
const comments = ref(`
// Single line comment

/*
Multi-line comment
Used for explanations
*/
`)
</script>

<template>
	<TutorialMainLayout title="Java Programming" link="/java-programming-language">

		<h2 class="text-3xl font-bold text-gray-800 mb-2">Introduction to Java</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			Java is a general-purpose, object-oriented programming language created to build reliable and portable software
			systems. It is widely used in desktop applications, web systems, mobile apps, and large-scale enterprise
			platforms.
			One of its strongest advantages is that programs written in Java can run on different operating systems without
			modification, as long as a Java Virtual Machine (JVM) is available.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">Key Characteristics of Java</h2>

		<ul class="list-disc list-inside space-y-1 text-gray-600 mb-4 text-lg">
			<li><b>Object-Oriented:</b> Java organizes programs using classes and objects for better structure.</li>
			<li><b>Platform Independent:</b> Code runs anywhere using the JVM.</li>
			<li><b>Secure and Reliable:</b> Built-in memory management and error handling reduce runtime issues.</li>
			<li><b>Multithreaded:</b> Supports running multiple tasks at the same time.</li>
			<li><b>Rich Libraries:</b> Provides built-in tools for almost every programming task.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">Your First Java Program</h2>

		<p class="text-gray-500 mb-2 text-lg">
			The simplest program in Java is used to display a message on the screen.
		</p>

		<CodeBlock :code="helloWorld" language="java" />

		<p class="text-gray-500 mb-2 text-lg">
			Output:
			<OutputBlock output="Hello World!" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">How Java Program Works</h2>

		<p class="text-gray-600 mb-2 text-lg">
			A Java program goes through several steps before it runs:
		</p>

		<ul class="list-disc list-inside space-y-1 text-gray-600 mb-4 text-lg">
			<li>You write the code in a <b>.java</b> file.</li>
			<li>The compiler (<b>javac</b>) converts it into bytecode (<b>.class</b> file).</li>
			<li>The JVM executes the bytecode on any system.</li>
			<li>Frequently used code is optimized using Just-In-Time (JIT) compilation.</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">Comments in Java</h2>

		<p class="text-gray-600 mb-2 text-lg">
			Comments are used to explain code and are ignored during execution.
		</p>

		<CodeBlock :code="comments" language="java" />

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">Code Blocks in Java</h2>

		<p class="text-gray-600 mb-2 text-lg">
			Curly braces <b>{ }</b> define blocks of code such as methods, loops, and classes. Everything inside a block is
			treated as a single unit.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">Why Learn Java?</h2>

		<ul class="list-disc list-inside space-y-1 text-gray-600 mb-4 text-lg">
			<li>Used in Android and mobile development</li>
			<li>Popular in enterprise systems and banking applications</li>
			<li>Widely used in backend web development</li>
			<li>Strong demand in software engineering jobs</li>
			<li>Used by large systems like streaming and cloud platforms</li>
		</ul>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">Real-World Uses of Java</h2>

		<ul class="list-disc list-inside space-y-1 text-gray-600 text-lg">
			<li>Mobile applications (Android apps)</li>
			<li>Web backend systems</li>
			<li>Enterprise software systems</li>
			<li>Cloud-based applications</li>
			<li>Game development systems</li>
			<li>Big data processing tools</li>
		</ul>
	</TutorialMainLayout>
</template>