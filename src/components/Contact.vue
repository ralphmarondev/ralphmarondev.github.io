<script setup lang="ts">
import {ref} from 'vue';
import {emailClient} from "@/lib/emailjs.ts";

const isContactForm = ref(true)
const formRef = ref<HTMLFormElement | null>(null);
const status = ref('');
const isSuccess = ref(false);

const handleSubmit = async () => {
	if (!formRef.value) return;
	
	try {
		await emailClient.sendForm(formRef.value)
		isSuccess.value = true;
		status.value = "Message sent successfully"
		formRef.value.reset()
	} catch (error) {
		isSuccess.value = true;
		console.error(error)
		status.value = "Failed to send message."
	} finally {
		setTimeout(() => {
			status.value = "";
		}, 4000)
	}
}

</script>

<template>
	<section class="py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden" id="contact">
		<div class="container">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="text-center mb-16 aos-init aos-animate" data-aos="fade-up">
					<h2 class="text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Get In
						<span class="text-purple-600 dark:text-purple-400">Touch</span>
					</h2>
					<p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
						Reach out to collaborate, discuss opportunities, or just say hello!
					</p>
				</div>
				<div class="flex justify-center mb-12 aos-init aos-animate" data-aos="fade-up">
					<div
							class="bg-white dark:bg-gray-900 p-1 flex rounded-full shadow-lg border border-gray-200 dark:border-gray-700">
						<button @click="isContactForm = true"
						        class="px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
						        :class="isContactForm ? ' bg-purple-600 text-white shadow-lg' : ' text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'">
							<i class="bx bx-edit text-xl"></i>
							<span>Contact Form</span>
						</button>
						<button @click="isContactForm = false"
						        class="px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
						        :class="!isContactForm ? ' bg-purple-600 text-white shadow-lg' : ' text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'">
							<i class="bx bx-share-alt text-xl"></i>
							<span>Contact Methods</span>
						</button>
					</div>
				</div>
				<div class="max-w-2xl mx-auto aos-init aos-animate" data-aos="fade-up" v-if="isContactForm">
					<div
							class="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
						<form class="space-y-6" @submit.prevent="handleSubmit" ref="formRef">
							<div>
								<label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Name</label>
								<input type="text" id="name" name="name" required
								       class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
								       placeholder="Your Name">
							</div>
							<div>
								<label for="email"
								       class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Email</label>
								<input type="email" id="email" name="email" required
								       class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
								       placeholder="Your Email">
							</div>
							<div>
								<label for="message"
								       class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Message</label>
								<textarea name="message" id="message" required rows="5"
								          class="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
								          placeholder="Your Message"></textarea>
							</div>
							<button type="submit"
							        class="w-full py-3 px-6 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
								<i class="bx bx-send text-lg"></i>
								<span>Send Message</span>
							</button>
						</form>
						
						<p class="mt-4 text-center text-sm"
						   :class="isSuccess ? 'text-green-600': 'text-red-600'">
							{{ status }}
						</p>
					</div>
				</div>
				<div class="grid lg:grid-cols-3 gap-8 aos-init aos-animate" data-aos="fade-up" v-else>
					<div class="group">
						<div
								class="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
							<div class="flex items-center mb-6">
								<div
										class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white mr-4 shadow-lg">
									<i class="bx bx-mail-send text-xl"></i>
								</div>
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">Email</h3>
							</div>
							<div class="space-y-4">
								<div
										class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bx-envelope text-lg text-purple-500"></i>
										<div>
											<p class="font-semibold text-gray-900 dark:text-white">Personal Email</p>
											<p class="text-sm text-gray-600 dark:text-gray-400">edaralphmaron@gmail.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group">
						<div
								class="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
							<div class="flex items-center mb-6">
								<div
										class="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white mr-4 shadow-lg">
									<i class="bx bx-share-alt text-xl"></i>
								</div>
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">Social Media</h3>
							</div>
							<div class="space-y-4">
								<div
										class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bxl-linkedin text-lg text-purple-500"></i>
										<div>
											<p class="font-semibold text-gray-900 dark:text-white">LinkedIn</p>
											<p class="text-sm text-gray-600 dark:text-gray-400">linkedin.com/in/ralph-maron-eda</p>
										</div>
									</div>
								</div>
								<div
										class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bxl-github text-lg text-purple-500"></i>
										<div>
											<p class="font-semibold text-gray-900 dark:text-white">Github</p>
											<p class="text-sm text-gray-600 dark:text-gray-400">github.com/ralphmarondev</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="group">
						<div
								class="bg-white dark:bg-gray-900 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700">
							<div class="flex items-center mb-6">
								<div
										class="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white mr-4 shadow-lg">
									<i class="bx bx-phone-call text-xl"></i>
								</div>
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">Phone</h3>
							</div>
							<div class="space-y-4">
								<div
										class="p-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800">
									<div class="flex items-center space-x-2">
										<i class="bx bx-phone text-lg text-purple-500"></i>
										<div>
											<p class="font-semibold text-gray-900 dark:text-white">Mobile</p>
											<p class="text-sm text-gray-600 dark:text-gray-400">+63961706582</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>