<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'
import UsefulLinks from '@/blog/components/UsefulLinks.vue'
import {ref} from 'vue'
import CodeBlock from '@/blog/components/CodeBlock.vue'

const lastUpdated = 'February 16, 2026'

const forLoopSyntax = ref(`
for (initialization; condition; update) {
    // body of the loop
}
`)

const forLoopExample = ref(`
for (int i = 0; i < 5; i++) {
    printf("%d ", i + 1);
}
`)

const whileLoopSyntax = ref(`
while (condition) {
    // body of the loop
}
`)

const whileLoopExample = ref(`
int i = 0;
while (i < 5) {
    printf("%d ", i + 1);
    i++;
}
`)

const doWhileLoopSyntax = ref(`
do {
    // body of the loop
} while (condition);
`)

const doWhileLoopExample = ref(`
int i = 0;
do {
    printf("%d ", i);
    i++;
} while (i <= 5);
`)

const infiniteLoopSyntax = ref(`
// Using for
for ( ; ; ) {
    // body executes indefinitely
}

// Using while
while (1) {
    // body executes indefinitely
}

// Using do-while
do {
    // body executes indefinitely
} while (1);
`)

const nestedLoopSyntax = ref(`
for (int i = 0; i < outer; i++) {
    for (int j = 0; j < inner; j++) {
        // body executes multiple times
    }
}
`)

const nestedLoopExample = ref(`
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 2; j++) {
        printf("i = %d, j = %d\\n", i, j);
    }
}
`)

const loopControlExample = ref(`
for (int i = 0; i < 5; i++) {
    if (i == 3) break;      // exit loop
    printf("%d ", i);
}

for (int i = 0; i < 5; i++) {
    if (i == 3) continue;   // skip iteration
    printf("%d ", i);
}

for (int i = 0; i < 5; i++) {
    if (i == 3) goto skip;  // jump to label
    printf("%d ", i);
}

skip:
printf("\\nJumped to the 'skip' label.");
`)

const links = [
	{title: 'Introduction to C', route: '/blog/c-introduction'},
	{title: 'Compilation Process', route: '/blog/c-compilation-process'},
	{title: 'Identifiers', route: '/blog/c-identifiers'},
	{title: 'Keywords', route: '/blog/c-keywords'},
	{title: 'Variables', route: '/blog/c-variables'},
	{title: 'Data Types', route: '/blog/c-data-types'},
	{title: 'Input and Output', route: '/blog/c-input-output'},
	{title: 'Operators', route: '/blog/c-operators'},
	{title: 'Conditional Statements', route: '/blog/c-conditional-statements'}
]
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Loops in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			Loops are fundamental programming constructs used to repeat a block of code multiple times without rewriting it.
			Imagine printing a message 100 times manually; loops make this task simple, efficient, and maintainable.
			Loops allow a program to control the flow of execution dynamically, making it more flexible and responsive to
			conditions.
			<br>
			Loops are used in numerous scenarios such as iterating through arrays, performing repeated calculations, creating
			menus, or managing tasks in games and simulations. By mastering loops, you can reduce redundancy in code and
			improve clarity.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">1. For Loop</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">for</span> loop is an entry-controlled loop that repeats code a known
			number of times.
			<br>Syntax:
			<CodeBlock :code="forLoopSyntax" language="c" />
			Example: Print numbers from 1 to 5
			<CodeBlock :code="forLoopExample" language="c" />
			Explanation: <br>
			The loop initializes <span class="bg-pink-50 px-2 rounded-lg">i</span> to 0, checks the condition
			<span class="bg-pink-50 px-2 rounded-lg">i &lt; 5</span>, executes the body, and updates
			<span class="bg-pink-50 px-2 rounded-lg">i++</span> each iteration.
			<br>Use Cases:
			<ul class="list-disc list-inside space-y-1">
				<li>Iterating over arrays or lists.</li>
				<li>Counting loops with known repetitions.</li>
				<li>Repeating operations a fixed number of times.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">2. While Loop</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">while</span> loop repeats a block while a condition is true.
			Initialization and update must be handled manually.
			<br>Syntax:
			<CodeBlock :code="whileLoopSyntax" language="c" />
			Example: Print numbers from 1 to 5
			<CodeBlock :code="whileLoopExample" language="c" />
			Explanation: <br>
			The loop checks the condition before each iteration. If the condition is false initially, the loop
			body may never execute.
			<br>Use Cases:
			<ul class="list-disc list-inside space-y-1">
				<li>Repeating tasks until a condition changes.</li>
				<li>Reading input until a sentinel value is encountered.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">3. Do-While Loop</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">do-while</span> loop executes the block first and checks the
			condition afterward. It always runs at least once.
			<br>Syntax:
			<CodeBlock :code="doWhileLoopSyntax" language="c" />
			Example: Print numbers from 0 to 5
			<CodeBlock :code="doWhileLoopExample" language="c" />
			Explanation: <br>
			Unlike while, the do-while guarantees at least one execution. Ideal when the loop body must run at
			least once regardless of the condition.
			<br>Use Cases:
			<ul class="list-disc list-inside space-y-1">
				<li>Menu-driven programs that should display options at least once.</li>
				<li>Input validation loops where user input must be requested before checking.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">4. Infinite Loops</h2>
		<p class="text-gray-500 mb-2 text-lg">
			An <span class="bg-pink-50 px-2 rounded-lg">infinite loop</span> repeats indefinitely until interrupted. Usually,
			it occurs when the condition never becomes false. Loop control statements are often used to exit such loops.
			<br>Syntax:
			<CodeBlock :code="infiniteLoopSyntax" language="c" />
			Explanation: <br>
			Infinite loops are useful for servers, embedded systems, and ongoing processes but require careful
			control to avoid program freeze.
			<br>Use Cases:
			<ul class="list-disc list-inside space-y-1">
				<li>Real-time systems that continuously monitor sensors.</li>
				<li>Event loops in games or GUI programs.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">5. Nested Loops</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<span class="bg-pink-50 px-2 rounded-lg">Nested loops</span>
			are loops inside loops. The inner loop executes fully for each iteration of the outer loop.
			<br>Syntax:
			<CodeBlock :code="nestedLoopSyntax" language="c" />
			Example: Nested iterations
			<CodeBlock :code="nestedLoopExample" language="c" />
			Explanation: <br>
			Each outer loop iteration runs all inner loop iterations.
			Useful for multidimensional arrays or repeated tasks requiring multiple levels.
			<br>Use Cases:
			<ul class="list-disc list-inside space-y-1">
				<li>Processing 2D arrays or matrices.</li>
				<li>Generating patterns like tables or pyramids.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">6. Loop Control Statements</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Loop control statements alter the normal flow of loops:
			<ul class="list-disc list-inside space-y-1">
				<li><span class="bg-pink-50 px-2 rounded-lg">break</span>: exit the loop immediately.</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">continue</span>: skip current iteration and continue next.</li>
				<li><span class="bg-pink-50 px-2 rounded-lg">goto</span>: jump to a labeled statement.</li>
			</ul>
			Example:
			<CodeBlock :code="loopControlExample" language="c" />
			Explanation: <br>
			These statements provide fine-grained control over loops, allowing early exit, skipping iterations,
			or jumps to specific code points.
			<br>Use Cases:
			<ul class="list-disc list-inside space-y-1">
				<li>Terminate loops on specific conditions.</li>
				<li>Skip processing certain values.</li>
				<li>Jump to error handling or recovery code.</li>
			</ul>
		</p>

		<UsefulLinks :links="links" />
	</MainLayout>
</template>