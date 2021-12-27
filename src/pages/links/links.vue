<script setup>
import headerVue from '../../components/header.vue'
import userVue from './components/user.vue';
import applyVue from './components/apply.vue';
import { ref } from 'vue';

const showApply = ref(false)
</script>

<template>
    <div class="links">
        <headerVue />

        <main class="main-box">
            <div class="header">
                <p class="title font14">朋友们</p>
                <el-button size="mini" @click="showApply = true">申请友链</el-button>
            </div>

            <div class="user-box">
                <userVue />
                <userVue />
                <userVue />
                <userVue />
            </div>

            <applyVue v-model:show="showApply" />
        </main>
    </div>
</template>


<style lang="scss" scoped>
.main-box {
    width: 736px;
    border-radius: 5px;
    .header {
        display: flex;
        justify-content: space-between;
        .title {
            padding: 15px;
        }
    }

    .user-box {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
}
</style>