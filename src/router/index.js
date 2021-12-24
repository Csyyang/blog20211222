import { createRouter, createWebHashHistory } from "vue-router"
import test from 'pages/test/test.vue'
import index from 'pages/index/index.vue'

const routes = [
    { path: '/test', component: test },
    { path: '/', component: index }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router