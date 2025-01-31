<template>
  <section id="about" class="section">
    <div class="container">
      <div class="row gy-5 align-items-center">
        <div class="col-lg-6 text-center">
          <img src="../../../assets/img/about.jpg" alt="My Cute Image"/>
        </div>

        <div class="col-lg-6 ps-lg-5">
          <div class="about-text">
            <h3 class="h1 mb-3 text-dark fw-semibold">
              Mobile Developer for more than 2 years.
            </h3>
            <p>
              I specialize in Mobile Development with
              <a href="https://developer.android.com/compose/" target="_blank">Jetpack Compose</a>
              and Web Development using Vue and Django Rest Framework.
              I also have experience with databases such as MySQL, Microsoft SQL Server, PostgreSQL, and Firebase.
              In addition, I’ve worked with various REST APIs, including Django Rest Framework and Ktor.
            </p>
            <p>
              Over the past two years, I’ve honed my Android development skills through hands on experience and
              self study. I started with Java and XML, then moved to Kotlin with Jetpack Compose and Material 3 UI. I
              developed
              apps such as <a href="https://github.com/ralphmarondev/compose-world/" target="_blank">Compose
              World</a> and am currently exploring
              <a href="https://www.jetbrains.com/compose-multiplatform/" target="_blank">Compose Multiplatform</a>
              to expand my cross platform development skills. I’m passionate about creating intuitive user interfaces
              and staying updated with the latest development trends.
            </p>
            <p>
              When I'm not coding or working on personal projects, I enjoy spending time with my family, watching movies
              like Hacker (2016) and The Social Network, or playing games like Clash of Clans.
            </p>
            <p>
              Feel free to checkout out my projects or connect with me on
              <a href="https://github.com/ralphmarondev" target="_blank">Github</a> or
              <a href="https://www.linkedin.com/in/ralph-maron-eda-95a014250/" target="_blank"
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

        <div class="container py-5">
          <div class="row">
            <!-- Education Section -->
            <div class="col-md-6">
              <h3 class="text-primary">Education</h3>
              <div class="timeline">
                <div class="timeline-item">
                  <h5>2009 - 2014</h5>
                  <h6 class="fw-bold">Elementary</h6>
                  <p>Studied at Malubibit Norte Elementary School.</p>
                </div>
                <div class="timeline-item">
                  <h5>2014 - 2021</h5>
                  <h6 class="fw-bold">High School [STEM]</h6>
                  <p>Graduated from Flora National High School.</p>
                </div>
                <div class="timeline-item">
                  <h5>2021 - Present</h5>
                  <h6 class="fw-bold">Bachelor of Science in Computer Engineering</h6>
                  <p>Currently a 4th-year student at Cagayan State University.</p>
                </div>
              </div>
            </div>
            <!-- Experience Section -->
            <div class="col-md-6">
              <h3 class="text-primary">Experience</h3>
              <div class="timeline">
                <div class="timeline-item">
                  <h5>2023 - 2024</h5>
                  <h6 class="fw-bold">Competition Achievements</h6>
                  <p><span class="text-primary">Champion</span> in the Regional Convention hosted by the Institute of
                    Computer Engineers of the
                    Philippines. Placed 11th in the National Convention among the best competitors nationwide.</p>
                </div>
                <div class="timeline-item">
                  <h5>July 8, 2024 - August 17, 2024</h5>
                  <h6 class="fw-bold">Intern at Metacore Systems Incorporated</h6>
                  <p>Worked on a <span class="text-primary">full-stack</span> web application using Django Rest
                    Framework and Vue 3. Contributed to the
                    development of a dynamic dashboard for managing user data, collaborating with a team to enhance the
                    platform’s functionality and user experience.</p>
                </div>
                <div class="timeline-item">
                  <h5>Present</h5>
                  <h6 class="fw-bold">Personal Projects</h6>
                  <p>Developed a range of personal projects, gaining
                    hands-on experience with technologies like Jetpack Compose, Django, Firebase, and more.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  padding: 1rem 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 15px;
  width: 2px;
  background-color: var(--primary-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  padding-left: 3rem;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 0.5rem;
  width: 10px;
  height: 10px;
  background-color: var(--primary-color);
  border-radius: 50%;
}

.timeline-item:last-child {
  margin-bottom: 0;
}
</style>