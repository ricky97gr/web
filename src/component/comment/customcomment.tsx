import { Card } from "antd"
import React, { useState } from "react"
import './customcomment.css'
import CommentInput from "./commentinput"

const CustomComment = ({ author, level, ip, createTime, children }) => {
    const [display, setDisplay] = useState<string>("none")
    const show = () => {
        setDisplay("")
    }
    return (
        <Card style={{ width: 850, margin: 8 }}>
            <div className='card-left'>
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="" style={{ cursor: "pointer", width: "100%", height: "100%" }} />
            </div>
            <div className='card-right'>
                <div className='right-top'>
                    <a >
                        <span style={{ margin: 10 }}>{author}</span>
                    </a>

                    <span className='userField' style={{ margin: 5 }}>{level}</span>
                    <span className='userField' style={{ margin: 5 }}>ip属地:{ip}</span>
                    <span className='userField' style={{ margin: 5 }}>{createTime}</span>


                    <span style={{ float: "right" }}>举报</span>
                    <span style={{ float: "right", marginRight: "10px" }}>收藏</span>

                </div>
                <div className='right-center'>{children}</div>
                <div className='right-buttom'>
                    <span style={{ margin: 4 }} onClick={show}>回复</span>
                    <span style={{ margin: 4 }}>👍赞</span>
                    <span style={{ margin: 4 }}>👎踩</span>
                </div>
            </div>
            <CommentInput display={display} updateParent={setDisplay}></CommentInput>

        </Card>
    )
}

export default CustomComment;