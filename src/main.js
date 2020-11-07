import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入字体图标
import './static/iconfont.css'

// 注册全局组件
import YgSeach from './components/YgSeach.vue'

Vue.component('yg-seach', YgSeach)

// 挂载到原型上
// Vue.prototype.$http = function(params) {
//   const { url } = params
//   return uni.request({
//     url: 'https://api-hmugo-web.itheima.net' + url,
//   })
// }

// 封装成插件
import plugin from './utils/request.js'
Vue.use(plugin)

const app = new Vue({
  ...App,
})
app.$mount()
