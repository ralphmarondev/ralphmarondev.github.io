<script>
import Home from '../sections/homeSection.vue'
import About from '../sections/aboutSection.vue'
import Services from '../sections/servicesSection.vue'
import Skills from '../sections/skillSection.vue'
import Work from '../sections/workSection.vue'
import Contact from '../sections/contactSection.vue'

export default {
  components: {
    Home,
    About,
    Services,
    Skills,
    Work,
    Contact
  }
}
</script>

<template>
  <main>
    <Home/>
    <About/>
    <Services/>
    <Skills/>
    <Work/>
    <Contact/>
  </main>
</template>
