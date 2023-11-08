import React, { useState } from "react";
import { Input, message } from "antd";
import { Card, Button } from 'antd';
import { myFetch } from "../../utils/fetch";


const { TextArea } = Input;
const CustomTextArea = () => {
    const [value, setValue] = useState('')
    const addComment = () => {
        let body = {
            context: value,
            // topic:""
        }
        myFetch({ url: "/normalUser/comment", options: { body: body, method: "POST" } }).then((data) => {
            if (data.body.code != 200) {
                message.error("发表评论失败")
                return
            }
            message.success("发表评论成功")

        })
    }
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }
    return (
        <Card style={{ width: 850, height: 260 }}>
            <div>
                <TextArea showCount maxLength={120} style={{ height: 160, marginBottom: 24, width: 800, }}
                    onChange={onChange}
                    placeholder="分享你的新鲜事吧"
                />
            </div>

            <div>
                <Button size="large" type="primary" style={{ float: "right", marginRight: 5, marginBottom: 10 }} onClick={addComment}>发表动态</Button>
            </div>


        </Card>
    )
}




export default CustomTextArea;