<script setup>
import oyo from 'img/oyo.jpeg'
</script>

<template>
    <div class="user-box">
        <el-avatar :size="48" :src="oyo"></el-avatar>
        <p class="font14 blod">csy</p>
        <p class="color-black-7 font12">在线</p>
    </div>
</template>

<style lang="scss" scoped>
.user-box {
    width: 33.333333%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}
</style>