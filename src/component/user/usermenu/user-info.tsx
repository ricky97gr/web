import React, { Component } from "react";
import { Button, Form, Input, Radio, Upload } from "antd"
import { PlusOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const UserInfoForm =
    <div className="" style={{ marginTop: 20, marginLeft: 5 }}>
        <Form layout="horizontal" labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }} size="large">
            <Form.Item label="头像">
                <Upload action="/upload.do" listType="picture-card">
                    <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                </Upload>
            </Form.Item>
            <Form.Item label="昵称">
                <Input placeholder="nichen"></Input>

            </Form.Item>
            <Form.Item label="性别">
                <Radio value="man">男生</Radio>
                <Radio value="wonman">女生</Radio>
            </Form.Item>
            <Form.Item label="邮件通知">
                <Radio value="yes">是</Radio>
                <Radio value="no">否</Radio>
            </Form.Item>
            <Form.Item label="编辑器">
                <Radio value="fu">富文本</Radio>
                <Radio value="mk">MarkDown</Radio>
                <Radio value="vim">VIM</Radio>
            </Form.Item>
            <Form.Item label="邮箱"><Input placeholder="example@163.com"></Input></Form.Item>
            <Form.Item label="简介">
                <TextArea placeholder="介绍一下自己吧"></TextArea>
            </Form.Item>
            <Button size="large" type="primary" style={{ float: "right", marginTop: "50px", marginRight: "50px" }}>保存</Button>
        </Form>
    </div>

export default UserInfoForm;