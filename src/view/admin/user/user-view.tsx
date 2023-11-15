import { Button, Form, Input, Radio, Select, Switch, Table, message } from "antd";
import React, { Component, useEffect, useState } from "react";
import { myFetch } from "../../../utils/fetch";
import "./../style/table-layout.css";

import MyQuery from "../../../utils/query";
import CustomDrawer from "../../../component/base/my-drawer";
import { getRoles } from "@testing-library/react";
import { MillTime2Date } from "../../../utils/time";

const AdminUserView = () => {
  const colums = [
    {
      title: "姓名",
      dataIndex: "nickName",
      key: "nickName",
    },
    // {
    //   title: "状态",
    //   dataIndex: "status",
    //   key: "status",
    // },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "邮箱",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "加入时间",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "上次登陆时间",
      dataIndex: "lastLoginTime",
      key: "lastLoginTime",
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
    },
  ];

  const [dataResource, setDataResource] = useState();

  const getAllUser = () => {
    let param = MyQuery({});
    param["page"] = 1;
    param["pageSize"] = 10;
    myFetch({ url: "/admin/user", options: {}, params: param }).then((data) => {
      if (data.body.code !== 200) {
        return;
      }

      for (let i = 0; i < data.body.result.length; i++) {
        const getRoles = (role) => {
          switch (role) {
            case 1:
              return <span>普通用户</span>
            case 2:
              return <span>普通管理员</span>
            case 3:
              return <span style={{ color: "green" }}>超级管理员</span>
          }

        }

        data.body.result[i].role = getRoles(data.body.result[i].role)
        data.body.result[i].createTime = MillTime2Date(
          data.body.result[i].createTime
        );
        data.body.result[i].lastLoginTime = MillTime2Date(
          data.body.result[i].lastLoginTime
        );
      }
      setDataResource(data.body.result);
      return;
    });
  };
  useEffect(() => {
    getAllUser();
  }, []);

  type NewUser = {
    nickName: string
    sex: number
    role: number
    phone: string
    email: string
    password: string
  }
  const [isshow, setShow] = useState<boolean>(false);

  const open = () => {
    setShow(true);
  };
  const close = () => {
    setShow(false);
  };

  const addUser = (values: any) => {

    console.log(values);

    myFetch({
      url: "/admin/user",
      options: { body: values, method: "POST" },
    }).then((data) => {
      if (data.body.code !== 200) {
        message.error("新建用户失败");
        return;
      }
      message.success("成功用户");
      close();
      getAllUser()
    });
  };

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div className="table-context-body">
        <div className="table-add-button">
          <Button size="large" onClick={open}>新增用户</Button>
        </div>
        <div className="table-body">
          <Table columns={colums} dataSource={dataResource}></Table>
        </div>
        <CustomDrawer title="新增标签" isOpen={isshow} UpdateValue={open}>
          <Form onFinish={addUser}>
            <Form.Item<NewUser>
              label="昵称"
              name="nickName"
              rules={[{ required: true, message: "请输入用户昵称" }]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item<NewUser>
              label="性别"
              name="sex"
              rules={[{ required: true, message: "请选择性别" }]}
            >
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>男性</Radio>
                <Radio value={2}>女性</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item<NewUser>
              label="角色"
              name="role"
            >
              <Select
                defaultValue={1}
                style={{ width: 120 }}
                options={[
                  { value: 1, label: '普通用户' },
                  { value: 2, label: '普通管理员' },
                  { value: 3, label: '超级管理员' },
                ]}
              />
            </Form.Item>
            <Form.Item<NewUser>
              label="手机"
              name="phone"
              rules={[{ required: true, message: "请输入手机号" }]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item<NewUser>
              label="邮箱"
              name="email"
              rules={[{ required: true, message: "请输入邮箱" }]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item<NewUser>
              label="密码"
              name="password"
              rules={[{ required: true, message: "请设置密码" }]}
            >
              <Input></Input>
            </Form.Item>
            <Button htmlType="submit">确定</Button>
            <Button onClick={close}>取消</Button>
          </Form>
        </CustomDrawer>
      </div>
    </>
  );
};

export default AdminUserView;
