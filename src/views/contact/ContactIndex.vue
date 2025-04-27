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

const sendEmail = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  emailjs.send(serviceId, templateId, formData.value, publicKey).then(
    (response) => {
      alert('Email sent successfully!')
      console.log('Email sent successfully!', response.status, response.text)
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    },
    (error) => {
      alert('Failed to send email. Please try again later.')
      console.error('Failed to send email:', error)
    }
  )
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
                    <button class="colored-btn" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-5 ms-auto col-xl-4">
            <!-- <div class="pb-5 d-none d-md-block">
            <img src="@/assets/img/my_cute_image.jpg" alt="" class="w-100" />
          </div> -->
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
    <Footer />
  </div>
</template>
