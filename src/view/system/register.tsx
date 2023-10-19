import React from "react";
import { Button, Form, Input } from "antd";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  phone?: string;
  email?: string;
};

const Register = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="邮箱"
      name="email"
      rules={[{ required: true, message: "请输入邮箱" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="用户名"
      name="username"
      rules={[{ required: true, message: "请输入用户名" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="密码"
      name="password"
      rules={[{ required: true, message: "请输入密码" }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item<FieldType>
      label="手机号"
      name="phone"
      rules={[{ required: false, message: "请输入手机号" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        注册
      </Button>
    </Form.Item>
  </Form>
);

export default Register;
