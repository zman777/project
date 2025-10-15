//进行axios二次封装：使用请求与相应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'

//第一步 利用axios对象的create方法创建一个axios实例
const request = axios.create({
  //基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000, //超时时间
})
//第二步 request实例添加请求与响应拦截器
request.interceptors.request.use((config) => {
  //config:配置对象,对象里面有headers请求头
  return config
})
//第三步响应拦截器
request.interceptors.response.use(
  (response) => {
    //成功回调 简化数据
    return response.data
  },
  (error) => {
    //失败回调 处理http网络错误
    let message = ''
    const status = error.response.status
    switch (status) {
      case 400:
        message = '请求参数错误'
        break
      case 401:
        message = '未授权，请登录'
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器内部错误'
        break
      default:
        message = '网络错误'
        break
    }
    ElMessage({
      message,
      type: 'error',
    })
    return Promise.reject(new Error(message))
  },
)
export default request
