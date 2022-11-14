import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css
import * as directive from './directive' // 引入自定义指令

import App from './App'
import store from './store'
import router from './router'
import './permission'
import Components from '@/components'
import * as filter from '@/filters' // 引入工具类
import checkPermission from '@/mixin/checkPermission'
import i18n from '@/lang'
import '@/icons' // icon

// 注册全局的过滤器
Object.keys(filter).forEach(key => {
  // 注册过滤器
  Vue.filter(key, filter[key])
})

// 遍历所有的导出的对象，完成自定义全局注册
Object.keys(directive).forEach(key => {
  // 注册自定义指令
  Vue.directive(key, directive[key])
})

// Vue.use(ElementUI, { locale })
Vue.use(ElementUI, {
  i18n: (key, value) => i18n.t(key)
})
// 如果想要中文版 element-ui，按如下方式声明
// Vue.use(ElementUI)

Vue.use(Components) // 注册自己的插件
Vue.mixin(checkPermission) // 所有组件都拥有了检查的方法

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
