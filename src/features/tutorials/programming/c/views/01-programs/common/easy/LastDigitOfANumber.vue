<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import {ref} from 'vue'
import CodeBlock from '@/shared/components/CodeBlock.vue'

const lastUpdated = 'March 31, 2026'

const program = ref(`
#include <stdio.h>

int main()
{
	int n, lastDigit;

	printf("Enter n: ");
	scanf("%d", &n);

	lastDigit = n % 10;
	printf("The last digit of %d is %d\\n", n, lastDigit);
	return 0;
}
`)
</script>

<template>
	<TutorialMainLayout
			title="C Programming"
			link="/c-common-programs">
		<h1 class="text-4xl font-bold text-gray-800 mb-2">Last Digit of a Number</h1>
		<p class="text-sm text-gray-500 mb-4">Last Updated : {{ lastUpdated }}</p>

		<p class="text-gray-500 mb-2 text-lg">
			<CodeBlock :code="program" language="c" />
		</p>
	</TutorialMainLayout>
</template>