<script setup>
import { reactive, ref } from 'vue';

const props = defineProps({
    show: {
        type: Boolean,
        define: false,
    },
});

const emit = defineEmits(["update:show"])

const forms = ref()
const form = reactive({
    name: '',
    address: '',
    desc: '',
    avatar: ''
})




// 校验规则
const url = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('请输入对应网址'))
    }
    const pattern = /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/
    if (!pattern.test(value)) {
        return callback(new Error('格式错误'))
    }

    callback()
}

const rules = {
    name: [{
        type: 'string',
        required: true,
        message: '请输入博客名字',
        trigger: 'blur'
    }],
    address: [{
        validator: url,
        trigger: 'blur'
    }],
    desc: [{
        type: 'string',
        required: true,
        message: '请输入描述',
        trigger: 'blur'
    }],
    avatar: [{
        validator: url,
        trigger: 'blur'
    }]
}

// 提交申请
const onSubmit = async () => {
    try {
    const res = await forms.value.validate()

      if(res) {
        console.log('submit')
    }
    } catch (error) {
        console.error(error)
    }
  
}
</script>

<template>
    <div>
        <el-dialog
            :modelValue="props.show"
            title="友链申请"
            @update:modelValue="(value) => { emit('update:show', value) }"
            width="70%"
        >
            <el-form class="form" ref="forms" :model="form" label-width="100px" :rules="rules">
                <el-form-item label="博客名字" prop="name">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="博客地址" prop="address">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="博客简介" prop="desc">
                    <el-input v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="博客头像" prop="avatar">
                    <el-input v-model="form.avatar"></el-input>
                </el-form-item>

                <el-button style="float: right" size="mini" type="primary" @click="onSubmit">申请</el-button>
            </el-form>
        </el-dialog>
    </div>
</template>

<style lang="scss" scoped>
.form {
    overflow: hidden;
}
</style>
