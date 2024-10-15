import { Card, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { myFetch } from "../../../utils/fetch";
import MyQuery from "../../../utils/query";
import { MillTime2Date } from "../../../utils/time";
import "./../style/table-layout.css";

const AdminArticleView = () => {
  const colums = [
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "作者",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "分类",
      dataIndex: "category",
      key: "category",
      render: (_, record) => {
        console.log(record);
        return <Tag color="blue">{record.category}</Tag>;
      },
    },
    {
      title: "标签",
      dataIndex: "tags",
      key: "tags",
      render: (_, record) => {
        console.log(record);
        return <Tag>{record.tags}</Tag>;
      },
    },
    {
      title: "提交时间",
      dataIndex: "createTime",
      key: "createTime",
    },
    {
      title: "状态",
      dataIndex: "isShow",
      key: "isShow",
      render: (_, record) => {
        switch (record.isShow) {
          case 1:
            return (
              // <span style={{ color: "green" }}>已发布</span>
              <Tag color="green">
                <span style={{ fontSize: 14 }}>已发布</span>
              </Tag>
            );
          case 2:
            return (
              <Tag color="yellowgreen">
                <span style={{ fontSize: 14 }}>审核中</span>
              </Tag>
            );
          case 3:
            return (
              <Tag color="red">
                <span style={{ fontSize: 14 }}>封禁中</span>
              </Tag>
            );
          case 5:
            return (
              <Tag color="red">
                <span style={{ fontSize: 14 }}>已退回</span>
              </Tag>
            );
        }
      },
    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      render: (_, record) => {
        const publishArticle = () => {
          let body = {
            articleID: record.articleID,
          };
          myFetch({
            url: "/admin/article/publish",
            options: { method: "PUT", body: body },
          }).then((data) => {
            console.log(data);
          });
        };
        const banArticle = () => {
          let body = {
            articleID: record.articleID,
          };
          myFetch({
            url: "/admin/article/ban",
            options: { method: "PUT", body: body },
          }).then((data) => {
            console.log(data);
          });
        };
        const sendBackArticle = () => {
          let body = {
            articleID: record.articleID,
          };
          myFetch({
            url: "/admin/article/sendback",
            options: { method: "PUT", body: body },
          }).then((data) => {
            console.log(data);
          });
        };

        return (
          <>
            <a onClick={publishArticle}>发布</a>
            <a onClick={banArticle}>封禁</a>
            <a onClick={sendBackArticle}>退回</a>
          </>
        );
      },
    },
  ];

  const [dataResource, setDtataResource] = useState();
  const getallarticle = () => {
    let p = MyQuery({ page: 1, pageSize: 20 });
    // let p = MyQuery({ page: 1, pageSize: 20, cons: [{ field: "isShow", value: 2, operation: QueryOperation.Equal }], sorts: [{ field: "createTime", orderBy: 1 }] })
    myFetch({
      url: "/admin/article",
      options: { method: "GET" },
      params: p,
    }).then((data) => {
      for (let i = 0; i < data.body.result.length; i++) {
        data.body.result[i].createTime = MillTime2Date(
          data.body.result[i].createTime
        );
      }
      setDtataResource(data.body.result);
    });
  };
  useEffect(() => {
    getallarticle();
  }, []);
  return (
    <>
      <Card>
        <div className="table-context-body">
          <div className="table-body">
            <Table
              columns={colums}
              dataSource={dataResource}
              size="small"
              bordered={true}
            ></Table>
          </div>
        </div>
      </Card>
    </>
  );
};

export default AdminArticleView;
