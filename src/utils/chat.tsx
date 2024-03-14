import { ChatType } from "./constant"

export const setCurrenChatInfo = ({ type, uid, groupUID }) => {
    let chatInfo = {
        type: type,
        uid: uid,
        groupUID: groupUID,
    }
    localStorage.setItem("chatInfo", JSON.stringify(chatInfo))
}

export const getCurrentChatType = () => {
    var info = JSON.parse(localStorage.getItem("chatInfo"))
    if (info === null) {
        return -1
    }
    return info.type
}

export const getCurrnetChatUID = () => {
    var info = JSON.parse(localStorage.getItem("chatInfo"))
    if (info === null) {
        return ""
    }
    if (info.type === ChatType.GroupMessage) {
        return info.groupUID
    }
    return info.uid
}