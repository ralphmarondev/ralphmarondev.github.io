<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import TaskCard from '@/shared/components/TaskCard.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 31, 2026'

const program = ref(`
#include <stdio.h>

int main()
{
    int n, firstDigit;

    printf("Enter number: ");
    scanf("%d", &n);

    // Make sure n is positive
    if (n < 0)
        n = -n;

    while (n >= 10)
        n /= 10;

    firstDigit = n;
    printf("The first digit is %d\\n", firstDigit);

    return 0;
}
`)

const sampleOutput = ref(`
Enter number: 98765
The first digit is 9
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">First Digit of a Number</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				This program finds the <strong>first digit</strong> of a given integer.
				It repeatedly divides the number by 10 until only the first digit remains.
			</p>

			<p class="mt-2 font-medium text-gray-700">Steps:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Read an integer from the user</li>
				<li>Convert negative numbers to positive (if needed)</li>
				<li>Divide the number by 10 in a loop until it is less than 10</li>
				<li>Print the resulting number as the first digit</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>