<script setup>
import { register } from 'api/user'
import { reactive} from 'vue'

const emits = defineEmits(['chagnState'])


const form = reactive({
    account: '',
    password: '',
    password2: '',
    username: '',
    email: ''
})


// 提交表单
const registerBtn = async () => {
    const res = await register(form)
    console.log(res)

}


</script>

<template>
    <div class="login-box">
        <p class="header">blog</p>

        <label class="labels" for="acc">
            账号
            <input v-model="form.account" id="acc" type="text" />
        </label>

        <label class="labels" for="name">
            昵称
            <input v-model="form.username" id="name" type="text" />
        </label>

        <label class="labels" for="password">
            密码
            <input v-model="form.password" id="password" type="password" />
        </label>

        <label class="labels" for="quire-pass">
            确认密码
            <input v-model="form.password2" id="quire-pass" type="password" />
        </label>

        <label class="labels" for="pass">
            邮箱
            <input v-model="form.email" id="pass" />
        </label>

        <div class="other">
            <button class="pass-color" @click="emits('chagnState', 'login')">返回登录页</button>
        </div>

        <div class="btn" @click="registerBtn">注册</div>
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