import React, { useState } from "react";
import {
  Table,
  Button,
  Space,
  Switch,
  Select,
  Modal,
  message,
  Card,
  Row,
  Col,
} from "antd";
import moment from "moment";

const BackupConfigPage = () => {
  const [backups, setBackups] = useState([
    {
      key: "1",
      name: "homeOnline_backup_20240913101744.tar.gz",
      date: "2024-09-13",
      size: "1.2GB",
      method: "自动",
    },
  ]); // 初始化已有的备份
  const [autoBackup, setAutoBackup] = useState(true); // 是否开启自动备份
  const [schedule, setSchedule] = useState({
    period: "每月",
    day: "1日",
    time: moment("02:30", "HH:mm"),
  }); // 自动备份计划
  const [visible, setVisible] = useState(false); // 控制手动备份模态框

  // 手动备份
  const handleManualBackup = () => {
    if (backups.length >= 5) {
      backups.shift(); // 如果已有5份备份，删除最早的备份
    }
    const newBackup = {
      key: (backups.length + 1).toString(),
      name: `homeOnline_backup_${moment().format("YYYYMMDDHHmmss")}.tar.gz`,
      date: moment().format("YYYY-MM-DD"),
      size: "1.3GB", // 假设备份大小
      method: "手动", // 新增字段，表示备份方式
    };
    setBackups([...backups, newBackup]);
    message.success("手动备份成功！");
    setVisible(false); // 关闭模态框
  };

  // 删除备份
  const handleDeleteBackup = (key) => {
    setBackups(backups.filter((item) => item.key !== key));
    message.success("备份文件已删除");
  };

  // 下载备份
  const handleDownloadBackup = (name) => {
    message.info(`开始下载: ${name}`);
  };

  // 表格列定义
  const columns = [
    {
      title: "备份文件名",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "日期",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "大小",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "备份方式",
      dataIndex: "method",
      key: "method",
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space>
          <a
            style={{ color: "#1677ff" }}
            onClick={() => handleDeleteBackup(record.key)}
          >
            下载
          </a>
          <a
            style={{ color: "red" }}
            onClick={() => handleDeleteBackup(record.key)}
          >
            删除
          </a>
          <a
            style={{ color: "#1677ff" }}
            onClick={() => handleDeleteBackup(record.key)}
          >
            恢复
          </a>
        </Space>
      ),
    },
  ];

  return (
    <Card>
      <div className="table-context-body">
        <div className="table-body">
          {/* 使用 Row 和 Col 使自动备份和按钮在同一行 */}
          <Row
            justify="space-between"
            align="middle"
            style={{ marginBottom: 16 }}
          >
            <Col>
              <span>自动备份：</span>
              <Switch
                checked={autoBackup}
                onChange={(checked) => setAutoBackup(checked)}
              />
              {autoBackup && (
                <Space style={{ marginLeft: 16 }}>
                  <Select
                    value={schedule.period}
                    onChange={(value) =>
                      setSchedule({ ...schedule, period: value })
                    }
                  >
                    <Select.Option value="每月">每月一次</Select.Option>
                    <Select.Option value="每周">每周一次</Select.Option>
                    <Select.Option value="每日">每日一次</Select.Option>
                  </Select>
                  <Select
                    value={schedule.day}
                    onChange={(value) =>
                      setSchedule({ ...schedule, day: value })
                    }
                  >
                    <Select.Option value="1日">1日</Select.Option>
                    <Select.Option value="周一">周一</Select.Option>
                    <Select.Option value="周二">周二</Select.Option>
                    {/* 其他日期或天数选项 */}
                  </Select>
                  <Button type="primary">保存</Button>
                </Space>
              )}
            </Col>

            <Col>
              <Space>
                <Button type="primary" onClick={() => setVisible(true)}>
                  开始备份
                </Button>
                <Button>上传备份文件</Button>
              </Space>
            </Col>
          </Row>

          {/* 备份文件列表 */}
          <Table
            dataSource={backups}
            columns={columns}
            pagination={false}
            rowKey="key"
            size="small"
            bordered
          />

          {/* 手动备份模态框 */}
          <Modal
            title="手动备份"
            visible={visible}
            onOk={handleManualBackup}
            onCancel={() => setVisible(false)}
          >
            <p>是否确定立即开始手动备份？</p>
          </Modal>
        </div>
      </div>
    </Card>
  );
};

export default BackupConfigPage;
