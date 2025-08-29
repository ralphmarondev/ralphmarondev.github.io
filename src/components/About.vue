<template>
	<section class='py-20 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 overflow-hidden'
	         id='about'>
		<div class='container'>
			<div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div class='text-center mb-16' data-aos='fade-up'>
					<h2 class='text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white'>
						About
						<span class='text-purple-600 dark:text-purple-400'>Me</span>
					</h2>
					<p class='text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed'>Get to know the story
						behind my code, where I started, what drives me, and why I love building mobile apps. </p>
				</div>
				<div class="flex flex-col lg:flex-row gap-12">
					<div class="lg:w-1/3 flex justify-center lg:justify-start aos-init aos-animate" data-aos="fade-left">
						<img src="/ralphmaron.png" alt="Profile"
						     class="w-80 h-80 object-cover shadow-xl hover:rotate-3 transition-transform duration-300">
					</div>
					<div class="lg:w-2/3">
						<div class="grid grid-cols-1 sm:grid-cols-3 gap-6 aos-init aos-animate" data-aos="fade-right">
							<div class="flex flex-col aos-init aos-animate" data-aos="fade-right" data-aos-delay="0">
								<div class="flex items-center space-x-3 mb-2">
									<div
											class="p-4 bg-purple-500 rounded-rull shadow-lg flex items-center justify-center text-white shirnk-0">
										<i class="bx bx bx-id-card text-lg"></i>
									</div>
									<h4 class="text-lg font-medium text-gray-900 dark:text-white">Bio</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-break-spaces">Self-taught
									mobile developer since 2023 with a Computer Engineering background. Passionate about Kotlin, Compose
									Multiplatform, and Spring Boot with JWT for backend.</p>
							</div>
							<div class="flex flex-col aos-init aos-animate" data-aos="fade-right" data-aos-delay="0">
								<div class="flex items-center space-x-3 mb-2">
									<div
											class="p-4 bg-pink-500 rounded-rull shadow-lg flex items-center justify-center text-white shirnk-0">
										<i class="bx bx bx-heart text-lg"></i>
									</div>
									<h4 class="text-lg font-medium text-gray-900 dark:text-white">Hobbies</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
									Enjoy hiking, playing clash of clans, watching sci-fi movies, and contributing to open-source
									projects.
								</p>
							</div>
							<div class="flex flex-col aos-init aos-animate" data-aos="fade-right" data-aos-delay="0">
								<div class="flex items-center space-x-3 mb-2">
									<div
											class="p-4 bg-orange-500 rounded-rull shadow-lg flex items-center justify-center text-white shirnk-0">
										<i class="bx bx bx-globe text-lg"></i>
									</div>
									<h4 class="text-lg font-medium text-gray-900 dark:text-white">Languages</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-break-spaces">Fluent in
									English and Tagalog. Proficient in Ilocano.</p>
							</div>
							<div class="flex flex-col aos-init aos-animate" data-aos="fade-right" data-aos-delay="0">
								<div class="flex items-center space-x-3 mb-2">
									<div
											class="p-4 bg-blue-500 rounded-rull shadow-lg flex items-center justify-center text-white shirnk-0">
										<i class="bx bx bx-envelope text-lg"></i>
									</div>
									<h4 class="text-lg font-medium text-gray-900 dark:text-white">Contact</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-break-spaces">Email:
									edaralphmaron@gmail.com <br>Phone: +639617906582 <br>LinkedIn: linkedin.com/in/ralph-maron-eda/
								</p>
							</div>
							<div class="flex flex-col aos-init aos-animate" data-aos="fade-right" data-aos-delay="0">
								<div class="flex items-center space-x-3 mb-2">
									<div
											class="p-4 bg-red-500 rounded-rull shadow-lg flex items-center justify-center text-white shirnk-0">
										<i class="bx bx bx-map text-lg"></i>
									</div>
									<h4 class="text-lg font-medium text-gray-900 dark:text-white">Location</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-break-spaces">Based in
									Cagayan, Philippines. Available for remote work worldwide.
								</p>
							</div>
							<div class="flex flex-col aos-init aos-animate" data-aos="fade-right" data-aos-delay="0">
								<div class="flex items-center space-x-3 mb-2">
									<div
											class="p-4 bg-teal-500 rounded-rull shadow-lg flex items-center justify-center text-white shirnk-0">
										<i class="bx bx bx-book text-lg"></i>
									</div>
									<h4 class="text-lg font-medium text-gray-900 dark:text-white">Education Summary</h4>
								</div>
								<p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed whitespace-break-spaces">Bachelor of
									Science in Computer Engineering, Cagayan State University - Carig Campus (2021 - 2025).
								</p>
							</div>
						</div>
						<div class="mt-8 flex flex-col sm:flex-row items-center gap-6 aos-init aos-animate" data-aos="fade-up"
						     data-aos-delay="600">
							<div class="flex items-center space-x-4">
								<span class="text-gray-700 dark:text-gray-300 font-medium">Follow me on:</span>
								<div class="flex space-x-3">
									<a href="https://www.linkedin.com/in/ralph-maron-eda/"
									   class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
										<i class="bx bxl-linkedin text-lg"></i>
									</a>
									<a href="https://github.com/ralphmarondev/"
									   class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
										<i class="bx bxl-github text-lg"></i>
									</a>
									<a href="https://www.tiktok.com/@ralphmaron/"
									   class="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1">
										<i class="bx bxl-tiktok text-lg"></i>
									</a>
								</div>
							</div>
							<div class="flex flex-col sm:flex-row gap-4">
								<a href="/Ralph-Maron-Eda-Resume.pdf" target="_blank"
								   class="inline-flex items-center justify-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
									<i class="bx bx-download mr-2"></i>
									Download CV
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>