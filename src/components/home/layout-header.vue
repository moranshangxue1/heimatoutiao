<template>
 <!-- 头部最外侧放el-row -->
 <el-row class="layout-header" type="flex" justify="space-between">
     <!-- -----------------左侧--------------------- -->
    <el-col :span="6.6">
        <i class="el-icon-s-fold"></i>
        <span class="title">江苏传智播客教育科技股份有限公司</span>
    </el-col>
    <!-- ------------------右侧-------------------------- -->
    <el-col :span="3.4">
        <!-- 用户头像 -->
        <img class="head-img" src="../../assets/avatar.jpg" alt="">
        <el-dropdown trigger="click">
            <!-- 匿名插槽 -->
            <span class="el-dropdown-link">
                83期大佬<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <!-- 具名插槽 -->
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>git地址</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-col>
 </el-row>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
    .layout-header {
        height: 50px;
        .el-icon-s-fold {
            font-size: 20px;
            line-height: 50px;
        }
        .title {
           vertical-align: top;
           line-height: 50px;
           margin-left: 4px;
        }
        .head-img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
          margin-right: 4px;
        }
    }
</style>
