import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap';
import '@/scss/custom.scss';

createApp(App).use(router).mount('#app')
