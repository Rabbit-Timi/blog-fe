import axios from 'axios'
import { message } from 'antd'
import { SERVER_URL } from '../constant/index'

const instance = axios.create({
  baseURL: SERVER_URL,
  // timeout: 5000,
})

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  [key: string]: any
}

// request 拦截器
// instance.interceptors.request.use(
//   req => {
//     console.log('req', req)
//     return req
//   },
//   error => Promise.reject(error)
// )

// response 拦截器
instance.interceptors.response.use(res => {
  // console.log('res', res)
  const resData = (res.data || {}) as ResType
  const { errno, data, msg } = resData

  if (errno !== 0) {
    if (msg) {
      message.error(msg)
    }
    throw new Error(msg)
  }

  return data as any
})

export default instance
