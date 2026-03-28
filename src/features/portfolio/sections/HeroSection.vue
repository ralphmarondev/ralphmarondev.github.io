<!-- features/portfolio/components/sections/HeroSection.vue -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Typed from 'typed.js'

const typingRef = ref<HTMLSpanElement | null>(null)

onMounted(() => {
	if (typingRef.value) {
		new Typed(typingRef.value, {
			strings: ['Mobile Developer 📱', 'Computer Engineer 💻', 'Fullstack Developer 🚀'],
			typeSpeed: 50,
			backSpeed: 30,
			backDelay: 2000,
			loop: true
		})
	}
})
</script>

<template>
	<section id="home" class="min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 dark:from-gray-900 dark:via-purple-900/10 dark:to-pink-900/10">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<!-- Left Content -->
				<div class="space-y-8" data-aos="fade-right">
					<div class="space-y-4">
						<div class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-sm font-medium">
							<i class="bx bx-smile mr-1"></i>
							Welcome to my portfolio
						</div>
						<h1 class="text-5xl lg:text-6xl font-bold">
							<span class="text-gray-900 dark:text-white">Hi, I'm</span>
							<span class="block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Ralph Maron Eda
              </span>
						</h1>
						<h2 class="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
							<span ref="typingRef" class="text-purple-600 dark:text-purple-400"></span>
						</h2>
					</div>

					<p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
						Crafting elegant mobile experiences with Kotlin and Compose Multiplatform.
						Building the future, one line of code at a time.
					</p>

					<div class="flex flex-col sm:flex-row gap-4">
						<a
								href="/Ralph-Maron-Eda-Resume.pdf"
								target="_blank"
								class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 transition-all duration-300"
						>
							<i class="bx bx-download mr-2"></i>
							Download CV
						</a>
						<router-link
								:to="{path: '/', hash: '#contact'}"
								class="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all duration-300"
						>
							<i class="bx bx-chat mr-2"></i>
							Let's Talk
						</router-link>
					</div>

					<!-- Stats -->
					<div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
						<div class="text-center p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
							<div class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">2+</div>
							<div class="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
						</div>
						<div class="text-center p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
							<div class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">10+</div>
							<div class="text-xs text-gray-600 dark:text-gray-400">Projects</div>
						</div>
						<div class="text-center p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
							<div class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">5+</div>
							<div class="text-xs text-gray-600 dark:text-gray-400">Technologies</div>
						</div>
						<div class="text-center p-3 rounded-xl bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
							<div class="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">4+</div>
							<div class="text-xs text-gray-600 dark:text-gray-400">Happy Clients</div>
						</div>
					</div>
				</div>

				<!-- Right Image -->
				<div class="relative flex justify-center" data-aos="fade-left">
					<div class="relative">
						<div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
						<img
								src="/ralphmaron.png"
								alt="Ralph Maron Eda"
								class="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-2xl"
						/>
					</div>

					<!-- Floating Icons -->
					<div class="absolute top-10 left-0 animate-float">
						<div class="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
							<i class="bx bxl-android text-2xl text-green-500"></i>
						</div>
					</div>
					<div class="absolute bottom-10 right-0 animate-float-delayed">
						<div class="w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700">
							<i class="bx bxl-kotlin text-2xl text-purple-500"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
@keyframes float {
	0%, 100% { transform: translateY(0px); }
	50% { transform: translateY(-10px); }
}

.animate-float {
	animation: float 4s ease-in-out infinite;
}

.animate-float-delayed {
	animation: float 4s ease-in-out infinite;
	animation-delay: 2s;
}
</style>