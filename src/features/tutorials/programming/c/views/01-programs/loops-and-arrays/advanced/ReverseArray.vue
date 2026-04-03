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

    printf("Enter size of array: ");
    scanf("%d", &n);

    int arr[n];

    for (int i = 0; i < n; i++) {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &arr[i]);
    }

    printf("Original array: ");
    for (int i = 0; i < n; i++)
        printf("%d ", arr[i]);

    printf("\\nReversed array: ");
    for (int i = n - 1; i >= 0; i--)
        printf("%d ", arr[i]);

    printf("\\n");
    return 0;
}
`)

const sampleOutput = ref(`
Enter size of array: 5
Enter element 1: 10
Enter element 2: 20
Enter element 3: 30
Enter element 4: 40
Enter element 5: 50
Original array: 10 20 30 40 50
Reversed array: 50 40 30 20 10
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c/arrays/reverse-array"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Reverse an Array</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			Imagine a magical row of numbered stones in a forest 🌲. A fairy asks you to flip the order of the stones so the
			last comes first, and the first goes last. <br>
			This program demonstrates how to reverse the elements of an array in C — a practical skill for rearranging data
			efficiently.
		</p>

		<p class="mt-4 text-lg font-semibold text-gray-800">Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>