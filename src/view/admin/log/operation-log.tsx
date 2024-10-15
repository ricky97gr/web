import { Button, Table } from "antd";
import React, { Component, useEffect, useState } from "react";
import MyQuery from "../../../utils/query";
import { myFetch } from "../../../utils/fetch";
import { MillTime2Date } from "../../../utils/time";

const colums = [
  {
    title: "时间",
    dataIndex: "createTime",
    key: "createTime",
  },
  {
    title: "操作者",
    dataIndex: "userID",
    key: "user",
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

const AdminOperationLogView = () => {
  const [dataResource, setDataResource] = useState();
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    getOperationLog(1, 20);
  }, []);

  const getOperationLog = (page, pageSize) => {
    let param = MyQuery({ page: page, pageSize: pageSize });
    myFetch({ url: "/admin/operationLog", options: {}, params: param }).then(
      (data) => {
        for (let i = 0; i < data.body.result.length; i++) {
          data.body.result[i].createTime = MillTime2Date(
            data.body.result[i].createTime
          );
        }
        setDataResource(data.body.result);
        setTotalCount(data.body.total);
      }
    );
  };
  const handleTableChange = (page, pageSize) => {
    getOperationLog(page, pageSize);
  };

  return (
    <>
      <div className="table-context-body">
        <div style={{ marginTop: "0px" }}>
          <Table
            columns={colums}
            dataSource={dataResource}
            size="small"
            bordered={true}
            pagination={{
              total: totalCount,
              showSizeChanger: true,
              showTotal: (total) => `总计 ${total} 条`,
              onChange: handleTableChange,
              defaultPageSize: 20,
              locale: { items_per_page: "条/页", page: "页" },
            }}
          ></Table>
        </div>
      </div>
    </>
  );
};

export default AdminOperationLogView;
