<template>
  <section id="contact" class="section bg-gray">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-6">
          <div class="contact-form">
            <h2 class="text-dark">Get in touch</h2>
            <p class="lead">I'll be happy to hear from you.</p>
            <form @submit.prevent="">
              <div class="row gy-4 gx-3">
                <div class="col-12">
                  <div class="form-group">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
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
</template>
