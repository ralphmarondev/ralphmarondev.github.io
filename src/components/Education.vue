<script setup lang="ts">
import { ref } from 'vue';

const isFormalEducation = ref(true)
</script>

<template>
	<section class="py-20 bg-white dark:bg-gray-900 overflow-hidden" id="education">
		<div class="container">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16 aos-init aos-animate" data-aos="fade-up">
					<h2 class="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
						Educational
						<span class="text-purple-600 dark:text-purple-400">Background</span>
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
						My academic journey and continous learning path in computer engineering and mobile development.
					</p>
				</div>
				<div class="flex justify-center mb-12 aos-init aos-animate" data-aos="fade-up">
					<div class="bg-gray-100 dark:bg-gray-800 p-1 flex rounded-full shadow-lg">
						<button @click="isFormalEducation = true"
							class="px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
							:class="isFormalEducation ? 'bg-purple-600 text-white shadow-lg' : ' text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'">
							<i class="bx bx-graduation text-xl"></i>
							<span>Formal Education</span>
						</button>
						<button @click="isFormalEducation = false"
							class="px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
							:class="!isFormalEducation ? 'bg-purple-600 text-white shadow-lg' : ' text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'">
							<i class="bx bx-badge-check text-xl"></i>
							<span>Self Learning</span>
						</button>
					</div>
				</div>
				<div class="grid lg:grid-cols-2 gap-8" v-if="isFormalEducation">
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:border-purple-500 hover:-translate-y-2">
							<div class="flex items-start mb-4 relative z-10">
								<div
									class="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center text-white mr-4 shadow-lg transition-all duration-300 ">
									<i class="bx bx-book-open text-2xl"></i>
								</div>
							</div>
							<div class="flex-1">
								<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Bachelor of Computer Engineering</h3>
								<h4 class="text-lg font-semibold text-purple-500 mb-1">Software Engineering and Embedded Systems</h4>
								<p class="text-gray-600 dark:text-gray-400 font-medium mb-2">Cagayan State University - Carig Campus</p>
								<div class="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
									<span class="flex items-center">
										<i class="bx bx-calendar mr-1"></i>
										2021 - 2025
									</span>
									<span class="flex items-center">
										<i class="bx bx-map mr-1"></i>
										Tuguegarao, Philippines
									</span>
								</div>
								<div class="flex gap-2">
									<span class="px-3 py-1 bg-blue-50 text-purple-500 rounded-full text-sm font-semibold">
										GPA: 94/100
									</span>
									<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
										Graduated
									</span>
								</div>
							</div>
							<p class="text-gray-600 dark:text-gray-400 my-4 leading-relaxed">
								Focused on software development, data structures, algorithms, networking, embedded systems, and modern
								programming paradigms.
								Completed thesis with integration of Mobile app, Desktop app, API, and Raspberry Pi 5.
							</p>
							<div class="mb-4">
								<p class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Course:</p>
								<div class="flex flex-wrap gap-2">
									<span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										Data Structures
									</span><span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										Algorithms
									</span><span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										Operating Systems
									</span><span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										Embedded Systems
									</span><span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										Networking
									</span><span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										Software Development
									</span>
								</div>
							</div>
							<div>
								<p class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Notable Achievements:</p>
								<ul class="space-y-1">
									<li class="flex items-center text-sm text-gray-600 dark:text-gray-400">
										<i class="bx bx-medal text-yellow-500 mr-2 flex-shrink-0"></i>
										<span>Regional Convention Programming Competition 2023- Champion</span>
									</li>
									<li class="flex items-center text-sm text-gray-600 dark:text-gray-400">
										<i class="bx bx-medal text-yellow-500 mr-2 flex-shrink-0"></i>
										<span>National Convention Programming Competition 2023 - 11th Place </span>
									</li>
									<li class="flex items-center text-sm text-gray-600 dark:text-gray-400">
										<i class="bx bx-medal text-yellow-500 mr-2 flex-shrink-0"></i>
										<span>Regional Convention Programming Competition 2024 - 2nd Place</span>
									</li>
									<li class="flex items-center text-sm text-gray-600 dark:text-gray-400">
										<i class="bx bx-medal text-yellow-500 mr-2 flex-shrink-0"></i>
										<span>Regional Convention Best Research 2024 - Champion</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:border-pink-500 hover:-translate-y-2">
							<div class="flex items-start mb-4 relative z-10">
								<div
									class="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center text-white mr-4 shadow-lg transition-all duration-300 ">
									<i class="bx bx-book-open text-2xl"></i>
								</div>
							</div>
							<div class="flex-1">
								<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Senior High School</h3>
								<h4 class="text-lg font-semibold text-pink-500 mb-1">Science Technology and Mathematics</h4>
								<p class="text-gray-600 dark:text-gray-400 font-medium mb-2">Flora National High School</p>
								<div class="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400 mb-3">
									<span class="flex items-center">
										<i class="bx bx-calendar mr-1"></i>
										2018 - 2021
									</span>
									<span class="flex items-center">
										<i class="bx bx-map mr-1"></i>
										Apayao, Philippines
									</span>
								</div>
								<div class="flex gap-2">
									<span class="px-3 py-1 bg-blue-50 text-pink-500 rounded-full text-sm font-semibold">
										GPA: 91/100
									</span>
									<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
										Graduated
									</span>
								</div>
							</div>
							<p class="text-gray-600 dark:text-gray-400 my-4 leading-relaxed">
								Strong foundation in mathematics, chemistry, physics and circuits. Active in math club and graduated
								with honors.</p>
							<div class="mb-4">
								<p class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Course:</p>
								<div class="flex flex-wrap gap-2">
									<span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										Advance Mathematics
									</span>
									<span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										Calculus
									</span><span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										Physics
									</span><span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										Chemistry
									</span><span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										Biology
									</span><span
										class="px-3 py-1 rounded-full text-sm transition-all duration-300 cursor-pointer bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600">
										English
									</span>
								</div>
							</div>
							<div>
								<p class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Notable Achievements:</p>
								<ul class="space-y-1">
									<li class="flex items-center text-sm text-gray-600 dark:text-gray-400">
										<i class="bx bx-medal text-yellow-500 mr-2 flex-shrink-0"></i>
										<span>Graduated with honors.</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div class="grid grid-cols-1 mb:grid-cols-2 lg:grid-cols-4 gap-6" v-else>
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-2 hover:border-purple-500">
							<div
								class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 rotate-360 scale-110">
								<i class="bx bxl-android text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Jetpack Compose</h4>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Docs, Youtube</p>
							<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">2023 -
								Present</span>
						</div>
					</div>
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-2 hover:border-pink-500">
							<div
								class="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 rotate-360 scale-110">
								<i class="bx bxl-java text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Kotlin</h4>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-3">YouTube</p>
							<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">2023 -
								Present</span>
						</div>
					</div>
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-2 hover:border-orange-500">
							<div
								class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 rotate-360 scale-110">
								<i class="bx bxl-spring-boot text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Spring Boot</h4>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Docs, YouTube, Projects</p>
							<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">2025 -
								Present</span>
						</div>
					</div>
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-2 hover:border-blue-500">
							<div
								class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 rotate-360 scale-110">
								<i class="bx bxl-firebase text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Firebase</h4>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Docs, YouTube, Projects</p>
							<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">2025 -
								Present</span>
						</div>
					</div>
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-2 hover:border-green-500">
							<div
								class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 rotate-360 scale-110">
								<i class="bx bxl-python text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Python</h4>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Solo Learn, Projects</p>
							<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">2023 -
								Present</span>
						</div>
					</div>
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-2 hover:border-teal-500">
							<div
								class="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 rotate-360 scale-110">
								<i class="bx bxl-django text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Django</h4>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Docs, OJT</p>
							<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">2024 -
								Present</span>
						</div>
					</div>
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border-2 relative overflow-hidden cursor-pointer border-transparent hover:-translate-y-2 hover:border-purple-500">
							<div
								class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 rotate-360 scale-110">
								<i class="bx bxl-vuejs text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Vue 3</h4>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-3">Docs, OJT</p>
							<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">2024 -
								Present</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>