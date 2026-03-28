<!-- features/portfolio/components/sections/TutorialsSection.vue -->
<script setup lang="ts">
const tutorials = [
	{
		id: 1,
		title: 'Getting Started with Kotlin Multiplatform',
		description: 'Learn how to share code between Android, iOS, and Desktop with Compose Multiplatform.',
		category: 'Mobile',
		readTime: '15 min',
		level: 'Beginner',
		icon: 'bxl-kotlin',
		gradient: 'from-purple-500 to-pink-500',
		slug: 'kotlin-multiplatform-guide'
	},
	{
		id: 2,
		title: 'Building REST APIs with Spring Boot',
		description: 'Create robust backend services using Kotlin and Spring Boot with JWT authentication.',
		category: 'Backend',
		readTime: '20 min',
		level: 'Intermediate',
		icon: 'bxl-spring-boot',
		gradient: 'from-green-500 to-emerald-500',
		slug: 'spring-boot-rest-api'
	},
	{
		id: 3,
		title: 'Modern Android Development with Compose',
		description: 'Master Jetpack Compose and modern Android architecture patterns.',
		category: 'Mobile',
		readTime: '25 min',
		level: 'Intermediate',
		icon: 'bxl-android',
		gradient: 'from-teal-500 to-cyan-500',
		slug: 'jetpack-compose-guide'
	},
	{
		id: 4,
		title: 'Vue 3 Composition API Deep Dive',
		description: 'Understanding and mastering the Composition API in Vue 3.',
		category: 'Frontend',
		readTime: '18 min',
		level: 'Intermediate',
		icon: 'bxl-vuejs',
		gradient: 'from-blue-500 to-purple-500',
		slug: 'vue3-composition-api'
	}
]
</script>

<template>
	<section id="tutorials" class="py-20 bg-white dark:bg-gray-900">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12" data-aos="fade-up">
				<h2 class="text-4xl lg:text-5xl font-bold mb-4">
					<span class="text-gray-900 dark:text-white">Learning</span>
					<span class="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"> Resources</span>
				</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					Tutorials and guides to help you level up your development skills.
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-6" data-aos="fade-up">
				<router-link
						v-for="tutorial in tutorials"
						:key="tutorial.id"
						:to="`/tutorials/${tutorial.slug}`"
						class="group block bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
				>
					<div class="flex items-start space-x-4">
						<div class="w-12 h-12 rounded-xl bg-gradient-to-r flex-shrink-0 flex items-center justify-center" :class="tutorial.gradient">
							<i :class="['bx', tutorial.icon, 'text-2xl text-white']"></i>
						</div>
						<div class="flex-1">
							<div class="flex items-center justify-between mb-2">
								<h3 class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
									{{ tutorial.title }}
								</h3>
								<i class="bx bx-chevron-right text-xl text-gray-400 group-hover:text-purple-600 transition"></i>
							</div>
							<p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
								{{ tutorial.description }}
							</p>
							<div class="flex items-center space-x-3 text-xs">
                <span class="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                  {{ tutorial.category }}
                </span>
								<span class="text-gray-500 dark:text-gray-500">
                  <i class="bx bx-time mr-1"></i>{{ tutorial.readTime }}
                </span>
								<span class="text-gray-500 dark:text-gray-500">
                  <i class="bx bx-signal mr-1"></i>{{ tutorial.level }}
                </span>
							</div>
						</div>
					</div>
				</router-link>
			</div>

			<div class="text-center mt-8" data-aos="fade-up">
				<router-link
						to="/tutorials"
						class="inline-flex items-center text-purple-600 dark:text-purple-400 font-semibold hover:gap-2 transition-all duration-300"
				>
					View All Tutorials
					<i class="bx bx-chevron-right ml-1 text-xl"></i>
				</router-link>
			</div>
		</div>
	</section>
</template>