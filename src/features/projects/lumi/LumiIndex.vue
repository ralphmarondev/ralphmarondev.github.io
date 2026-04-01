<script setup lang="ts">
import ProjectsMainLayout from '@/shared/layouts/ProjectsMainLayout.vue'

const downloadLink = 'https://github.com/ralphmarondev/lumi-release/releases/download/26.03-Corgi/lumi-corgi.apk'

const handleDownload = (e: Event) => {
	e.preventDefault()
	window.location.href = downloadLink
}
</script>

<template>
	<ProjectsMainLayout
			title="Lumi Operating System">
		<div class="min-h-screen">
			<!-- Hero Section -->
			<section class="relative overflow-hidden">
				<div class="max-w-7xl mx-auto px-6 py-8 lg:py-12">
					<div class="flex flex-col lg:flex-row items-center gap-10">
						<!-- Left Content -->
						<div class="lg:w-1/2 text-center lg:text-left space-y-4">
							<div class="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/30 rounded-full px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
								<i class="bx bx-window-alt"></i>
								<span>Version 26.03 Corgi</span>
							</div>

							<h1 class="text-5xl lg:text-6xl font-bold">
								<span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
									Lumi OS
								</span>
							</h1>

							<p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
								A lightweight virtual operating system that runs in your browser.
								Fast, private, and packed with useful mini apps.
							</p>

							<div class="flex flex-wrap gap-4 justify-center lg:justify-start">
								<a
										:href="downloadLink"
										@click.prevent="handleDownload"
										class="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition"
								>
									<i class="bx bx-download"></i>
									Download v26.03 Corgi
								</a>
							</div>
						</div>

						<!-- Right Image -->
						<div class="lg:w-1/2">
							<img
									src="/projects/lumi.png"
									alt="Lumi OS Preview"
									class="rounded-2xl shadow-2xl w-full"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	</ProjectsMainLayout>
</template>