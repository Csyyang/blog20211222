import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
import './style/main.scss'
import store from './store/store'
import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'

createApp(App)
    .use(router)
    .use(store)
    .use(TDesign)
    .use(ElementPlus, {
        locale: zhCn,
    })
    .mount('#app')
