<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import { ref } from 'vue'
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

    int last = arr[n - 1];
    for (int i = n - 1; i > 0; i--)
        arr[i] = arr[i - 1];
    arr[0] = last;

    printf("Array after right rotation: ");
    for (int i = 0; i < n; i++)
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
Array after right rotation: 50 10 20 30 40
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c/arrays/right-rotate"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Right Rotate an Array by One</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			Imagine a magical parade of numbers 🏰, where the last number wants to lead the line.
			Right rotating an array shifts each element one position to the right, and the last element moves to the first position.
			This program demonstrates how to accomplish a right rotation in C using a simple loop.
		</p>

		<p class="mt-4 text-lg font-semibold text-gray-800">Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>