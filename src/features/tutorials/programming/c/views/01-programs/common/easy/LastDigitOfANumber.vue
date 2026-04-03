<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import { ref } from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import TaskCard from '@/shared/components/TaskCard.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 31, 2026'

const program = ref(`
#include <stdio.h>

int main()
{
	int n, lastDigit;

	printf("Enter n: ");
	scanf("%d", &n);

	lastDigit = n % 10;
	printf("The last digit of %d is %d\\n", n, lastDigit);
	return 0;
}
`)

const sampleOutput = ref(`
Enter n: 12345
The last digit of 12345 is 5
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Last Digit of a Number</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				A number can be broken down into parts. The last digit can be obtained
				by isolating the remainder after division by 10.
			</p>

			<p class="mt-2 font-medium text-gray-700">Process:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Read an integer value</li>
				<li>Compute the remainder when divided by 10</li>
				<li>Store the result as the last digit</li>
				<li>Display the result</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Example Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>