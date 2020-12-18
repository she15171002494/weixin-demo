import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 引入字体图标
import './static/iconfont.css'
// 引入base.css
import './uni.less'

// 注册全局组件
import YgSeach from './components/YgSeach.vue'
import YgTab from './components/YgTab.vue'
import YgGoods from './components/YgGoods.vue'
Vue.component('yg-seach', YgSeach)
Vue.component('yg-tab', YgTab)
Vue.component('yg-goods', YgGoods)

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
