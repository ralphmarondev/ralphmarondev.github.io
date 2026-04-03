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

	if(n % 2 == 0)
		printf("Even");
	else
		printf("Odd");

	return 0;
}
`)

const sampleOutput = ref(`
Enter number: 7
Odd
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Odd or Even Checker</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				This program checks whether a given integer is <strong>odd</strong> or <strong>even</strong>.
				It uses the modulo operator <code>%</code> to find the remainder when dividing by 2.
			</p>

			<p class="mt-2 font-medium text-gray-700">Logic:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Read an integer from the user</li>
				<li>If the remainder of division by 2 is 0 (number is even)</li>
				<li>Otherwise (number is odd)</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>