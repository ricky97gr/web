import { ClockCircleOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import { Avatar, List, Result, Space } from "antd";
import React, { useEffect, useState } from "react";
import { myFetch } from "../../../../utils/fetch";
import { errorHandle } from "../../../../utils/response";
import { MillTime2Date } from "../../../../utils/time";
import CommentInput from "../input";

const CommentRecover = ({ commentID, data }) => {
  if (data === null) {
    return
  }

  const giveFistLike = () => {
    let body = {
      id: commentID,
      isCancel: false,
      like: true,
      type: 1
    }
    myFetch({ url: "/normalUser/like", options: { method: "POST", body: body } }).then((data) => {
      if (errorHandle(data)) {
        return
      }
    })
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [recoverDisplay, setRecoverDisplay] = useState("none")

  const showRecoverDisplay = () => {
    recoverDisplay === "none" ? setRecoverDisplay("") : setRecoverDisplay("none")
  }
  return (
    <>
      <List style={{ width: "90%", float: "right", }}
        itemLayout="vertical"
        dataSource={data}
        size="small"
        split={false}
        renderItem={(item: any, index) => (
          <List.Item
            actions={[
              <Space>
                {React.createElement(ClockCircleOutlined)}
                {MillTime2Date(item.createTime)}
              </Space>,
              <Space onClick={giveFistLike}>
                {React.createElement(LikeOutlined)}
                {<a>点赞{item.likeCount === 0 ? "" : item.likeCount}</a>}
              </Space>,
              <Space onClick={showRecoverDisplay}>
                {React.createElement(MessageOutlined)}
                {<a>评论</a>}
              </Space>,

            ]}>
            <List.Item.Meta
              avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
              title={item.replayToUser === "" ? <a href="https://ant.design">{item.user}</a> : <><a href="https://ant.design">{item.user}</a>@<a>{item.replayToUser}</a></>}
              description={item.context}

            />
            <CommentInput topCommentID={commentID} parentID={item.commentID} display={recoverDisplay} replayToUser={item.user} replayTo={""} />
          </List.Item>
        )}
      >

      </List>
    </>
  )
}

export default CommentRecover