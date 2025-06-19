<script setup lang="ts">
import { ref } from 'vue';

const isTechnical = ref(true)
const isSoftSkills = ref(false)
const isTools = ref(false)

const onClick = (value: string) => {
	if (value === 'technical') {
		isTechnical.value = true
		isSoftSkills.value = false
		isTools.value = false
	} else if (value === 'soft-skills') {
		isTechnical.value = false
		isSoftSkills.value = true
		isTools.value = false
	} else {
		isTechnical.value = false
		isSoftSkills.value = false
		isTools.value = true
	}
}
</script>

<template>
	<section class="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden" id="skills">
		<div class="container">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16 aos-init aos-animate" data-aos="fade-up">
					<h2 class="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
						Skills &
						<span class="text-purple-600 dark:text-purple-400">Expertise</span>
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
						Technical competencies and professional skills I've developed through experience and continuous learning
					</p>
				</div>
				<div class="flex justify-center mb-12 aos-init aos-animate" data-aos="fade-up">
					<div
						class="bg-white dark:bg-gray-900 p-1 flex rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
						<button @click="onClick('technical')"
							class="px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
							:class="isTechnical ? ' bg-purple-600 text-white shadow-lg' : ' text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'">
							<i class="bx bx-code-curly text-xl"></i>
							<span>Technical</span>
						</button>
						<button @click="onClick('soft-skills')"
							class="px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
							:class="isSoftSkills ? ' bg-purple-600 text-white shadow-lg' : ' text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'">
							<i class="bx bx-chat text-xl"></i>
							<span>Soft Skills</span>
						</button>
						<button @click="onClick('tools')"
							class="px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
							:class="isTools ? ' bg-purple-600 text-white shadow-lg' : ' text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'">
							<i class="bx bx-wrench text-xl"></i>
							<span>Tools</span>
						</button>
					</div>
				</div>
				<div class="grid lg:grid-cols-3 gap-8" v-if="isTechnical">
					<div class="group-aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hoever:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
							<div class="flex items-center mb-6">
								<div
									class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mr-4 shadow-lg">
									<i class="bx bx-mobile text-xl"></i>
								</div>
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">Mobile Development</h3>
							</div>
							<div class="space-y-4">
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-android text-lg mr-2 text-purple-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Jetpack Compose</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">95%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-purple-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 95%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-android text-lg mr-2 text-purple-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Compose Multiplatform</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">90%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-purple-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 90%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bx-intersect text-lg mr-2 text-purple-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Koin</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">92%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-purple-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 92%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bx-data text-lg mr-2 text-purple-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Room</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">92%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-purple-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 92%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-android text-lg mr-2 text-purple-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Material 3</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">95%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-purple-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 95%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bx-file text-lg mr-2 text-purple-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Clean Architecture</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">94%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-purple-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 94%;;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group-aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hoever:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
							<div class="flex items-center mb-6">
								<div
									class="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white mr-4 shadow-lg">
									<i class="bx bx-server text-xl"></i>
								</div>
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">Frontend Development</h3>
							</div>
							<div class="space-y-4">
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-vuejs text-lg mr-2 text-pink-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Vue 3</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">85%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-pink-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 85%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-typescript text-lg mr-2 text-pink-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">TypeScript</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">86%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-pink-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 86%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-tailwind-css text-lg mr-2 text-pink-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Tailwind CSS</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">80%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-pink-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 80%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-vuejs text-lg mr-2 text-pink-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Vite</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">83%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-pink-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 95%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-vuejs text-lg mr-2 text-pink-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Pinia / Vue Router</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">83%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-pink-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 83%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bx-network-chart text-lg mr-2 text-pink-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Axios</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">84%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-pink-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 84%;;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group-aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hoever:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
							<div class="flex items-center mb-6">
								<div
									class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mr-4 shadow-lg">
									<i class="bx bx-cloud text-xl"></i>
								</div>
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">Backend and Cloud</h3>
							</div>
							<div class="space-y-4">
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-spring-boot text-lg mr-2 text-orange-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Spring Boot (Kotlin)</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">90%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-orange-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 90%;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-django text-lg mr-2 text-orange-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Django REST Framework</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">91%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-orange-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 91%;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bx-code-block text-lg mr-2 text-orange-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">JWT Auth</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">89%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-orange-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 89%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-postgresql text-lg mr-2 text-orange-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Postgresql</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">92%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-orange-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 92%;;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-firebase text-lg mr-2 text-orange-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Firebase</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">92%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-orange-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 92%;"></div>
									</div>
								</div>
								<div
									class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center justify-between mb-2">
										<div class="flex items-center">
											<i class="bx bxl-docker text-lg mr-2 text-orange-500"></i>
											<span class="font-semibold text-gray-900 dark:text-white">Docker</span>
										</div>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">85%</span>
									</div>
									<div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-orange-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 85%;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" v-if="isSoftSkills">
					<div class="group aos-init" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer border-transparent hover:-translate-y-2 hover:border-purple-500">
							<div class="text-center">
								<div
									class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
									<i class="bx bx bx-book-open text-2xl"></i>
								</div>
								<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
									Problem Solving
								</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Analytical thinking and
									creative solution development</p>
								<div class="mb-2">
									<div class="flex justify-between items-center mb-1">
										<span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Proficiency</span>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">92%</span>
									</div>
									<div class="w-ful bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-purple-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 92%;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group aos-init" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer border-transparent hover:-translate-y-2 hover:border-pink-500">
							<div class="text-center">
								<div
									class="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
									<i class="bx bx bx-book-open text-2xl"></i>
								</div>
								<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
									Team Collaboration
								</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Effective communication and
									teamwork abilities.</p>
								<div class="mb-2">
									<div class="flex justify-between items-center mb-1">
										<span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Proficiency</span>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">93%</span>
									</div>
									<div class="w-ful bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-pink-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 93%;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group aos-init" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer border-transparent hover:-translate-y-2 hover:border-orange-500">
							<div class="text-center">
								<div
									class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
									<i class="bx bx bx-book-open text-2xl"></i>
								</div>
								<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
									Leadership
								</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Project management and team
									guidance skills</p>
								<div class="mb-2">
									<div class="flex justify-between items-center mb-1">
										<span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Proficiency</span>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">90%</span>
									</div>
									<div class="w-ful bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-orange-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 90%;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group aos-init" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer border-transparent hover:-translate-y-2 hover:border-blue-500">
							<div class="text-center">
								<div
									class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
									<i class="bx bx bx-book-open text-2xl"></i>
								</div>
								<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
									Adaptability
								</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Quick learning and adaptation
									to new technologies</p>
								<div class="mb-2">
									<div class="flex justify-between items-center mb-1">
										<span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Proficiency</span>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">94%</span>
									</div>
									<div class="w-ful bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-blue-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 94%;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group aos-init" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer border-transparent hover:-translate-y-2 hover:border-green-500">
							<div class="text-center">
								<div
									class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
									<i class="bx bx bx-book-open text-2xl"></i>
								</div>
								<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
									Communication
								</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Clear technical communication
									and documentation</p>
								<div class="mb-2">
									<div class="flex justify-between items-center mb-1">
										<span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Proficiency</span>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">91%</span>
									</div>
									<div class="w-ful bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-green-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 91%;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group aos-init" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 cursor-pointer border-transparent hover:-translate-y-2 hover:border-teal-500">
							<div class="text-center">
								<div
									class="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
									<i class="bx bx bx-book-open text-2xl"></i>
								</div>
								<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
									Time Management
								</h4>
								<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">Efficient project planning and
									deadline management</p>
								<div class="mb-2">
									<div class="flex justify-between items-center mb-1">
										<span class="text-sm font-semibold text-gray-700 dark:text-gray-300">Proficiency</span>
										<span class="text-sm font-bold text-gray-600 dark:text-gray-400">93%</span>
									</div>
									<div class="w-ful bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
										<div class="h-full bg-orange-500 transition-all duration-1000 ease-out rounded-full"
											style="width: 93%;"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="grid lg:grid-cols-3 gap-8" v-if="isTools">
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
							<div class="flex items-center mb-6">
								<div
									class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mr-2 shadow-lg">
									<i class="bx bx-wrench text-xl"></i>
								</div>
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">
									Development Tools
								</h3>
							</div>
							<div class="grid grid-cols-2 gap-3">
								<div
									class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer text-center hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bxl-android text-2xl text-green-500"></i>
										<span class="text-sm font-semibold text-gray-900 dark:text-white">Android Studio</span>
									</div>
								</div>
								<div
									class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer text-center hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bxl-java text-2xl text-pink-500"></i>
										<span class="text-sm font-semibold text-gray-900 dark:text-white">IntelliJ</span>
									</div>
								</div>
								<div
									class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer text-center hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bx-code-alt text-2xl text-orange-500"></i>
										<span class="text-sm font-semibold text-gray-900 dark:text-white">VS Code</span>
									</div>
								</div>
								<div
									class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer text-center hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bxl-git text-2xl" style="color: rgb(240, 80, 50)"></i>
										<span class="text-sm font-semibold text-gray-900 dark:text-white">Git</span>
									</div>
								</div>
								<div
									class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer text-center hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bx-paper-plane text-2xl" style="color: rgb(255, 108, 55)"></i>
										<span class="text-sm font-semibold text-gray-900 dark:text-white">Postman</span>
									</div>
								</div>
								<div
									class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer text-center hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bxl-docker text-2xl" style="color: rgb(36, 150, 237)"></i>
										<span class="text-sm font-semibold text-gray-900 dark:text-white">Docker</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
							<div class="flex items-center mb-6">
								<div
									class="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white mr-2 shadow-lg">
									<i class="bx bx-paint text-xl"></i>
								</div>
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">
									Design Tools
								</h3>
							</div>
							<div class="grid grid-cols-2 gap-3">
								<div
									class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer text-center hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bxl-figma text-2xl" style="color: rgb(242, 78, 30)"></i>
										<span class="text-sm font-semibold text-gray-900 dark:text-white">Figma</span>
									</div>
								</div>
								<div
									class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer text-center hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bx-palette text-2xl" style="color: rgb(0, 196, 204)"></i>
										<span class="text-sm font-semibold text-gray-900 dark:text-white">Canva</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group aos-init aos-animate" data-aos="fade-up">
						<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
							<div class="flex items-center mb-6">
								<div
									class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mr-2 shadow-lg">
									<i class="bx bx-cog text-xl"></i>
								</div>
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">
									Testing and Deployment
								</h3>
							</div>
							<div class="grid grid-cols-2 gap-3">
								<div
									class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer text-center hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bx-rocket text-2xl text-orange-500"></i>
										<span class="text-sm font-semibold text-gray-900 dark:text-white">Github Pages</span>
									</div>
								</div>
								<div
									class="p-3 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-300 cursor-pointer text-center hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bx-server text-2xl" style="color: rgb(67, 0, 152)"></i>
										<span class="text-sm font-semibold text-gray-900 dark:text-white">Firebase</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>