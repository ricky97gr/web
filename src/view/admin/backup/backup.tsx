import React, { useState } from "react";
import { Table, Button, Modal, Select, TimePicker, message, Space, Switch } from "antd";
import moment from "moment";

const BackupConfigPage = () => {
  const [backups, setBackups] = useState([
    { key: '1', name: 'homeOnline_backup_20240913101744.tar.gz', date: '2024-09-13', size: '1.2GB' },
  ]); // 初始化已有的备份
  const [autoBackup, setAutoBackup] = useState(true); // 是否开启自动备份
  const [schedule, setSchedule] = useState({ period: '每月', day: '1日', time: moment("02:30", "HH:mm") }); // 自动备份计划
  const [visible, setVisible] = useState(false); // 控制手动备份模态框

  // 手动备份
  const handleManualBackup = () => {
    if (backups.length >= 5) {
      backups.shift(); // 如果已有5份备份，删除最早的备份
    }
    const newBackup = {
      key: (backups.length + 1).toString(),
      name: `homeOnline_backup_${moment().format('YYYYMMDDHHmmss')}.tar.gz`,
      date: moment().format('YYYY-MM-DD'),
      size: '1.3GB', // 假设备份大小
    };
    setBackups([...backups, newBackup]);
    message.success('手动备份成功！');
  };

  // 删除备份
  const handleDeleteBackup = (key) => {
    setBackups(backups.filter((item) => item.key !== key));
    message.success('备份文件已删除');
  };

  // 下载备份
  const handleDownloadBackup = (name) => {
    message.info(`开始下载: ${name}`);
  };

  // 表格列定义
  const columns = [
    {
      title: '备份文件名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '大小',
      dataIndex: 'size',
      key: 'size',
    },
    {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <Space>
          <Button type="link" onClick={() => handleDownloadBackup(record.name)}>下载</Button>
          <Button type="link" danger onClick={() => handleDeleteBackup(record.key)}>删除</Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h2>数据备份配置</h2>

      {/* 手动备份和恢复备份 */}
      <Space style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={() => setVisible(true)}>开始备份</Button>
        <Button>恢复本地备份</Button>
      </Space>

      {/* 自动备份开关和计划设置 */}
      <div style={{ marginBottom: 16 }}>
        <span>自动备份：</span>
        <Switch checked={autoBackup} onChange={(checked) => setAutoBackup(checked)} />
        {autoBackup && (
          <Space style={{ marginLeft: 16 }}>
            <Select value={schedule.period} onChange={(value) => setSchedule({ ...schedule, period: value })}>
              <Select.Option value="每月">每月</Select.Option>
              <Select.Option value="每周">每周</Select.Option>
              <Select.Option value="每日">每日</Select.Option>
            </Select>
            <Select value={schedule.day} onChange={(value) => setSchedule({ ...schedule, day: value })}>
              <Select.Option value="1日">1日</Select.Option>
              <Select.Option value="周一">周一</Select.Option>
              <Select.Option value="周二">周二</Select.Option>
              {/* 其他日期或天数选项 */}
            </Select>
            <TimePicker
            //   value={schedule.time}
              format="HH:mm"
            //   onChange={(time) => setSchedule({ ...schedule, time })}
            />
            <Button type="primary">保存</Button>
          </Space>
        )}
      </div>

      {/* 备份文件列表 */}
      <Table
        dataSource={backups}
        columns={columns}
        pagination={false}
        rowKey="key"
      />

      {/* 最新备份信息 */}
      {backups.length > 0 && (
        <div style={{ marginTop: 16 }}>
          最新备份文件：{backups[backups.length - 1].name} <Button type="link">下载</Button>
        </div>
      )}

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
  );
};

export default BackupConfigPage;
