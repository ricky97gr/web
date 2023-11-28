import { Card, Col, Row } from "antd"
import React, { useState } from "react"
import './customcomment.css'
import CommentInput from "./commentinput"
import SecondCommentMenu from "./second_comment_menu"
import { myFetch } from "../../utils/fetch"
import { errorHandle } from "../../utils/response"
import { MillTime2Date } from "../../utils/time"
import { MessageOutlined, LikeOutlined, ShareAltOutlined } from "@ant-design/icons"

const CustomComment = (item) => {
    const [display, setDisplay] = useState<string>("none")
    const show = () => {
        setDisplay("")
        console.log(1111)
    }

    const getComment = (item) => {
        let first = item.item
        const giveFistLike = () => {
            let uid = first.commentID
            let body = {
                id: uid,
                isCancel: false,
                like: true,
                type: 1
            }
            console.log(body)
            myFetch({ url: "/normalUser/like", options: { method: "POST", body: body } }).then((data) => {
                if (errorHandle(data)) {
                    return
                }
                console.log(data)
            })
        }
        const giveFistUnLike = () => {
            let uid = first.commentID
            let body = {
                id: uid,
                isCancel: false,
                like: false,
                type: 1
            }
            console.log(body)
            myFetch({ url: "/normalUser/like", options: { method: "POST", body: body } }).then((data) => {
                if (errorHandle(data)) {
                    return
                }
                console.log(data)
            })
        }

        return (

            <>
                <div style={{}}>
                    <div>
                        <div className='card-left'>
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="" style={{ cursor: "pointer", width: "100%", height: "100%" }} />
                        </div>
                        <div className='card-right'>
                            <div className='right-top'>
                                <a >
                                    <span style={{ margin: 10 }}>{first.user}</span>
                                </a>

                                <span className='userField' style={{ margin: 5, color: "blue" }}>#{first.topic}</span>
                                <span className='userField' style={{ margin: 5 }}>ip属地:{first.address}</span>
                                <span className='userField' style={{ margin: 5 }}>{MillTime2Date(first.createTime)}</span>


                                <span style={{ float: "right" }} >举报</span>
                                <span style={{ float: "right", marginRight: "10px" }}>收藏</span>

                            </div>
                            <div className='right-center'>{first.context}<br /><br /></div>
                            <div className='right-buttom'>


                                {/* <a><span style={{ margin: 4 }} onClick={show}>回复</span></a>
                                <a><span style={{ margin: 4 }} onClick={giveFistLike}>👍赞{first.likeCount}</span></a>
                                <a><span style={{ margin: 4 }} onClick={giveFistUnLike}>👎踩{first.unLikeCount}</span></a> */}
                            </div>
                        </div>

                        <CommentInput topCommentID={first.commentID} parentID={first.commentID} display={display} updateParent={setDisplay}></CommentInput>

                    </div>

                    <div style={{ width: "90%", float: "right" }}>

                        {
                            first.child === null ? '' :
                                first.child.map((second) => {
                                    return (
                                        <>
                                            <div className='card-left'>
                                                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="" style={{ cursor: "pointer", width: "100%", height: "100%" }} />
                                            </div>
                                            <div className='card-right'>
                                                <div className='right-top'>
                                                    <a >
                                                        <span style={{ margin: 10 }}>{second.user}</span>
                                                    </a>

                                                    {/* <span className='userField' style={{ margin: 5 }}>{second.level}</span> */}
                                                    <span className='userField' style={{ margin: 5 }}>ip属地:{second.address}</span>
                                                    <span className='userField' style={{ margin: 5 }}>{MillTime2Date(second.createTime)}</span>

                                                </div>
                                                <div className='right-center'>{second.context} <br /><br /></div>
                                                <div className='right-buttom'>
                                                    <SecondCommentMenu topCommentID={first.commentID} parentID={second.commentID} replayTo={second.authorID} commentID={second.commentID} likeCount={second.likeCount} unLikeCount={second.unLikeCount} replayToUser={second.user}></SecondCommentMenu>
                                                </div>

                                            </div>
                                            {/* 三级评论 */}
                                            <div style={{ width: "100%", float: "right" }}>
                                                {
                                                    second.child === null ? '' :
                                                        second.child.map((third) => {
                                                            return (
                                                                <>
                                                                    <div className='card-right'>

                                                                        <div className='right-center'>{third.user}@<a>{third.replayToUser}</a>: {third.context}<br /><br /></div>
                                                                        <div className='right-buttom'>
                                                                            <SecondCommentMenu topCommentID={first.commentID} parentID={second.commentID} replayTo={third.authorID} commentID={third.commentID} likeCount={third.likeCount} unLikeCount={third.unLikeCount} replayToUser={third.user}></SecondCommentMenu>
                                                                        </div>

                                                                    </div>
                                                                </>
                                                            )
                                                        })}
                                            </div>
                                        </>

                                    )



                                })}
                    </div>
                </div>




            </>

        )

    }
    return (
        <><Card style={{ marginTop: 8, marginRight: 8, marginLeft: 8 }}
            actions={[
                <ShareAltOutlined key="share" />,
                <MessageOutlined key="message" onClick={show} />,
                <LikeOutlined key="like" />,
            ]}>

            {getComment(item)}


        </Card>
            <Card title="gogogo">hahha</Card>
        </>

    )
}

export default CustomComment;