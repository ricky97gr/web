import React, { useEffect, useId, useState } from "react";
import CustomNav from "../../component/base/my-nav";
import "./home.css";
import { Col, Row, Avatar, Tag, Tabs, Button, Card } from "antd";
import type { TabsProps } from "antd";
import { myFetch } from "../../utils/fetch";
import { getLocalUserUID } from "../../utils/auth";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "文章",
    children: (
      <div style={{ width: "100%" }}>
        <Card></Card>
        <Card></Card>
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
    children: "",
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

const CurrentUser = () => {
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
  useEffect(() => {
    getUserInfo(getLocalUserUID());
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
              添加好友
            </Button>
          </div>
        </div>
        <div className="user-tabs">
          <Tabs
            size="large"
            items={items}
            style={{ width: "60%" }}
            centered={true}
          ></Tabs>
          <div className="user-context"></div>
        </div>
      </div>
    </>
  );
};

export default CurrentUser;
