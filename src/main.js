import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import './style/main.scss'
import store from './store/store'


createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus, {
        locale: zhCn,
    })
    .mount('#app')
