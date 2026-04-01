<script setup lang="ts">
import MainLayout from '@/shared/layouts/MainLayout.vue'

const lastUpdated = 'April 1, 2026'
const contactEmail = 'edaralphmaron@gmail.com'
const contactAddress = 'Cagayan, Philippines, Asia 🌍 | Milky Way Galaxy 🌌'
</script>

<template>
	<MainLayout title="Ralph Maron Eda" link="/">
		<div class="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
			<!-- Header -->
			<div class="mb-6">
				<h1 class="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-2">
					<i class="bx bx-shield text-purple-500 text-4xl"></i> Privacy Policy
				</h1>
				<p class="text-sm text-gray-500">Last Updated: {{ lastUpdated }}</p>
			</div>

			<!-- Introduction -->
			<section class="mb-6">
				<p class="text-gray-700 leading-relaxed">
					Welcome to <span class="font-semibold">ralphmarondev.github.io</span>! This website belongs to
					<span class="font-semibold">Ralph Maron Eda</span> and is purely personal.
					It hosts tutorials and personal projects. We respect your privacy: we do <strong>not</strong> collect,
					store, or share any personal information.
				</p>
			</section>

			<!-- Information We Collect -->
			<section class="mb-6">
				<h2 class="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
					<i class="bx bx-data text-purple-500"></i> Information We Collect
				</h2>
				<p class="text-gray-700 leading-relaxed">
					None. Your visit is completely anonymous. There are no logins, no forms, and no tracking.
				</p>
			</section>

			<!-- Cookies -->
			<section class="mb-6">
				<h2 class="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
					<i class="bx bx-cookie text-purple-500"></i> Cookies
				</h2>
				<p class="text-gray-700 leading-relaxed">
					We do not use cookies or tracking technologies. Your experience is completely private.
				</p>
			</section>

			<!-- Third-Party Content -->
			<section class="mb-6">
				<h2 class="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
					<i class="bx bx-link text-purple-500"></i> Third-Party Content
				</h2>
				<p class="text-gray-700 leading-relaxed">
					Some tutorials may include links to external websites. We are not responsible for the privacy practices of
					these websites.
				</p>
			</section>

			<!-- Contact -->
			<section class="mb-6">
				<h2 class="text-xl font-semibold text-gray-900 mb-2 flex items-center gap-2">
					<i class="bx bx-envelope text-purple-500"></i> Contact
				</h2>
				<p class="text-gray-700 leading-relaxed">
					Questions about this policy? Feel free to reach out:
				</p>
				<ul class="text-gray-700 mt-2 space-y-1">
					<li>Email: <a :href="`mailto:${contactEmail}`" class="text-purple-600 underline">{{ contactEmail }}</a></li>
					<li>Location: {{ contactAddress }}</li>
				</ul>
			</section>

			<p class="text-gray-500 text-sm mt-6 text-center">
				&copy; {{ new Date().getFullYear() }} Ralph Maron Eda. All rights reserved.
			</p>
		</div>
	</MainLayout>
</template>