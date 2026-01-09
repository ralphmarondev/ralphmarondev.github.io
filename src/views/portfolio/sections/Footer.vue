<script setup lang="ts">
import {onMounted, onUnmounted, ref} from 'vue'

const showButton = ref(false)
const currentYear = ref(new Date().getFullYear())
const handleScroll = () => {
	showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
	window.scrollTo({top: 0, behavior: 'smooth'})
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<div>
		<div v-show="showButton"
		     class="fixed bottom-8 right-8 z-50 transition-opacity duration-500">
			<button
					@click="scrollToTop"
					class="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-purple-700 transition-transform duration-300 hover:translate-y-1"
					aria-label="Scroll to top">
				<i class="bx bx-chevron-up text-2xl"></i>
			</button>
		</div>
		<footer class="bg-gray-900 dark:bg-gray-950 text-white py-6" id="footer">
			<div class="container">
				<div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
					<p class="text-gray-400 text-sm">
						&copy; {{ currentYear }} Ralph Maron Eda. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>