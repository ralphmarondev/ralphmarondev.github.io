<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'April 3, 2026'

const program = ref(`
#include <stdio.h>

int main() {
    int n;

    printf("Enter number of rows: ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\\n");
    }

    return 0;
}
`)

const sampleOutput = ref(`
Enter number of rows: 5
*
* *
* * *
* * * *
* * * * *
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c/loops/star-patterns"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Print Star Patterns (Nested Loops)</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			Once upon a time in a magical kingdom ✨, there was a wizard who loved arranging stars in perfect triangles.
			Each row of stars represented a level of the castle tower.
			This program uses nested loops in C to create such a triangular pattern of stars.
			By adjusting the number of rows, you control how tall the magical tower grows!
		</p>

		<p class="mt-4 text-lg font-semibold text-gray-800">Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>