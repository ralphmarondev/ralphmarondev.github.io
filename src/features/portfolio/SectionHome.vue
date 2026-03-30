<script setup lang="ts">
import {RouterLink, useRouter} from 'vue-router'
import {onMounted, ref, watch} from 'vue'
import AOS from 'aos'
import Typed from 'typed.js'

const router = useRouter()
const currentYear = new Date().getFullYear()
const START_YEAR = 2023
const yearsOfExperience = currentYear - START_YEAR

const theme = ref({
	dark: false, toggleTheme: () => {
		theme.value.dark = !theme.value.dark
	}
})

const handleImageClick = () => {
	// Easter egg to login page
	router.push({name: 'login'})
}

onMounted(() => {
	AOS.init()

	// Typing animation
	const typingElement = document.querySelector('#typing-text')
	if (typingElement) {
		new Typed('#typing-text', {
			strings: ['Mobile Developer', 'Computer Engineer', 'Fullstack Developer'],
			typeSpeed: 60,
			backSpeed: 40,
			backDelay: 2000,
			loop: true
		})
	}
})

watch(() => theme.value.dark, () => {
	AOS.refresh()
})
</script>

<template>
	<section id="home"
	         class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20 overflow-hidden">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
				<div class="space-y-8" data-aos="fade-right">
					<div class="space-y-4">
						<h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
							Hi, I'm Ralph Maron Eda
						</h1>
						<h2 class="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
							<span id="typing-text"></span>
						</h2>
					</div>
					<p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
						Crafting sleek and reliable mobile apps since {{ START_YEAR }}.
					</p>

					<!-- Social Links -->
					<div class="flex items-center space-x-4">
						<span class="text-gray-700 dark:text-gray-300 font-medium">Follow me:</span>
						<div class="flex space-x-3">
							<a href="https://github.com/ralphmarondev/"
							   target="_blank"
							   class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300">
								<i class="bx bxl-github text-lg"></i>
							</a>
							<a href="https://www.linkedin.com/in/ralph-maron-eda/"
							   target="_blank"
							   class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300">
								<i class="bx bxl-linkedin text-lg"></i>
							</a>
							<a href="https://www.instagram.com/ralphmaron/"
							   target="_blank"
							   class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300">
								<i class="bx bxl-instagram text-lg"></i>
							</a>
						</div>
					</div>

					<!-- CTA Buttons -->
					<div class="flex flex-col sm:flex-row gap-4">
						<a href="/Ralph-Maron-Eda-Resume.pdf"
						   target="_blank"
						   class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-1 transition-all duration-300">
							<i class="bx bx-download mr-2"></i> Download CV
						</a>
						<RouterLink :to="{path: '/', hash: '#contact'}"
						            class="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-semibold rounded-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all duration-300">
							<i class="bx bx-envelope mr-2"></i> Contact Me
						</RouterLink>
					</div>

					<!-- Quick Stats -->
					<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
						<div class="text-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
							<div class="text-xl font-bold text-purple-600 dark:text-purple-400">{{ yearsOfExperience }}</div>
							<div class="text-xs text-gray-600 dark:text-gray-400">Years Exp</div>
						</div>
						<div class="text-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
							<div class="text-xl font-bold text-purple-600 dark:text-purple-400">10+</div>
							<div class="text-xs text-gray-600 dark:text-gray-400">Projects</div>
						</div>
						<div class="text-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
							<div class="text-xl font-bold text-purple-600 dark:text-purple-400">5+</div>
							<div class="text-xs text-gray-600 dark:text-gray-400">Tech Stacks</div>
						</div>
						<div class="text-center p-2 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
							<div class="text-xl font-bold text-purple-600 dark:text-purple-400">4+</div>
							<div class="text-xs text-gray-600 dark:text-gray-400">Clients</div>
						</div>
					</div>
				</div>

				<!-- Profile Image with Floating Icons -->
				<div class="relative flex justify-center" data-aos="fade-left">
					<div class="relative z-10 cursor-pointer" @click="handleImageClick">
						<div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
						<img src="/ralphmaron.webp"
						     alt="Ralph Maron Eda"
						     class="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-800 hover:scale-105 transition-transform duration-300" />
					</div>
					<div class="absolute top-10 left-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-float">
						<i class="bx bxl-android text-2xl text-green-500"></i>
					</div>
					<div class="absolute bottom-10 right-0 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-float-delayed">
						<i class="bx bxl-java text-2xl text-purple-500"></i>
					</div>
					<div class="absolute top-20 right-10 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center animate-float">
						<i class="bx bxl-spring-boot text-xl text-green-500"></i>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>