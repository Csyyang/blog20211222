import { createRouter, createWebHashHistory } from "vue-router"
import { createVNode } from 'vue'
import test from 'pages/test/test.vue'
import index from 'pages/index/index.vue'
import broken from 'pages/broken/broken.vue'
import message from 'pages/message/message.vue'
import links from 'pages/links/links.vue'
import friends from 'pages/friends/friends.vue'
import login from 'pages/login/login.vue'


const routes = [
    { path: '/test', component: test },
    { path: '/', component: index },
    { path: '/broken', component: broken },
    { path: '/message', component: message },
    { path: '/links', component: links },
    { path: '/friends', component: friends },
    { path: '/login', component: login },
    { path: '/articleContext', component:() =>import('pages/article/articleContext.vue')  },
    { path: '/reset', component: () => import('pages/login/reset.vue') },
    { path:'/article', component: () => import('pages/article/index.vue') },
    { path:'/guestbook', component: () => import('pages/article/setGuestbook.vue') },
    { path: '/:pathMath(.*)', component: {
            render() {
                return createVNode('div', { className: 'not-found' }, '404');
            }
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})


export default router