// permission intercept  Navigation guard
import router from '@/router' // importing a router instance
import store from '@/store'
import nprogress from 'nprogress' // importing a progress bar
import 'nprogress/nprogress.css' // 引入进度条样式

// difined a whiteList
const whiteList = ['/login', '/404']
// global forward guard
router.beforeEach(async(to, from, next) => {
  nprogress.start() // start progress
  // is there a token
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      // if have no id, then call vuex's action
      if (!store.getters.userId) {
        await store.dispatch('user/getUserInfo')
      }
      next()
    }
  } else {
    // 如果没有 token 则判断白名单里是否有不要 token 就可访问的地址
    if (whiteList.indexOf(to.path) > -1) {
      // 如果在白名单里
      next()
    } else {
      // 不在，则跳到登录页
      next('/login')
    }
  }
  nprogress.done() // 解决手动切换地址时 进度条不关闭的问题
})
// global post guard
router.afterEach(() => {
  nprogress.done()
})