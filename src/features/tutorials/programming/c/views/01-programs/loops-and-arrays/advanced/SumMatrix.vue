<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import { ref } from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'April 3, 2026'

const program = ref(`
#include <stdio.h>

int main() {
    int rows, cols;

    printf("Enter number of rows: ");
    scanf("%d", &rows);
    printf("Enter number of columns: ");
    scanf("%d", &cols);

    int matrix[rows][cols];
    int sum = 0;

    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            printf("Enter element [%d][%d]: ", i, j);
            scanf("%d", &matrix[i][j]);
            sum += matrix[i][j];
        }
    }

    printf("Sum of all elements: %d\\n", sum);
    return 0;
}
`)

const sampleOutput = ref(`
Enter number of rows: 2
Enter number of columns: 3
Enter element [0][0]: 1
Enter element [0][1]: 2
Enter element [0][2]: 3
Enter element [1][0]: 4
Enter element [1][1]: 5
Enter element [1][2]: 6
Sum of all elements: 21
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c/arrays/sum-2d-array"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Sum of 2D Array (Matrix)</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			Imagine a magical grid in a fairyland 🏰, where each cell holds a treasure.
			Our hero, the brave coder, wants to find the total treasure in the kingdom.
			This program lets you input values into a 2D array (matrix) and calculates the sum of all elements.
			Along the way, you’ll practice nested loops and indexing in C!
		</p>

		<p class="mt-4 text-lg font-semibold text-gray-800">Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>