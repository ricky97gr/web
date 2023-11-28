import { Input, Button, Form, message } from "antd";
import React, { useState } from "react";
import { myFetch } from "../../../../utils/fetch";


const CommentInput = ({ topCommentID, parentID, replayTo = "", replayToUser = "", display = "" }) => {
  const { TextArea } = Input;
  const [value, setValue] = useState()
  const onChange = (e) => {
    setValue(e.target.value)
  }
  // const closeInput = () => {
  //   updateParent("none")
  // }
  const recoverComment = () => {
    let body = {
      context: value,
      // topic:""
      topCommentID: topCommentID,
      parentID: parentID,
      replayTo: replayTo,
      replayToUser: replayToUser
    }
    console.log(body)
    myFetch({ url: "/normalUser/comment", options: { body: body, method: "POST" } }).then((data) => {
      if (data.body.code != 200) {
        message.error("回复失败")
        return
      }
      message.success("回复成功")

    })
  }
  return (
    <div style={{ marginBottom: 5, width: "85%", float: "right", padding: 5, display: display }}>
      <Form onFinish={recoverComment}>
        <Form.Item rules={[{ required: true, message: "请输入回复" }]} name="context">
          <div>

            <TextArea maxLength={120} style={{ height: "100px" }}
              onChange={onChange}
            />
          </div>
        </Form.Item>
        <div style={{}}>
          <Button size="small" type="primary" style={{ marginRight: 10, marginBottom: 0, float: "right" }} >取消评论</Button>
          <Button size="small" type="primary" style={{ marginRight: 10, marginBottom: 0, float: "right" }} htmlType="submit">发表评论</Button>
        </div>
      </Form>


    </div>
  )
}

export default CommentInput;