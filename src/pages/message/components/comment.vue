<script setup>
import oyo from 'img/oyo.jpeg'
import { ref } from 'vue'
import editorVue from '../../../components/editor.vue'
import commontVue from './comment.vue'

const showEdit = ref(false)
const showMore = ref(false)

const props = defineProps({
    context: {
        type: String,
        default: ""
    },
    isParent: {
        type: Boolean,
        default: false
    }
})

</script>

<template>
    <div class="comment">
        <div class="header">
            <el-avatar :size="36" :src="oyo"></el-avatar>
            <div class="message">
                <span class="name font16 blod">csy</span>
                <span
                    class="font12 color-black-7 btn"
                    @click="showEdit = !showEdit"
                >{{ showEdit ? '取消回复' : '回复' }}</span>
                <p class="introduce font12 color-black-7">2012-12-22</p>
            </div>
        </div>
        <div class="context" v-html="props.context"></div>

        <div v-if="isParent && showMore">
            <commontVue context="1413243" />
            <commontVue context="1413243" />
            <commontVue context="1413243" />
            <commontVue context="1413243" />
            <commontVue context="1413243" />
            <commontVue context="1413243" />
        </div>

        <!-- 编辑器 -->
        <editorVue v-if="showEdit" />

        <el-button @click="showMore = !showMore" size="mini">{{ showMore?'收起':'展开' }}</el-button>
    </div>
</template>

<style lang="scss" scoped>
.comment {
    padding: 10px;
    border-bottom: 1px solid #e0e0e0;
}

.context {
    margin-top: 15px;
    font-size: 14px;
    color: #4c4e4d;
}
.header {
    display: flex;
    align-items: center;
}

.message {
    margin-left: 10px;
}

.name {
    margin-right: 10px;
}

.btn {
    background-color: #0478be;
    display: inline-block;
    color: #fff;
    padding: 0 5px;
    border-radius: 5px;
    cursor: pointer;
}

// 富文本
/* table 样式 */
table {
    border-top: 1px solid #ccc;
    border-left: 1px solid #ccc;
}
table td,
table th {
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    padding: 3px 5px;
}
table th {
    border-bottom: 2px solid #ccc;
    text-align: center;
}

/* blockquote 样式 */
blockquote {
    display: block;
    border-left: 8px solid #d0e5f2;
    padding: 5px 10px;
    margin: 10px 0;
    line-height: 1.4;
    font-size: 100%;
    background-color: #f1f1f1;
}

/* code 样式 */
code {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    background-color: #f1f1f1;
    border-radius: 3px;
    padding: 3px 5px;
    margin: 0 3px;
}
pre code {
    display: block;
}

/* ul ol 样式 */
ul,
ol {
    margin: 10px 0 10px 20px;
}
</style>
