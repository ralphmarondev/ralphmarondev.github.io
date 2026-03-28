<script setup lang="ts">
import MainLayout from '@/features/tutorials/layouts/MainLayout.vue'
import AnimatedHeader from '@/features/tutorials/AnimatedHeader.vue'

const exploreCards = [
	{
		title: 'C Programming',
		description: 'Master the fundamentals of programming using C, from syntax to memory management.',
		image: '/blog/c.png',
		route: '/blog/c-programming-language'
	}
]
</script>

<template>
	<MainLayout>
		<AnimatedHeader />

		<h2 class="text-2xl font-semibold text-gray-800 mb-6">
			Explore
		</h2>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
			<router-link
					v-for="card in exploreCards"
					:key="card.title"
					:to="card.route"
					class="group bg-white border rounded-xl overflow-hidden hover:shadow-lg transition">
				<!-- Image -->
				<div class="h-40 bg-gray-100 overflow-hidden">
					<img
							:src="card.image"
							alt=""
							class="w-full h-full object-cover group-hover:scale-105 transition"
					/>
				</div>

				<!-- Content -->
				<div class="p-5">
					<h3 class="text-xl font-semibold text-gray-800 mb-2">
						{{ card.title }}
					</h3>

					<p class="text-gray-500 text-sm leading-relaxed">
						{{ card.description }}
					</p>

					<span class="inline-block mt-4 text-pink-500 font-medium">
            Explore →
          </span>
				</div>
			</router-link>
		</div>
	</MainLayout>
</template>
