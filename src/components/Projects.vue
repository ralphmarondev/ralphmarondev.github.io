<script setup lang="ts">
import { ref } from 'vue';

const isAll = ref(true)
const isMobile = ref(false)
const isWeb = ref(false)

const onClick = (value: string) => {
	if (value === 'all') {
		isAll.value = true
		isMobile.value = false
		isWeb.value = false
	} else if (value === 'mobile') {
		isAll.value = false
		isMobile.value = true
		isWeb.value = false
	} else if (value === 'web') {
		isAll.value = false
		isMobile.value = false
		isWeb.value = true
	}
}

</script>

<template>
	<section class="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden" id="projects">
		<div class="container">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16 aos-init aos-animate" data-aos="fade-up">
					<h2 class="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
						Projects &
						<span class="text-purple-600 dark:text-purple-400">Portfolio</span>
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
						A showcase of my work, demonstrating technical expertise and problem-solving skills across various domains.
					</p>
				</div>
				<div class="flex justify-center mb-12 aos-init aos-animate" data-aos="fade-up">
					<div
						class="flex flex-wrap justify-center gap-2 sm:gap-4 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 overflow-x-auto sm:flex-nowrap">
						<button @click="onClick('all')"
							class="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
							:class="isAll ? ' bg-purple-600 text-white shadow-lg' : ' text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'">
							<i class="bx bx-grid-alt text-lg sm:text-xl"></i>
							<span>All</span>
						</button>
						<button @click="onClick('mobile')"
							class="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
							:class="isMobile ? ' bg-purple-600 text-white shadow-lg' : ' text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'">
							<i class="bx bx-laptop text-lg sm:text-xl"></i>
							<span>Mobile Apps</span>
						</button>
						<button @click="onClick('web')"
							class="px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base"
							:class="isWeb ? ' bg-purple-600 text-white shadow-lg' : ' text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'">
							<i class="bx bx-laptop text-lg sm:text-xl"></i>
							<span>Web Apps</span>
						</button>
					</div>
				</div>
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" v-if="isAll">
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-purple-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-terminal text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Maron OS</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Virtual Operating System experience within an android app. It has lots of mini apps just like a real os.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Jetpack
									Compose</span>
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Koin</span>
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Firebase</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/ralphmarondev/MaronOS" target="_blank"
									class="text-sm text-purple-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-pink-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-info-square text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">KeepSafe</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Compose Multiplatform App that is used to manage family member information.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-pink-500 px-2 py-1 rounded-full">Compose
									Multiplatform</span>
								<span class="text-xs font-semibold bg-blue-50 text-pink-500 px-2 py-1 rounded-full">Koin</span>
								<span class="text-xs font-semibold bg-blue-50 text-pink-500 px-2 py-1 rounded-full">Firebase</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/ralphmarondev/KeepSafe" target="_blank"
									class="text-sm text-pink-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-orange-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-server text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">PiSync</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Mobile and desktop app created to control doors of condominiums. It also has an API that can be
								installed on the condominium servers. (Thesis)
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-orange-500 px-2 py-1 rounded-full">Jetpack
									Compose</span>
								<span class="text-xs font-semibold bg-blue-50 text-orange-500 px-2 py-1 rounded-full">Django Rest</span>
								<span class="text-xs font-semibold bg-blue-50 text-orange-500 px-2 py-1 rounded-full">Koin</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/maronworks/pi-sync" target="_blank"
									class="text-sm text-orange-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-blue-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bxl-reddit text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Mewzi</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Full stack Socail Media app with integrated JWT authentication.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-blue-500 px-2 py-1 rounded-full">Jetpack
									Compose</span>
								<span class="text-xs font-semibold bg-blue-50 text-blue-500 px-2 py-1 rounded-full">Django Rest</span>
								<span class="text-xs font-semibold bg-blue-50 text-blue-500 px-2 py-1 rounded-full">Koin</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/ralphmarondev/Mewzi" target="_blank"
									class="text-sm text-blue-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-green-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-bar-chart-square text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Swiftech</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Teacher evaluation app.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-green-500 px-2 py-1 rounded-full">Jetpack
									Compose</span>
								<span class="text-xs font-semibold bg-blue-50 text-green-500 px-2 py-1 rounded-full">Room
									Database</span>
								<span class="text-xs font-semibold bg-blue-50 text-green-500 px-2 py-1 rounded-full">Koin</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/ralphmarondev/Swiftech" target="_blank"
									class="text-sm text-green-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-teal-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-buildings text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">CodeStream</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Landing page for our company. Technopreneurship project as a Computer Engineering Student.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-teal-500 px-2 py-1 rounded-full">HTML</span>
								<span class="text-xs font-semibold bg-blue-50 text-teal-500 px-2 py-1 rounded-full">CSS</span>
								<span class="text-xs font-semibold bg-blue-50 text-teal-500 px-2 py-1 rounded-full">JS</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/maronworks/codestream" target="_blank"
									class="text-sm text-teal-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
								<a href="https://maronworks.github.io/codestream/" target="_blank"
									class="text-sm text-teal-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-link-external text-lg"></i>
									<span>Live Demo</span>
								</a>
							</div>
						</div>
					</div>
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-purple-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-notepad text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Spring Note</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Note taking app with Spring Boot (Kotlin) and Vue.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Spring Boot</span>
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Vue 3</span>
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Kotlin</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/ralphmarondev/SpringNote" target="_blank"
									class="text-sm text-purple-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Mobile -->
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" v-if="isMobile">
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-purple-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-terminal text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Maron OS</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Virtual Operating System experience within an android app. It has lots of mini apps just like a real os.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Jetpack
									Compose</span>
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Koin</span>
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Firebase</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/ralphmarondev/MaronOS" target="_blank"
									class="text-sm text-purple-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-pink-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-info-square text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">KeepSafe</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Compose Multiplatform App that is used to manage family member information.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-pink-500 px-2 py-1 rounded-full">Compose
									Multiplatform</span>
								<span class="text-xs font-semibold bg-blue-50 text-pink-500 px-2 py-1 rounded-full">Koin</span>
								<span class="text-xs font-semibold bg-blue-50 text-pink-500 px-2 py-1 rounded-full">Firebase</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/ralphmarondev/KeepSafe" target="_blank"
									class="text-sm text-pink-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-orange-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-server text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">PiSync</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Mobile and desktop app created to control doors of condominiums. It also has an API that can be
								installed on the condominium servers. (Thesis)
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-orange-500 px-2 py-1 rounded-full">Jetpack
									Compose</span>
								<span class="text-xs font-semibold bg-blue-50 text-orange-500 px-2 py-1 rounded-full">Django Rest</span>
								<span class="text-xs font-semibold bg-blue-50 text-orange-500 px-2 py-1 rounded-full">Koin</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/maronworks/pi-sync" target="_blank"
									class="text-sm text-orange-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-blue-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bxl-reddit text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Mewzi</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Full stack Socail Media app with integrated JWT authentication.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-blue-500 px-2 py-1 rounded-full">Jetpack
									Compose</span>
								<span class="text-xs font-semibold bg-blue-50 text-blu-500 px-2 py-1 rounded-full">Django Rest</span>
								<span class="text-xs font-semibold bg-blue-50 text-blue-500 px-2 py-1 rounded-full">Koin</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/ralphmarondev/Mewzi" target="_blank"
									class="text-sm text-blue-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-green-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-bar-chart-square text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Swiftech</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Teacher evaluation app.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-green-500 px-2 py-1 rounded-full">Jetpack
									Compose</span>
								<span class="text-xs font-semibold bg-blue-50 text-green-500 px-2 py-1 rounded-full">Room
									Database</span>
								<span class="text-xs font-semibold bg-blue-50 text-green-500 px-2 py-1 rounded-full">Koin</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/ralphmarondev/Swiftech" target="_blank"
									class="text-sm text-green-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Website -->
				<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" v-if="isWeb">

					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-teal-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-buildings text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">CodeStream</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Landing page for our company. Technopreneurship project as a Computer Engineering Student.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-teal-500 px-2 py-1 rounded-full">HTML</span>
								<span class="text-xs font-semibold bg-blue-50 text-teal-500 px-2 py-1 rounded-full">CSS</span>
								<span class="text-xs font-semibold bg-blue-50 text-teal-500 px-2 py-1 rounded-full">JS</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="#" class="text-sm text-teal-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
								<a href="#" class="text-sm text-teal-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-link-external text-lg"></i>
									<span>Live Demo</span>
								</a>
							</div>
						</div>
					</div>
					<div
						class="group relative bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent cursor-pointer z-0 hover:-translate-y-2 hover:border-purple-500">
						<div class="text-center opacity-100">
							<div
								class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg transition-all duration-300 ">
								<i class="bx bx-notepad text-2xl"></i>
							</div>
							<h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Spring Note</h4>
							<p class="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
								Note taking app with Spring Boot (Kotlin) and Vue.
							</p>
							<div class="flex flex-wrap justify-center gap-2 mb-4">
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Spring Boot</span>
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Vue 3</span>
								<span class="text-xs font-semibold bg-blue-50 text-purple-500 px-2 py-1 rounded-full">Kotlin</span>
							</div>
							<div class="flex justify-center space-x-4">
								<a href="https://github.com/ralphmarondev/SpringNote" target="_blank"
									class="text-sm text-purple-500 hover:underline flex-items-center space-x-1">
									<i class="bx bxl-github text-lg"></i>
									<span>Github</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>