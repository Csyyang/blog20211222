<template>
    <header id="c-header">
        <div class="header-box">
            <div class="logo">blog</div>
            <nav class="nav">
                <el-button class="checked">首页</el-button>
                <el-button>碎语</el-button>
                <el-button>留言</el-button>
                <el-button>友邻</el-button>
                <el-button>圈子</el-button>
            </nav>
            <div class="login">
                <el-button type="primary">登录</el-button>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'c-header'
}

</script>


<style lang="scss" scoped>
.logo {
    line-height: 56px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1px;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
}

.login {
    display: flex;
    align-items: center;
}

.checked {
    background-color: #d6e8fc;
}
.header-box {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    max-width: 1420px;
    width: 100%;
    height: 56px;
    margin: 0 auto;
    padding: 0 80px;
}
</style>