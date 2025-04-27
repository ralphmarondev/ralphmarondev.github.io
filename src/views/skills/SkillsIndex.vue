<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'

interface Certificate {
  img: string
  title: string
  short: string
  long: string
}

const certificates: Certificate[] = [
  {
    img: '/certificates/regcon24_recognition.png',
    title: 'Regional Convention 2024',
    short: 'Regional Convention 2024',
    long: 'Recognition during the Institute of Computer Engineers of the Philippines Regional Convention, General Assembly and 8th CPE Challenge for getting first runner up on Progamming Competiton, Python Category.',
  },
  {
    img: '/certificates/ojt_certificate.png',
    title: 'On the Job Training Certificate',
    short: 'OJT Certificate',
    long: 'Completed my on the job training at Metacore Systems Incorporated at Caloocan, Manila, Philippines. We did full stack web development with Vue3 and Django REST Framework with PostgreSQL database.',
  },
  {
    img: '/certificates/natcon23_recognition.png',
    title: 'National Convention 2023',
    short: 'National Convention 2023',
    long: 'Recognition during the Institute of Computer Engineers of the Philippines National Convention, General Assembly and 7th CPE Challenge at Adamson University, Ermita, Manila, for getting 10th runner up on Progamming Competiton, Python Category.',
  },
  {
    img: '/certificates/natcon23_participation.png',
    title: 'National Convention 2023',
    short: 'National Convention 2023',
    long: 'Certificate of participation during the Institute of Computer Engineers of the Philippines National Convention, General Assembly and 7th CPE Challenge at Adamson University, Ermita, Manila.',
  },
  {
    img: '/certificates/regcon23_recognition.png',
    title: 'Regional Convention 2023',
    short: 'Regional Convention 2023',
    long: 'Certificate of Recognition during the Institute of Computer Engineers of the Philippines National Convention, General Assembly and 7th CPE Challenge at Nueva Vizcaya State University, Bayombong, Nueva Vizacaya, for being the Champion on Progamming Competiton, Python Category.',
  },
  {
    img: '/certificates/regcon23_participation.png',
    title: 'Regional Convention 2023',
    short: 'Regional Convention 2023',
    long: 'Certificate of participation during the Institute of Computer Engineers of the Philippines National Convention, General Assembly and 7th CPE Challenge at Nueva Vizcaya State University, Bayombong, Nueva Vizcaya.',
  },
  {
    img: '/certificates/sololearn_c.jpg',
    title: 'SoloLearn: C course',
    short: 'Introductory C course',
    long: 'Completed a comprehensive beginner-level course on C by SoloLearn, covering basic syntax, control flow, and functions.',
  },
  {
    img: '/certificates/sololearn_cpp.jpg',
    title: 'SoloLearn: C++ for Beginners',
    short: 'Introductory C++ course',
    long: 'Completed a comprehensive beginner-level course on C++ by SoloLearn, covering basic syntax, control flow, and functions.',
  },
  {
    img: '/certificates/sololearn_java.png',
    title: 'SoloLearn: Java for Beginners',
    short: 'Introductory Java course',
    long: 'Completed a comprehensive beginner-level course on Java by SoloLearn, covering basic syntax, control flow, and functions.',
  },
  {
    img: '/certificates/sololearn_python.jpg',
    title: 'SoloLearn: Python for Beginners',
    short: 'Introductory Python course',
    long: 'Completed a comprehensive beginner-level course on Python by SoloLearn, covering basic syntax, control flow, and functions.',
  },
]

const selectedCert = ref<Certificate | null>(null)
const openModal = (cert: Certificate) => (selectedCert.value = cert)
const closeModal = () => (selectedCert.value = null)

// Reactive state for heading size
const isSmallScreen = ref(false)

const updateScreenSize = () => {
  isSmallScreen.value = window.innerWidth < 425
}

onMounted(() => {
  updateScreenSize()
  window.addEventListener('resize', updateScreenSize)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenSize)
})
</script>

<template>
  <div>
    <Header />
    <section id="skill" class="section bg-gray">
      <div class="container">
        <div class="row gy-5">
          <div class="col">
            <div class="section-heading">
              <component :is="isSmallScreen ? 'h4' : 'h3'" class="mb-3">
                Certificates and Achievements
              </component>
              <div class="row g-3">
                <div
                  class="col-12 col-sm-6 col-md-4 col-lg-3"
                  v-for="(cert, index) in certificates"
                  :key="index"
                >
                  <div
                    class="certificate-box shadow-sm p-2 rounded position-relative"
                    @click="openModal(cert)"
                  >
                    <img
                      :src="cert.img"
                      :alt="cert.title"
                      class="img-fluid rounded"
                    />
                    <p class="text-muted text-center small mt-3">
                      {{ cert.short }}
                    </p>

                    <div class="overlay">
                      <div class="overlay-text">
                        {{ cert.long }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              v-if="selectedCert"
              class="modal fade show d-block"
              tabindex="-1"
              style="background-color: rgba(0, 0, 0, 0.6)"
              @click.self="closeModal"
            >
              <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content p-4">
                  <div class="modal-header border-0">
                    <h5 class="modal-title">{{ selectedCert.title }}</h5>
                    <button
                      type="button"
                      class="btn-close"
                      @click="closeModal"
                    ></button>
                  </div>
                  <div class="modal-body text-center">
                    <img
                      :src="selectedCert.img"
                      :alt="selectedCert.title"
                      class="img-fluid mb-3"
                      style="max-height: 300px; object-fit: contain"
                    />
                    <p>{{ selectedCert.long }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tech Stack -->
            <div class="section-heading mt-5">
              <h3 class="mb-3">Tech Stack</h3>
              <div class="skill-box">
                <div class="row g-3">
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-1">
                      <div class="icon">
                        <i class="bx bxl-android"></i>
                      </div>
                      <h6>ANDROID</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-2">
                      <div class="icon">
                        <img src="/images/kotlin.png" alt="Kotlin" />
                      </div>
                      <h6>KOTLIN</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-3">
                      <div class="icon">
                        <img
                          src="/images/jetpack_compose.png"
                          alt="Jetpack Compose"
                        />
                      </div>
                      <h6>JETPACK COMPOSE</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-4">
                      <div class="icon">
                        <i class="bx bxl-python"></i>
                      </div>
                      <h6>PYTHON</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-5">
                      <div class="icon">
                        <i class="bx bxl-vuejs"></i>
                      </div>
                      <h6>VUE</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-6">
                      <div class="icon">
                        <i class="bx bxl-react"></i>
                      </div>
                      <h6>REACT</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-1">
                      <div class="icon">
                        <i class="bx bxl-sass"></i>
                      </div>
                      <h6>SASS</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-2">
                      <div class="icon">
                        <i class="bx bxl-bootstrap"></i>
                      </div>
                      <h6>BOOTSTRAP</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-3">
                      <div class="icon">
                        <i class="bx bxl-firebase"></i>
                      </div>
                      <h6>FIREBASE</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-4">
                      <div class="icon">
                        <i class="bx bxl-javascript"></i>
                      </div>
                      <h6>JAVASCRIPT</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-5">
                      <div class="icon">
                        <i class="bx bxl-typescript"></i>
                      </div>
                      <h6>TYPESCRIPT</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-6">
                      <div class="icon">
                        <i class="bx bxl-django"></i>
                      </div>
                      <h6>DJANGO REST</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-1">
                      <div class="icon">
                        <i class="bx bxl-git"></i>
                      </div>
                      <h6>GIT</h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4 col-lg-3">
                    <div class="feature-box feature-box-small bg-2">
                      <div class="icon">
                        <i class="bx bxl-github"></i>
                      </div>
                      <h6>GITHUB</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.certificate-box {
  position: relative;
  cursor: pointer;
  min-height: 280px;
  max-height: 280px; /* Ensure consistent height */
  overflow: hidden; /* Prevent content overflow */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 180px; /* Static height for images */
    object-fit: cover; /* Ensure images fit nicely */
    border-radius: 0.5rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    text-align: center;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    transition: opacity 0.3s ease;
    border-radius: 0.5rem;

    .overlay-text {
      font-size: 0.9rem;
    }
  }

  &:hover .overlay {
    opacity: 1;
  }
}
@media (max-width: 425px) {
  .col-12 {
    flex: 0 0 100%;
    max-width: 100%; /* 1 column per row */
  }
}

@media (min-width: 426px) and (max-width: 768px) {
  .col-sm-6 {
    flex: 0 0 50%;
    max-width: 50%; /* 2 columns per row */
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .col-md-4 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%; /* 3 columns per row */
  }
}

@media (min-width: 1025px) {
  .col-lg-3 {
    flex: 0 0 25%;
    max-width: 25%; /* 4 columns per row */
  }
}
</style>
