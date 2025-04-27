<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

import emailjs from 'emailjs-com'
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const toastMessage = ref('')
const showToast = ref(false)

const sendEmail = () => {
  if (isSubmitting.value) return
  isSubmitting.value = true

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  emailjs
    .send(serviceId, templateId, formData.value, publicKey)
    .then(
      (response) => {
        toastMessage.value = 'Email sent successfully!'
        showToast.value = true
        console.log('Email sent successfully!', response.status, response.text)
        formData.value = {
          name: '',
          email: '',
          subject: '',
          message: '',
        }
      },
      (error) => {
        toastMessage.value = 'Failed to send email. Please try again later.'
        showToast.value = true
        console.error('Failed to send email:', error)
      }
    )
    .finally(() => {
      isSubmitting.value = false
    })
}
</script>

<template>
  <div>
    <Header />
    <section id="contact" class="section bg-gray">
      <div class="container mt-3">
        <div class="row gy-5">
          <div class="col-lg-6">
            <div class="contact-form">
              <h2 class="text-dark">Get in touch</h2>
              <p class="lead">I'll be happy to hear from you.</p>
              <form @submit.prevent="sendEmail">
                <div class="row gy-4 gx-3">
                  <div class="col-12">
                    <div class="form-group">
                      <label class="form-label">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        v-model="formData.name"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="form-label">Email</label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        v-model="formData.email"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="form-label">Subject</label>
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        v-model="formData.subject"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label class="form-label">Message</label>
                      <textarea
                        name="message"
                        cols="3"
                        rows="5"
                        class="form-control"
                        v-model="formData.message"
                        required
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      class="colored-btn"
                      type="submit"
                      :disabled="isSubmitting"
                    >
                      {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-5 ms-auto col-xl-4">
            <ul class="contact-infos">
              <li>
                <div class="icon bg-1">
                  <i class="bx bx-phone"></i>
                </div>
                <div class="col ps-3">
                  <h5>Phone</h5>
                  <p>+63 961 790 6582</p>
                </div>
              </li>
              <li>
                <div class="icon bg-2">
                  <i class="bx bx-envelope"></i>
                </div>
                <div class="col ps-3">
                  <h5>Mail</h5>
                  <p>edaralphmaron@gmail.com</p>
                </div>
              </li>
              <li>
                <div class="icon bg-3">
                  <i class="bx bx-map"></i>
                </div>
                <div class="col ps-3">
                  <h5>Visit My Office</h5>
                  <p>Flora, Apayao, Philippines</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Toast -->
    <div
      class="toast-container position-fixed bottom-0 end-0 p-3"
      style="z-index: 1055"
    >
      <div
        class="toast show custom-toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        v-if="showToast"
      >
        <div class="toast-header custom-toast-header">
          <strong class="me-auto">Notification</strong>
          <button
            type="button"
            class="btn-close"
            @click="showToast = false"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body custom-toast-body">
          {{ toastMessage }}
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.custom-toast {
  background-color: #d8b4f2;
  color: #4a148c;
  border: 1px solid #c084f5;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.custom-toast-header {
  background-color: #c084f5;
  color: #fff;
  border-bottom: 1px solid #b072e6;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
}

.custom-toast-body {
  font-size: 1.1rem;
  padding: 1.2rem;
  color: #4a148c;
}
</style>
