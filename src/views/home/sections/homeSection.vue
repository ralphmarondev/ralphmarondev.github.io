<script>
export default {
  mounted() {
    const options = {
      strings: [
        'Computer Engineering',
        'Mobile Developer',
        'Desktop Developer',
        'Web Developer',
        'Programmer'
        // 'Cutie'
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }

    // Initialize Typed.js on the span element
    this.typedInstance = new this.$typed(this.$refs.typedElement, options)
  },
  beforeUnmount() {
    // Destroy the Typed.js instance to avoid memory leaks
    if (this.typedInstance) {
      this.typedInstance.destroy()
    }
  }
}
</script>

<template>
  <section id="home" class="home-section bg-gray">
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
            <h1>I'm a <span ref="typedElement"></span></h1>
            <p>Based in Flora, Apayao, Philippines.</p>
            <div class="d-flex gap-3 mt-1 justify-content-center justify-content-lg-start">
              <a href="#about" class="colored-btn mt-1">About Me</a>
              <a
                  href="/Ralph_Maron_Eda_CV.pdf"
                  class="outlined-colored-btn mt-1"
                  download="Ralph_Maron_Eda_CV.pdf"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0">
          <div class="home-image text-center">
            <img src="../../../assets/img/my_cute_image.jpg" alt="My Cute Image"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>