<script setup lang="ts">
import Footer from '@/components/Footer.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <div>
    <Header />
    <section id="services" class="section bg-gray">
      <div class="container">
        <div class="section-heading">
          <h3>My Services</h3>
        </div>
        <div class="row gy-4">
          <div class="col-md-6">
            <div class="feature-box bg-3">
              <div class="icon"><i class="bx bx-mobile"></i></div>
              <div class="content">
                <h5>Mobile Developer</h5>
                <p>
                  Develop applications for Android devices with Jetpack Compose
                  Framework and Material 3 UI.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="feature-box bg-2">
              <div class="icon"><i class="bx bx-code-alt"></i></div>
              <div class="content">
                <h5>Full-Stack Developer</h5>
                <p>
                  Build end-to-end solutions with expertise in both frontend
                  (Vue, React) and backend (DRF, Ktor, Spring).
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="feature-box bg-1">
              <div class="icon"><i class="bx bx-server"></i></div>
              <div class="content">
                <h5>Backend Developer</h5>
                <p>
                  Develop and maintain backend services using Django Rest
                  Framework (DRF), Ktor and Springboot.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="feature-box bg-5">
              <div class="icon"><i class="bx bx-desktop"></i></div>
              <div class="content">
                <h5>Frontend Developer</h5>
                <p>
                  Craft scalable web applications with Vue | React and
                  Bootstrap.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="feature-box bg-4">
              <div class="icon"><i class="bx bx-brush"></i></div>
              <div class="content">
                <h5>Desktop Developer</h5>
                <p>
                  Develop functional desktop applications with C# Winforms, WPF
                  and Dotnet Framework.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>
