<script setup>
const emits = defineEmits(['chagnState'])
</script>

<template>
    <div class="login-box">
        <p class="header">blog</p>

        <label class="labels" for="acc">
            账号
            <input id="acc" type="text" />
        </label>

        <label class="labels" for="acc">
            昵称
            <input id="acc" type="text" />
        </label>

        <label class="labels" for="password">
            密码
            <input id="password" type="password" />
        </label>

        <label class="labels" for="quire-pass">
            确认密码
            <input id="quire-pass" type="password" />
        </label>

        <label class="labels" for="pass">
            邮箱
            <input id="pass" type="password" />
        </label>

        <div class="other">
            <button class="pass-color" @click="emits('chagnState', true)">返回登录页</button>
        </div>

        <div class="btn">注册</div>
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