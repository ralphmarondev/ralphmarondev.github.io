<script setup lang="ts">
import AnimatedHeader from '@/features/projects/AnimatedHeader.vue'
import {RouterLink} from 'vue-router'
import ProjectsMainLayout from '@/shared/layouts/ProjectsMainLayout.vue'

const featuredProjects = [
	{
		id: 1,
		name: 'Lumi',
		description: 'Virtual operating system experience within an Android app featuring multiple mini-apps.',
		longDescription: 'A complete OS simulation with diary, finance tracker, media player, notes, calculator, and 15+ integrated applications.',
		image: '/projects/lumi.png',
		tags: ['Jetpack Compose', 'Koin', 'Firebase', 'Room'],
		icon: 'bx-terminal',
		gradient: 'from-pink-500 to-orange-500',
		github: 'https://github.com/ralphmarondev/lumi-release',
		demo: null,
		featured: true,
		route: '/projects/lumi'
	},
	{
		id: 2,
		name: 'Mewzi',
		description: 'Mini social media app for sharing posts and connecting with friends.',
		longDescription: 'Cross-platform social app with secure posting, likes, and comments, focused on family and friend groups.',
		image: '/projects/mewzi.png',
		tags: ['Jetpack Compose', 'Kotlin', 'Django', 'Postgresql'],
		icon: 'bx-lock-alt',
		gradient: 'from-orange-500 to-purple-500',
		github: 'https://github.com/ralphmarondev/Mewzi',
		demo: null,
		featured: true,
		route: '/projects/mewzi'
	},
	{
		id: 3,
		name: 'Keepsafe',
		description: 'Family info manager that tracks birthdays and sends notifications on Android & Desktop.',
		longDescription: 'Compose Multiplatform app to manage family information securely, with birthday alerts and notifications.',
		image: '/projects/keepsafe.png',
		tags: ['Kotlin', 'Compose Multiplatform', 'Firebase'],
		icon: 'bx-server',
		gradient: 'from-purple-500 to-pink-500',
		github: 'https://github.com/ralphmarondev/Keepsafe',
		demo: null,
		featured: true,
		route: '/projects/keepsafe'
	}
]
</script>

<template>
	<ProjectsMainLayout>
		<AnimatedHeader />

		<h2 class="text-2xl font-semibold text-gray-800 mb-6">
			Explore
		</h2>

		<div class="grid md:grid-cols-2 gap-8">
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
						<RouterLink :to="project.route"
						            class="text-sm text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1">
							Learn More <i class="bx bx-chevron-right"></i>
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</ProjectsMainLayout>
</template>