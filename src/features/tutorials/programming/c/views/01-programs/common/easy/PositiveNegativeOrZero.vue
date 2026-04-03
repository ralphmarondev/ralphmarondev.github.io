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
	int n;

	printf("Enter number: ");
	scanf("%d", &n);

	if (n > 0)
		printf("Positive");
	else if (n < 0)
		printf("Negative");
	else
		printf("Zero");
	return 0;
}
`)

const sampleOutput = ref(`
Enter number: -5
Negative
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Positive, Negative, or Zero</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				A number can fall into different categories depending on its value.
				Conditions are evaluated in sequence to determine the correct result.
			</p>

			<p class="mt-2 font-medium text-gray-700">Process:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Read an integer value</li>
				<li>Check if the number is greater than 0</li>
				<li>If not, check if it is less than 0</li>
				<li>If neither condition is true, it is equal to 0</li>
				<li>Display the result</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Example Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>