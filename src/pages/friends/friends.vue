<script setup>
import headerVue from '../../components/header.vue'
import userVue from './components/user.vue'
</script>

<template>
    <div>
        <headerVue />

        <main class="main-box">
            <userVue />
            <userVue />
            <userVue />
            <userVue />
        </main>
    </div>
</template>


<style lang="scss" scoped>
.main-box {
    margin-top: 15px;
    width: 736px;
    background-color: #fff;
    border-radius: 10px;
    padding: 15px 10px;
    display: flex;
    flex-wrap: wrap;

}
</style>