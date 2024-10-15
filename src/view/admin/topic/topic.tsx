import { Button, Card, Form, Input, Space, Switch, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import "./../style/table-layout.css";

import CustomDrawer from "../../../component/base/my-drawer";
import { myFetch } from "../../../utils/fetch";
import MyQuery from "../../../utils/query";
import CustomModal from "../../../component/base/my-modal";
import { MillTime2Date } from "../../../utils/time";

const AdminTopicView = () => {
  const colums = [
    {
      title: "话题名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "加入时间",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "添加者",
      dataIndex: "creator",
      key: "creator",
    },
    {
      title: "评论使用数量",
      dataIndex: "usedCount",
      key: "usedCount",
    },
    {
      title: "状态",
      dataIndex: "isShow",
      key: "isShow",
      render: (_, { uuid, isShow }) => {
        const onchange = (checked) => {
          let body = {
            uuid: uuid,
            isShow: checked,
          };
          myFetch({
            url: "/admin/topic",
            options: { body: body, method: "PUT" },
          });

          getAllTopic();
          if (checked) {
            message.success("话题启用成功");
            return;
          }
          message.success("话题已关闭");
        };
        return (
          <>
            <Switch defaultChecked={isShow} onChange={onchange}></Switch>
          </>
        );
      },
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => {
        const getInfo = () => {
          console.log(record);
        };

        const del = () => {
          console.log("del");
          console.log("del");
          let body = {
            uuid: record.uuid,
            name: record.name,
          };
          myFetch({
            url: "/admin/topic",
            options: { body: body, method: "DELETE" },
          }).then((data) => {
            if (data.body.code !== 200) {
              message.error("删除话题失败");
              return;
            }
            message.success("话题删除成功");
            getAllTopic();
          });
        };

        const print = () => {
          console.log(111);
        };
        return (
          <>
            <Space size="middle">
              <a onClick={getInfo}>详情</a>
              <a onClick={del}>删除</a>
            </Space>
            <CustomModal
              title=""
              sendFetch={print}
              open={isOpenModal}
              updateParent={setIsModalOpen}
            >
              <span>确认要删除话题 "{record.name}" 吗？</span>
            </CustomModal>
          </>
        );
      },
    },
  ];

  type NewTopic = {
    name: string;
    isShow: boolean;
  };

  const [isshow, setShow] = useState<boolean>(false);
  const [isOpenModal, setIsModalOpen] = useState<boolean>(false);
  const open = () => {
    setShow(true);
  };
  const close = () => {
    setShow(false);
  };

  const [dataResource, setDataResource] = useState();
  const addTopic = (values: any) => {
    console.log(values);
    myFetch({
      url: "/admin/topic",
      options: { body: values, method: "POST" },
    }).then((data) => {
      if (data.body.code !== 200) {
        message.error("新建话题失败");
        return;
      }
      message.success("成功新建话题");
      close();
      getAllTopic();
    });
  };

  const getAllTopic = () => {
    let param = MyQuery({});
    myFetch({
      url: "/admin/topic",
      options: { method: "GET" },
      params: param,
    }).then((data) => {
      console.log(data.body.result);
      if (data.body.result === null) {
        return;
      }
      for (let i = 0; i < data.body.result.length; i++) {
        data.body.result[i].createTime = MillTime2Date(
          data.body.result[i].createTime
        );
      }
      setDataResource(data.body.result);
    });
  };

  useEffect(() => {
    getAllTopic();
  }, []);
  return (
    <>
      <Card>
        <div className="table-context-body">
          <div className="table-add-button">
            <Button size="small" onClick={open}>
              新增
            </Button>
          </div>
          <div className="table-body">
            <Table
              columns={colums}
              dataSource={dataResource}
              size="small"
              bordered={true}
            ></Table>
          </div>
        </div>
        <CustomDrawer title="新增话题" isOpen={isshow} UpdateValue={open}>
          <Form onFinish={addTopic}>
            <Form.Item<NewTopic>
              label="名称"
              name="name"
              rules={[{ required: true, message: "请输入话题名称" }]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item<NewTopic>
              label="启用"
              name="isShow"
              valuePropName="checked"
            >
              <Switch defaultChecked></Switch>
            </Form.Item>
            <div style={{ marginTop: "120px" }}>
              <Button htmlType="submit" style={{ float: "left" }} size="middle">
                确定
              </Button>
              <Button onClick={close} style={{ float: "right" }} size="middle">
                取消
              </Button>
            </div>
          </Form>
        </CustomDrawer>
      </Card>
    </>
  );
};

export default AdminTopicView;
