<template>
  <div class="login">
<!-- 使用elementUI组件 el-card -->
     <el-card class="login-card">
         <div class="title">
            <img src="../../assets/logo_index.png" alt="">
         </div>
         <!-- 数据校验要先给el-form绑定nodel, 绑定rules规则 -->
         <el-form ref="myForm" :model="loginForm" :rules="loginRules" style="margin-top:20px">
             <el-form-item prop="mobile">
                 <!-- 手机号 绑定v-model -->
                 <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
             </el-form-item>
             <el-form-item prop="code">
                 <!-- 验证码 -->
                 <el-input v-model="loginForm.code" placeholder="请输入验证码" style="width:65%"></el-input>
                 <!-- 发送验证码 -->
                 <el-button style="float:right">发送验证码</el-button>
             </el-form-item>
             <el-form-item prop="agree">
               <!-- 同意选项 -->
                 <el-checkbox v-model="loginForm.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
             </el-form-item>
             <el-form-item>
               <!-- 登录按钮 -->
                 <el-button @click="login" type="primary" style="width:100%">登录</el-button>
             </el-form-item>
         </el-form>
     </el-card>

  </div>
</template>

<script>
export default {
//    定义一个对象
  data () {
    let validator = function (rule, value, callBack) {
      // rule当前规则
      // value当前表单项的值
      // callBack回调函数
      // ------------------------正常写法
      // if (value) {
      //   // 正确 勾选了协议
      //   callBack() // 一切OK请继续
      // } else {
      //   // 不对 没勾选协议
      //   callBack(new Error('已经阅读并同意用户协议'))
      // }
      // -------------------------------简单写法/炫技模式
      value ? callBack() : callBack(new Error('已经阅读并同意用户协议'))
    }
    return {
      // 表单数据是一个对象
      // 定义一个对象
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        agree: false // 是否同意协议
      },
      loginRules: {
        // 决定着校验规则 key(字段名)：value(对象数组) =>一个对象就是一校验规则
        // required 为true 就表示该字段必填 如果不填 就会提示消息
        mobile: [{ required: true, message: '手机号不能为空' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入合法的手机号' }],
        code: [{ required: true, message: '验证码不能为空' },
          { pattern: /^\d{6}$/, message: '验证码为6位数字' }],
        agree: [{ validator }]
      } // 登录规则集合对象
      // validator 为自定义形式校验
    }
  },
  methods: {
    login () {
      // 校验整个表单的规则
      // validate 是一个方法=>方法传入的函数 两个函数 第一个是是否校验成功/第二个未校验成功字段
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          this.$axios({
            method: 'post',
            url: 'authorizations',
            data: this.loginForm
          }).then(result => {
            // 将后台返回的token令牌存储到前端缓存中
            window.localStorage.setItem('user-token', result.data.data.token)
          }).catch(error => {
            console.log(error.message)
          })
        }
      })
    }
  }
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
