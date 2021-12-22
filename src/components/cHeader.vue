<template>
    <header id="c-header">
        <div class="header-box">
            <div class="logo">blog</div>
            <div>
                <el-button>首页</el-button>
                <el-button>碎语</el-button>
                <el-button>留言</el-button>
                <el-button>友邻</el-button>
                <el-button>圈子</el-button>
            </div>
            <div></div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'c-header'
}

</script>


<style lang="scss" scoped>
.header-box {
    max-width: 1420px;
    width: 100%;
    height: 56px;
    margin: 0 auto;
    padding: 0 80px;
}
</style>