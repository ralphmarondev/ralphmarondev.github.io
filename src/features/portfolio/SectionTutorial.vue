<script setup lang="ts">
import {RouterLink} from 'vue-router'
</script>

<template>
	<section id="tutorials" class="py-20 bg-gray-50 dark:bg-gray-800/50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12" data-aos="fade-up">
				<h2 class="text-4xl lg:text-5xl font-bold mb-4">
					Programming <span class="text-purple-600 dark:text-purple-400">Tutorials</span>
				</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					Learn programming from the ground up, resources designed most especially for my students
				</p>
				<div class="flex justify-center gap-3 mt-3">
        <span class="text-sm px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
          📚 80+ students learning
        </span>
					<span class="text-sm px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400">
          ⭐ Beginner friendly
        </span>
				</div>
			</div>

			<div class="grid md:grid-cols-3 gap-8">
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
							<span class="px-2"></span>
							<i class="bx bx-book-open"></i>
							<span>15+ Lessons</span>
						</div>

						<h3 class="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
							C Programming Language
						</h3>
						<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
							Master the fundamentals of programming with C - from variables and loops to pointers and memory
							management.
						</p>

						<div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Pointers
            </span>
							<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Memory Management
            </span>
							<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Data Structures
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

				<!-- Java Programming Tutorial -->
				<RouterLink
						to="/java-programming-language"
						class="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
						data-aos="fade-up"
						data-aos-delay="200"
				>
					<div class="relative h-48 overflow-hidden bg-gradient-to-r from-orange-500 to-red-500">
						<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
						<div class="absolute inset-0 flex items-center justify-center">
							<i class="bx bxl-java text-7xl text-white/80"></i>
						</div>
						<div class="absolute bottom-4 left-4 z-20">
            <span class="px-3 py-1 rounded-lg bg-white/20 backdrop-blur-sm text-white text-sm font-medium">
              Object-Oriented
            </span>
						</div>
						<div class="absolute top-4 right-4">
            <span class="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
              OOP Focus
            </span>
						</div>
					</div>

					<div class="p-6">
						<div class="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500 mb-2">
							<i class="bx bx-time"></i>
							<span>Complete Series</span>
							<span class="px-2"></span>
							<i class="bx bx-book-open"></i>
							<span>20+ Lessons</span>
						</div>

						<h3 class="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
							Java Programming
						</h3>
						<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
							Learn one of the most in-demand languages, from basics to building real-world applications.
						</p>

						<div class="flex flex-wrap gap-2 mb-4">
            <span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              OOP
            </span>
							<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              Collections
            </span>
							<span class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              GUI
            </span>
						</div>

						<div class="flex items-center justify-between">
							<div class="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 font-medium group-hover:gap-2 transition-all">
								Start Learning
								<i class="bx bx-chevron-right group-hover:ml-1 transition"></i>
							</div>
							<div class="text-xs text-gray-500">
								April 2, 2026
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
							<span class="px-2"></span>
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

			<!-- Additional Resources Section -->
			<div class="mt-12 text-center" data-aos="fade-up">
				<div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-200 dark:border-purple-800">
					<div class="flex flex-col md:flex-row items-center justify-between gap-4">
						<div class="flex items-center gap-3">
							<div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
								<i class="bx bx-book-reader text-2xl text-white"></i>
							</div>
							<div class="text-left">
								<h3 class="font-bold text-gray-900 dark:text-white">For My Students</h3>
								<p class="text-sm text-gray-600 dark:text-gray-400">These tutorials are designed specifically for my
								                                                    students</p>
							</div>
						</div>
						<RouterLink
								to="/tutorials"
								class="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 text-white text-sm font-medium hover:bg-purple-700 transition"
						>
							View All Tutorials
							<i class="bx bx-chevron-right"></i>
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>