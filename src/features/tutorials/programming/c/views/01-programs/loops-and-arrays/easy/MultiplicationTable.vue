<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import { ref } from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'
import TaskCard from '@/shared/components/TaskCard.vue'
import Pill from '@/shared/components/Pill.vue'

const lastUpdated = 'April 3, 2026'

const codeGoesHere = ref(`
#include <stdio.h>

int main()
{
	// Your code goes here

	return 0;
}
`)
const showSolution = ref(false)
const program = ref(`
#include <stdio.h>

int main() {
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);

    printf("Multiplication table of %d:\\n", n);
    for(int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\\n", n, i, n * i);
    }

    return 0;
}
`)

const sampleOutput = ref(`
Enter a number: 5
Multiplication table of 5:
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-solved-loops-arrays"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Print Multiplication Table</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				Imagine a wizard teaching young apprentices how to cast **magic multiplications**.
				He wants to show the powers of a number <Pill>N</Pill> from <Pill>1</Pill> to <Pill>10</Pill>.
			</p>

			<p class="mt-2 font-medium">
				<strong>Task:</strong> Print the <Pill>multiplication table</Pill> of a number entered by the user.
			</p>

			<p class="mt-2 font-medium text-gray-700">Steps:</p>
			<ul class="list-inside space-y-1 mt-1">
				<li><Pill>Input</Pill> the number <Pill>N</Pill></li>
				<li>Use a <Pill>loop</Pill> from 1 to 10</li>
				<li>In each iteration, multiply <Pill>N</Pill> by the loop variable</li>
				<li><Pill>Print</Pill> the result in the format: <Pill>N x i = product</Pill></li>
			</ul>
		</TaskCard>

		<p class="mt-2 font-medium text-gray-700">Your Solution:</p>
		<CodeBlock :code="codeGoesHere" language="c" />
		<p class="mt-2 font-medium text-gray-700">Sample Output:</p>
		<OutputBlock :output="sampleOutput" />
		<div class="mt-3">
			<button
					@click="showSolution = !showSolution"
					class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
				{{ showSolution ? 'Hide Solution' : 'Show Solution' }}
			</button>
		</div>

		<div v-if="showSolution" class="mt-3">
			<CodeBlock :code="program" language="c" />
		</div>
	</TutorialMainLayout>
</template>