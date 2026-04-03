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
	int n, count = 0;

	printf("Enter n: ");
	scanf("%d", &n);

	while (n != 0)
	{
		n /= 10;
		count++;
	}

	printf("Number of digits: %d\\n", count);
	return 0;
}
`)

const sampleOutput = ref(`
Enter n: 12345
Number of digits: 5
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Count Digits</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				A number can be reduced step by step by removing its last digit.
				Each step represents one digit until the number becomes zero.
			</p>

			<p class="mt-2 font-medium text-gray-700">Process:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Read an integer value</li>
				<li>Repeat while the number is not equal to 0</li>
				<li>Remove the last digit using division by 10</li>
				<li>Increase the digit counter each step</li>
				<li>Display the total count</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Example Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>