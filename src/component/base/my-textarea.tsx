import React from "react";
import { Input } from "antd";
import { Card, Button } from 'antd';
const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(e.target.value)
}

const { TextArea } = Input;
const CustomTextArea = () => (
    <Card style={{ width: 850, height: 260 }}>
        <div>
            <TextArea showCount maxLength={120} style={{ height: 160, marginBottom: 24, width: 800, }}
                onChange={onChange}
                placeholder="分享你的新鲜事吧"
            />
        </div>

        <div>
            <Button size="large" type="primary" style={{ float: "right", marginRight: 5, marginBottom: 10 }}>发表动态</Button>
        </div>


    </Card>

)


export default CustomTextArea;