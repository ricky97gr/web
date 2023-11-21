import { Button, Card, Form, Input, Select, message } from "antd";
import React, { useState } from "react";
import { myFetch } from "../../utils/fetch";


const { TextArea } = Input;


const CustomTextArea = ({ getAllComment }) => {
    const [topicoptions, settags] = useState<any>()
    type FieldType = {
        context: string
        topic: string
    }

    const gettopic = () => {
        myFetch({ url: "/normalUser/topic", options: { method: "GET" } }).then((data) => {
            if (data.body.code !== 200) {
                return
            }
            let tags = []
            for (let i = 0; i < (data.body.result).length; i++) {
                tags.push({ "value": data.body.result[i].name })
            }
            settags(tags)

        })
    }
    const addComment = (value: any) => {

        myFetch({ url: "/normalUser/comment", options: { body: value, method: "POST" } }).then((data) => {
            if (data.body.code != 200) {
                message.error("发表评论失败")
                return
            }
            message.success("发表评论成功")
            getAllComment()

        })
    }
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

    }
    return (
        <Card style={{ width: 850, }}>
            <div>
                <Form onFinish={addComment}>
                    <Form.Item rules={[{ required: true, message: "请输入评论" }]} name="context" >
                        <TextArea showCount maxLength={120} style={{ height: 160, marginBottom: 10, width: 800, }}
                            onChange={onChange}
                            placeholder="分享你的新鲜事吧"
                        />
                    </Form.Item>
                    <Form.Item<FieldType> label="话题" name="topic" rules={[{ required: true, message: "请选择话题" }]} style={{ width: "25%", float: "left" }}>
                        <Select options={topicoptions} placeholder="请选择话题" onClick={gettopic}></Select>
                    </Form.Item>

                    <Button size="large" type="primary" style={{ float: "right", marginRight: 5, marginBottom: 5 }} htmlType="submit">发表动态</Button>

                </Form>

            </div>



        </Card >
    )
}




export default CustomTextArea;