<script setup>
import headerVue from '../../components/header.vue'
import editorVue from '../../components/editor.vue'
import commentVue from './components/comment.vue';



</script>

<template>
    <headerVue />

    <main class="main-box">
        <editorVue />

        <div class="comment-box">
            <commentVue context="发夹倒计时；阿手机到了；按实际拉手机到了几率大" />
            <commentVue context="发夹倒计时；阿手机到了；按实际拉手机到了几率大" />
            <commentVue context="发夹倒计时；阿手机到了；按实际拉手机到了几率大" />
            <commentVue context="发夹倒计时；阿手机到了；按实际拉手机到了几率大" />
        </div>
    </main>
</template>

<style lang="scss" scoped>
.main-box {
    width: 740px;
    padding: 10px 0;
}
.comment-box {
    background-color: #fff;
}
</style>