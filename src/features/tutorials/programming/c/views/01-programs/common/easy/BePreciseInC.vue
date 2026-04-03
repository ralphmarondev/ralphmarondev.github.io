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
	float value;

	printf("Enter a decimal number: ");
	scanf("%f", &value);

	printf("Default output: %f\\n", value);
	printf("2 decimal places: %.2f\\n", value);
	printf("4 decimal places: %.4f\\n", value);

	return 0;
}
`)

const sampleOutput = ref(`
Enter a decimal number: 3.14159
Default output: 3.141590
2 decimal places: 3.14
4 decimal places: 3.1416
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Be Precise in C</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				A value can appear differently depending on how it is formatted during output.
				The same number may show more or fewer decimal places.
			</p>

			<p class="mt-2 font-medium text-gray-700">Process:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Read a floating-point value</li>
				<li>Display it using the default format</li>
				<li>Display it with 2 decimal places</li>
				<li>Display it with 4 decimal places</li>
				<li>Compare the outputs</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Example Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>