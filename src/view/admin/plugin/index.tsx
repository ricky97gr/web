import { Badge, Card, Descriptions, Modal, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { myFetch } from "../../../utils/fetch";
import MyQuery from "../../../utils/query";
import { MillTime2Date } from "../../../utils/time";
import { bold } from "@uiw/react-md-editor";

const PluginView = () => {
  const getPluginStatus = (status) => {
    switch (status) {
      case 1:
        return (
          <Space>
            <Badge
              status="success"
              text={<span style={{ color: "rgb(52, 170, 68)" }}>运行中</span>}
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
  };
  const colums = [
    {
      title: "名称",
      dataIndex: "name",
      key: "name",

      render: (_, record) => {
        const showPluginInfo = () => {
          Modal.info({
            // title: (
            //   <>
            //     <p>{record.nickName}详细信息</p>
            //   </>
            // ),
            content: (
              <>
                <Descriptions
                  size="small"
                  title={`插件信息`}
                  bordered
                  items={[
                    {
                      key: "1",
                      label: "名称",
                      children: `${record.name}`,
                    },
                    {
                      key: "2",
                      label: "版本",
                      children: record.version,
                    },
                    {
                      key: "4",
                      label: "作者",
                      children: `${record.author}`,
                    },
                    {
                      key: "3",
                      label: "描述",
                      children: `${record.description}`,
                    },

                    {
                      key: "5",
                      label: "状态",
                      children: getPluginStatus(record.status),
                    },
                  ]}
                ></Descriptions>
              </>
            ),
            width: "800px",
            centered: true,
            okText: "确定",
          });
        };
        return (
          <a style={{ color: "#1665d8" }} onClick={showPluginInfo}>
            {record.name}
          </a>
        );
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
        return getPluginStatus(record.status);
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
      <Table
        columns={colums}
        dataSource={dataResource}
        size="small"
        bordered
      ></Table>
    </Card>
  );
};

export default PluginView;
