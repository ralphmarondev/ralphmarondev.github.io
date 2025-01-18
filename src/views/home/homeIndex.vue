<script>
import Header from './components/homeHeader.vue'
import Main from './components/homeMain.vue'
import Footer from './components/homeFooter.vue'

export default {
  components: {
    Header,
    Main,
    Footer
  },
  methods: {
    windowScroll() {
      this.$(window).on('scroll', function () {
        var scrollTop = this.$(window).scrollTop()
        if (scrollTop >= 80) {
          this.$jq('header').addClass('fixed-header')
        } else {
          this.$jq('header').removeClass('fixed-header')
        }
      })
    }
  },
  mounted() {
    this.windowScroll()
  }
}
</script>

<template>
  <div>
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>
