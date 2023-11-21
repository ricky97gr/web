export const storeUserInfo = ({ userName, userID, token, role }) => {
  let userInfo = {
    userName: userName,
    userID: userID,
    token: token,
    role: role
  }
  localStorage.setItem("userInfo", JSON.stringify(userInfo))
}

export const getLocalUserName = () => {
  var userinfo = JSON.parse(localStorage.getItem("userInfo"))
  if (userinfo === null) {
    return ""
  }
  return userinfo.userName
}

export const getLocalUserUID = () => {
  var userinfo = JSON.parse(localStorage.getItem("userInfo"))
  if (userinfo === null) {
    return ""
  }
  return userinfo.userID
}

export const getLocalUserToken = () => {
  var userinfo = JSON.parse(localStorage.getItem("userInfo"))
  if (userinfo === null) {
    return ""
  }
  return userinfo.token
}

export const getLocalRole = () => {
  var userinfo = JSON.parse(localStorage.getItem("userInfo"))
  console.log(userinfo)
  if (userinfo === null) {
    return 1
  }
  return userinfo.role
}

export const clearLocalUserInfo = () => {
  localStorage.removeItem("userInfo")
}

