<script setup>
import { ref } from 'vue'
import { checkEmail, reset } from 'api/user'

const emits = defineEmits(['chagnState'])
/**
 * 弹出框
 */
const visible = ref(false)
const onCancel = () => {
    visible.value = false
}
const onConfirmAnother = (context) => {
    console.log('点击了确认按钮', context);
    visible.value = false;
    sendEmial()
}

/**
 * 确认邮件是否正确
 */
const eamil = ref('')
const send = async () => {
    const res = await checkEmail({
        email: email.value
    })
    if (res.code === '00') {
        visible.value = true
    }
}

/**
 * 发送邮件
 */
const sendEmial = async() => {
    const res = await reset()
    if(res.code === '00') {
        console.log('发送成功,请查收')

        // 重复发送
    }
}
</script>

<template>
    <div class="login-box">
        <p class="header">blog</p>

        <label class="labels" for="email">
            邮箱
            <input id="email" v-model="eamil" type="text" />
        </label>

        <div class="other">
            <button class="pass-color" @click="emits('chagnState', 'login')">返回登录</button>
            <button class @click="emits('chagnState', 'register')">注册</button>
        </div>

        <t-dialog
            v-model:visible="visible"
            header="提示"
            body="确认发送重置密码邮件"
            @onClose="onCancel"
            @confirmBtn="onConfirmAnother"
        />

        <div class="btn" @click="send">发送</div>
    </div>
</template>

<style lang="scss" scoped>
.login-box {
    padding-top: 50px;
    opacity: 0.5;

    .labels {
        display: flex;
        width: 300px;
        margin: 0 auto;
        border-radius: 20px;
        background: #745c64;
        padding: 10px;
        margin-bottom: 15px;

        input {
            margin-left: 10px;
            flex-grow: 1;
        }
    }
    .header {
        text-align: center;
        margin-bottom: 25px;
    }

    .other {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        width: 300px;
        .pass-color {
            color: #03bf61;
        }
    }

    .btn {
        padding: 5px;
        text-align: center;
        font-size: 20px;
        background: #745c64;
        margin: 20px auto 0;
        width: 300px;
        cursor: pointer;
        color: #afd7c3;
    }
}
</style>