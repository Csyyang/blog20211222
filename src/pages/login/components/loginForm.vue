<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { MessagePlugin } from 'tdesign-vue-next'

const emits = defineEmits(['chagnState'])

/**
 * 表单
 */
const form = reactive({
    account: '693765678',
    password: 'CSY19961222'
})

/**
 * 登录
 */
const store = useStore()

const login = async () => {
    const result = await store.dispatch('user/loginStore', form)
    console.log(result)
    if (result) {
        MessagePlugin.success('登录成功')
        goHome()
    }
}

/**
 * 回首页
 */
const router =  useRouter()
const goHome = () => router.push('/')
</script>

<template>
    <div class="login-box">
        <p class="header">blog</p>

        <label class="labels" for="acc">
            账号
            <input v-model="form.account" id="acc" type="text" />
        </label>

        <label class="labels" for="pass">
            密码
            <input v-model="form.password" id="pass" type="password" />
        </label>

        <div class="other">
            <button class="pass-color" @click="emits('chagnState', 'forget')">忘记密码</button>
            <button class @click="emits('chagnState', 'register')">注册</button>
        </div>

        <div class="btn" @click="login">登录</div>
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