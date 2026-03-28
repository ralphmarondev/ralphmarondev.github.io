import '@/app/index.css'
import 'boxicons/css/boxicons.min.css'
import 'prismjs/themes/prism.css'
import '@/app/plugins/prism.ts'

import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from '@/app/App.vue'
import router from '@/app/router'
import '@/app/firebase.ts'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')