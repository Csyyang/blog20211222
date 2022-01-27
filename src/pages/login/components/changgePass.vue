<script setup>
import { useStore } from 'vuex'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ChangPassword } from 'api/user'
import { MessagePlugin } from 'tdesign-vue-next'

const emits = defineEmits(['chagnState'])

/**
 * 表单
 */
const form = reactive({
    account: '693765678',
    password: '111111',
    newpassword: 'CSY19961222',
    newpassword2: 'CSY19961222'
})

/**
 * 提交
 */
const store = useStore()

const login = async () => {
    const res = await ChangPassword(form)
    if(res.code === '00') {
        MessagePlugin.success("密码修改成功")
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

        <label class="labels" for="accc">
            账号
            <input v-model="form.account" id="accc" type="text" />
        </label>

        <label class="labels" for="passww">
            原密码
            <input v-model="form.password" id="passww" type="password" />
        </label>

        <label class="labels" for="newpass">
            新密码
            <input v-model="form.newpassword" id="newpass" type="password" />
        </label>

        <label class="labels" for="newpass2">
            重复新密码
            <input v-model="form.newpassword2" id="newpass2" type="password" />
        </label>

        <div class="other">
            <button class="pass-color" @click="emits('chagnState', 'forget')">忘记密码</button>
            <button class @click="emits('chagnState', 'register')">注册</button>
        </div>

        <div class="btn" @click="login">提交</div>
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