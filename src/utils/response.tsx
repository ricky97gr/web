import { message } from "antd"


export const errorHandle = (data) => {
  if (data.body.code !== 200) {
    if (data.body.code === 100003) {
      message.error("认证信息有误，请重新认证")
      //跳转到登录页面
      return true
    }
    message.error(data.body.msg)
    return true
  }
  return false
}

export const successHandle = (data) => {
  message.success(data)
}