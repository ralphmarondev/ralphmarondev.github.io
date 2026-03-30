<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 30, 2026'

const absoluteValue = ref(`
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main()
{
	int num = - 10;
	double decimal = -5.75;

	printf("Absolute value of %d: %d\\n", num, abs(num));
	printf("Absolute value of %.2f: %.2f\\n", decimal, fabs(decimal));

	return 0;
}
`)

const absoluteValueOutput = ref(`
Absolute value of -10: 10
Absolute value of -5.75 = 5.75
`)

const powerAndSquareRoot = ref(`
#include <stdio.h>
#include <math.h>

int main()
{
	double base = 2, exponent = 3;
	double number = 16;

	printf("%.0f raised to %.0f is %.0f\\n", base, exponent, pow(base, exponent));
	printf("Square root of %.0f is %.0f\\n", number, sqrt(number));

	return 0;
}
`)

const powerAndSquareRootOutput = ref(`
2 raised to 3 is 8
Square root of 16 is 4
`)

const roundingFunctions = ref(`
#include <stdio.h>
#include <math.h>

int main()
{
	double num1 = 5.3, num2 = 5.7;

	printf("Ceil of %.1f: %.0f\\n", num1, ceil(num1));
	printf("Floor of %.1f: %.0f\\n", floor(num2));
	printf("Round of %.1f: %.0f\\n", round(num2));

	return 0;
}
`)

const roundingFunctionsOutput = ref(`
Ceil of 5.3: 6
Floor of 5.7: 5
Round of 5.7: 6
`)

const trigonometricFunctions = ref(`
#include <stdio.h>
#include <math.h>
#define PI 3.14159265

int main()
{
	double angleDeg = 30;
	double angleRad = angleDeg * PI / 180;

	printf("sin(%.0f) = %.2f\\n", angleDeg, sin(angleRad));
	printf("cos(%.0f) = %.2f\\n", angleDeg, cos(angleRad));
	printf("tan(%.0f) = %.2f\\n", angleDeg, tan(angleRad));

	return 0;
}
`)

const trigonometricFunctionsOutput = ref(`
sin(30) = 0.50
cos(30) = 0.87
tan(30) = 0.58
`)

const otherUsefulFunctions = ref(`
#include <stdio.h>
#include <math.h>

int main()
{
	double num = 10;

	printf("Natural log of %.0f: %.2f\\n", num, log(num));
	printf("Base-10 log of %.0f: %.2f\\n", num, log10(num));
	printf("Exponential of 2: %.2f\\n", exp(2));
	return 0;
}
`)

const otherUsefulFunctionsOutput = ref(`
Natural log of 10: 2.30
Base-10 log of 10: 1.00
Exponential of 2: 7.39
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-programming-language">
		<h2 class="text-3xl font-bold text-gray-800 mb-2">C Math Functions</h2>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-500 mb-2 text-lg">
			C provides a powerful set of mathematical functions in the &lt;math.h&gt; library. These functions help perform
			common operations like finding powers, roots, rounding, and trigonometry. In this tutorial, we will cover the most
			commonly used math functions with examples.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Absolute Value - abs() and fabs()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			The abs() function returns the absolute value of an integer, while fabs() works for floating-point numbers.
			<CodeBlock :code="absoluteValue" language="c" />
			Output:
			<OutputBlock :output="absoluteValueOutput" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Power and Square Root - pow() and sqrt()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>pow(x, y) returns x^y (x raised to the power of y)</li>
				<li>sqrt(x) returns the square root of x</li>
			</ul>
			<CodeBlock :code="powerAndSquareRoot" language="c" />
			Output:
			<OutputBlock :output="powerAndSquareRootOutput" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Rounding Functions - ceil(), floor(), round()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>ceil(x) = rounds x up to the nearest integer.</li>
				<li>floor(x) = rounds x down to the nearest integer.</li>
				<li>round(x) = rounds x to the nearest integer.</li>
			</ul>
			<CodeBlock :code="roundingFunctions" language="c" />
			Output:
			<OutputBlock :output="roundingFunctionsOutput" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Trigonometric Functions - sin(), cos(), tan()
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			Trigonometric functions in C work with radians, not degrees. You can convert degrees to radians by muliplying with
			pi/180.
			<CodeBlock :code="trigonometricFunctions" language="c" />
			Output:
			<OutputBlock :output="trigonometricFunctionsOutput" />
			Tip: Use M_PI from &lt;math.h&gt; if your compiler supports it instead of defining PI manually.
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Other Useful Functions
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>log(x) = natural logarithm (lnx)</li>
				<li>log10(x) = base-10 logarithm</li>
				<li>exp(x) = e^x (exponential function</li>
				<li>fabs(x) = absolute value for floats/doubles</li>
			</ul>
			<CodeBlock :code="otherUsefulFunctions" language="c" />
			Output:
			<OutputBlock :output="otherUsefulFunctionsOutput" />
		</p>

		<h2 class="text-2xl font-semibold text-gray-800 mb-2">
			Summary
		</h2>
		<p class="text-gray-500 mb-2 text-lg">
			<ul class="list-disc list-inside space-y-1">
				<li>Math functions in C are available through &lt;math.h&gt;.</li>
				<li>Key functions include: abs(), fabs(), pow(), sqrt(), ceil(), floor(), round(), sin(), cos(), tan(), log(),
				    and exp().
				</li>
				<li>Trigonometric functions require radians.</li>
			</ul>
		</p>
	</TutorialMainLayout>
</template>