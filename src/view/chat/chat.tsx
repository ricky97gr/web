import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './chat.css'
import { Button, Card, ConfigProvider, Divider, Form, Input, Tabs, TabsProps } from "antd";
import ChatMessage from "./component/message";
import FrientList from "./component/friend";
import GroupList from "./component/group";
import SessionList from "./component/Session";

const ws = new WebSocket("ws://localhost:8800/normalUser/ws");
const ChatHome = () => {

    const [message, setMessage] = useState<MessageInfo>({ context: "" });

    const startWebSocket = () => {

        ws.onmessage = (e) => {
            console.log(e.data)
            setMessage(e.data)
        }
        return () => { ws.close() }
    }



    type MessageInfo = {
        context: string
    }



    const sendMessage = (e) => {
        console.log(e.context)
        ws.send(JSON.stringify(e))
    }
    useEffect(startWebSocket, [])

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
            children: <GroupList />,
        },
    ];
    return (

        <div className="chat-body">
            <div style={{ height: 650, width: 850, marginTop: 120, backgroundColor: "white" }}>
                <div style={{ width: "30%", backgroundColor: "white", float: "left", height: "100%", borderRightStyle: "solid", boxSizing: "border-box" }}>
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
                <div style={{ width: "70%", height: "100%", float: "right", backgroundColor: "white" }}>
                    <div style={{ height: "8%", borderBottomStyle: "solid", boxSizing: "border-box" }}>title</div>
                    <div id="chat-msg-contex" style={{ height: "70%", borderBottomStyle: "solid", boxSizing: "border-box", overflowY: "scroll" }}>
                        <ConfigProvider
                            theme={{
                                token: {
                                    colorSplit: "#a6c6f7",
                                }
                            }}
                        >
                            <Divider dashed={true}><a>加载更多</a></Divider>
                        </ConfigProvider>

                        <ul>
                            <ChatMessage msgid={"asfw"} userid={"111"} userName={"超级管理员"} level={"Lv6"} sex={"男"} ip={"江苏省"} lastLoginTime={"一天前"} context={"测试聊天消息"}></ChatMessage>
                            <ChatMessage msgid={"asfw"} userid={"111"} userName={"超级管理员"} level={"Lv6"} sex={"男"} ip={"江苏省"} lastLoginTime={"一天前"} context={"测试聊天消息"}></ChatMessage>
                            <ChatMessage msgid={"asfw"} userid={"111"} userName={"超级管理员"} level={"Lv6"} sex={"男"} ip={"江苏省"} lastLoginTime={"一天前"} context={"测试聊天消息"}></ChatMessage>
                            <ChatMessage msgid={"asfw"} userid={"111"} userName={"超级管理员"} level={"Lv6"} sex={"男"} ip={"江苏省"} lastLoginTime={"一天前"} context={"测试聊天消息"}></ChatMessage>
                            <ChatMessage msgid={"asfw"} userid={"111"} userName={"超级管理员"} level={"Lv6"} sex={"男"} ip={"江苏省"} lastLoginTime={"一天前"} context={"测试聊天消息"}></ChatMessage>
                            <ChatMessage msgid={"asfw"} userid={"111"} userName={"超级管理员"} level={"Lv6"} sex={"男"} ip={"江苏省"} lastLoginTime={"一天前"} context={"测试聊天消息"}></ChatMessage>
                            <ChatMessage msgid={"asfw"} userid={"111"} userName={"超级管理员"} level={"Lv6"} sex={"男"} ip={"江苏省"} lastLoginTime={"一天前"} context={"测试聊天消息"}></ChatMessage>
                            <ChatMessage msgid={"asfw"} userid={"111"} userName={"超级管理员"} level={"Lv6"} sex={"男"} ip={"江苏省"} lastLoginTime={"一天前"} context={message.context}></ChatMessage>

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