<script setup lang="ts">
import {RouterLink} from 'vue-router'
import {ref} from 'vue'

const currentYear = ref(new Date().getFullYear())

const aboutLinks = [
	{name: 'About Me', route: '/#about', icon: 'bx-user'},
	{name: 'Contact', route: '/#contact', icon: 'bx-envelope'},
	{name: 'Privacy Policy', route: '/privacy-policy', icon: 'bx-shield-quarter'}
]

const projectsLinks = [
	{name: 'All Projects', route: '/projects', icon: 'bx-grid-alt'},
	{name: 'Lumi OS', route: '/projects/lumi-os', icon: 'bx-window-alt'}, // OS/interface icon
	{name: 'KeepSafe', route: '/projects/keepsafe', icon: 'bx-lock-alt'} // Security/lock icon
]

const tutorialsLinks = [
	{name: 'All Tutorials', route: '/blog', icon: 'bx-collection'},
	{name: 'C Language', route: '/blog/c-programming-language', icon: 'bxl-c-plus-plus'},
	{name: 'C++', route: '/blog/cpp', icon: 'bxl-c-plus-plus'}
]
</script>

<template>
	<footer class="bg-gray-900 text-gray-300 mt-12">
		<div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">

			<!-- About Me Section -->
			<div>
				<h3 class="text-white font-semibold mb-4 flex items-center gap-2">
					<i class="bx bx-user text-xl"></i> About Me
				</h3>
				<ul class="space-y-2">
					<li v-for="link in aboutLinks" :key="link.name">
						<router-link
								:to="link.route"
								class="hover:text-white transition flex items-center gap-2"
						>
							<i :class="['bx', link.icon, 'text-sm']"></i>
							{{ link.name }}
						</router-link>
					</li>
				</ul>
			</div>

			<!-- Projects Section -->
			<div>
				<h3 class="text-white font-semibold mb-4 flex items-center gap-2">
					<i class="bx bx-code-alt text-xl"></i> Projects
				</h3>
				<ul class="space-y-2">
					<li v-for="link in projectsLinks" :key="link.name">
						<router-link
								:to="link.route"
								class="hover:text-white transition flex items-center gap-2"
						>
							<i :class="['bx', link.icon, 'text-sm']"></i>
							{{ link.name }}
						</router-link>
					</li>
				</ul>
			</div>

			<!-- Tutorials Section -->
			<div>
				<h3 class="text-white font-semibold mb-4 flex items-center gap-2">
					<i class="bx bx-book-open text-xl"></i> Tutorials
				</h3>
				<ul class="space-y-2">
					<li v-for="link in tutorialsLinks" :key="link.name">
						<router-link
								:to="link.route"
								class="hover:text-white transition flex items-center gap-2"
						>
							<i :class="['bx', link.icon, 'text-sm']"></i>
							{{ link.name }}
						</router-link>
					</li>
				</ul>
			</div>

			<!-- Connect Section -->
			<div>
				<h3 class="text-white font-semibold mb-4 flex items-center gap-2">
					<i class="bx bx-link-alt text-xl"></i> Connect
				</h3>
				<p class="text-gray-400 text-sm mb-4">
					Follow me on social media or subscribe to my newsletter.
				</p>
				<div class="flex space-x-4">
					<a href="https://www.facebook.com/imralphmaron"
					   target="_blank"
					   rel="noopener noreferrer"
					   class="hover:text-white transition">
						<i class="bx bxl-facebook-square text-2xl"></i>
					</a>
					<a href="https://www.tiktok.com/@ralphmaron"
					   target="_blank"
					   rel="noopener noreferrer"
					   class="hover:text-white transition">
						<i class="bx bxl-tiktok text-2xl"></i>
					</a>
					<a href="https://www.instagram.com/ralphmaron"
					   target="_blank"
					   rel="noopener noreferrer"
					   class="hover:text-white transition">
						<i class="bx bxl-instagram text-2xl"></i>
					</a>
					<a href="https://www.linkedin.com/in/ralph-maron-eda"
					   target="_blank"
					   rel="noopener noreferrer"
					   class="hover:text-white transition">
						<i class="bx bxl-linkedin-square text-2xl"></i>
					</a>
					<a href="https://www.youtube.com/@RalphMaronEda"
					   target="_blank"
					   rel="noopener noreferrer"
					   class="hover:text-white transition">
						<i class="bx bxl-youtube text-2xl"></i>
					</a>
				</div>
			</div>
		</div>

		<div class="border-t border-gray-700 mt-8 py-4 text-center text-gray-400 text-sm">
			&copy; {{ currentYear }} Ralph Maron Eda. All rights reserved.
		</div>
	</footer>
</template>