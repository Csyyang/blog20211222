<script setup>
import headerVue from 'coms/header.vue'
import swiperVue from './components/swiper.vue';
import articlesVue from './components/articles.vue'
import asidesVue from '../../components/asides.vue';
import { onMounted } from 'vue'
import { test } from 'api/user'


onMounted(() => {
    new Image().src = 'http://yangyangcsy.cn/images/login-bg.jpeg'
})

const tests = () => {
    test() 
}
</script>

<template>
    <div id="index">
        <!-- 头部导航栏 -->
        <headerVue></headerVue>
        <button @click="tests">test</button>
        <main class="main-box">
            <!-- 轮播 -->
            <swiperVue></swiperVue>

            <div class="context">
                <!-- 文章 -->
                <articlesVue class="articles" />
                <!-- 边栏 -->
                <asidesVue class="asides" />
            </div>
        </main>

    </div>
</template>

<style lang="scss" scoped>
.context {
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
}

.articles {
    flex-basis: 650px;
    flex-grow: 0;
}
.asides {
    flex-basis: 328px;
}
</style>