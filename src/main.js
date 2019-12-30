import Vue from 'vue'
import App from './App.vue'
import router from './permission'
import ElementUI from 'element-ui'
import Component from './components' // 引入插件对象
import axios from './utils/axios.config'
import 'element-ui/lib/theme-chalk/index.css' // 引入样式
import './styles/index.less'
Vue.prototype.$axios = axios // 将axios共享给所有的Vue或组件实例使用
Vue.config.productionTip = false
Vue.use(ElementUI) // 相当于全局注册elementUI Vue.use =>干了什么
Vue.use(Component) // 注册插件
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
