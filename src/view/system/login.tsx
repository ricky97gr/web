import React from 'react';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import './login.css'

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};


type FieldType = {
  username?: string;
  password?: string;
};

const Login = () => (
  <div className='login-container'>
    <div className='login-container-left'></div>
    <div className='login-container-right'>
      <h1 style={{marginTop:"120px"}}>Login</h1>
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ width: 350, marginTop:80, }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label="用户名"
        name="username"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input prefix={<UserOutlined className='site-form-item-icon'/>} placeholder='Username' />
      </Form.Item>

      <Form.Item<FieldType>
        label="密码"
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password prefix={<LockOutlined/>} placeholder='Passwd'/>
      </Form.Item>


      <Form.Item style={{marginLeft:"120px", width:"100%"}}>
        <Button type="primary" htmlType="submit"style={{width:"100%"}}>
          登录
        </Button>
      </Form.Item>
    </Form>
    </div>

   
  </div>


);

export default Login;