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

    int arr[n], even[n], odd[n];
    int evenCount = 0, oddCount = 0;

    for (int i = 0; i < n; i++) {
        printf("Enter element %d: ", i + 1);
        scanf("%d", &arr[i]);
        if (arr[i] % 2 == 0)
            even[evenCount++] = arr[i];
        else
            odd[oddCount++] = arr[i];
    }

    printf("Even elements: ");
    for (int i = 0; i < evenCount; i++)
        printf("%d ", even[i]);
    printf("\\n");

    printf("Odd elements: ");
    for (int i = 0; i < oddCount; i++)
        printf("%d ", odd[i]);
    printf("\\n");

    return 0;
}
`)

const sampleOutput = ref(`
Enter size of array: 6
Enter element 1: 10
Enter element 2: 15
Enter element 3: 20
Enter element 4: 25
Enter element 5: 30
Enter element 6: 35
Even elements: 10 20 30
Odd elements: 15 25 35
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c/arrays/separate-even-odd"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Separate Even and Odd Elements into Two Arrays</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-600 mb-4 text-lg">
			Once upon a time in a land of numbers 🏰, the even knights and odd knights wanted to line up in their own groups.
			This program reads a list of numbers and separates them into two arrays: one containing all even numbers, and
			another containing all odd numbers.
			It’s a great way to learn conditional checks and array handling in C!
		</p>

		<p class="mt-4 text-lg font-semibold text-gray-800">Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>