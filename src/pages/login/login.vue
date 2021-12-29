<script setup>
import { ref } from 'vue'
import loginFormVue from './components/loginForm.vue';
import registeVue from './components/registe.vue';
const isLogin = ref(true)
</script>

<template>
  <div class="login">
    <div class="form-box">
      <loginFormVue v-show="isLogin" @chagn-state="res => isLogin = res"></loginFormVue>
      <registeVue v-if="!isLogin" @chagn-state="res => isLogin = res" />
      <div id="filter"></div>
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
  background: url(../../assets/login-bg.jpeg) no-repeat center center fixed;
  background-size: cover;
  .form-box {
    position: relative;
    z-index: 1;
    width: 500px;
    padding-bottom: 30px;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #3a172c;
    #filter {
      position: absolute;
      width: 100vw;
      height: 100vh;
      background: url(../../assets/login-bg.jpeg) no-repeat center center fixed;
      background-size: cover;
      filter: blur(15px);
      z-index: -1;
      top: 0;
      right: 0;
    }
  }
}
</style>
