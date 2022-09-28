import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
const service  = axios.create({ // create an instance of Axios
  // npm run dev , cross-domain proxy
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // 5s timeout
})
// Request interceptor
service.interceptors.request.use(config => {
  if (store.getters.token) { // have a token, inject token
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
  if (success) {
    return data
  } else {
    Message.error(message) // into catch
    return Promise.reject(new Error(message))
  }
}, error => {
  Message.error(error.Message)
  return Promise.reject(error) // return error, into catch
})
export default service // export axios instance