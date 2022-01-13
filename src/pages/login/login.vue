<script setup>
import { ref } from 'vue'
import loginFormVue from './components/loginForm.vue';
import registeVue from './components/registe.vue';
import forgetVue from './components/forget.vue';
import filterVue from '../../components/filter.vue';
import headerVue from 'coms/header.vue'

const states = ref('login')
</script>

<template>
  <div class="login">
    <headerVue />
    <div class="form-box">
      <loginFormVue v-show="states == 'login'" @chagn-state="res => states = res"></loginFormVue>
      <registeVue v-if="states == 'register'" @chagn-state="res => states = res" />
      <forgetVue v-if="states == 'forget'" @chagn-state="res => states = res" />
      <filterVue />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url("http://yangyangcsy.cn/images/login-bg.jpeg") no-repeat center
    center fixed;
  background-size: cover;
  .form-box {
    position: relative;
    z-index: 1;
    width: 500px;
    padding-bottom: 30px;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #3a172c;
  }
}
</style>
