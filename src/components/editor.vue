<script setup>
import E from 'wangeditor'
import { onMounted, ref } from 'vue'

const html = ref()
const disable = ref(true)

let editor
onMounted(() => {
    editor = new E('#div1')
    editor.config.height = 100

    editor.config.excludeMenus = [
        'head',
        'bold',
        'fontSize',
        'emoticon',
        'video',
        'fontName',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'video',
        'code',
    ]

    editor.config.onchange = function (newHtml) {
        disable.value = newHtml === '' ? true : false
    };

    editor.create()
})

const editHtml = () => {
    html.value = editor.txt.html()
}

</script>

<template>
    <div id="div1"></div>

    <div class="btn">
        <el-button :disabled="disable" @click="editHtml" size="mini" type="primary">留言</el-button>
    </div>

    <div v-html="html"></div>
</template>

<style lang="scss">
.btn {
    margin: 10px 0;
    display: flex;
    justify-content: flex-end;
}
</style>

