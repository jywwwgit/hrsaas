// permission intercept  Navigation guard
import router from '@/router' // importing a router instance
import store from '@/store'
import NProgress from 'nprogress' // importing a progress bar
import 'nprogress/npgrogress.css'

// difined a whiteList
const whiteList = ['/login', '/404']
// global forward guard
router.beforeEach((to, from, next) => {
  NProgress.start() // start progress
  // is there a token
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else { // Did not have a token
    if (whiteList.indexOf(to.path) > -1) {
      next()
    } else {
      next('/login')
    }
  }
})
// global post guard
router.afterEach(() => {
  NProgress.done()
})