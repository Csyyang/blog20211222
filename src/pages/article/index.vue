<script setup>
import { reactive } from 'vue'
import headerVue from '../../components/header.vue'
import filterVue from '../../components/filter.vue'
import markdownVue from '../../components/markdown.vue'
import useUpload from './composables/useUpload'
import { Plus } from '@element-plus/icons-vue'
import { addArticle } from 'api/article'
import { MessagePlugin } from 'tdesign-vue-next'



const init = () => ({
    title: '',
    lable: '',
    image: '',
    brief: '',
    context: '',
})

let form = reactive(init())

const reset = () => {
    Object.assign(form, init())
}



// 提交新文章
const onSubmit = async () => {
    const res = await addArticle(form)
    if (res.code === '00') {
        MessagePlugin.success('提交成功')
        reset()
    }
}

const options = [

]

/**
 * 图片上传

 */

const { imageUrl, handleAvatarSuccess, beforeAvatarUpload } = useUpload(form)

</script>

<template>
    <headerVue />
    <div class="article">
        <div class="context">
            <el-form ref="formRef" :model="form" label-width="120px">
                <el-form-item label="文章标题">
                    <el-input v-model="form.title"></el-input>
                </el-form-item>

                <el-form-item label="选择标签">
                    <el-select
                        v-model="form.lable"
                        filterable
                        allow-create
                        default-first-option
                        placeholder="选择或增加标签"
                    >
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="选择预览图片">
                    <el-upload
                        class="avatar-uploader"
                        name="image"
                        action="/test/upload/uploadImage"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                    >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <el-icon v-else class="avatar-uploader-icon">
                            <Plus />
                        </el-icon>
                    </el-upload>
                </el-form-item>

                <el-form-item label="简介">
                    <el-input v-model="form.brief"></el-input>
                </el-form-item>

                <el-form-item label="内容">
                    <el-input v-model="form.context" type="textarea"></el-input>
                </el-form-item>

                <el-form-item label="预览">
                    <markdownVue :context="form.context" />
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" @click="onSubmit">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
        <filterVue />
    </div>
</template>

<style scoped lang="scss">
.article {
    width: 80%;
    height: 80%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 20px auto 0;
    position: relative;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #0003;
        border-radius: 10px;
        transition: all 0.2s ease-in-out;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
    }
}
.context {
    padding: 12px 16px;
}

:deep(.el-upload) {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
:deep(.el-upload:hover) {
    border-color: #409eff;
}
:deep(.avatar-uploader-icon) {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
    line-height: 180px;
}
:deep(.avatar) {
    width: 178px;
    height: 178px;
    display: block;
}
</style>