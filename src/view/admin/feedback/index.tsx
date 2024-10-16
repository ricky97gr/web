import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Modal,
  Select,
  message,
  Space,
  Popconfirm,
  Card,
  Descriptions,
} from "antd";
import moment from "moment"; // 用于格式化日期时间

// 示例反馈数据，增加了 username 和 feedbackTime
const feedbackData = [
  {
    key: "1",
    username: "user1",
    type: "建议",
    content: "希望增加更多的功能选项。",
    rating: 5,
    contact: "user1@example.com",
    feedbackTime: "2024-10-15T10:20:00",
    status: "待处理",
  },
  {
    key: "2",
    username: "user2",
    type: "问题报告",
    content: "某些页面加载速度较慢。",
    rating: 3,
    contact: "user2@example.com",
    feedbackTime: "2024-10-14T09:15:00",
    status: "已处理",
  },
  {
    key: "3",
    username: "user3",
    type: "其他",
    content: "其他反馈内容。",
    rating: 4,
    contact: "user3@example.com",
    feedbackTime: "2024-10-13T11:45:00",
    status: "待处理",
  },
];

const AdminFeedbackPage = () => {
  const [dataSource, setDataSource] = useState(feedbackData); // 反馈数据
  const [visible, setVisible] = useState(false); // 控制模态框
  const [currentFeedback, setCurrentFeedback] = useState(null); // 当前查看的反馈

  // 打开模态框，查看反馈详情
  const showModal = (record) => {
    setCurrentFeedback(record);
    setVisible(true);
  };

  // 关闭模态框
  const handleCancel = () => {
    setVisible(false);
  };

  // 修改反馈状态
  const handleStatusChange = (value, record) => {
    const updatedData = dataSource.map((item) =>
      item.key === record.key ? { ...item, status: value } : item
    );
    setDataSource(updatedData);
    message.success(`已将反馈 [${record.key}] 状态更新为：${value}`);
  };

  // 删除反馈
  const handleDelete = (key) => {
    const updatedData = dataSource.filter((item) => item.key !== key);
    setDataSource(updatedData);
    message.success("反馈已成功删除");
  };

  // 表格列定义，新增 "用户名" 和 "反馈时间" 列
  const columns = [
    {
      title: "用户名",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "反馈类型",
      dataIndex: "type",
      key: "type",
      render: (text) => (
        <Tag color={text === "问题报告" ? "volcano" : "geekblue"}>{text}</Tag>
      ),
    },
    {
      title: "反馈内容",
      dataIndex: "content",
      key: "content",
      ellipsis: true,
    },
    {
      title: "评分",
      dataIndex: "rating",
      key: "rating",
      render: (rating) => `${rating} / 5`,
    },
    {
      title: "联系方式",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "反馈时间",
      dataIndex: "feedbackTime",
      key: "feedbackTime",
      render: (time) => moment(time).format("YYYY-MM-DD HH:mm"), // 格式化显示时间
    },
    {
      title: "状态",
      key: "status",
      render: (text, record) => (
        <Select
          defaultValue={record.status}
          style={{ width: 120 }}
          onChange={(value) => handleStatusChange(value, record)}
        >
          <Select.Option value="待处理">待处理</Select.Option>
          <Select.Option value="已处理">已处理</Select.Option>
        </Select>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space>
          {/* 查看详情按钮 */}
          <Button type="link" onClick={() => showModal(record)}>
            查看详情
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <>
        <Card>
          <div className="table-context-body">
            <div className="table-body">
              <Table
                dataSource={dataSource}
                columns={columns}
                rowKey="key"
                pagination={{ pageSize: 5 }}
                size="small"
                bordered
              />
            </div>
          </div>
        </Card>
      </>
      {currentFeedback && (
        <Modal
          open={visible}
          onCancel={handleCancel}
          footer={[
            <Button key="close" onClick={handleCancel}>
              关闭
            </Button>,
          ]}
        >
          <Descriptions bordered column={1} title="反馈详情">
            <Descriptions.Item label="用户名">
              {currentFeedback.username}
            </Descriptions.Item>
            <Descriptions.Item label="反馈类型">
              {currentFeedback.type}
            </Descriptions.Item>
            <Descriptions.Item label="反馈内容">
              {currentFeedback.content}
            </Descriptions.Item>
            <Descriptions.Item label="评分">
              {currentFeedback.rating} / 5
            </Descriptions.Item>
            <Descriptions.Item label="联系方式">
              {currentFeedback.contact}
            </Descriptions.Item>
            <Descriptions.Item label="反馈时间">
              {moment(currentFeedback.feedbackTime).format("YYYY-MM-DD HH:mm")}
            </Descriptions.Item>
            <Descriptions.Item label="状态">
              {currentFeedback.status}
            </Descriptions.Item>
          </Descriptions>
        </Modal>
      )}
    </div>
  );
};

export default AdminFeedbackPage;
