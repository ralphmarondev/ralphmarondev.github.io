<script setup lang="ts">
import {RouterLink} from 'vue-router'
import {ref} from 'vue'

const currentYear = ref(new Date().getFullYear())

const aboutLinks = [
	{name: 'About Me', route: '/#about'},
	{name: 'Contact', route: '/#contact'},
	{name: 'Privacy Policy', route: '/privacy-policy'}
]

const projectsLinks = [
	{name: 'All Projects', route: '/projects'},
	{name: 'Lumi OS', route: '/projects/lumi-os'},
	{name: 'KeepSafe', route: '/projects/keepsafe'}
]

const tutorialsLinks = [
	{name: 'All Tutorials', route: '/blog'},
	{name: 'C Language', route: '/blog/c-programming-language'},
	{name: 'C++', route: '/blog/cpp'}
]
</script>

<template>
	<footer class="bg-gray-900 text-gray-300 mt-12">
		<div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

			<!-- About Me Section -->
			<div>
				<h3 class="text-white font-semibold mb-4">About Me</h3>
				<ul class="space-y-2">
					<li v-for="link in aboutLinks" :key="link.name">
						<router-link
								:to="link.route"
								class="hover:text-white transition"
						>
							{{ link.name }}
						</router-link>
					</li>
				</ul>
			</div>

			<!-- Projects Section -->
			<div>
				<h3 class="text-white font-semibold mb-4">Projects</h3>
				<ul class="space-y-2">
					<li v-for="link in projectsLinks" :key="link.name">
						<router-link
								:to="link.route"
								class="hover:text-white transition"
								target="_blank"
								rel="noopener noreferrer"
						>
							{{ link.name }}
						</router-link>
					</li>
				</ul>
			</div>

			<!-- Tutorials Section -->
			<div>
				<h3 class="text-white font-semibold mb-4">Tutorials</h3>
				<ul class="space-y-2">
					<li v-for="link in tutorialsLinks" :key="link.name">
						<router-link
								:to="link.route"
								class="hover:text-white transition"
						>
							{{ link.name }}
						</router-link>
					</li>
				</ul>
			</div>

			<!-- Connect Section -->
			<div>
				<h3 class="text-white font-semibold mb-4">Connect</h3>
				<p class="text-gray-400 text-sm mb-4">
					Follow me on social media or subscribe to my newsletter.
				</p>
				<div class="flex space-x-4">
					<a href="https://www.facebook.com/imralphmaron"
					   class="hover:text-white transition">
						<i class="bx bxl-facebook-square text-2xl"></i>
					</a>
					<a href="https://www.tiktok.com/@ralphmaron"
					   class="hover:text-white transition">
						<i class="bx bxl-tiktok text-2xl"></i>
					</a>
					<a href="https://www.instagram.com/ralphmaron"
					   class="hover:text-white transition">
						<i class="bx bxl-instagram text-2xl"></i>
					</a>
					<a href="https://www.linkedin.com/in/ralph-maron-eda"
					   class="hover:text-white transition">
						<i class="bx bxl-linkedin-square text-2xl"></i>
					</a>
					<a href="https://www.youtube.com/@RalphMaronEda"
					   class="hover:text-white transition">
						<i class="bx bxl-youtube text-2xl"></i>
					</a>
				</div>
			</div>
		</div>

		<div class="border-t border-gray-700 mt-8 py-4 text-center text-gray-400 text-sm">
			&copy; {{ currentYear}} Ralph Maron Eda. All rights reserved.
		</div>
	</footer>
</template>