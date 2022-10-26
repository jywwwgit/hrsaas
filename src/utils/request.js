import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import { getTimeStamp } from '@/utils/auth'
import router from '@/router'
const Timeout = 3600
const service  = axios.create({ // create an instance of Axios
  // npm run dev , cross-domain proxy
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // 5s timeout
})
// Request interceptor
service.interceptors.request.use(config => {
  if (store.getters.token) { // have a token, inject token
    // 只有在有token的情况下，才有必要去检查时间戳是否超时
    if (IsCheckTimeout()) {
      // 如果他为true，表示token超时了， 返回登录页
      store.dispatch('user/logout') // 登出操作
      // 跳转到登录页
      router.push('/login')
      return Promise.reject(new Error('token超时了'))
    }
    config.headers['Authorization'] = `Bearer ${store.getters.token}`
  }
  // must return config
  return config
}, error => {
  return new Promise.reject(error)
})
 // Response interceptor
service.interceptors.response.use(response => {
  const { success, message, data } = response.data
  // 要根据success的成功与否决定下面的操作
  if (success) {
    return data
  } else {
    Message.error(message) // into catch
    return Promise.reject(new Error(message))
  }
}, error => {
  Message.error(error.message)
  return Promise.reject(error) // return error, into catch
})
// 是否超时
function IsCheckTimeout() {
  var currentTime = Date.now() // 当前时间戳
  var timeStamp = getTimeStamp() // 缓存时间戳
  return (currentTime - timeStamp) / 1000 > Timeout
}
export default service // export axios instance