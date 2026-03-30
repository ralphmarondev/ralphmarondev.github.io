<script setup lang="ts">
import {RouterLink} from 'vue-router'
</script>
<template>
	<div>
		<section id="about" class="py-20 bg-gray-50 dark:bg-gray-800/50">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12" data-aos="fade-up">
					<h2 class="text-4xl lg:text-5xl font-bold mb-4">
						About <span class="text-purple-600 dark:text-purple-400">Me</span>
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Get to know the story behind my code.
					</p>
				</div>

				<div class="flex flex-col lg:flex-row gap-12 items-center">
					<div class="lg:w-1/3" data-aos="fade-right">
						<img src="/ralphmaron.webp"
						     alt="Ralph Maron Eda"
						     class="w-80 h-80 object-cover rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300" />
					</div>
					<div class="lg:w-2/3" data-aos="fade-left">
						<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<div class="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
								<div class="flex items-center space-x-3 mb-3">
									<div class="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
										<i class="bx bx-code-alt text-white text-lg"></i>
									</div>
									<h4 class="text-lg font-semibold">Bio</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400">Self-taught mobile developer since 2023. Passionate
								                                                    about Kotlin, Compose Multiplatform, and Spring
								                                                    Boot.</p>
							</div>
							<div class="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
								<div class="flex items-center space-x-3 mb-3">
									<div class="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
										<i class="bx bx-heart text-white text-lg"></i>
									</div>
									<h4 class="text-lg font-semibold">Hobbies</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400">Hiking, gaming, sci-fi movies, and open-source
								                                                    contributions.</p>
							</div>
							<div class="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
								<div class="flex items-center space-x-3 mb-3">
									<div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
										<i class="bx bx-map text-white text-lg"></i>
									</div>
									<h4 class="text-lg font-semibold">Location</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400">Cagayan, Philippines. Available for remote work.</p>
							</div>
							<div class="p-5 bg-white dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
								<div class="flex items-center space-x-3 mb-3">
									<div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
										<i class="bx bxs-school text-white text-lg"></i>
									</div>
									<h4 class="text-lg font-semibold">Education</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400">BS Computer Engineering, Cagayan State University
								                                                    (2021-2025)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section id="achievements"
		         class="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-12" data-aos="fade-up">
					<h2 class="text-4xl lg:text-5xl font-bold mb-4">
						<span class="text-gray-900 dark:text-white">Competition</span>
						<span class="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Achievements</span>
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
						Proven excellence through competitive programming.
					</p>
				</div>

				<div class="grid md:grid-cols-3 gap-6">
					<!-- Champion - Regional 2023 -->
					<div class="group" data-aos="fade-up" data-aos-delay="0">
						<div class="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div class="relative h-48 overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500">
								<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
								<div class="absolute inset-0 flex items-center justify-center">
									<i class="bx bx-trophy text-7xl text-white/80"></i>
								</div>
								<div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full shadow-lg">
                1st Place
              </span>
								</div>
							</div>

							<div class="p-6">
								<h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
									Regional Programming Competition
								</h3>
								<p class="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">
									Champion • 2023
								</p>
								<p class="text-gray-600 dark:text-gray-400 text-sm">
									Secured 1st place in the Regional Convention Programming Competition, competing against top
									universities across the region.
								</p>
								<div class="mt-4 flex items-center gap-2">
									<i class="bx bx-map text-gray-400"></i>
									<span class="text-xs text-gray-500">Cagayan Valley Region</span>
								</div>
							</div>
						</div>
					</div>

					<!-- 11th Place - National 2023 -->
					<div class="group" data-aos="fade-up" data-aos-delay="100">
						<div class="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div class="relative h-48 overflow-hidden bg-gradient-to-r from-purple-500 to-pink-400">
								<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
								<div class="absolute inset-0 flex items-center justify-center">
									<i class="bx bx-award text-7xl text-white/80"></i>
								</div>
								<div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg">
                Top 11
              </span>
								</div>
							</div>

							<div class="p-6">
								<h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
									National Programming Competition
								</h3>
								<p class="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">
									11th Place • 2023
								</p>
								<p class="text-gray-600 dark:text-gray-400 text-sm">
									Ranked 11th against universities nationwide in the National Programming Competition.
								</p>
								<div class="mt-4 flex items-center gap-2">
									<i class="bx bx-map text-gray-400"></i>
									<span class="text-xs text-gray-500">National Level</span>
								</div>
							</div>
						</div>
					</div>

					<!-- 2nd Place - Regional 2024 -->
					<div class="group" data-aos="fade-up" data-aos-delay="200">
						<div class="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
							<div class="relative h-48 overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600">
								<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
								<div class="absolute inset-0 flex items-center justify-center">
									<i class="bx bx-medal text-7xl text-white/80"></i>
								</div>
								<div class="absolute top-4 right-4">
              <span class="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full shadow-lg">
                2nd Place
              </span>
								</div>
							</div>

							<div class="p-6">
								<h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">
									Regional Programming Competition
								</h3>
								<p class="text-sm text-purple-600 dark:text-purple-400 font-semibold mb-2">
									1st Runner Up • 2024
								</p>
								<p class="text-gray-600 dark:text-gray-400 text-sm">
									Secured 2nd place in the Regional Convention Programming Competition, defending our university's
									reputation.
								</p>
								<div class="mt-4 flex items-center gap-2">
									<i class="bx bx-map text-gray-400"></i>
									<span class="text-xs text-gray-500">Cagayan Valley Region</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- View All Achievements Button -->
				<div class="text-center mt-12" data-aos="fade-up">
					<RouterLink to="/achievements"
					            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
						View All Achievements
						<i class="bx bx-chevron-right"></i>
					</RouterLink>
				</div>
			</div>
		</section>
	</div>
</template>