<template>
  <section id="portfolio" class="section bg-gray">
    <div class="container">
      <div class="section-heading">
        <h3>Latest Projects</h3>
      </div>
      <div class="portfolio-box">
        <div
            class="row gx-3 gy-4 pb-3 mb-5 pg-lg-3 mb-lg-3 justify-content-around align-items-center flex-row-reverse"
        >
          <div class="col-md-6 col-lg-5">
            <div class="portfolio-img">
              <img
                  src="../../../assets/img/familysprout.jpg"
                  alt="Family Sprout"
                  height="400"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-5">
            <div class="portfolio-text">
              <span>Desktop Development</span>
              <h4>Family Sprout</h4>
              <p>
                A desktop application for church administrators to efficiently
                manage family and children's information, replacing traditional
                paper-based cards. It includes authentication and role-based
                access control for secure data handling.
              </p>
              <a
                  href="https://github.com/ralphmarondev/family-sprout/releases/"
                  class="colored-btn mt-1"
                  target="_blank"
              >Download Exe</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-box">
        <div
            class="row gx-3 gy-4 pb-3 mb-5 pg-lg-3 mb-lg-3 justify-content-around align-items-center"
        >
          <div class="col-md-6 col-lg-5">
            <div class="portfolio-img">
              <img
                  src="/images/compose_world.png"
                  alt="Quote Generator"
                  height="400"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-5">
            <div class="portfolio-text">
              <span>Mobile Development</span>
              <h4>Compose World</h4>
              <p>Welcome to Compose World, a virtual operating system experience all within an Android app, built with
                Jetpack Compose! It's a fun, experimental project where I’m bringing a whole new world to life on your
                device. Currently a work in progress, this hobby project is all about exploring the possibilities of UI
                design and functionality in a virtual space. Stay tuned as I continue to expand and refine this unique
                experience!</p>
              <a
                  href="https://github.com/ralphmarondev/compose-world/releases/"
                  class="colored-btn mt-1"
                  target="_blank"
              >Download APK</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="portfolio-box">
        <div
            class="row gx-3 gy-4 pb-3 mb-5 pg-lg-3 mb-lg-3 justify-content-around align-items-center flex-row-reverse"
        >
          <div class="col-md-6 col-lg-5">
            <div
                class="portfolio-img two-img"
                style="display: flex; width: 100%; align-items: space-around;"
            >
              <img
                  src="/images/say_it_here.png"
                  alt="Say It Here"
                  height="400"
                  style="width: 100%; object-fit: cover;"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-5">
            <div class="portfolio-text">
              <span>Web Development</span>
              <h4>Say It Here</h4>
              <p>
                This web app is perfect for those who might be a little shy to confess their feelings! Inspired by NGL,
                it lets you send me anonymous messages, whether it’s a compliment, a secret, or just something on your
                mind. Don't worry, your identity stays safe, and I’ll receive your sweet messages right in my inbox via
                EmailJS. Go ahead, send me something fun, I’m all ears (or eyes)!
              </p>
              <a
                  href="https://ralphmarondev.github.io/say-it-here/"
                  class="colored-btn mt-1"
                  target="_blank"
              >Try It Here</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio-img img {
  object-fit: fill;
}

.two-img {
  display: flex;
  justify-content: space-around;
}
</style>
<script setup lang="ts">
</script>