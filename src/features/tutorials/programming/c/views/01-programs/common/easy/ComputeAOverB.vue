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
	int a, b;

	printf("Enter a: ");
	scanf("%d", &a);

	printf("Enter b: ");
	scanf("%d", &b);

	if (b != 0)
		printf("Result: %d\\n", a / b);
	else
		printf("Invalid, division by 0\\n");
	return 0;
}
`)

const sampleOutput = ref(`
Enter a: 10
Enter b: 2
Result: 5
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Compute A / B</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				A division operation requires a valid divisor. Before performing the operation,
				the second value must be checked to avoid an invalid computation.
			</p>

			<p class="mt-2 font-medium text-gray-700">Process:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Read two integer values</li>
				<li>Check if the second value is not equal to 0</li>
				<li>If valid, perform the division</li>
				<li>Otherwise, display an error message</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Example Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>