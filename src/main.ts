import '@/index.css'
import 'boxicons/css/boxicons.min.css'
import 'prismjs/themes/prism.css'
import '@/plugins/prism.ts'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import '@/firebase'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')