import {
  Button,
  Card,
  Form,
  Input,
  Radio,
  Select,
  Switch,
  Table,
  Tag,
  message,
} from "antd";
import React, { Component, useEffect, useState } from "react";
import { myFetch } from "../../../utils/fetch";
import "./../style/table-layout.css";

import MyQuery from "../../../utils/query";
import CustomDrawer from "../../../component/base/my-drawer";
import { MillTime2Date } from "../../../utils/time";

const AdminUserView = () => {
  const colums = [
    {
      title: "姓名",
      dataIndex: "nickName",
      key: "nickName",
    },
    {
      title: "角色",
      dataIndex: "role",
      key: "role",
      render: (_, record) => {
        switch (record.role) {
          case 1:
            return <span>普通用户</span>;
          case 2:
            return <span>普通管理员</span>;
          case 3:
            return <span style={{ color: "green" }}>超级管理员</span>;
        }
      },
    },
    {
      title: "积分",
      dataIndex: "score",
      key: "score",
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
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        switch (record.status) {
          case 1:
            return <Tag color="green">正常</Tag>;
          case 2:
            return <Tag color="red">封禁</Tag>;
        }
      },
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        const banUser = () => {
          let body = {
            userID: record.userID,
            isShow: record.status == 1 ? false : true,
          };
          myFetch({
            url: "/admin/user",
            options: { method: "PUT", body: body },
          }).then((data) => {});
        };
        const deleteUser = () => {
          let body = {
            userID: record.userID,
          };
          myFetch({
            url: "/admin/user",
            options: { method: "DELETE", body: body },
          }).then((data) => {});
        };
        return (
          <>
            {record.role !== 3 ? (
              <a style={{ marginRight: 8, color: "#1677ff" }} onClick={banUser}>
                {record.status === 2 ? <>解封</> : <>封禁</>}
              </a>
            ) : (
              <></>
            )}
            {record.role !== 3 ? (
              <a
                style={{ marginRight: 8, color: "#1677ff" }}
                onClick={deleteUser}
              >
                删除
              </a>
            ) : (
              <></>
            )}
          </>
        );
      },
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
    nickName: string;
    sex: number;
    role: number;
    phone: string;
    email: string;
    password: string;
  };
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
      getAllUser();
    });
  };

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Card>
        <div className="table-context-body">
          <div className="table-add-button">
            <Button size="large" onClick={open}>
              新增用户
            </Button>
          </div>
          <div className="table-body">
            <Table
              columns={colums}
              dataSource={dataResource}
              size="small"
            ></Table>
          </div>
          <CustomDrawer title="新增用户" isOpen={isshow} UpdateValue={open}>
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
                rules={[{ required: true, message: "角色是必填项" }]}
              >
                <Select
                  style={{ width: 120 }}
                  options={[
                    { value: 1, label: "普通用户" },
                    { value: 2, label: "普通管理员" },
                    { value: 3, label: "超级管理员" },
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
      </Card>
    </>
  );
};

export default AdminUserView;
