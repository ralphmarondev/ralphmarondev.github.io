<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'
import TaskCard from '@/shared/components/TaskCard.vue'
import OutputBlock from '@/shared/components/OutputBlock.vue'

const lastUpdated = 'March 31, 2026'

const program = ref(`
#include <stdio.h>

int main() {
    for(int i = 1; i <= 30; i++) {
        if(i % 3 == 0 && i % 5 == 0)
            printf("FizzBuzz\\n");
        else if(i % 3 == 0)
            printf("Fizz\\n");
        else if(i % 5 == 0)
            printf("Buzz\\n");
        else
            printf("%d\\n", i);
    }
    return 0;
}
`)

const sampleOutput = ref(`
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">FizzBuzz Challenge</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				The FizzBuzz challenge prints numbers from 1 to 30 (or any range) but:
			</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Print <strong>Fizz</strong> for numbers divisible by 3</li>
				<li>Print <strong>Buzz</strong> for numbers divisible by 5</li>
				<li>Print <strong>FizzBuzz</strong> for numbers divisible by both 3 and 5</li>
				<li>Otherwise, print the number itself</li>
			</ul>
		</TaskCard>

		<p class="mt-6 text-lg font-semibold text-gray-800">Solution</p>
		<CodeBlock :code="program" language="c" />

		<p class="mt-6 text-lg font-semibold text-gray-800">Sample Output</p>
		<OutputBlock :output="sampleOutput" />
	</TutorialMainLayout>
</template>