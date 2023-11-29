import { Badge, Card, Col, Divider, List, Row, Space } from "antd"
import React, { useState } from "react"
import './customcomment.css'

import { MessageOutlined, LikeOutlined, ShareAltOutlined } from "@ant-design/icons"

import { myFetch } from "../../../utils/fetch"
import { errorHandle } from "../../../utils/response"
import { MillTime2Date } from "../../../utils/time"
import CommentInput from "./input"
import CommentRecover from "./recover"
import { comment } from "@uiw/react-md-editor"

const ParentComment = ({ item }) => {
  const [display, setDisplay] = useState<string>("none")
  const [data, setData] = useState([])
  const show = () => {
    display === "" ? setDisplay("none") : setDisplay(""); getChildComment()

  }
  const getChildComment = () => {

    let p = new Object()
    p["commentID"] = item.commentID
    myFetch({ url: "/comment/child", options: { method: "GET" }, params: p }).then((d) => {
      if (errorHandle(d)) {
        return
      }
      console.log(d.body.result)
      setData(d.body.result)
    })
  }


  const giveFistLike = () => {
    let uid = item.commentID
    let body = {
      id: uid,
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



  return (
    <>
      <Card style={{ marginTop: 8, marginRight: 8, marginLeft: 8 }}
        actions={[
          <ShareAltOutlined key="share" />,
          <MessageOutlined key="message" onClick={show} />,
          <Space onClick={giveFistLike}><LikeOutlined key="like" />{item.likeCount === 0 ? "" : item.likeCount}</Space>

        ]}>

        <div>
          <div className='card-left'>
            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="" style={{ cursor: "pointer", width: "100%", height: "100%" }} />
          </div>
          <div className='card-right'>
            <div className='right-top'>
              <a >
                <span style={{ margin: 10 }}>{item.user}</span>
              </a>

              <span className='userField' style={{ margin: 5, color: "blue" }}>#{item.topic}</span>
              <span className='userField' style={{ margin: 5 }}>ip属地:{item.address}</span>
              <span className='userField' style={{ margin: 5 }}>{MillTime2Date(item.createTime)}</span>


              <span style={{ float: "right" }} >举报</span>
              <span style={{ float: "right", marginRight: "10px" }}>收藏</span>

            </div>
            <div className='right-center'>{item.context}<br /><br /></div>
          </div>



        </div>
      </Card >
      <Card style={{ display: display, marginRight: 8, marginLeft: 8 }}>
        <CommentInput topCommentID={item.commentID} parentID={item.commentID} ></CommentInput>
        <Divider></Divider>
        <CommentRecover commentID={item.commentID} data={data}></CommentRecover>
      </Card>
    </>

  )
}

export default ParentComment;