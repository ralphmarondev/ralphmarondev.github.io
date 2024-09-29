<script>
  import Header from './components/homeHeader.vue';
  import Main from './components/homeMain.vue';
  export default {
    components: {
      Header,
      Main,
    },
    methods: {
      windowScroll() {
        this.$(window).on('scroll', function () {
          var scrollTop = this.$(window).scrollTop();
          if (scrollTop >= 80) {
            this.$('header').addClass('fixed-header');
          } else {
            this.$('header').removeClass('fixed-header');
          }
        });
      },
    },
    mounted() {
      this.windowScroll();
    },
  };
</script>

<template>
  <div>
    <Header />
    <Main />
  </div>
</template>
