import { createRouter, createWebHashHistory } from "vue-router"
import test from 'pages/test/test.vue'
import index from 'pages/index/index.vue'
import broken from 'pages/broken/broken.vue'
import message from 'pages/message/message.vue'
import links from 'pages/links/links.vue'
import friends from 'pages/friends/friends.vue'

const routes = [
    { path: '/test', component: test },
    { path: '/', component: index },
    { path: '/broken', component: broken },
    { path: '/message', component: message },
    { path: '/links', component: links },
    { path: '/friends', component: friends }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router