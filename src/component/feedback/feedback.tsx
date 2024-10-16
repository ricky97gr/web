import { useState } from "react";
import {
  Form,
  Input,
  Button,
  Radio,
  Rate,
  message,
  Modal,
  FloatButton,
} from "antd";
import React from "react";
import { FileTextOutlined } from "@ant-design/icons";

const FeedbackModal = () => {
  const [visible, setVisible] = useState(false); // 控制模态框显示与隐藏
  const [form] = Form.useForm();
  const [feedbackType, setFeedbackType] = useState("suggestion");

  // 打开模态框
  const showModal = () => {
    setVisible(true);
  };

  // 关闭模态框
  const handleCancel = () => {
    setVisible(false);
    form.resetFields(); // 重置表单
  };

  // 表单提交后的处理逻辑
  const onFinish = (values) => {
    console.log("用户反馈内容:", values);
    message.success("感谢您的反馈！");
    form.resetFields(); // 重置表单
    setVisible(false); // 关闭模态框
  };

  return (
    <>
      <FloatButton
        shape="circle"
        icon={<FileTextOutlined />}
        onClick={showModal}
      ></FloatButton>
      <div>
        {/* 反馈模态框 */}
        <Modal
          title="用户反馈"
          open={visible}
          onCancel={handleCancel}
          footer={null} // 使用表单的按钮，不单独定义
        >
          <Form form={form} layout="vertical" onFinish={onFinish}>
            {/* 反馈类型 */}
            <Form.Item
              label="反馈类型"
              name="feedbackType"
              initialValue="suggestion"
            >
              <Radio.Group onChange={(e) => setFeedbackType(e.target.value)}>
                <Radio.Button value="bug">问题报告</Radio.Button>
                <Radio.Button value="suggestion">建议</Radio.Button>
                <Radio.Button value="other">其他</Radio.Button>
              </Radio.Group>
            </Form.Item>

            {feedbackType === "suggestion" && (
              <Form.Item label="请为我们的服务评分" name="rating">
                <Rate />
              </Form.Item>
            )}

            {/* 反馈内容 */}
            <Form.Item
              label="反馈内容"
              name="content"
              rules={[{ required: true, message: "请填写您的反馈内容" }]}
            >
              <Input.TextArea rows={4} placeholder="请详细描述您的问题或建议" />
            </Form.Item>

            {/* 联系方式 */}
            <Form.Item label="联系方式（可选）" name="contact">
              <Input placeholder="请输入您的电子邮件或电话" />
            </Form.Item>

            {/* 提交按钮 */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                提交反馈
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </>
  );
};

export default FeedbackModal;
