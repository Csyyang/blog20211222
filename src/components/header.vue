<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
import filterVue from './filter.vue'
import { MessagePlugin } from 'tdesign-vue-next'

const route = useRoute()
const router = useRouter()

/**
 * 路由跳转
 * @param { string } link  路径
 */
const links = (link) => {
    router.push(link)
}

const navs = [
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
        path: '/links',
        name: '友邻'
    },
    {
        path: '/friends',
        name: '圈子'
    },
]


/**
 * 获取登录信息
 */
const store = useStore()
const isLogin = computed(() => store.state.user.isLogin)

const userData = computed(() => store.state.user.userData)

/**
 * 登出
 */
const logout = async () => {
    const res = await store.dispatch('user/logOut')
    if (!res) return
    MessagePlugin.success('登出成功')
}

</script>

<template>
    <header id="c-header">
        <div class="header-box">
            <div class="logo">blog</div>
            <nav class="nav">
                <el-button
                    v-for="item in navs"
                    :class="[route.path === item.path ? 'checked' : '']"
                    @click="links(item.path)"
                >{{ item.name }}</el-button>
            </nav>
            <div class="login">
                <el-dropdown v-if="isLogin">
                    <el-avatar :size="36" :src="userData.avatar"></el-avatar>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item @click="links('/user')">用户信息</el-dropdown-item>
                            <el-dropdown-item @click="logout" divided>退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <el-button v-else type="primary" @click="router.push('/login')">登录</el-button>
            </div>
        </div>
        <filterVue />
    </header>
</template>
<script>
export default {
    name: 'c-header'
}

</script>


<style lang="scss" scoped>
:root {
    .el-button {
        --el-button-bg-color: #f4f4f4;
    }
}
:deep(.header-box .nav .el-button) {
    background: none;
}

#c-header {
    position: fixed;
    top: 0;
    z-index: 1000;
    width: 100%;
    border-bottom: 1px solid #767676;
    overflow: hidden;
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