<!-- CONTACT SECTION - Simplified Single View -->
<script setup lang="ts">
import {ref} from 'vue'
import {emailClient} from '@/app/emailjs.ts'

const formRef = ref<HTMLFormElement | null>(null)
const status = ref('')
const isSuccess = ref(false)
const isSending = ref(false)

const handleSubmit = async () => {
	if (!formRef.value || isSending.value) return

	isSending.value = true
	isSuccess.value = false
	status.value = ''

	try {
		await emailClient.sendForm(formRef.value)
		isSuccess.value = true
		status.value = 'Message sent successfully! I\'ll get back to you soon.'
		formRef.value.reset()
	} catch (error) {
		isSuccess.value = false
		console.error(error)
		status.value = 'Failed to send message. Please try again.'
	} finally {
		isSending.value = false
		setTimeout(() => {
			status.value = ''
		}, 5000)
	}
}

const contactMethods = [
	{
		icon: 'bx-envelope',
		title: 'Email',
		value: 'edaralphmaron@gmail.com',
		link: 'mailto:edaralphmaron@gmail.com',
		color: 'purple',
		description: 'Send me an email anytime'
	},
	{
		icon: 'bxl-linkedin',
		title: 'LinkedIn',
		value: 'ralph-maron-eda',
		link: 'https://linkedin.com/in/ralph-maron-eda',
		color: 'blue',
		description: 'Connect professionally'
	},
	{
		icon: 'bx-phone',
		title: 'Phone',
		value: '+63 961 706 582',
		link: 'tel:+63961706582',
		color: 'green',
		description: 'Available for calls'
	}
]
</script>

<template>
	<section id="contact" class="py-20 bg-gray-50 dark:bg-gray-800/50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="text-center mb-12" data-aos="fade-up">
				<h2 class="text-4xl lg:text-5xl font-bold mb-4">
					Get In <span class="text-purple-600 dark:text-purple-400">Touch</span>
				</h2>
				<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
					Have a project in mind or want to learn programming? I'd love to hear from you!
				</p>
			</div>

			<div class="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
				<!-- Contact Form -->
				<div data-aos="fade-right">
					<div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
						<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
							<i class="bx bx-edit text-purple-500 text-2xl"></i>
							Send a Message
						</h3>
						<form class="space-y-4" @submit.prevent="handleSubmit" ref="formRef">
							<div>
								<input
										type="text"
										id="name"
										name="name"
										required
										class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
										placeholder="Your name"
								/>
							</div>
							<div>
								<input
										type="email"
										id="email"
										name="email"
										required
										class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
										placeholder="Your email"
								/>
							</div>
							<div>
                <textarea
		                name="message"
		                id="message"
		                required
		                rows="5"
		                class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition resize-none"
		                placeholder="Your message"
                ></textarea>
							</div>
							<button
									type="submit"
									:disabled="isSending"
									class="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
							>
                <span v-if="isSending" class="inline-flex items-center gap-2">
                  <i class="bx bx-loader-alt animate-spin"></i>
                  Sending...
                </span>
								<span v-else class="inline-flex items-center gap-2">
                  <i class="bx bx-send"></i>
                  Send Message
                </span>
							</button>
							<p v-if="status" :class="isSuccess ? 'text-green-600' : 'text-red-600'" class="text-sm text-center">
								{{ status }}
							</p>
						</form>
					</div>
				</div>

				<!-- Contact Information -->
				<div data-aos="fade-left">
					<div class="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 h-full">
						<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
							<i class="bx bx-info-circle text-purple-500 text-2xl"></i>
							Connect With Me
						</h3>
						<p class="text-gray-600 dark:text-gray-400 text-sm mb-6">
							Prefer other ways to reach me? Here's how you can connect:
						</p>

						<div class="space-y-4">
							<a
									v-for="method in contactMethods"
									:key="method.title"
									:href="method.link"
									target="_blank"
									class="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group cursor-pointer"
							>
								<div class="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 flex items-center justify-center group-hover:scale-110 transition">
									<i :class="['bx', method.icon, `text-${method.color}-500 text-xl`]"></i>
								</div>
								<div class="flex-1">
									<h4 class="font-semibold text-gray-900 dark:text-white text-sm">
										{{ method.title }}
									</h4>
									<p class="text-xs text-gray-500 dark:text-gray-400">
										{{ method.value }}
									</p>
									<p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
										{{ method.description }}
									</p>
								</div>
								<i class="bx bx-chevron-right text-gray-400 group-hover:text-purple-500 transition group-hover:translate-x-1"></i>
							</a>
						</div>

						<!-- Quick Response Note -->
						<div class="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
							<div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
								<i class="bx bx-time-five"></i>
								<span>Usually responds within 24 hours</span>
							</div>
							<div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-2">
								<i class="bx bx-check-shield"></i>
								<span>Your information is kept private</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Social Media Links (Quick Access) -->
			<div class="flex justify-center gap-4 mt-12" data-aos="fade-up">
				<a
						href="https://github.com/ralphmarondev"
						target="_blank"
						class="p-3 bg-white dark:bg-gray-900 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
				>
					<i class="bx bxl-github text-xl text-gray-700 dark:text-gray-300"></i>
				</a>
				<a
						href="https://linkedin.com/in/ralph-maron-eda"
						target="_blank"
						class="p-3 bg-white dark:bg-gray-900 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
				>
					<i class="bx bxl-linkedin text-xl text-blue-600"></i>
				</a>
				<a
						href="https://www.instagram.com/ralphmaron"
						target="_blank"
						class="p-3 bg-white dark:bg-gray-900 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
				>
					<i class="bx bxl-instagram text-xl text-pink-600"></i>
				</a>
				<a
						href="https://www.youtube.com/@RalphMaronEda"
						target="_blank"
						class="p-3 bg-white dark:bg-gray-900 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700"
				>
					<i class="bx bxl-youtube text-xl text-red-600"></i>
				</a>
			</div>
		</div>
	</section>
</template>