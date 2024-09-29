import { createApp } from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '@/assets/css/root.css';

import 'boxicons/css/boxicons.min.css';
import $ from 'jquery';

const app = createApp(App);
app.config.globalProperties.$ = $;
app.mount('#app');
