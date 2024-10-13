import { Badge, Card, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { myFetch } from "../../../utils/fetch";
import MyQuery from "../../../utils/query";
import { MillTime2Date } from "../../../utils/time";
import { bold } from "@uiw/react-md-editor";

const PluginView = () => {
  const colums = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
      render: (_, record) => {
        return <a style={{ color: "#1665d8" }}>{record.name}</a>;
      },
    },
    {
      title: "版本",
      dataIndex: "version",
      key: "version",
      render: (_, record) => {
        return (
          <>
            <Tag color="#2db7f5">{record.version}</Tag>
          </>
        );
      },
    },
    {
      title: "md5校验",
      dataIndex: "md5sum",
      key: "md5sum",
    },
    {
      title: "描述",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "作者",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "状态",
      dataIndex: "status",
      key: "status",
      render: (_, record) => {
        switch (record.status) {
          case 1:
            return (
              <Space>
                <Badge
                  status="success"
                  text={
                    <span style={{ color: "rgb(52, 170, 68)" }}>运行中</span>
                  }
                ></Badge>
              </Space>
            );
          case 2:
            return (
              <Space>
                <Space>
                  <Badge status="default" text={<span>已停用</span>}></Badge>
                </Space>
              </Space>
            );
          case 3:
            return (
              <Space>
                <Space>
                  <Badge
                    status="processing"
                    text={<span style={{ color: "#249cec" }}>升级中</span>}
                  ></Badge>
                </Space>
              </Space>
            );
          case 4:
            return (
              <Space>
                <Space>
                  <Badge
                    status="processing"
                    text={<span style={{ color: "#249cec" }}>校验中</span>}
                  ></Badge>
                </Space>
              </Space>
            );
        }
      },
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        let body = {
          name: record.name,
          status: record.status,
        };
        const startPlugin = () => {
          body.status = 1;
          myFetch({
            url: "/admin/plugin",
            options: { method: "PUT", body: body },
          }).then((data) => {
            console.log(data.body);
            getAllPlugin();
          });
        };

        const stopPlugin = () => {
          body.status = 2;
          myFetch({
            url: "/admin/plugin",
            options: { method: "PUT", body: body },
          }).then((data) => {
            console.log(data.body);
            getAllPlugin();
          });
        };

        const upgradePlugin = () => {
          body.status = 3;
          myFetch({
            url: "/admin/plugin",
            options: { method: "PUT", body: body },
          }).then((data) => {
            console.log(data.body);
            getAllPlugin();
          });
        };
        const checkPlugin = () => {
          body.status = 4;
          myFetch({
            url: "/admin/plugin",
            options: { method: "PUT", body: body },
          }).then((data) => {
            console.log(data.body);
            getAllPlugin();
          });
        };
        return (
          <>
            <a onClick={checkPlugin}>校验</a>
            <a>检查新版本</a>
            <a onClick={upgradePlugin}>升级</a>
            <a onClick={startPlugin}>启用</a>
            <a onClick={stopPlugin}>停用</a>
            <a>卸载</a>
          </>
        );
      },
    },
  ];

  const [dataResource, setDataResource] = useState();
  const getAllPlugin = () => {
    let param = MyQuery({});
    myFetch({
      url: "/admin/plugin",
      options: { method: "GET" },
      params: param,
    }).then((data) => {
      // for (let i = 0; i < data.body.result.length; i++) {
      //     data.body.result[i].createTime = MillTime2Date(
      //         data.body.result[i].createTime
      //     );
      // }
      setDataResource(data.body.result);
    });
  };

  useEffect(() => {
    getAllPlugin();
  }, []);

  return (
    <Card style={{ marginTop: 20 }}>
      <Table columns={colums} dataSource={dataResource} size="small"></Table>
    </Card>
  );
};

export default PluginView;
