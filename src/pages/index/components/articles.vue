<script setup>
import { ref, computed, reactive } from 'vue'
import see from 'img/see.svg'
import love from 'img/love.svg'
import say from 'img/say.svg'
import { getArticle, likes } from "api/article"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { MessagePlugin } from 'tdesign-vue-next'
import commentVue  from './comment.vue'


const switchValue = ref(false)


const cardList = ref([])
const articleList = async () => {
    const res = await getArticle()
    console.log(res)
    if (res.code === '00') {
        // return res.data
        cardList.value = res.data.map((item) => {
            return Object.assign(item, {
                showComment: false,
                value: ''
            })
        })
    }
}
articleList()

const store = useStore()
const account = computed(() => {
    return store.state.user.userData.account
})


// 点赞
const router = useRouter()
const likeMethod = async (id, index) => {
    if (!account.value) {
        MessagePlugin.error("请登录后操作")
        router.push('/login')
        return
    }

    const res = await likes({ id, account: account.value })
    if (res.code === '00') {
        if (res.message === 'add') {
            cardList.value[index].likes = String(Number(cardList.value[index].likes) + 1)
        } else {
            cardList.value[index].likes = String(Number(cardList.value[index].likes) - 1)
        }
    }
}

/**
 * 评论
 */
const parentComment = reactive({})

const submit = async (item) => {
    console.log(item)
    const res = await setComment({
        account: account.value,
        comment_context: item.value,
        article_id: item.id,
        parent_comment_id: 0,
        comment_level: '1',
        replay_account: item.account
    })

}
const showComment = async (item) => {
    item.showComment = !item.showComment
    // if (item.showComment) {
    //     const res = await getComment({
    //         id: item.id,
    //         level: '1'
    //     })
    //     Object.assign(parentComment, res.data)
    // }
}
</script>

<template>
    <section class="articles">
        <header class="text-box">
            <p>猜你喜欢</p>
            <div style="display:none">
                <el-switch inactive-color="#b8b8b8" v-model="switchValue" />自动播放
            </div>
        </header>

        <el-card
            v-for="(item, index) in cardList"
            class="box-card"
            :body-style="{ padding: '0px' }"
        >
            <div class="img-box">
                <img class="art-img" :src="item.image" alt="art1" />
            </div>

            <article class="article">
                <title>{{ item.title }}</title>
                <time>{{ item.create_date }}</time>
                <main>{{ item.brief }}...</main>
            </article>

            <footer>
                <el-button
                    @click="$router.push({ path: '/articleContext', query: { articleId: item.id } })"
                >开始阅读</el-button>

                <div class="tag">
                    <object class="see" :data="see" type="image/svg+xml"></object>
                    <span>{{ item.view }}</span>
                    <div class="flex-center" @click="likeMethod(item.id, index)">
                        <object class="love" :data="love" type="image/svg+xml"></object>
                        <span>{{ item.likes }}</span>
                    </div>
                    <object class="say" :data="say" type="image/svg+xml"></object>
                    <span @click="showComment(item)">{{ item.comment }}</span>
                </div>
            </footer>
            <commentVue :showComment="item.showComment" :data="item" />
            
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
        background-color: rgb(223 223 223 / 12%);
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
            color: #dedede;
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