<script setup>
import oyo from 'img/oyo.jpeg'
import test1 from 'img/test1.png'
import { Share, ChatDotRound, StarFilled } from '@element-plus/icons-vue'

</script>

<template>
    <div class="asides">
        <header class="text-box">
            <p>最近碎语</p>
        </header>
        <el-card class="box-card" :body-style="{ padding: '10px' }" shadow="hover">
            <div class="header">
                <el-avatar :size="36" :src="oyo"></el-avatar>
                <div class="message">
                    <span class="name font16 blod">csy</span>
                    <time class="font12 color-black-7">一天前</time>
                    <p class="introduce font12 color-black-7">前端工程师</p>
                </div>
            </div>
            <div class="main">
                <p class="font14">这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文这里是正文</p>

                <div class="img-box bgf6">
                    <img class="asides-img img-h" :src="test1" alt="test1" />
                </div>2个喜欢 * 3个评论
                <div class="btn">
                    <el-button size="mini">
                        <el-icon :size="18">
                            <StarFilled />
                        </el-icon>喜欢
                    </el-button>
                    <el-button size="mini">
                        <el-icon :size="50">
                            <ChatDotRound />
                        </el-icon>评论
                    </el-button>
                    <el-button size="mini">
                        <el-icon :size="18">
                            <Share />
                        </el-icon>转发
                    </el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<style lang="scss" scoped>
.text-box {
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: 20px;
    }
}

.box-card {
    border-radius: 10px;
    margin-bottom: 10px;
}

.header {
    display: flex;
}

.message {
    margin-left: 10px;
}

.name {
    margin-right: 10px;
}

.main {
    margin-top: 10px;
}

.img-box {
    margin: 15px 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.asides-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.btn {
    display: flex;
    justify-content: space-around;
    button {
        flex-grow: 1;
    }
}
</style>