import { Button, Table } from "antd";
import React, { Component } from "react";
import "./../style/table-layout.css";
import MyQuery from "../../../utils/query";
import { myFetch } from "../../../utils/fetch";
const colums = [
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "模块",
    dataIndex: "module",
    key: "module",
  },
  {
    title: "日志",
    dataIndex: "msg",
    key: "msg",
  },
];

const dataResource = [
  {
    id: 1,
    time: "2023-10-22 11:06:11",
    module: "系统模块",
    msg: "admin用户登录成功",
  },
  {
    id: 2,
    time: "2023-10-22 11:06:11",
    module: "标签模块",
    msg: "admin用户创建标签'go'",
  },
];

const AdminSystemLogView = () => {
  let param = MyQuery({ page: 1, pageSize: 20 });

  const getSysLog = () => {};

  return (
    <>
      <div className="table-context-body">
        <div className="table-body">
          <Table columns={colums} dataSource={dataResource}></Table>
        </div>
      </div>
    </>
  );
};

export default AdminSystemLogView;
