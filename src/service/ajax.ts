import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  // baseURL: 'http://127.0.0.1/'
})

// request 拦截器
// instance.interceptors.request.use(
//   config => {
//     config.headers['Authorization'] = `Bearer ${getToken()}`
//     return config
//   },
//   error => Promise.reject(error)
// )

// response 拦截器
instance.interceptors.response.use(res => {
  const resData = (res.data || {}) as ResType
  const { errno, data, msg } = resData

  if (errno !== 0) {
    if (msg) {
      message.error(msg)
    }
    // throw new Error(msg)
  }

  return data as any
})

export default instance

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  [key: string]: any
}
