<script setup lang="ts">
const companyLinks = ['About Us', 'Legal', 'Privacy Policy', 'Contact Us', 'Advertise']
const exploreLinks = ['POTD', 'Job-A-Thon', 'Blogs', 'Tutorials', 'Courses']
const tutorialsLinks = ['C Language', 'Python', 'Java', 'C++', 'DSA', 'Web Development']
</script>

<template>
	<footer class="bg-gray-900 text-gray-300 mt-12">
		<div class="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
			<div>
				<h3 class="text-white font-semibold mb-4">Company</h3>
				<ul class="space-y-2">
					<li v-for="link in companyLinks" :key="link">
						<a href="#" class="hover:text-white transition">{{ link }}</a>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-white font-semibold mb-4">Explore</h3>
				<ul class="space-y-2">
					<li v-for="link in exploreLinks" :key="link">
						<a href="#" class="hover:text-white transition">{{ link }}</a>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-white font-semibold mb-4">Tutorials</h3>
				<ul class="space-y-2">
					<li v-for="link in tutorialsLinks" :key="link">
						<a href="#" class="hover:text-white transition">{{ link }}</a>
					</li>
				</ul>
			</div>
			<div>
				<h3 class="text-white font-semibold mb-4">Connect</h3>
				<p class="text-gray-400 text-sm mb-4">
					Follow us on social media or subscribe to our newsletter.
				</p>
				<div class="flex space-x-4">
					<a href="#" class="hover:text-white transition"><i class="bx bxl-facebook-square text-2xl"></i></a>
					<a href="#" class="hover:text-white transition"><i class="bx bxl-twitter text-2xl"></i></a>
					<a href="#" class="hover:text-white transition"><i class="bx bxl-linkedin-square text-2xl"></i></a>
					<a href="#" class="hover:text-white transition"><i class="bx bxl-youtube text-2xl"></i></a>
				</div>
			</div>
		</div>
		<div class="border-t border-gray-700 mt-8 py-4 text-center text-gray-500 text-sm">
			© 2026 Ralph Maron Eda. All rights reserved.
		</div>
	</footer>
</template>