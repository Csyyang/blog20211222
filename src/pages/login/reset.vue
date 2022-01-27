<script setup>
import cookie from 'cookie'
import { useRoute } from 'vue-router'
import { ResetPassword } from 'api/user'

const route = useRoute()
let token = route.query.token
document.cookie = cookie.serialize('mysession', token, {
    maxAge: 60 * 5
})

const sendEmail = async () => {
    const res = await ResetPassword()
}
sendEmail()
</script>


<template>
    <router-link to="/login"><p>重置成功，跳转至登录页</p></router-link>
</template>