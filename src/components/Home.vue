<script setup lang="ts">
import Typed from 'typed.js';
import { onMounted, ref } from 'vue';

const typingRef = ref<HTMLSpanElement | null>(null)

onMounted(() => {
	if (typingRef.value) {
		new Typed(typingRef.value, {
			strings: ['Mobile Developer', 'Computer Engineer', 'Fullstack Developer'],
			typeSpeed: 60,
			backSpeed: 40,
			backDelay: 2000,
			loop: true
		})
	}
})

</script>

<template>
	<section id="home"
		class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-20 overflow-hidden">
		<div class="container">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-12">
					<div class="space-y-8 aos-init aos-animate" data-aos="fade-right">
						<div class="space-y-4">
							<h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
								Hi, I'm Ralph Maron Eda
							</h1>
							<h2 class="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 flex items-center">
								<span ref="typingRef"></span>
							</h2>
						</div>
						<p class="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">Crafting sleek and reliable
							mobile apps since 2023.</p>
						<div class="flex items-center space-x-4">
							<span class="text-gray-700 dark:text-gray-300 font-medium">
								Follow me on:
							</span>
							<div class="flex space-x-3">
								<a href="https://github.com/ralphmarondev/" target="_blank" rel="noopener noreferrer"
									class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
									<i class="bx bxl-github text-lg"></i>
								</a>
								<a href="https://www.linkedin.com/in/ralph-maron-eda/" target="_blank" rel="noopener noreferrer"
									class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
									<i class="bx bxl-linkedin text-lg"></i>
								</a>
								<a href="https://www.instagram.com/ralphmaron/" target="_blank" rel="noopener noreferrer"
									class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
									<i class="bx bxl-instagram text-lg"></i>
								</a>
								<a href="https://www.tiktok.com/@ralphmaron/" target="_blank" rel="noopener noreferrer"
									class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
									<i class="bx bxl-tiktok text-lg"></i>
								</a>
							</div>
						</div>
						<div class="flex flex-col sm:flex-row gap-4">
							<a href="/hello.pdf"
								class="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
								<i class="bx bx-download mr-2"></i> Download CV
							</a>
							<a href="#contact"
								class="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
								<i class="bx bx-envelope mr-2"></i>
								Contact Me
							</a>
						</div>
						<div class="mt-6 aos-init aos-animate" data-aos="fade-up">
							<h4 class="text-left text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
								Quick Stats:
							</h4>
							<div class="flex flex-wrap gap-3 justify-start">
								<div
									class="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md dark:shadow-gray-900/30 border border-gray-300 dark:border-gray-700 
        hover:border-gray-900 dark:hover:border-white hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300">
									<i class="bx bx-briefcase text-gray-900 dark:text-white text-lg"></i>
									<div class="flex flex-col leading-tight">
										<span class="text-xs font-semibold text-gray-900 dark:text-white">
											2+
										</span>
										<span class="text-[10px] text-gray-600 dark:text-gray-400">
											Years of Experience
										</span>
									</div>
								</div>
								<div
									class="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md dark:shadow-gray-900/30 border border-gray-300 dark:border-gray-700 
        hover:border-gray-900 dark:hover:border-white hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300">
									<i class="bx bx-task text-gray-900 dark:text-white text-lg"></i>
									<div class="flex flex-col leading-tight">
										<span class="text-xs font-semibold text-gray-900 dark:text-white">
											5+
										</span>
										<span class="text-[10px] text-gray-600 dark:text-gray-400">
											Projects Completed
										</span>
									</div>
								</div>
								<div
									class="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md dark:shadow-gray-900/30 border border-gray-300 dark:border-gray-700 
        hover:border-gray-900 dark:hover:border-white hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300">
									<i class="bx bx-smile text-gray-900 dark:text-white text-lg"></i>
									<div class="flex flex-col leading-tight">
										<span class="text-xs font-semibold text-gray-900 dark:text-white">
											4+
										</span>
										<span class="text-[10px] text-gray-600 dark:text-gray-400">
											Clients
										</span>
									</div>
								</div>
								<div
									class="flex items-center space-x-2 px-3 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md dark:shadow-gray-900/30 border border-gray-300 dark:border-gray-700 
        hover:border-gray-900 dark:hover:border-white hover:shadow-lg hover:-translate-y-[5px] transition-all duration-300">
									<i class="bx bx-code text-gray-900 dark:text-white text-lg"></i>
									<div class="flex flex-col leading-tight">
										<span class="text-xs font-semibold text-gray-900 dark:text-white">
											5+
										</span>
										<span class="text-[10px] text-gray-600 dark:text-gray-400">
											Stacks Mastered
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="relative flex justify-center items-center aos-init aos-animate" data-aos="fade-right">
						<div class="relative z-10">
							<img src="/ralphmaron.png" alt="My picture"
								class="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl dark:shadow-gray-900/50 border-8 border-white dark:border-gray-800 hover:shadow-3xl hover:-translate-y-2 transition-all duration-300" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>