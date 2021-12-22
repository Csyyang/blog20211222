import { createApp } from 'vue'
import App from './App.vue'
import './style/main.scss'
import router from '@/router/index'

createApp(App).use(router).mount('#app')
