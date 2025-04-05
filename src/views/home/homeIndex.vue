<script setup lang="ts">
import { ref, onMounted } from 'vue'

const texts = [
  'Mobile Developer',
  'Web Developer',
  'Software Engineer',
  'Computer Engineer',
]
const text = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)
const typingSpeed = 50
const deletingSpeed = 50
const pauseTime = 1000

const typeText = () => {
  const currentText = texts[currentIndex.value]

  if (!isDeleting.value) {
    text.value = currentText.substring(0, text.value.length + 1)
    if (text.value === currentText) {
      setTimeout(() => {
        isDeleting.value = true
      }, pauseTime)
    }
  } else {
    text.value = currentText.substring(0, text.value.length - 1)
    if (text.value === '') {
      isDeleting.value = false
      currentIndex.value = (currentIndex.value + 1) % texts.length
    }
  }
  setTimeout(typeText, isDeleting.value ? deletingSpeed : typingSpeed)
}

onMounted(typeText)
</script>

<template>
  <div>
    <section id="#home" class="home-section bg-gray">
      <div class="container">
        <div class="anim-elements">
          <div class="anim-element"><i class="bx bxl-html5"></i></div>
          <div class="anim-element"><i class="bx bxl-vuejs"></i></div>
          <div class="anim-element"><i class="bx bxl-react"></i></div>
          <div class="anim-element"><i class="bx bxl-android"></i></div>
          <div class="anim-element"><i class="bx bxl-css3"></i></div>
        </div>
        <div class="row gy-5 align-items-center">
          <div class="col-lg-6">
            <div class="home-intro text-center text-lg-start">
              <h6>Hi, My name is Ralph Maron Eda.</h6>
              <h1>
                I'm a <span ref="typedElement">{{ text }}</span>
              </h1>
              <p>Based in Philippines.</p>
              <div
                class="d-flex gap-3 mt-1 justify-content-center justify-content-lg-start"
              >
                <a
                  href="/Ralph_Maron_Eda_CV.pdf"
                  class="colored-btn mt-1"
                  download="Ralph_Maron_Eda_CV.pdf"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <div class="home-image text-center">
              <img src="/images/ralphmaron.jpg" alt="My Cute Image" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="about" class="section">
      <div class="container">
        <div class="row gy-5 align-items-center">
          <div class="col-lg-6 text-center">
            <img src="/images/about.jpg" alt="My Cute Image" />
          </div>

          <div class="col-lg-6 ps-lg-5">
            <div class="about-text">
              <h3 class="h1 mb-3 text-dark fw-semibold">
                Mobile Developer for more than 2 years.
              </h3>
              <p>
                I specialize in Mobile Development with Jetpack Compose and Web
                Development using Vue and Django Rest Framework. I have
                experience with databases like MySQL, SQL Server, PostgreSQL,
                and Firebase, as well as working with various REST APIs,
                including DRF and Ktor.
              </p>
              <p>
                Over the past two years, I've enhanced my Android development
                skills, transitioning from Java/XML to Kotlin with Jetpack
                Compose and Material 3 UI. I've build apps like Compose World
                and am exploring Compose Multiplatform for cross platform
                development. I'm passionate about creating intuitive UIs and
                staying current with tech trends.
              </p>
              <p>
                Outside of coding, I enjoy spending time with my family,
                watching tech related movies, and playing Clash of Clans.
              </p>
              <p>
                Feel free to check out my projects or connect with me on
                <a href="https://github.com/ralphmarondev" target="_blank"
                  >Github</a
                >
                or
                <a
                  href="https://www.linkedin.com/in/ralph-maron-eda-95a014250/"
                  target="_blank"
                  >LinkedIn</a
                >!
              </p>

              <div class="row pt-2">
                <div class="col-6 col-md-4">
                  <h5 class="text-primary fw-semibold fs-4 mb-0">100+</h5>
                  <span class="text-dark">Project Completed</span>
                </div>
                <div class="col-6 col-md-4">
                  <h5 class="text-primary fw-semibold fs-4 mb-0">50+</h5>
                  <span class="text-dark">Happy Clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
