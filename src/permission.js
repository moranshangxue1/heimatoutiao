// 权限
import router from './router/router'
// 全局的前置导航守卫
router.beforeEach(function (to, from, next) {
  // 判断拦截的范围
  // startsWith以什么什么为开头
  if (to.path.startsWith('/home')) {
    //   进入到拦截范围
    // 判断是否登录 有token 就登录 没token就没登录
    let token = window.localStorage.getItem('user-token')
    if (token) {
      // 如果有token
      next()
    } else {
      next('/login') // 没token就跳转到登录
    }
  } else {
    next() // 放行
  }
})
// 先导出
export default router
