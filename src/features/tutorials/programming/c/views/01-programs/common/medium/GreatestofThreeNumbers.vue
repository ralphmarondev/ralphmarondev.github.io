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
    int x, y, z, max;

    printf("Enter first number: ");
    scanf("%d", &x);

    printf("Enter second number: ");
    scanf("%d", &y);

    printf("Enter third number: ");
    scanf("%d", &z);

    max = x;
    if (y > max)
        max = y;
    if (z > max)
        max = z;

    printf("Greatest: %d\\n", max);
    return 0;
}
`)

const sampleOutput = ref(`
Enter first number: 12
Enter second number: 7
Enter third number: 19
Greatest: 19
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Greatest of Three Numbers</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>In this exercise, we aim to determine the largest of three numbers entered by the user. The program should:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Prompt the user to input three numbers</li>
				<li>Compare the first number with the second and third</li>
				<li>Update the maximum value if a larger number is found</li>
				<li>Display the greatest number as the result</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>