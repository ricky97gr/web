import React, { useEffect, useState } from "react";

import CustomTextArea from "../../component/base/my-textarea";
import CustomNav from "../../component/base/my-nav";
import "./index.css";
import { isTemplateMiddle } from "typescript";
import CustomRecover from "../../component/comment/revover";
import { myFetch } from "../../utils/fetch";
import CommentNav from "./conponent/nav";
import { Card } from "antd";
import ParentComment from "./conponent/OneShortCommet";

type CommentInfo = {
  id: string;
  parentID: string;
  author: string;
  level: string;
  ip: string;
  creaTime: string;
  context: string;
  replayTo: string;
};

const Comment = () => {
  const [info, setinfo] = useState([]);

  const getComment = () => {
    myFetch({ url: "/comment", options: { method: "GET" } }).then(
      (data) => {
        setinfo(data.body.result);
      }
    );
  };

  useEffect(() => {
    getComment();
  }, []);
  return (
    <>

      <div style={{ maxWidth: 1300, margin: "auto", height: "100%", marginTop: 15, display: "flex" }}>
        <div style={{ width: 180 }}>
          <CommentNav></CommentNav>
        </div>
        <div style={{ maxWidth: 1100, float: "right" }}>
          <div style={{ float: "right", width: 240 }}>
            <Card title="用户信息"></Card>
            <Card title="精选短评" style={{ marginTop: 12 }}></Card>
            <Card title="推荐话题" style={{ marginTop: 12 }}></Card>
          </div>
          <div style={{ maxWidth: "80%", float: "left", marginRight: 10, marginLeft: 10, }}>
            <CustomTextArea getAllComment={getComment} ></CustomTextArea>
            {info === null
              ? ""
              : info?.map((item) => (
                <>
                  <ParentComment item={item}></ParentComment>

                </>
              ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default Comment;
