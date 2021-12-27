<script setup>
import oyo from 'img/oyo.jpeg'

</script>

<template>
    <div class="user">
        <el-avatar shape="square" :size="60" :src="oyo"></el-avatar>
        <div class="user-message">
            <p class="name">csy</p>
            <p class="des font12 color-black-7">lalalalala</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.el-avatar {
    margin-right: 25px;
}
.user {
    height: 86px;
    width: 356px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    margin-bottom: 10px;
    .user-message {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 50px;
    }
    .name {
        color: #0478be;
    }
}
</style>