<script setup>
import headerVue from '../../components/header.vue'
import asidesVue from '../../components/asides.vue';
</script>

<template>
    <div>
        <headerVue></headerVue>
        <main class="main-box">
            <asidesVue />
        </main>
    </div>
</template>

<style lang="scss" scoped>
.main-box {
    width: 540px;
}
</style>