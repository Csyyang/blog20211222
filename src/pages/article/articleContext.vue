<script setup>
import { useRoute } from 'vue-router'
import headerVue from '../../components/header.vue'

import markdownVue from '../../components/markdown.vue'
import { getArticle } from "api/article"
import { reactive } from 'vue'

const route = useRoute()

/**
 * 获取文章内容
 */
const getArticles = async () => {
    const res = await getArticle({ id: articleId })
    if (res.code === '00') {
        Object.assign(context, res.data)
    }
}

const articleId = route.query.articleId
const context = reactive({})
getArticles()


</script>


<template>
    <div>
        <headerVue />
        <el-image class="context img" :src="context.image" fit="cover"></el-image>
        <markdownVue class="context" :context="context.context" />
    </div>
</template>

<style scoped lang="scss">
.context {
    width: 720px;
    margin: 0 auto;
}

.img {
    display: block;
    height: 405px;
    margin: 0 auto;
}
</style>