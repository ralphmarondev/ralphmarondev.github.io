import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@/assets/css/root.css';

import 'boxicons/css/boxicons.min.css';
import $ from 'jquery';
import Typed from 'typed.js';
import VueOwnCarousel from 'vue-owl-carousel';

const app = createApp(App);
app.config.globalProperties.$jq = $;
app.config.globalProperties.$typed = Typed;
app.use(VueOwnCarousel);
app.mount('#app');
