<!-- shared/layouts/Footer.vue -->
<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
	<footer class="bg-gray-900 text-gray-300">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid md:grid-cols-4 gap-8">
				<!-- Brand -->
				<div class="col-span-2">
					<div class="flex items-center mb-4">
						<i class="bx bx-code text-2xl text-purple-500"></i>
						<span class="ml-2 text-xl font-bold text-white">Ralph Maron Eda</span>
					</div>
					<p class="text-gray-400 text-sm leading-relaxed">
						Crafting elegant mobile experiences with Kotlin and Compose Multiplatform.
						Building the future, one line of code at a time.
					</p>
				</div>

				<!-- Quick Links -->
				<div>
					<h3 class="text-white font-semibold mb-4">Quick Links</h3>
					<ul class="space-y-2">
						<li><router-link to="/#home" class="text-gray-400 hover:text-purple-400 transition text-sm">Home</router-link></li>
						<li><router-link to="/#about" class="text-gray-400 hover:text-purple-400 transition text-sm">About</router-link></li>
						<li><router-link to="/#projects" class="text-gray-400 hover:text-purple-400 transition text-sm">Projects</router-link></li>
						<li><router-link to="/#tutorials" class="text-gray-400 hover:text-purple-400 transition text-sm">Tutorials</router-link></li>
					</ul>
				</div>

				<!-- Connect -->
				<div>
					<h3 class="text-white font-semibold mb-4">Connect</h3>
					<div class="flex space-x-3">
						<a href="https://github.com/ralphmarondev" target="_blank" class="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition">
							<i class="bx bxl-github text-xl"></i>
						</a>
						<a href="https://linkedin.com/in/ralph-maron-eda" target="_blank" class="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition">
							<i class="bx bxl-linkedin text-xl"></i>
						</a>
						<a href="https://www.instagram.com/ralphmaron" target="_blank" class="p-2 bg-gray-800 rounded-lg hover:bg-purple-600 transition">
							<i class="bx bxl-instagram text-xl"></i>
						</a>
					</div>
				</div>
			</div>

			<div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
				&copy; {{ currentYear }} Ralph Maron Eda. All rights reserved.
			</div>
		</div>
	</footer>
</template>