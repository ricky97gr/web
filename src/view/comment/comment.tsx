import React, { useEffect, useState } from "react";
import CustomComment from "../../component/comment/customcomment";
import CustomTextArea from "../../component/base/my-textarea";
import CustomNav from "../../component/base/my-nav";
import "./comment.css";
import { isTemplateMiddle } from "typescript";
import CustomRecover from "../../component/comment/revover";
import { myFetch } from "../../utils/fetch";

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

      <div className="quanzi-body">
        <CustomTextArea getAllComment={getComment} ></CustomTextArea>
        {info === null
          ? ""
          : info?.map((item) => (
            <>
              <CustomComment item={item}></CustomComment>
            </>
          ))}
      </div>
    </>
  );
};

export default Comment;
