<!-- features/portfolio/components/sections/ProjectsSection.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Featured projects (only 3)
const featuredProjects = [
	{
		id: 1,
		title: 'PiSync',
		description: 'Smart access control system for condominiums with mobile app, desktop app, and API integration. Built with Kotlin Compose and Django REST.',
		icon: 'bx-server',
		gradient: 'from-purple-500 to-pink-500',
		tags: ['Kotlin', 'Compose', 'Django', 'Raspberry Pi'],
		github: 'https://github.com/maronworks/pi-sync',
		demo: null,
		featured: true
	},
	{
		id: 2,
		title: 'Maron OS',
		description: 'Virtual operating system experience within an Android app featuring multiple mini-apps and a complete OS-like interface.',
		icon: 'bx-terminal',
		gradient: 'from-pink-500 to-purple-500',
		tags: ['Jetpack Compose', 'Koin', 'Firebase'],
		github: 'https://github.com/ralphmarondev/MaronOS',
		demo: null,
		featured: true
	},
	{
		id: 3,
		title: 'KeepSafe',
		description: 'Cross-platform family information manager built with Compose Multiplatform, syncing across Android, iOS, and Desktop.',
		icon: 'bx-lock-alt',
		gradient: 'from-purple-500 to-pink-500',
		tags: ['Compose Multiplatform', 'Kotlin', 'Firebase'],
		github: 'https://github.com/ralphmarondev/KeepSafe',
		demo: null,
		featured: true
	}
]

const allProjects = [
	...featuredProjects,
	{
		id: 4,
		title: 'Mewzi',
		description: 'Full-stack social media platform with JWT authentication and real-time features.',
		icon: 'bxl-reddit',
		gradient: 'from-blue-500 to-purple-500',
		tags: ['Kotlin', 'Django', 'JWT'],
		github: 'https://github.com/ralphmarondev/Mewzi',
		demo: null
	},
	{
		id: 5,
		title: 'Swiftech',
		description: 'Teacher evaluation app with offline-first capabilities using Room database.',
		icon: 'bx-bar-chart-square',
		gradient: 'from-green-500 to-teal-500',
		tags: ['Jetpack Compose', 'Room', 'Koin'],
		github: 'https://github.com/ralphmarondev/Swiftech',
		demo: null
	},
	{
		id: 6,
		title: 'Spring Note',
		description: 'Note-taking app with Spring Boot backend and Vue 3 frontend.',
		icon: 'bx-notepad',
		gradient: 'from-orange-500 to-red-500',
		tags: ['Spring Boot', 'Vue 3', 'Kotlin'],
		github: 'https://github.com/ralphmarondev/SpringNote',
		demo: null
	},
	{
		id: 7,
		title: 'CodeStream',
		description: 'Modern landing page for a tech company showcasing services and team.',
		icon: 'bx-buildings',
		gradient: 'from-teal-500 to-cyan-500',
		tags: ['HTML', 'CSS', 'JavaScript'],
		github: 'https://github.com/maronworks/codestream',
		demo: 'https://maronworks.github.io/codestream/'
	}
]

const showAllProjects = ref(false)
const displayedProjects = ref(featuredProjects)

const viewAllProjects = () => {
	showAllProjects.value = true
	displayedProjects.value = allProjects
}

const showFeatured = () => {
	showAllProjects.value = false
	displayedProjects.value = featuredProjects
}
</script>

<template>
	<section id="projects" class="py-20 bg-gray-50 dark:bg-gray-800/50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<!-- Header -->
			<div class="text-center mb-12" data-aos="fade-up">
				<h2 class="text-4xl lg:text-5xl font-bold mb-4">
					<span class="text-gray-900 dark:text-white">Featured</span>
					<span class="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Projects</span>
				</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					Here are some of my favorite projects that showcase my skills and passion for development.
				</p>
			</div>

			<!-- Projects Grid -->
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8" data-aos="fade-up">
				<div
						v-for="project in displayedProjects"
						:key="project.id"
						class="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
				>
					<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r" :class="project.gradient"></div>

					<div class="p-6">
						<div class="flex items-center justify-between mb-4">
							<div class="w-12 h-12 rounded-xl bg-gradient-to-r flex items-center justify-center" :class="project.gradient">
								<i :class="['bx', project.icon, 'text-2xl text-white']"></i>
							</div>
							<div class="flex space-x-2">
								<a
										v-if="project.github"
										:href="project.github"
										target="_blank"
										class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
								>
									<i class="bx bxl-github text-xl text-gray-600 dark:text-gray-400"></i>
								</a>
								<a
										v-if="project.demo"
										:href="project.demo"
										target="_blank"
										class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
								>
									<i class="bx bx-link-external text-xl text-gray-600 dark:text-gray-400"></i>
								</a>
							</div>
						</div>

						<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
							{{ project.title }}
						</h3>
						<p class="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
							{{ project.description }}
						</p>

						<div class="flex flex-wrap gap-2 mb-4">
              <span
		              v-for="tag in project.tags.slice(0, 3)"
		              :key="tag"
		              class="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
              >
                {{ tag }}
              </span>
						</div>
					</div>
				</div>
			</div>

			<!-- View More Button -->
			<div class="text-center" data-aos="fade-up">
				<button
						v-if="!showAllProjects"
						@click="viewAllProjects"
						class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
				>
					View All Projects
					<i class="bx bx-chevron-right ml-2 text-xl"></i>
				</button>
				<button
						v-else
						@click="showFeatured"
						class="inline-flex items-center px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300"
				>
					<i class="bx bx-chevron-left mr-2 text-xl"></i>
					Show Featured Only
				</button>
			</div>
		</div>
	</section>
</template>