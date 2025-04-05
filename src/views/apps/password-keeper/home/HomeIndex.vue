<script setup lang="ts">
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div>
    <header class="main-header bg-gray" style="background: #ffffff">
      <nav class="navbar header-nav navbar-expand-lg">
        <div class="container">
          <a href="#/apps/password-keeper/home" class="navbar-brand">
            <h4 class="mb-0">
              <span class="text-primary">Password Keeper</span>
            </h4>
          </a>

          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbar-collapse-toggle"
          >
            <ul class="navbar-nav mx-auto">
              <li>
                <router-link
                  to="/"
                  class="nav-link"
                  :class="{ 'active-link': $route.path === '/' }"
                >
                  Home
                </router-link>
              </li>
              <li>
                <router-link
                  to="/"
                  class="nav-link"
                  :class="{ 'active-link': $route.path === '/' }"
                >
                  Account
                </router-link>
              </li>
            </ul>
          </div>

          <div class="ms-auto d-none d-lg-block">
            <a href="#/apps/password-keeper/home" class="colored-btn"
              >New Password</a
            >
          </div>

          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-collapse-toggle"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
    <section class="section vh-100">
      <div class="container">
        <h1>home index</h1>
      </div>
    </section>
    <Footer />
  </div>
</template>
