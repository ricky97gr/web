import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import './chat.css'
import { Avatar, Button, Card, ConfigProvider, Divider, Form, Input, List, Skeleton, Tabs, TabsProps, message, notification } from "antd";
import ChatMessage from "./component/message";
import FrientList from "./component/friend";
import GroupList from "./component/group";
import SessionList from "./component/Session";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { getLocalUserToken } from "../../utils/auth";
import InfiniteScroll from "react-infinite-scroll-component";
import GroupMember from "./component/group/group_member";



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
    const [groupUID, setGroupUID] = useState("")




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
            children: <GroupList setGroupUID={setGroupUID} showGroupMemberFunc={setShowGroupMember}/>,
        },
    ];
    return (

        <div className="chat-body">
            <div style={{ height: "100%", width: "100%", backgroundColor: "white" }}>
                <div style={{ width: "23%", backgroundColor: "white", float: "left", height: "100%", borderRightStyle: "solid", boxSizing: "border-box" }}>
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

                <div style={{ width: "17%", backgroundColor: "white", float: "right", height: "100%", borderLeftStyle: "solid", boxSizing: "border-box" }}>
                   
                <GroupMember groupUID={groupUID} display={isShowGroupMember}></GroupMember>


                </div>
                <div style={{ width: "60%", height: "100%", float: "right", backgroundColor: "white" }}>
                    <div style={{ height: "8%", borderBottomStyle: "solid", boxSizing: "border-box" }}><span style={{textAlign:"center"}}>title</span></div>
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
                                    <ChatMessage msgid={"asfw"} userid={"111"} userName={"超级管理员"} level={"Lv6"} sex={"男"} ip={"江苏省"} lastLoginTime={"一天前"} context={item.context}></ChatMessage>
                                </>
                            ))}

                        </ul>



                    </div>
                    <div style={{ height: "22%", position: "relative" }}>
                        <Form<MessageInfo> onFinish={sendMessage}>
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