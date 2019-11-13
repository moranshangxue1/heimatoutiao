<template>
  <div class="login">
<!-- 使用elementUI组件 el-card -->
     <el-card class="login-card">
         <div class="title">
            <img src="../../assets/logo_index.png" alt="">
         </div>
         <el-form style="margin-top:20px">
             <el-form-item>
                 <el-input></el-input>
             </el-form-item>
             <el-form-item>
                 <!-- 验证码 -->
                 <el-input style="width:65%"></el-input>
                 <!-- 发送验证码 -->
                 <el-button style="float:right">发送验证码</el-button>
             </el-form-item>
             <el-form-item>
                 <el-checkbox>我已阅读并同意用户协议和隐私条款</el-checkbox>
             </el-form-item>
             <el-form-item>
                 <el-button style="width:100%" type="primary">登录</el-button>
             </el-form-item>
         </el-form>
     </el-card>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
// 如果要在组价样式中写less就要给一个lang属性
.login {
    background-image: url(../../assets/login_bg.jpg);
    height: 100vh;
    background-size: cover;
    display:flex;
    justify-content: center;
    align-items: center;
    .login-card {
        width: 440px;
        height: 340px;
        .title {
            text-align: center;
            img {
                height: 45px;
            }
        }
    }
}
</style>
