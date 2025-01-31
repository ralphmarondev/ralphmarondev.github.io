<template>
<!--  rgba(119,60,191,0.03)-->
  <header class="main-header" style="background: #ffffff">
    <nav class="navbar header-nav navbar-expand-lg">
      <div class="container">
        <a href="#" class="navbar-brand">
          <h4 class="mb-0">
            <span class="text-primary">Ralph Maron Eda</span>
<!--            <span class="text-primary">is Cute</span>-->
          </h4>
        </a>

        <!-- menu -->
        <div
            class="collapse navbar-collapse justify-content-end"
            id="navbar-collapse-toggle"
        >
          <ul class="navbar-nav mx-auto">
            <li>
              <a href="#home" class="nav-link">Home</a>
            </li>
            <li>
              <a href="#about" class="nav-link">About Me</a>
            </li>
            <li>
              <a href="#services" class="nav-link">Services</a>
            </li>
            <li>
              <a href="#skill" class="nav-link">Skills</a>
            </li>
            <li>
              <a href="#portfolio" class="nav-link">Projects</a>
            </li>
          </ul>
        </div>

        <!-- button -->
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
