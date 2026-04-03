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

    printf("Odd numbers up to %d:\\n", n);
    for(int i = 1; i <= n; i += 2) {
        printf("%d\\n", i);
    }

    return 0;
}
`)

const sampleOutput = ref(`
Enter a number: 10
Odd numbers up to 10:
1
3
5
7
9
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-solved-loops-arrays"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Print Odd Numbers up to N</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				The wizard wants to collect only the <Pill>odd</Pill> magical stones for a special potion.
				He must list all the odd numbers up to the number he chooses.
			</p>

			<p class="mt-2 font-medium">
				<strong>Task:</strong> Print all <Pill>odd numbers</Pill> from <Pill>1</Pill> up to a number <Pill>N</Pill> entered by the user.
			</p>

			<p class="mt-2 font-medium text-gray-700">Steps:</p>
			<ul class="list-inside space-y-1 mt-1">
				<li><Pill>Input</Pill> the maximum number <Pill>N</Pill></li>
				<li><Pill>Start</Pill> a loop from 1, incrementing by 2 each iteration</li>
				<li><Pill>Print</Pill> each number in the loop</li>
				<li>Stop the loop when you reach <Pill>N</Pill> or the last odd number before it</li>
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