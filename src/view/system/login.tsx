import React from 'react';
import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './login.css'
import { myFetch } from '../../utils/fetch';

const onFinish = (values: any) => {

  myFetch({ url: "/login", options: { body: values, method: "POST" } }).then((data) => {
    if (data.body.code !== 200) {
      message.error("😒 " + data.body.msg + " 😒")
      return
    }
    message.success("😊 登录成功 😊")

  })
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};


type FieldType = {
  phone?: string;
  password?: string;
};

const Login = () => (
  <div className='login-container'>
    <div className='login-container-left'></div>
    <div className='login-container-right'>
      <h3 style={{ marginTop: "120px" }}>新用户</h3>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ width: 350, marginTop: 80, }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="手机号"
          name="phone"
          rules={[{ required: true, message: '请输入手机号' }]}
        >
          <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='PhoneNumber' />
        </Form.Item>

        <Form.Item<FieldType>
          label="密码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder='Passwd' />
        </Form.Item>


        <Form.Item style={{ marginLeft: "120px", width: "100%" }}>
          <Button type="primary" htmlType="submit" style={{ width: "100%" }} >
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>


  </div>


);

export default Login;