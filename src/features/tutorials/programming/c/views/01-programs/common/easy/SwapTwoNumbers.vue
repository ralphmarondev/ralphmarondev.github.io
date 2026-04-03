<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import TaskCard from '@/shared/components/TaskCard.vue'

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

	int temp = y;
	y = x;
	x = temp;

	printf("x: %d\\n", x);
	printf("y: %d\\n", y);
	return 0;
}
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Swap Two Numbers</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				Two values need to exchange places. To do this safely, we temporarily store one value
				so it won’t be lost during the swap.
			</p>

			<p class="mt-2 font-medium text-gray-700">Process:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Read two integer values</li>
				<li>Store the second value in a temporary variable</li>
				<li>Assign the first value to the second variable</li>
				<li>Assign the temporary value to the first variable</li>
				<li>Display the updated values</li>
			</ul>
		</TaskCard>

		<CodeBlock :code="program" language="c" />
	</TutorialMainLayout>
</template>