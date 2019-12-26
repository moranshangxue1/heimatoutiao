<template>
<!-- 先定义一个大容器 -->
  <el-container>
    <!-- 左侧 -->
    <el-aside style="width:200px;overflow:hidden;background-color:#323745">
       <layout-aside></layout-aside>
    </el-aside>
    <!-- 右侧大容器 -->
    <el-container>
      <!-- 头部 -->
      <el-header>
        <!-- 头部组件 -->
        <layout-header>我是头部</layout-header>
      </el-header>
      <!-- 中部区域 -->
      <el-main style="padding:0">
        <!-- 二级路由容器 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 局部注册
// import layoutAside from '../../components/home/layout-aside'
// import layoutHeader from '../../components/home/layout-header'
export default {
  // components: {
  //   'layoutAside': layoutAside,
  //   'layoutHeader': layoutHeader
  // }
}
</script>

<style>

</style>
