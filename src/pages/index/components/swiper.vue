<script setup>
import { ref } from 'vue'
import bg1 from 'img/bg1.jpeg'
import bg2 from 'img/bg2.jpeg'
import bg3 from 'img/bg3.jpeg'

const switchValue = ref(false)
</script>


<template>
    <div class="swiper">
        <div class="text-box">
            <p>猜你喜欢</p>
            <div>
                <el-switch inactive-color="#b8b8b8" v-model="switchValue" />自动播放
            </div>
        </div>
        <div class="swiper-mian">
            <el-carousel :autoplay="switchValue">
                <el-carousel-item>
                    <img class="imgs" :src="bg1" alt="bg1" />
                </el-carousel-item>
                <el-carousel-item>
                    <img class="imgs" :src="bg2" alt="bg2" />
                </el-carousel-item>
                <el-carousel-item>
                    <img class="imgs" :src="bg3" alt="bg3" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<style lang="scss" scoped>
:deep(.el-carousel__container) {
    height: 100%;
}
.swiper-mian,
.el-carousel,
.imgs {
    height: calc(100vh - 200px);
}
.swiper-mian {
    border-radius: 10px;
    overflow: hidden;
}
.imgs {
    width: 100%;
    object-fit: cover;
    transition: transform 1s;

    &:hover {
        transform: scale(1.1);
    }
}

.text-box {
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
        font-size: 20px;
    }
}
</style>