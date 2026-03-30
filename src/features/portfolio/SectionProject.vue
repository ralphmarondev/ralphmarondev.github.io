<script setup lang="ts">
import {RouterLink} from 'vue-router'

const featuredProjects = [
	{
		id: 1,
		name: 'Lumi',
		description: 'Virtual operating system experience within an Android app featuring multiple mini-apps.',
		longDescription: 'A complete OS simulation with file manager, media player, notes, calculator, and 15+ integrated applications.',
		image: '/blog/kotlin.png', // Add your image path
		tags: ['Jetpack Compose', 'Koin', 'Firebase', 'Room'],
		icon: 'bx-terminal',
		gradient: 'from-pink-500 to-orange-500',
		github: 'https://github.com/ralphmarondev/MaronOS',
		demo: null,
		featured: true
	},
	{
		id: 2,
		name: 'Mewzi',
		description: 'Cross-platform family information manager with end-to-end encryption.',
		longDescription: 'Secure application for managing family information across Android, iOS, and Desktop with encrypted storage.',
		image: '/blog/git.png',
		tags: ['Jetpack Compose', 'Kotlin', 'Django', 'Postgresql'],
		icon: 'bx-lock-alt',
		gradient: 'from-orange-500 to-purple-500',
		github: 'https://github.com/ralphmarondev/KeepSafe',
		demo: null,
		featured: true
	},
	{
		id: 3,
		name: 'PiSync',
		description: 'Smart access control system for condominiums with mobile app, desktop app, and Raspberry Pi integration.',
		longDescription: 'Complete IoT solution with real-time door access management, biometric authentication, and comprehensive logging system.',
		image: '/blog/c.png',
		tags: ['Kotlin', 'Jetpack Compose', 'Django', 'Raspberry Pi'],
		icon: 'bx-server',
		gradient: 'from-purple-500 to-pink-500',
		github: 'https://github.com/maronworks/pi-sync',
		demo: null,
		featured: true
	}
]
</script>

<template>
	<section id="projects" class="py-20 bg-white dark:bg-gray-900">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12" data-aos="fade-up">
				<h2 class="text-4xl lg:text-5xl font-bold mb-4">
					Featured <span class="text-purple-600 dark:text-purple-400">Projects</span>
				</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					A showcase of my best work
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
				<div v-for="project in featuredProjects"
				     :key="project.id"
				     class="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
				     data-aos="fade-up">
					<!-- Project Image -->
					<div class="relative h-48 overflow-hidden bg-gradient-to-r" :class="project.gradient">
						<div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>
						<img :src="project.image" alt="Image">
					</div>

					<div class="p-6">
						<h3 class="text-xl font-bold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
							{{ project.name }}
						</h3>
						<p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
							{{ project.description }}
						</p>

						<div class="flex flex-wrap gap-2 mb-5">
                <span v-for="tag in project.tags.slice(0, 3)"
                      :key="tag"
                      class="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  {{ tag }}
                </span>
						</div>

						<div class="flex gap-4">
							<a v-if="project.github"
							   :href="project.github"
							   target="_blank"
							   class="text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 transition flex items-center gap-1">
								<i class="bx bxl-github"></i> GitHub
							</a>
							<RouterLink :to="`/projects/${project.id}`"
							            class="text-sm text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1">
								Learn More <i class="bx bx-chevron-right"></i>
							</RouterLink>
						</div>
					</div>
				</div>
			</div>

			<div class="text-center mt-12" data-aos="fade-up">
				<RouterLink to="/projects"
				            class="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-purple-600 text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300">
					View All Projects
					<i class="bx bx-chevron-right"></i>
				</RouterLink>
			</div>
		</div>
	</section>
</template>