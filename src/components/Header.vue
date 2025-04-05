<template>
  <header class="main-header bg-gray" style="background: #ffffff">
    <nav class="navbar header-nav navbar-expand-lg">
      <div class="container">
        <a href="#" class="navbar-brand">
          <h4 class="mb-0">
            <span class="text-primary">Ralph Maron Eda</span>
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
                to="/skills"
                class="nav-link"
                :class="{ 'active-link': $route.path === '/skills' }"
              >
                Skills
              </router-link>
            </li>
            <li>
              <router-link
                to="/services"
                class="nav-link"
                :class="{ 'active-link': $route.path === '/services' }"
              >
                Services
              </router-link>
            </li>
            <li>
              <router-link
                to="/projects"
                class="nav-link"
                :class="{ 'active-link': $route.path === '/projects' }"
              >
                Projects
              </router-link>
            </li>
          </ul>
        </div>

        <div class="ms-auto d-none d-lg-block">
          <a href="#contact" class="colored-btn">Contact Me</a>
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
</template>

<style scoped lang="scss">
.nav-link {
  color: #6f42c1; /* default link color */
  transition: color 0.3s ease;
}

.nav-link:hover,
.active-link {
  color: #6f42c1; /* color when active or hovered */
}
</style>
