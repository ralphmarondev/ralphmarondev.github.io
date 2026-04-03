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
    printf("Hello Sir Ralph :)");
    return 0;
}
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs"
	>
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Print Hello Sir Ralph :)</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<TaskCard>
			<p>
				Imagine a friendly little wizard who wants to greet his mentor, <strong>Sir Ralph</strong>.
				He casts a simple <code>printf</code> spell to display a message on the screen.
			</p>

			<p class="mt-2 font-medium">
				<strong>Task:</strong> Write a program that prints a friendly greeting to the screen.
			</p>

			<p class="mt-2 font-medium text-gray-700">Description:</p>
			<ul class="list-disc list-inside space-y-1 mt-1">
				<li>Use the <code>printf</code> function to display text.</li>
				<li>End your program with <code>return 0;</code> to indicate successful execution.</li>
				<li>This introduces you to <strong>basic C syntax</strong> and the structure of a program.</li>
			</ul>
		</TaskCard>

		<CodeBlock :code="program" language="c" />
	</TutorialMainLayout>
</template>