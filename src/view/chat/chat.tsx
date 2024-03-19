import { Button, ConfigProvider, Divider, Form, Input, Tabs, TabsProps, message, notification } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { getLocalUserName, getLocalUserToken, getLocalUserUID } from "../../utils/auth";
import { getCurrentChatType, getCurrnetChatUID } from "../../utils/chat";
import './chat.css';
import SessionList from "./component/Session";
import FrientList from "./component/friend";
import GroupList from "./component/group";
import GroupMember from "./component/group/group_member";
import ChatMessage from "./component/message";



let allMessage = []

const ChatHome = () => {
    const ws = useRef<WebSocket>()
    useEffect(() => {
        let token = getLocalUserToken()
        console.log(token)
        ws.current = new WebSocket("ws://localhost:8800/normalUser/ws", token);
    }, [ws])



    type MessageInfo = {
        context: string
        fromUID: string
        toUID: string
        fromName: string
        time: number
        type: number
        groupID: string
    }

    const [messages, setMessages] = useState<MessageInfo[]>([])
    const [isShowGroupMember, setShowGroupMember] = useState("none")
    const [groupMember, setGroupMember] = useState([])




    const scrollToButtom = () => {
        let chat = document.getElementById("chat-msg-contex")
        chat.scrollTop = chat.scrollHeight
    }

    const sendMessage = (e) => {
        if (e.context === undefined || e.context === "") {
            message.warning("请输入聊天内容哦")
            return
        }
        allMessage = messages
        allMessage = [...allMessage, e]
        console.log(e)
        e.fromUID = getLocalUserUID()
        e.type = getCurrentChatType()
        e.groupID = getCurrnetChatUID()
        e.fromName = getLocalUserName()

        ws.current.send(JSON.stringify(e))
        setMessages(allMessage)
        setTimeout(scrollToButtom, 50)
    }

    const showMoreMessage = () => {
        let moreMessages = [{ context: "oldmsg1" }, { context: "oldmsg2" }]
        allMessage = [...moreMessages, ...allMessage]
        setMessages(allMessage)

    }

    const receiveMessage = (e) => {
        console.log(1111, e)
        let msg = JSON.parse(e.data)
        if (msg.type === 1) {
            notification.info({
                placement: "bottomRight",
                message: msg.context,
                style: { width: 'calc(30vh - 10px)', float: "right", right: 0 },
            })
            return
        }
        allMessage = [...allMessage, msg]
        setMessages(allMessage)
        setTimeout(scrollToButtom, 50)
    }

    useEffect(() => {


        const start = () => {
            console.log("start successfully")
        }
        const stop = () => {
            ws && ws.current?.close()
        }
        ws.current.onmessage = receiveMessage
        ws.current.onopen = start
        return () => {
            stop()
        }
    }, [])

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '会话',
            children: <SessionList />,
        },
        {
            key: '2',
            label: '好友',
            children: <FrientList />,
        },
        {
            key: '3',
            label: '群聊',
            children: <GroupList setGroupMember={setGroupMember} showGroupMemberFunc={setShowGroupMember} />,
        },
    ];
    return (

        <div className="chat-body">
            <div style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
                <div style={{ width: "22%", backgroundColor: "white", float: "left", height: "100%", borderRightStyle: "solid", boxSizing: "border-box" }}>
                    <div style={{ height: "12%", borderBottomStyle: "solid", boxSizing: "border-box" }}></div>
                    <div style={{ height: "8%", borderBottomStyle: "solid", boxSizing: "border-box" }}>
                        <Input style={{ height: "100%", width: "100%", backgroundColor: "#eee" }} size="large" bordered={false} placeholder="请输入查找内容"></Input>
                    </div>
                    <div style={{ backgroundColor: "white", height: "80%" }}>
                        <ConfigProvider theme={{
                            components: {
                                Tabs: {
                                    cardBg: "white",
                                }
                            }
                        }}>
                            <Tabs defaultActiveKey="1" items={items} size="large" centered style={{ height: "100%", width: "100%" }} />
                        </ConfigProvider>

                    </div>
                </div>

                <div style={{ width: "18%", backgroundColor: "white", float: "right", height: "100%", borderLeftStyle: "solid", boxSizing: "border-box" }}>

                    <GroupMember data={groupMember} display={isShowGroupMember}></GroupMember>


                </div>
                <div style={{ width: "60%", height: "100%", float: "right", backgroundColor: "white" }}>
                    <div style={{ height: "8%", borderBottomStyle: "solid", boxSizing: "border-box" }}><span style={{ textAlign: "center" }}>title</span></div>
                    <div id="chat-msg-contex" style={{ height: "70%", borderBottomStyle: "solid", boxSizing: "border-box", overflowY: "scroll" }}>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorSplit: "#a6c6f7",
                                }
                            }}
                        >
                            <Divider dashed={true}><a onClick={showMoreMessage}>加载更多</a></Divider>
                        </ConfigProvider>

                        <ul>
                            {messages.map((item) => (
                                <>
                                    <ChatMessage msgid={"asfw"} userid={item.fromUID} userName={item.fromName} level={"Lv6"} sex={"男"} ip={"江苏省"} lastLoginTime={"一天前"} context={item.context}></ChatMessage>
                                </>
                            ))}

                        </ul>



                    </div>
                    <div style={{ height: "22%", position: "relative" }}>
                        <Form<MessageInfo> onFinish={(e) => sendMessage(e)}>
                            <Form.Item<MessageInfo> name="context">
                                <Input.TextArea bordered={false}>
                                </Input.TextArea>
                            </Form.Item>
                            <Button size="middle" style={{ position: "absolute", bottom: 10, right: 10 }} htmlType="submit">发送</Button>
                        </Form>


                    </div>
                </div>



            </div>

        </div>

    )
}

export default ChatHome