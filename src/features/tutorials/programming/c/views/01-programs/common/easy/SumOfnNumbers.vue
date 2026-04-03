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
	int n, temp, sum = 0;

	printf("Enter n: ");
	scanf("%d", &n);

	for (int i = 0; i < n; i++)
	{
		printf("Enter number %d: ", i + 1);
		scanf("%d", &temp);
		sum += temp;
	}
	printf("Sum of %d number: %d\\n", n, sum);
	return 0;
}
`)

const sampleOutput = ref(`
Enter n: 3
Enter number 1: 5
Enter number 2: 10
Enter number 3: 2
Sum of 3 number: 17
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Sum of N Numbers</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				Multiple values can be processed one at a time using repetition.
				Each value is added to a running total until all inputs are handled.
			</p>

			<p class="mt-2 font-medium text-gray-700">Process:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Read the total count of numbers</li>
				<li>Repeat input for each value using a loop</li>
				<li>Add each value to the running sum</li>
				<li>After the loop, display the total sum</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Example Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>