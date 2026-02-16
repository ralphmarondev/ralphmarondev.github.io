<script setup lang="ts">
import MainLayout from '@/blog/layouts/MainLayout.vue'
import UsefulLinks from '@/blog/components/UsefulLinks.vue'
import {ref} from 'vue'
import CodeBlock from '@/blog/components/CodeBlock.vue'
import OutputBlock from '@/blog/components/OutputBlock.vue'

const lastUpdated = 'February 16, 2026'

const arithmeticOperatorsExample = ref(`
#include <stdio.h>

int main() {
    int x = 15, y = 4;

    printf("x + y = %d\\n", x + y);
    printf("x - y = %d\\n", x - y);
    printf("x * y = %d\\n", x * y);
    printf("x / y = %d\\n", x / y);
    printf("x %% y = %d\\n", x % y);
    printf("++x = %d\\n", ++x);
    printf("--y = %d\\n", --y);

    return 0;
}
`)

const arithmeticOperatorsOutput = ref(`
x + y = 19
x - y = 11
x * y = 60
x / y = 3
x % y = 3
++x = 16
--y = 3
`)

const relationalOperatorsExample = ref(`
#include <stdio.h>

int main() {
    int a = 10, b = 20;

    printf("a < b : %d\\n", a < b);
    printf("a > b : %d\\n", a > b);
    printf("a == b: %d\\n", a == b);
    printf("a != b: %d\\n", a != b);

    return 0;
}
`)

const relationalOperatorsOutput = ref(`
a < b : 1
a > b : 0
a == b: 0
a != b: 1
`)

const logicalOperatorsExample = ref(`
#include <stdio.h>

int main() {
    int x = 1, y = 0;

    printf("x && y = %d\\n", x && y);
    printf("x || y = %d\\n", x || y);
    printf("!x = %d\\n", !x);

    return 0;
}
`)

const logicalOperatorsOutput = ref(`
x && y = 0
x || y = 1
!x = 0
`)

const bitwiseOperatorsExample = ref(`
#include <stdio.h>

int main() {
    int x = 5, y = 3;

    printf("x & y = %d\\n", x & y);
    printf("x | y = %d\\n", x | y);
    printf("x ^ y = %d\\n", x ^ y);
    printf("~x = %d\\n", ~x);
    printf("x << 1 = %d\\n", x << 1);
    printf("x >> 1 = %d\\n", x >> 1);

    return 0;
}
`)

const bitwiseOperatorsOutput = ref(`
x & y = 1
x | y = 7
x ^ y = 6
~x = -6
x << 1 = 10
x >> 1 = 2
`)

const assignOperatorsExample = ref(`
#include <stdio.h>

int main() {
    int x = 10, y = 3;

    x += y;  // x = x + y
    printf("x += y : %d\\n", x);

    x *= y;  // x = x * y
    printf("x *= y : %d\\n", x);

    return 0;
}
`)

const assignmentOperatorsOutput = ref(`
x += y : 13
x *= y : 39
`)

const miscellaneousOperatorsExample = ref(`
#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;

    printf("sizeof(num) = %zu bytes\\n", sizeof(num));
    printf("&num = %p\\n", &num);
    printf("*ptr = %d\\n", *ptr);
    printf("(num > 5) ? 100 : 200 = %d\\n", (num > 5) ? 100 : 200);
    printf("(float)num = %f\\n", (float)num);

    return 0;
}
`)

const miscellaneousOperatorsOutput = ref(`
sizeof(num) = 4 bytes
&num = 0x7ffeea123abc
*ptr = 10
(num > 5) ? 100 : 200 = 100
(float)num = 10.000000
`)

const operatorPrecedenceAndAssociativityExample = ref(`
#include <stdio.h>

int main() {
    int result;

    result = 10 + 20 * 3;  // multiplication has higher precedence
    printf("%d\\n", result); // prints 70

    result = (10 + 20) * 3;  // parentheses change the order
    printf("%d\\n", result); // prints 90

    return 0;
}
`)

const operatorPrecedenceOutput = ref(`
70
90
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
		<h2 class="text-3xl font-bold text-gray-800 mb-2">Operators in C</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			Operators are symbols that perform specific operations on data. In C programming, they are fundamental building
			blocks used to manipulate values stored in variables.
			<ul class="list-disc list-inside space-y-1">
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">Operands</span>
					are the values or variables that operators act upon.
				</li>
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">Operators</span>
					are the symbols that specify what kind of operation is performed on the operands.
				</li>
			</ul>
			C provides a wide range of operators, including:
			<ul class="list-disc list-inside space-y-1">
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">Arithmetic operators</span>
					for mathematical calculations.
				</li>
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">Relational operators</span>
					for comparing values.
				</li>
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">Logical operators</span>
					for evaluating conditions.
				</li>
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">Bitwise operators</span>
					for working at the binary level.
				</li>
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">Assignment operators</span>
					for storing values in variables.
				</li>
				<li>
					<span class="bg-pink-50 px-2 rounded-lg">Miscellaneous operators</span>
					like sizeof, cast, comma, and ternary operators.
				</li>
			</ul>
			Understanding operators and how they interact is crucial because they define the logic and calculations in a
			program.
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			1. Unary, Binary, and Ternary Operators
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Operators can be classified based on the number of operands they use:
			<ul class="list-disc list-inside space-y-1">
				<li><span class="text-pink-800">Unary operators</span>: operate on a single operand. Example:
					<span class="bg-pink-50 px-2 rounded-lg">++</span>,
					<span class="bg-pink-50 px-2 rounded-lg">--</span>,
					<span class="bg-pink-50 px-2 rounded-lg">!</span>
				</li>
				<li><span class="text-pink-800">Binary operators</span>: operate on a two operand. Example:
					<span class="bg-pink-50 px-2 rounded-lg">+</span>,
					<span class="bg-pink-50 px-2 rounded-lg">-</span>,
					<span class="bg-pink-50 px-2 rounded-lg">*</span>,
					<span class="bg-pink-50 px-2 rounded-lg">/</span>
				</li>
				<li><span class="text-pink-800">Ternary operators</span>: operate on a three operand. Example:
					<span class="bg-pink-50 px-2 rounded-lg">condition ? value_if_true : value_if_false</span>
				</li>
			</ul>
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			2. Arithmetic Operators
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Arithmetic operators perform mathematical operations on numbers.
			<ul class="list-disc list-inside space-y-1">
				<li> Operator
					<span class="bg-pink-50 px-2 rounded-lg">+</span>:
				     means Addition.
				</li>
				<li> Operator
					<span class="bg-pink-50 px-2 rounded-lg">-</span>:
				     means Subtraction.
				</li>
				<li> Operator
					<span class="bg-pink-50 px-2 rounded-lg">*</span>:
				     means Multiplication.
				</li>
				<li> Operator
					<span class="bg-pink-50 px-2 rounded-lg">/</span>:
				     means Division.
				</li>
				<li> Operator
					<span class="bg-pink-50 px-2 rounded-lg">%</span>:
				     means Modulus (remainder).
				</li>
				<li> Operator
					<span class="bg-pink-50 px-2 rounded-lg">++</span>:
				     means Increment by 1.
				</li>
				<li> Operator
					<span class="bg-pink-50 px-2 rounded-lg">--</span>:
				     means Decrement by 1.
				</li>
				<li> Operator
					<span class="bg-pink-50 px-2 rounded-lg">+</span> unary:
				     Unary plus.
				</li>
				<li> Operator
					<span class="bg-pink-50 px-2 rounded-lg">-</span> unary:
				     Unary minus.
				</li>
			</ul>

			<CodeBlock :code="arithmeticOperatorsExample" language="c" />
			Output:
			<OutputBlock :output="arithmeticOperatorsOutput" />
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			3. Relational Operators
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Relational operators are used to compare two values. They return 1 (true) if the condition is met and 0 (false)
			otherwise.
			<table class="my-2">
				<tr>
					<th>Operator</th>
					<th>Meaning</th>
				</tr>
				<tr>
					<td>&lt;</td>
					<td>Less than</td>
				</tr>
				<tr>
					<td>&gt;</td>
					<td>Greater than</td>
				</tr>
				<tr>
					<td>&lt;=</td>
					<td>Less than or equal to</td>
				</tr>
				<tr>
					<td>&gt;=</td>
					<td>Greater than or equal to</td>
				</tr>
				<tr>
					<td>==</td>
					<td>Equal to</td>
				</tr>
				<tr>
					<td>!=</td>
					<td>Not equal to</td>
				</tr>
			</table>
			Example:
			<CodeBlock :code="relationalOperatorsExample" language="c" />
			Output:
			<OutputBlock :output="relationalOperatorsOutput" />
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			4. Logical Operators
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Logical operators combine or negate conditions.
			<table class="my-2">
				<tr>
					<th>Operator</th>
					<th>Meaning</th>
				</tr>
				<tr>
					<td>&&</td>
					<td>Logical AND</td>
				</tr>
				<tr>
					<td>||</td>
					<td>Logical OR</td>
				</tr>
				<tr>
					<td>!</td>
					<td>Logical NOT</td>
				</tr>
			</table>
			Example:
			<CodeBlock :code="logicalOperatorsExample" language="c" />
			Output:
			<OutputBlock :output="logicalOperatorsOutput" />
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			5. Bitwise Operators
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Bitwise operators perform operations on the binary representation of integers.
			<table class="my-2">
				<tr>
					<th>Operator</th>
					<th>Meaning</th>
				</tr>
				<tr>
					<td>&</td>
					<td>Bitwise AND</td>
				</tr>
				<tr>
					<td>|</td>
					<td>Bitwise OR</td>
				</tr>
				<tr>
					<td>^</td>
					<td>Bitwise XOR</td>
				</tr>
				<tr>
					<td>~</td>
					<td>Bitwise NOT</td>
				</tr>
				<tr>
					<td><<</td>
					<td>Left shift</td>
				</tr>
				<tr>
					<td>>></td>
					<td>Right shift</td>
				</tr>
			</table>
			Example:
			<CodeBlock :code="bitwiseOperatorsExample" language="c" />
			Output:
			<OutputBlock :output="bitwiseOperatorsOutput" />
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			6. Assignment Operators
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Assignment operators store or update the value of a variable.
			<table class="my-2">
				<tr>
					<th>Operator</th>
					<th>Meaning</th>
				</tr>
				<tr>
					<td>=</td>
					<td>Simple assignment</td>
				</tr>
				<tr>
					<td>+=</td>
					<td>Add and assign</td>
				</tr>
				<tr>
					<td>-=</td>
					<td>Subtract and assign</td>
				</tr>
				<tr>
					<td>*=</td>
					<td>Multiply and assign</td>
				</tr>
				<tr>
					<td>/=</td>
					<td>Divide and assign</td>
				</tr>
			</table>
			Example:
			<CodeBlock :code="assignOperatorsExample" language="c" />
			Output:
			<OutputBlock :output="assignmentOperatorsOutput" />
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			7. Miscellaneous Operators
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>sizeof - returns the size of a variable or data type in bytes.</li>
				<li>& - returns the address of a variable.</li>
				<li>* - dereferences a pointer.</li>
				<li>(type) - cast a variable to another data type.</li>
				<li>?: - ternary conditional operator.</li>
			</ul>
			Example:
			<CodeBlock :code="miscellaneousOperatorsExample" language="c" />
			Output:
			<OutputBlock :output="miscellaneousOperatorsOutput" />
		</p>

		<!--!!!-->
		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			8. Operator Precedence and Associativity
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			When expressions contain multiple operators, precedence and associativity decide the order of evaluation.

			<ul class="list-disc list-inside space-y-1">
				<li>Precedence: determines which operator is evaluated first.</li>
				<li>Associativity: determines the direction of evaluation when operators have the same precedence
				    (left-to-right) or right-to-left).
				</li>
			</ul>
			Example:
			<CodeBlock :code="operatorPrecedenceAndAssociativityExample" language="c" />
			Output:
			<OutputBlock :output="operatorPrecedenceOutput" />

			<span>Quick Reference Table: Precedence and Associativity</span>
			<table class="my-2">
				<tr>
					<th>Precedence</th>
					<th>Operators</th>
					<th>Associativity</th>
				</tr>
				<tr>
					<td>++ (postfix)</td>
					<td>Increment</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>-- (postfix)</td>
					<td>Decrement</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>++ (prefix)</td>
					<td>Increment</td>
					<td>Right to Left</td>
				</tr>
				<tr>
					<td>-- (prefix)</td>
					<td>Decrement</td>
					<td>Right to Left</td>
				</tr>
				<tr>
					<td>+ (unary)</td>
					<td>Unary plus</td>
					<td>Right to Left</td>
				</tr>
				<tr>
					<td>- (unary)</td>
					<td>Unary minus</td>
					<td>Right to Left</td>
				</tr>
				<tr>
					<td>!</td>
					<td>Logical NOT</td>
					<td>Right to Left</td>
				</tr>
				<tr>
					<td>~</td>
					<td>Bitwise NOT</td>
					<td>Right to Left</td>
				</tr>
				<tr>
					<td>*</td>
					<td>Multiplication</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>/</td>
					<td>Division</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>%</td>
					<td>Modulus</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>+</td>
					<td>Addition</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>-</td>
					<td>Subtraction</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td><<</td>
					<td>Left shift</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>>></td>
					<td>Right shift</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td><, <=</td>
					<td>Less than / Less than or equal to</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>>, >=</td>
					<td>Greater than / Greater than or equal to</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>==, !=</td>
					<td>Equality / Inequality</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>&&</td>
					<td>Logical AND</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>=</td>
					<td>Assignment</td>
					<td>Right to Left</td>
				</tr>
				<tr>
					<td>+=, -=, *=, /=, %=</td>
					<td>Compound Assignment</td>
					<td>Right to Left</td>
				</tr>
				<tr>
					<td>,</td>
					<td>Comma</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>()</td>
					<td>Parentheses / function call</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>[]</td>
					<td>Array subscript</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>.</td>
					<td>Structure member access</td>
					<td>Left to Right</td>
				</tr>
				<tr>
					<td>-></td>
					<td>Structure pointer access</td>
					<td>Left to Right</td>
				</tr>
			</table>
		</p>

		<UsefulLinks :links="links" />
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