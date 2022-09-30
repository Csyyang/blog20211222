<script setup>
import headerVue from 'coms/header.vue'
import swiperVue from './components/swiper.vue';
import articlesVue from './components/articles.vue'
import asidesVue from '../../components/asides.vue';
import { onMounted } from 'vue'


onMounted(() => {
    new Image().src = 'http://yangyangcsy.cn/images/login-bg.jpeg'
})

</script>

<template>
    <div id="index">
        <!-- 头部导航栏 -->
        <headerVue></headerVue>
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

        <div class="foot">备案号：<a href="https://beian.miit.gov.cn/">蜀ICP备2021031837号-1</a>
        </div>
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

.foot {
    position:fixed;
    bottom: 0;
    text-align: center;
    font-size: 20px;
    width: 100vw;
    color: white;
    a {
        color: white;
    }
}
</style>