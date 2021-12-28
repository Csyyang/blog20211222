<script setup></script>

<template>
  <div class="login">
    <div class="form-box">
      发大水发顺丰电动阀发生都
      <div id="a"></div>
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
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
    border: 1px solid #75636e;
    #a {
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
