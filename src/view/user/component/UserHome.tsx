import { Card, Row, Col, Avatar, Tag, Button, Tabs, TabsProps } from "antd";

import React, { useEffect, useState } from "react";

import { myFetch } from "../../../utils/fetch";
import { MillTime2Date } from "../../../utils/time";
import { useParams } from "react-router-dom";

const UserHome = () => {
  const params = useParams();
  let userID = params["id"];
  let userName = params["name"];

  const [articleInfos, setArticleInfos] = useState([]);
  const [comments, setComments] = useState([]);
  const [follows, setFollows] = useState([]);

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "文章",
      children: (
        <div style={{ width: "100%" }}>
          {articleInfos.map((item, index) => (
            <Card>
              <div>
                <div className="card-left">
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    alt=""
                    style={{
                      cursor: "pointer",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <div className="card-right">
                  <div className="right-top">
                    <a>
                      <span style={{ margin: 10 }}>{userName}</span>
                    </a>

                    <span
                      className="userField"
                      style={{ margin: 5, color: "blue" }}
                    >
                      #{item.topic}
                    </span>
                    <span className="userField" style={{ margin: 5 }}>
                      ip属地:{item.address}
                    </span>
                    <span className="userField" style={{ margin: 5 }}>
                      {MillTime2Date(item.createTime)}
                    </span>

                    <span style={{ float: "right" }}>举报</span>
                    <span style={{ float: "right", marginRight: "10px" }}>
                      收藏
                    </span>
                  </div>
                  <div className="right-center">
                    {item.title}
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ),
    },
    {
      key: "2",
      label: "回答",
      children: "2",
    },
    {
      key: "3",
      label: "动态",
      children: (
        <div style={{ width: "100%" }}>
          {comments.map((item, index) => (
            <div style={{ margin: "5px" }}>
              <Card>
                <div>
                  <div className="card-left">
                    <img
                      src="https://picture.moguit.cn//blog/admin/webp/2022/5/1/1651414702900.webp"
                      alt=""
                      style={{
                        cursor: "pointer",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <div className="card-right">
                    <div className="right-top">
                      <a>
                        <span style={{ margin: 10 }}>{item.user}</span>
                      </a>

                      <span
                        className="userField"
                        style={{ margin: 5, color: "blue" }}
                      >
                        #{item.topic}
                      </span>
                      <span className="userField" style={{ margin: 5 }}>
                        ip属地:{item.address}
                      </span>
                      <span className="userField" style={{ margin: 5 }}>
                        {MillTime2Date(item.createTime)}
                      </span>

                      <span style={{ float: "right" }}>举报</span>
                      <span style={{ float: "right", marginRight: "10px" }}>
                        收藏
                      </span>
                    </div>
                    <div className="right-center">
                      {item.context}
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      ),
    },
    {
      key: "4",
      label: "关注",
      children: "",
    },
    {
      key: "5",
      label: "问题",
      children: "",
    },
  ];
  type UserInfo = {
    nickName: string;
    articleCount: number;
    score: number;
    shortComment: number;
    followCount: number;
    description: string;
  };

  const [userInfo, setUserInfo] = useState<UserInfo>({
    nickName: "",
    score: 0,
    articleCount: 0,
    shortComment: 0,
    description: "",
    followCount: 0,
  });
  const getUserInfo = (userID) => {
    let p = new Object();
    console.log(userID);
    p["userID"] = userID;
    console.log(p);
    myFetch({
      url: "/normalUser/info",
      options: { method: "GET" },
      params: p,
    }).then((data) => {
      setUserInfo(data.body.result);
    });
  };

  const getUserArticle = () => {
    myFetch({
      url: "/normalUser/articleList/" + userID,
      options: { method: "GET" },
    }).then((data) => {
      setArticleInfos(data.body.result);
    });
  };

  const getUserComments = () => {
    myFetch({
      url: "/normalUser/commentList/" + userID,
      options: { method: "GET" },
    }).then((data) => {
      setComments(data.body.result);
    });
  };

  const getInfo = (key) => {
    if (key == "1") {
      return;
    }
    if (key == "2") {
      return;
    }
    if (key == "3") {
      getUserComments();
      return;
    }
    if (key == "4") {
      return;
    }
    if (key == "5") {
      return;
    }
  };
  useEffect(() => {
    getUserInfo(userID);
    getUserArticle();
  }, []);
  return (
    <>
      <div className="user-body">
        <div className="user-info" style={{ position: "relative" }}>
          <div className="user-info-row">
            <Row gutter={16}>
              <Col className="user-info-col" span={4}>
                <div>
                  <span>{userInfo.articleCount}</span>
                </div>
                <div>文章</div>
              </Col>
              <Col className="user-info-col" span={4}>
                <div>
                  <span>0</span>
                </div>
                <div>问答</div>
              </Col>
              <Col className="user-info-col" span={4}>
                <div>
                  <span>0</span>
                </div>
                <div>粉丝</div>
              </Col>
              <Col className="user-info-col" span={4}>
                <div>
                  <span>0</span>
                </div>
                <div>关注</div>
              </Col>
              <Col className="user-info-col" span={4}>
                <div>
                  <span>{userInfo.shortComment}</span>
                </div>
                <div>动态</div>
              </Col>
              <Col className="user-info-col" span={4}>
                <div>
                  <span>0</span>
                </div>
                <div>勋章</div>
              </Col>
            </Row>
          </div>
          <Avatar
            size="default"
            src="https://picture.moguit.cn//blog/admin/jpg/2022/6/4/1654350109734.jpg"
            style={{ marginTop: 20 }}
          ></Avatar>
          <div className="nickName">{userInfo.nickName}</div>
          <div className="level">
            <Tag color="blue">{userInfo.score}</Tag>
          </div>
          <div className="description">{userInfo.description}</div>
          <div>
            <Button
              size="middle"
              style={{ position: "absolute", bottom: 10, right: 10 }}
            >
              关注TA
            </Button>
          </div>
        </div>
        <div className="user-tabs">
          <Tabs
            size="large"
            items={items}
            style={{ width: "60%" }}
            centered={true}
            onTabClick={getInfo}
          ></Tabs>
          <div className="user-context"></div>
        </div>
      </div>
    </>
  );
};

export default UserHome;
