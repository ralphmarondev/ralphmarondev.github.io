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

int main()
{
    // Print numbers from 1 to 10
    for(int i = 1; i <= 10; i++)
    {
        printf("%d\\n", i);
    }
    return 0;
}
`)

const sampleOutput = ref(`
1
2
3
4
5
6
7
8
9
10
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-solved-loops-arrays"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Print Numbers 1 to 10</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				Imagine a wizard counting magical crystals to power his spell.
				He wants to see each crystal number from 1 to 10 appear one by one.
			</p>

			<p class="mt-2 font-medium">
				<strong>Task:</strong> Print numbers from <Pill>1</Pill> to <Pill>10</Pill> using a <Pill>for</Pill> loop in C.
			</p>

			<p class="mt-2 font-medium text-gray-700">Steps:</p>
			<ul class="list-inside space-y-1 mt-1">
				<li><Pill>Initialize</Pill> a loop counter starting at 1</li>
				<li><Pill>Set</Pill> the loop to run until the counter is 10</li>
				<li><Pill>Print</Pill> the counter in each iteration</li>
				<li><Pill>Increment</Pill> the counter each time the loop runs</li>
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