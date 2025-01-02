import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/styles/main.scss'
import 'fontawesome-4.7/css/font-awesome.min.css';

createApp(App)
    .use(router)
    .mount('#app')
