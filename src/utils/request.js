import axios from 'axios'
const service  = axios.create() // create an instance of Axios
service.interceptors.request.use() // Request interceptor
service.interceptors.response.use() // Response interceptor
export default service // export axios instance