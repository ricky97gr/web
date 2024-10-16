import {
  LikeOutlined,
  MessageOutlined,
  ShareAltOutlined,
  StarOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import { Affix, Card, FloatButton, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ViewMd from "../../component/article/articleViewer";
import { myFetch } from "../../utils/fetch";
import "./articleView.css";
import { QueryOperation } from "../../utils/constant";
import MyQuery from "../../utils/query";

const OneArticleView = () => {
  type articleInfo = {
    title: string;
    userName: string;
    tags: string[];
    category: string;
    context: string;
  };

  const params = useParams();
  let articleID = params["id"];

  const [article, setArticle] = useState<articleInfo>({
    title: "",
    userName: "",
    tags: [""],
    category: "",
    context: "",
  });
  const getArticleInfo = () => {
    myFetch({
      url: "/normalUser/article/" + articleID,
      options: { method: "GET" },
    }).then((data) => {
      console.log(data.body.result);
      setArticle(data.body.result);
    });
  };
  useEffect(() => {
    getArticleInfo();
  }, []);
  return (
    <>
      <div style={{ maxWidth: 1200, margin: "auto", marginTop: 15 }}>
        <div
          className="article-left"
          style={{ width: 30, float: "left", position: "relative" }}
        >
          <Affix offsetTop={80} onChange={(affixed) => console.log(affixed)}>
            <FloatButton.Group
              shape="circle"
              style={{ position: "absolute", top: 10, right: 10 }}
            >
              <FloatButton icon={<LikeOutlined />}></FloatButton>
              <FloatButton icon={<StarOutlined />}></FloatButton>
              <FloatButton icon={<MessageOutlined />}></FloatButton>
              <FloatButton icon={<ShareAltOutlined />}></FloatButton>
              <FloatButton icon={<WarningOutlined />}></FloatButton>
            </FloatButton.Group>
          </Affix>
        </div>
        <div style={{ maxWidth: 1300, marginLeft: 12 }}>
          <div className="article-right" style={{ width: 260, float: "right" }}>
            <Card style={{ width: "100%", marginTop: 12 }}>作者信息</Card>
            <Card style={{ width: "100%", marginTop: 12 }}>目录</Card>
            <Card style={{ width: "100%", marginTop: 12 }}>相关推荐</Card>
            <Card style={{ width: "100%", marginTop: 12 }}>广告位1</Card>
          </div>
          <div
            className="article-body"
            style={{
              maxWidth: 850,
              float: "right",
              marginRight: 10,
              marginLeft: 10,
              padding: 12,
            }}
          >
            <div
              style={{
                width: "90%",

                marginTop: "20px",
                margin: "auto",
              }}
            >
              <h1 color="#252933">{article.title}</h1>
            </div>
            <div
              style={{
                width: "90%",
                fontSize: 14,
                marginTop: "28px",
                marginBottom: "8px",
                margin: "auto",
              }}
            >
              <span style={{ color: "#515767", fontSize: 16 }}>
                {article.userName}
              </span>
              <span
                style={{ color: "#8a919f", paddingLeft: "12px", fontSize: 16 }}
              >
                2023-05-11
              </span>
              <span
                style={{ color: "#8a919f", paddingLeft: "12px", fontSize: 16 }}
              >
                1141
              </span>
              <div style={{ float: "right" }}>
                <Tag color="blue" style={{ marginRight: "10px" }}>
                  <span>{article.tags[0]}</span>
                </Tag>
                <Tag color="green" style={{ marginRight: "10px" }}>
                  <span>{article.category}</span>
                </Tag>
              </div>
            </div>
            <div style={{ width: "90%", margin: "auto" }}>
              <div className="article-copyright-info">
                <strong
                  style={{
                    paddingTop: "10px",
                    color: "black",
                    paddingLeft: "5px",
                  }}
                >
                  版权信息
                </strong>
                <span style={{ paddingTop: "10px", paddingLeft: "10px" }}>
                  转载自 https://juejin.cn/post/7231913383167475771
                  ，如有侵权，请联系我删除
                </span>
              </div>
            </div>

            <div style={{ width: "90%", margin: "auto" }}>
              <ViewMd context={article.context}></ViewMd>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneArticleView;
