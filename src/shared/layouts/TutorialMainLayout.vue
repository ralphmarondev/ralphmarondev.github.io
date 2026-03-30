<script setup lang="ts">
import Footer from '@/shared/layouts/Footer.vue'

interface Props {
	title?: string
	link?: string
}

const props = withDefaults(defineProps<Props>(), {
	title: 'Tutorials',
	link: '/tutorials'
})
</script>

<template>
	<div class="flex flex-col min-h-screen">
		<nav class="bg-white dark:bg-gray-900 shadow-md sticky top-0 w-full z-50">
			<div class="max-w-5xl mx-auto">
				<div class="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
					<router-link :to="props.link" class="flex items-center space-x-2">
						<i class="bx bx-code text-2xl text-gray-800 dark:text-white"></i>
						<span class="font-bold text-xl text-gray-800 dark:text-white">
              {{ props.title }}
            </span>
					</router-link>
				</div>
			</div>
		</nav>

		<main class="flex-1 px-6 py-6 md:px-8 lg:px-12 max-w-5xl mx-auto">
			<slot />
		</main>

		<Footer />
	</div>
</template>

<style>
::selection {
	background-color: #f472b6;
	color: #ffffff;
}

.dark ::selection {
	background-color: #ec4899;
	color: #ffffff;
}
</style>