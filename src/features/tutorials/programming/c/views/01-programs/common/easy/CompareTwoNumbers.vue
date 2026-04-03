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
	int x, y;

	printf("Enter x: ");
	scanf("%d", &x);

	printf("Enter y: ");
	scanf("%d", &y);

	if(x == y)
		printf("Equal");
	else
		printf("Not equal");
	return 0;
}
`)

const sampleOutput = ref(`
Enter x: 10
Enter y: 10
Equal
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Compare Two Numbers</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				Two values can be checked to determine if they are the same.
				A condition is used to decide which result to display.
			</p>

			<p class="mt-2 font-medium text-gray-700">Process:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Read two integer values</li>
				<li>Evaluate if both values are equal</li>
				<li>If true, display "Equal"</li>
				<li>Otherwise, display "Not equal"</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Example Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>