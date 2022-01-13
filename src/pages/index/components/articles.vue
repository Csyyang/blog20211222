<script setup>
import { ref } from 'vue'
import art1 from 'img/art1.jpeg'
import see from 'img/see.svg'
import love from 'img/love.svg'
import say from 'img/say.svg'


const switchValue = ref(false)
</script>

<template>
    <section class="articles">
        <header class="text-box">
            <p>猜你喜欢</p>
            <div style="display:none">
                <el-switch inactive-color="#b8b8b8" v-model="switchValue" />自动播放
            </div>
        </header>

        <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div class="img-box">
                <img class="art-img" :src="art1" alt="art1" />
            </div>

            <article class="article">
                <title>2021年6月24日，数据分析当前是否还适合投资FIL云算力</title>
                <time>六月 24, 2021</time>
                <main>随着币价的下跌，最近不少人蠢蠢欲动，开始考虑是否要布局一下FIL云算力。为了让一部分不明所以、跑步入场的小白，对自己投资的项目有个较为客观的认知，接下来我会在数据面上分析下这项投资的实际可...</main>
            </article>

            <footer>
                <el-button>开始阅读</el-button>

                <div class="tag">
                    <object class="see" :data="see" type="image/svg+xml"></object>
                    <span>1</span>
                    <object class="love" :data="love" type="image/svg+xml"></object>
                    <span>2</span>
                    <object class="say" :data="say" type="image/svg+xml"></object>
                    <span>3</span>
                </div>
            </footer>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div class="img-box">
                <img class="art-img" :src="art1" alt="art1" />
            </div>

            <article class="article">
                <title>2021年6月24日，数据分析当前是否还适合投资FIL云算力</title>
                <time>六月 24, 2021</time>
                <main>随着币价的下跌，最近不少人蠢蠢欲动，开始考虑是否要布局一下FIL云算力。为了让一部分不明所以、跑步入场的小白，对自己投资的项目有个较为客观的认知，接下来我会在数据面上分析下这项投资的实际可...</main>
            </article>

            <footer>
                <el-button>开始阅读</el-button>

                <div class="tag">
                    <object class="see" :data="see" type="image/svg+xml"></object>
                    <span>1</span>
                    <object class="love" :data="love" type="image/svg+xml"></object>
                    <span>2</span>
                    <object class="say" :data="say" type="image/svg+xml"></object>
                    <span>3</span>
                </div>
            </footer>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div class="img-box">
                <img class="art-img" :src="art1" alt="art1" />
            </div>

            <article class="article">
                <title>2021年6月24日，数据分析当前是否还适合投资FIL云算力</title>
                <time>六月 24, 2021</time>
                <main>随着币价的下跌，最近不少人蠢蠢欲动，开始考虑是否要布局一下FIL云算力。为了让一部分不明所以、跑步入场的小白，对自己投资的项目有个较为客观的认知，接下来我会在数据面上分析下这项投资的实际可...</main>
            </article>

            <footer>
                <el-button>开始阅读</el-button>

                <div class="tag">
                    <object class="see" :data="see" type="image/svg+xml"></object>
                    <span>1</span>
                    <object class="love" :data="love" type="image/svg+xml"></object>
                    <span>2</span>
                    <object class="say" :data="say" type="image/svg+xml"></object>
                    <span>3</span>
                </div>
            </footer>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div class="img-box">
                <img class="art-img" :src="art1" alt="art1" />
            </div>

            <article class="article">
                <title>2021年6月24日，数据分析当前是否还适合投资FIL云算力</title>
                <time>六月 24, 2021</time>
                <main>随着币价的下跌，最近不少人蠢蠢欲动，开始考虑是否要布局一下FIL云算力。为了让一部分不明所以、跑步入场的小白，对自己投资的项目有个较为客观的认知，接下来我会在数据面上分析下这项投资的实际可...</main>
            </article>

            <footer>
                <el-button>开始阅读</el-button>

                <div class="tag">
                    <object class="see" :data="see" type="image/svg+xml"></object>
                    <span>1</span>
                    <object class="love" :data="love" type="image/svg+xml"></object>
                    <span>2</span>
                    <object class="say" :data="say" type="image/svg+xml"></object>
                    <span>3</span>
                </div>
            </footer>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div class="img-box">
                <img class="art-img" :src="art1" alt="art1" />
            </div>

            <article class="article">
                <title>2021年6月24日，数据分析当前是否还适合投资FIL云算力</title>
                <time>六月 24, 2021</time>
                <main>随着币价的下跌，最近不少人蠢蠢欲动，开始考虑是否要布局一下FIL云算力。为了让一部分不明所以、跑步入场的小白，对自己投资的项目有个较为客观的认知，接下来我会在数据面上分析下这项投资的实际可...</main>
            </article>

            <footer>
                <el-button>开始阅读</el-button>

                <div class="tag">
                    <object class="see" :data="see" type="image/svg+xml"></object>
                    <span>1</span>
                    <object class="love" :data="love" type="image/svg+xml"></object>
                    <span>2</span>
                    <object class="say" :data="say" type="image/svg+xml"></object>
                    <span>3</span>
                </div>
            </footer>
        </el-card>
        <el-card class="box-card" :body-style="{ padding: '0px' }">
            <div class="img-box">
                <img class="art-img" :src="art1" alt="art1" />
            </div>

            <article class="article">
                <title>2021年6月24日，数据分析当前是否还适合投资FIL云算力</title>
                <time>六月 24, 2021</time>
                <main>随着币价的下跌，最近不少人蠢蠢欲动，开始考虑是否要布局一下FIL云算力。为了让一部分不明所以、跑步入场的小白，对自己投资的项目有个较为客观的认知，接下来我会在数据面上分析下这项投资的实际可...</main>
            </article>

            <footer>
                <el-button>开始阅读</el-button>

                <div class="tag">
                    <object class="see" :data="see" type="image/svg+xml"></object>
                    <span>1</span>
                    <object class="love" :data="love" type="image/svg+xml"></object>
                    <span>2</span>
                    <object class="say" :data="say" type="image/svg+xml"></object>
                    <span>3</span>
                </div>
            </footer>
        </el-card>
    </section>
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
    margin-bottom: 20px;
    border-radius: 10px;
    .img-box {
        height: 365px;
        width: 100%;
        overflow: hidden;
        .art-img {
            display: block;
            object-fit: cover;
            width: 100%;
            height: 100%;
            transition: transform 0.5s;
            &:hover {
                transform: scale(1.1);
            }
        }
    }

    .article {
        padding: 0 16px;
        title {
            display: block;
            margin: 16px 0 5px;
            cursor: pointer;
            font-size: 20px;
            font-weight: 500;
        }
        time {
            color: #DEDEDE;
            font-size: 14px;
        }
        main {
            padding: 24px 0;
            cursor: pointer;
            font-size: 14px;
        }
    }
    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px;
        .see {
            width: 24px;
            height: 24px;
        }
        .love {
            animation: loveBig 1s;
            animation-direction: alternate;
            animation-iteration-count: infinite;
        }

        .tag {
            display: flex;
            align-items: center;
            span {
                margin: 0 10px 0 5px;
            }
        }
    }
}

@keyframes loveBig {
    from {
        transform: scale(1);
    }
    to {
        transform: scale(1.1);
    }
}
</style>