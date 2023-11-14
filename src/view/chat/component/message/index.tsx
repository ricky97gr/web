
import { Avatar, List } from "antd";
import React from "react";

import "./index.css"

const ChatMessage = ({ msgid, userid, userName, level, sex, ip, lastLoginTime, context }) => {

    return (
        <>

            <div style={{ width: "10%", float: "left", }}>
                <Avatar src={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"} size={"large"}></Avatar>
            </div>
            <div style={{ width: "90%", float: "left" }}>
                <div className="" style={{ width: "100%", textAlign: "left" }}>
                    <span style={{ fontSize: 18, }}>{userName}</span>
                    <span style={{ margin: 5, fontSize: 12, }}>{level}</span>
                    <span style={{ margin: 5, fontSize: 12, }}>{sex}</span>
                    <span style={{ margin: 5, fontSize: 12, }}>{ip}</span>
                    <span style={{ margin: 5, fontSize: 12, }}>{lastLoginTime}</span>
                </div>

                <div className="msg-context" style={{ float: "left", backgroundColor: "#a6c6f7", borderRadius: 5, padding: 8, marginTop: 15, marginBottom: 10 }}>
                    <div className="arrow"></div>
                    <p>
                        <span style={{ fontSize: 14 }}>{context}</span>
                    </p>

                </div>

            </div>

        </>

    )

}

export default ChatMessage