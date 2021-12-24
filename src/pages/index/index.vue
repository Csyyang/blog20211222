<script setup>
import headerVue from 'coms/header.vue'
import swiperVue from './components/swiper.vue';
import articlesVue from './components/articles.vue'
import asidesVue from './components/asides.vue';
</script>

<template>
    <div id="index">
        <headerVue></headerVue>

        <main>
            <!-- 轮播 -->
            <swiperVue></swiperVue>

            <div class="context">
                <articlesVue class="articles" />
                <asidesVue class="asides" />
            </div>
        </main>
    </div>
</template>

<style lang="scss" scoped>
main {
    max-width: 1032px;
    width: 100%;
    margin: 0 auto;
}

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