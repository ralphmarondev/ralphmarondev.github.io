<script setup lang="ts">
import TutorialMainLayout from '@/shared/layouts/TutorialMainLayout.vue'
import AnimatedHeader from '@/features/tutorials/AnimatedHeader.vue'
import {RouterLink} from 'vue-router'
</script>

<template>
	<TutorialMainLayout>
		<AnimatedHeader />

		<h2 class="text-2xl font-semibold text-gray-800 mb-6">
			Explore
		</h2>

		<div class="grid md:grid-cols-2 gap-6">
			<!-- C Programming Tutorial -->
			<RouterLink
					to="/c-programming-language"
					class="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
					data-aos="fade-up"
			>
				<div class="relative h-48 overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500">
					<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
					<div class="absolute inset-0 flex items-center justify-center">
						<i class="bx bxl-c-plus-plus text-7xl text-white/80"></i>
					</div>
					<div class="absolute bottom-4 left-4 z-20">
            <span class="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Foundation Language
            </span>
					</div>
					<div class="absolute top-4 right-4">
            <span class="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
              Most Popular
            </span>
					</div>
				</div>

				<div class="p-6">
					<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-2">
						<i class="bx bx-time"></i>
						<span>Complete Series</span>
						<span class="px-1"></span>
						<i class="bx bx-book-open"></i>
						<span>15+ Lessons</span>
					</div>

					<h3 class="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
						C Programming Language
					</h3>
					<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
						Master the fundamentals of programming with C - from variables and loops to arrays and file
						management.
					</p>

					<div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Arrays
            </span>
						<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Structures
            </span>
						<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              File Management
            </span>
					</div>

					<div class="flex items-center justify-between">
						<div class="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 font-medium group-hover:gap-2 transition-all">
							Start Learning
							<i class="bx bx-chevron-right group-hover:ml-1 transition"></i>
						</div>
						<div class="text-xs text-gray-500">
							March 30, 2026
						</div>
					</div>
				</div>
			</RouterLink>

			<!-- C++ Programming Tutorial -->
			<RouterLink
					to="/cpp"
					class="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
					data-aos="fade-up"
					data-aos-delay="100"
			>
				<div class="relative h-48 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-500">
					<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
					<div class="absolute inset-0 flex items-center justify-center">
						<i class="bx bxl-c-plus-plus text-7xl text-white/80"></i>
					</div>
					<div class="absolute bottom-4 left-4 z-20">
            <span class="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Object-Oriented
            </span>
					</div>
					<div class="absolute top-4 right-4">
            <span class="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
              OOP Focus
            </span>
					</div>
				</div>

				<div class="p-6">
					<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-2">
						<i class="bx bx-time"></i>
						<span>Complete Series</span>
						<span class="px-1"></span>
						<i class="bx bx-book-open"></i>
						<span>12+ Lessons</span>
					</div>

					<h3 class="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
						C++ Programming
					</h3>
					<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
						Take your C knowledge further with object-oriented programming, STL, and modern C++ features.
					</p>

					<div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              OOP
            </span>
						<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              STL
            </span>
						<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Templates
            </span>
					</div>

					<div class="flex items-center justify-between">
						<div class="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 font-medium group-hover:gap-2 transition-all">
							Start Learning
							<i class="bx bx-chevron-right group-hover:ml-1 transition"></i>
						</div>
						<div class="text-xs text-gray-500">
							April 1, 2026
						</div>
					</div>
				</div>
			</RouterLink>
		</div>
	</TutorialMainLayout>
</template>
