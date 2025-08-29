import {createPinia} from 'pinia'
import {createApp} from 'vue'

import App from '@/App.vue'
// import router from '@/router'
import '@/index.css'
import AOS from 'aos'
import 'boxicons/css/boxicons.min.css'

const app = createApp(App)
app.use(createPinia())
// app.use(router)
app.mount('#app')

AOS.init({
  duration: 800,
  easing: 'ease-in-out',
  once: true,
  mirror: false,
})