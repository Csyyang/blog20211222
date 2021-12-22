import { createRouter, createWebHashHistory } from "vue-router"
import test from 'pages/test/test.vue'

const routes = [
    { path: '/test', component: test }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router