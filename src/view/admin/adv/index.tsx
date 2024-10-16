import React, { useState } from "react";
import {
  Table,
  Card,
  Space,
  Drawer,
  Form,
  Input,
  Radio,
  Button,
  message,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import CustomDrawer from "../../../component/base/my-drawer";

const AdvertisingManagement = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      manufacturer: "厂家A",
      link: "https://example.com/a",
      image: "image_url_a",
      onlineTime: "2024-09-01",
      validDuration: "30天",
      remainingDuration: "15天",
      clickCount: 120,
      status: "上线",
    },
    {
      key: "2",
      manufacturer: "厂家B",
      link: "https://example.com/b",
      image: "image_url_b",
      onlineTime: "2024-08-15",
      validDuration: "15天",
      remainingDuration: "过期",
      clickCount: 80,
      status: "过期",
    },
  ]);
  const [isshow, setShow] = useState(false);

  const openDrawer = () => {
    setShow(true);
  };

  const closeDrawer = () => {
    setShow(false);
  };

  const addAd = (values) => {
    // 处理新增广告逻辑
    message.success("新增广告成功！");
    closeDrawer();
  };

  const columns = [
    {
      title: "厂家名称",
      dataIndex: "manufacturer",
      key: "manufacturer",
    },
    {
      title: "链接",
      dataIndex: "link",
      key: "link",
    },
    {
      title: "图片",
      dataIndex: "image",
      key: "image",
    },
    {
      title: "上线时间",
      dataIndex: "onlineTime",
      key: "onlineTime",
    },
    {
      title: "有效时长",
      dataIndex: "validDuration",
      key: "validDuration",
    },
    {
      title: "剩余时长",
      dataIndex: "remainingDuration",
      key: "remainingDuration",
    },
    {
      title: "点击人数",
      dataIndex: "clickCount",
      key: "clickCount",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space size="small">
          <a style={{ color: "red" }} onClick={() => message.info("下线操作")}>
            下线
          </a>
          <a style={{ color: "red" }} onClick={() => message.info("删除操作")}>
            删除
          </a>
          <a style={{ color: "blue" }} onClick={() => message.info("更新操作")}>
            更新
          </a>
          <a style={{ color: "blue" }} onClick={() => message.info("上线操作")}>
            上线
          </a>
        </Space>
      ),
    },
  ];

  return (
    <Card>
      <div style={{ textAlign: "right", marginBottom: 16 }}>
        <Button onClick={openDrawer} size="small">
          新增广告
        </Button>
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey="key"
        pagination={{ pageSize: 5 }}
        size="small"
        bordered
      />
      <CustomDrawer title="新增广告" isOpen={isshow} UpdateValue={openDrawer}>
        <Form onFinish={addAd}>
          <Form.Item
            label="厂家名称"
            name="manufacturer"
            rules={[{ required: true, message: "请输入厂家名称" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="链接"
            name="link"
            rules={[{ required: true, message: "请输入广告链接" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="广告位展示"
            name="adPosition"
            rules={[{ required: true, message: "请选择广告位展示" }]}
          >
            <Radio.Group>
              <Radio value="位置1">广告位 1</Radio>
              <Radio value="位置2">广告位 2</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="有效时长"
            name="duration"
            rules={[{ required: true, message: "请输入有效时长" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="上传图片"
            name="image"
            rules={[{ required: true, message: "请上传广告图片" }]}
          >
            <Upload>
              <Button icon={<UploadOutlined />}>点击上传</Button>
            </Upload>
          </Form.Item>
          <div style={{ marginTop: "20px" }}>
            <Button htmlType="submit" style={{ float: "left" }} size="middle">
              确定
            </Button>
            <Button
              onClick={closeDrawer}
              style={{ float: "right" }}
              size="middle"
            >
              取消
            </Button>
          </div>
        </Form>
      </CustomDrawer>
    </Card>
  );
};

export default AdvertisingManagement;
