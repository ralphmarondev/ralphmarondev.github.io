<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'
import UsefulLinks from '@/blog/components/UsefulLinks.vue'
import {ref} from 'vue'
import CodeBlock from '@/blog/components/CodeBlock.vue'

const lastUpdated = 'February 16, 2026'

const ifStatementSyntax = ref(`
if (condition) {
    // code executes if condition is true
}
`)

const ifStatementExample = ref(`
int number = 8;
if (number % 2 == 0) {
    printf("The number is even.\\n");
}
`)

const ifElseStatementSyntax = ref(`
if (condition) {
    // code executes if condition is true
} else {
    // code executes if condition is false
}
`)

const ifElseStatementExample = ref(`
int number = -5;
if (number > 0) {
    printf("The number is positive.\\n");
} else {
    printf("The number is negative or zero.\\n");
}
`)

const ifElseIfElseStatementSyntax = ref(`
if (condition1) {
    // code executes if condition1 is true
} else if (condition2) {
    // code executes if condition2 is true
} else {
    // code executes if all conditions are false
}
`)

const ifElseIfElseStatementExample = ref(`
int number = 0;
if (number > 0) {
    printf("The number is positive.\\n");
} else if (number < 0) {
    printf("The number is negative.\\n");
} else {
    printf("The number is zero.\\n");
}
`)

const switchStatementSyntax = ref(`
switch (variable) {
    case value1:
        // code executes if variable equals value1
        break;
    case value2:
        // code executes if variable equals value2
        break;
    default:
        // code executes if variable matches no case
}
`)

const switchStatementExample = ref(`
int day = 3;
switch (day) {
    case 1: printf("Monday\\n"); break;
    case 2: printf("Tuesday\\n"); break;
    case 3: printf("Wednesday\\n"); break;
    default: printf("Invalid day\\n");
}
`)

const ternaryOperatorSyntax = ref(`
condition ? value_if_true : value_if_false;
`)

const ternaryOperatorExample = ref(`
int number = 15;
printf("%s\\n", (number % 2 == 0) ? "Even" : "Odd");
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
	{title: 'Conditional Statements', route: '/blog/c-conditional-statements'},
	{title: 'Loops', route: '/blog/c-loops'}
]
</script>

<template>
	<MainLayout>
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Conditional Statements in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			Conditional statements in programming are fundamental constructs used to control the flow of a program based on
			certain conditions. In simple terms, they allow a program to make decisions. Just like humans make choices every
			day, deciding what to wear based on the weather or whether to take an umbrella depending on the forecast, programs
			also need a way to respond to different situations dynamically. Without conditional statements, programs would be
			rigid, executing instructions in a straight line without regard to input, environment, or changing circumstances.
			<br>
			These statements provide a mechanism for decision-making, enabling programs to branch out into different execution
			paths depending on whether certain conditions evaluate to true or false. This flexibility is essential in
			virtually every software application. For instance, imagine an online shopping website: if a user adds an item to
			the cart, the program needs to check whether the item is in stock. If it is, the program proceeds to checkout; if
			not, it shows an "out of stock" message. This ability to react differently depending on conditions is entirely
			driven by conditional statements.
			<br>
			Conditional statements form the backbone of many programming tasks. They allow developers to implement dynamic
			behavior, such as:

			<ul class="list-disc list-inside space-y-1">
				<li>
					Validating user input (example: checking if a password meets complexity requirements).
				</li>
				<li>Directing program flow in games (example: what happens when a player reaches a checkpoint.</li>
				<li>Handling different outcomes in simulations, calculations, or automated processes.</li>
				<li>Controlling hardware responses in embedded systems. (example: turning on a fan if the temperature exceeds a
				    threshold)
				</li>
			</ul>
			Essentially, any situation where a program must decide between multiple courses of action relies on conditional
			statements. Learning how to use these statements effectively is one of the first steps toward building robust and
			intelligent programs.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			1. If Statement
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">if</span> statement executes a block of code only when a specified
			condition evaluates to true. <br>
			Syntax:
			<CodeBlock :code="ifStatementSyntax" language="c" />
			The <span class="bg-pink-50 px-2 rounded-lg">if</span> statement is the simplest form of conditional statement. It
			allows a program to control the flow of a program based on certain conditions by executing code only when a
			specific condition is true. If the condition is false, the program skips the block and continues.
			<br>
			Example: Determine whether a number is even.
			<CodeBlock :code="ifStatementExample" language="c" />

			Explanation: <br>
			The condition <span class="bg-pink-50 px-2 rounded-lg">number % 2 == 0</span> checks whether
			<span class="bg-pink-50 px-2 rounded-lg">number</span> is divisible by 2. Since 8 is even, the statement inside
			the <span class="bg-pink-50 px-2 rounded-lg">if</span> block executes. If the number were 7, nothing would be
			printed, and the program would continue. <br>

			Use Cases:
			<ul class="list-disc list-inside space-y-1">
				<li>Performing actions based on a single condition.</li>
				<li>Triggering a notification if a sensor value exceeds a threshold.</li>
				<li>Validating simple inputs.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			2. If-Else Statement
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">if-else</span> statement executes one block if a condition is true
			and another block if it is false. <br>
			Syntax:
			<CodeBlock :code="ifElseStatementSyntax" language="c" />
			This statement allows programs to handle binary decisions. If the condition is true, the
			<span class="bg-pink-50 px-2 rounded-lg">if</span> block runs; if false, the
			<span class="bg-pink-50 px-2 rounded-lg">else</span> block runs. It ensures that some action occurs regardless of
			the input, which is useful for validating inputs or handling alternative flows.
			<br>
			Example: Determine if a number is positive or negative.
			<CodeBlock :code="ifElseStatementExample" language="c" />

			Explanation: <br>
			The condition <span class="bg-pink-50 px-2 rounded-lg">number > 0</span> checks if the number is positive. Since
			-5 is not greater than zero, the <span class="bg-pink-50 px-2 rounded-lg">else</span> block executes. This ensures
			the program always provides feedback.
			<br>
			Use Cases:
			<ul class="list-disc list-inside space-y-1">
				<li>Handling two mutually exclusive outcomes.</li>
				<li>Validating form fields or user input.</li>
				<li>Error handling when a condition is not met.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			3. If-Else If-Else Statement
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">if-else if-else</span> statement evaluates multiple conditions in
			sequence and executes the block corresponding to the first true condition. <br>
			Syntax:
			<CodeBlock :code="ifElseIfElseStatementSyntax" language="c" />
			This structure is useful for programs that need to select from more than two possibilities. Conditions are checked
			from top to bottom, and only the first true block executes. It helps reduce nested if statements and improves
			readability.
			<br>
			Example: Categorize a number as positive, negative, or zero.
			<CodeBlock :code="ifElseIfElseStatementExample" language="c" />

			Explanation: <br>
			The program first checks if the number is greater than zero, then less than zero. If neither is true, the <span
				class="bg-pink-50 px-2 rounded-lg">else</span> block executes. For a number equal to zero, the output will
			indicate "The number is zero."
			<br>
			Use Cases:
			<ul class="list-disc list-inside space-y-1">
				<li>Implementing multi-way decision logic.</li>
				<li>Menu selection or multiple category classification.</li>
				<li>Sequential checks where order matters.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			4. Switch Statement
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The <span class="bg-pink-50 px-2 rounded-lg">switch</span> statement selects one of many code blocks to execute
			based on the value of a variable. <br>
			Syntax:
			<CodeBlock :code="switchStatementSyntax" language="c" />
			The <span class="bg-pink-50 px-2 rounded-lg">switch</span> statement is ideal for discrete choices where a
			variable may match multiple cases. The <span class="bg-pink-50 px-2 rounded-lg">break</span> statement prevents
			fall-through, while <span class="bg-pink-50 px-2 rounded-lg">default</span> handles unexpected values.
			<br>
			Example: Print the day of the week based on a number.
			<CodeBlock :code="switchStatementExample" language="c" />

			Explanation: <br>
			For day = 3, the program matches case 3 and prints "Wednesday". If the variable does not match any case, the <span
				class="bg-pink-50 px-2 rounded-lg">default</span> block executes. This ensures the program can respond even to
			unexpected inputs.
			<br>
			Use Cases:
			<ul class="list-disc list-inside space-y-1">
				<li>Handling menus or multiple-choice input.</li>
				<li>Implementing state machines or modes.</li>
				<li>Replacing long if-else chains for better readability.</li>
			</ul>
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			5. Ternary Operator
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The ternary operator (<span class="bg-pink-50 px-2 rounded-lg">?:</span>) provides a shorthand for simple if-else
			statements. <br>
			Syntax:
			<CodeBlock :code="ternaryOperatorSyntax" language="c" />
			This operator evaluates a condition and returns one of two values depending on whether the condition is true or
			false. It is best used for concise assignments or inline decisions, though complex usage can reduce readability.
			<br>
			Example: Check if a number is even or odd.
			<CodeBlock :code="ternaryOperatorExample" language="c" />

			Explanation: <br>
			The expression <span class="bg-pink-50 px-2 rounded-lg">(number % 2 == 0) ? "Even" : "Odd"</span> evaluates the
			condition first. Since 15 % 2 != 0, the operator returns "Odd". The ternary operator is compact and suitable for
			inline outputs or assignments.
			<br>
			Use Cases:
			<ul class="list-disc list-inside space-y-1">
				<li>Inline conditional assignments.</li>
				<li>Short decision-making without multiple lines of code.</li>
				<li>Functional or expression-based logic in concise forms.</li>
			</ul>
		</p>

		<UsefulLinks :links="links" />
		can you
	</MainLayout>
</template>