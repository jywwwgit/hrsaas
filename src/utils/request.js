import axios from 'axios'
import { Message } from 'element-ui'
const service  = axios.create({ // create an instance of Axios
  // npm run dev , cross-domain proxy
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000 // 5s timeout
})
service.interceptors.request.use() // Request interceptor
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