<script setup>
import {useRouter, useRoute} from 'vue-router'
import { computed } from 'vue'

const route = useRoute()


const router = useRouter()


const links = (link) => {
    router.push(link)
}


const navs  = [
    {
        path: '/',
        name: '首页'
    },
    {
        path: '/broken',
        name: '碎语'
    },
    {
        path: '/message',
        name: '留言'
    },
    {
        path: '/broken2',
        name: '友邻'
    },
    {
        path: '/broken3',
        name: '圈子'
    },
]



</script>

<template>
    <header id="c-header">
        <div class="header-box">
            <div class="logo">blog</div>
            <nav class="nav">
                <el-button v-for="item in navs" :class="[route.path === item.path?'checked':'']" @click="links(item.path)">{{item.name}}</el-button>
            </nav>
            <div class="login">
                <el-button type="primary">登录</el-button>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'c-header'
}

</script>


<style lang="scss" >
:root {
    .el-button {
        --el-button-bg-color: #f4f4f4;
    }
}
.logo {
    line-height: 56px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
}

.login {
    display: flex;
    align-items: center;
}

.checked {
    background-color: #d6e8fc;
}
.header-box {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    max-width: 1420px;
    width: 100%;
    height: 56px;
    margin: 0 auto;
    padding: 0 80px;
}
</style>