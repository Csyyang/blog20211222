import { createApp } from 'vue'
import App from './App.vue'
import './style/main.scss'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'


createApp(App)
    .use(router)
    .use(ElementPlus, {
        locale: zhCn,
    }).mount('#app')
