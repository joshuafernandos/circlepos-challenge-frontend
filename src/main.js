import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'
import 'fontawesome-4.7/css/font-awesome.min.css';
import 'vue-toast-notification/dist/theme-sugar.css';

createApp(App)
    .use(router)
    .mount('#app')
