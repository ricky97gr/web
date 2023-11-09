import { Card } from "antd"
import React, { useState } from "react"
import './customcomment.css'
import CommentInput from "./commentinput"
import SecondCommentMenu from "./second_comment_menu"

const CustomComment = (item) => {
    const [display, setDisplay] = useState<string>("none")
    const show = () => {
        setDisplay("")
    }
    const getComment = (item) => {
        let first = item.item
        console.log(111, first)
        console.log(222, first.child)

        return (

            <>
                <div style={{ width: "100%" }}>
                    <div>
                        <div className='card-left'>
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="" style={{ cursor: "pointer", width: "100%", height: "100%" }} />
                        </div>
                        <div className='card-right'>
                            <div className='right-top'>
                                <a >
                                    <span style={{ margin: 10 }}>{first.authorID}</span>
                                </a>

                                <span className='userField' style={{ margin: 5 }}>{first.level}</span>
                                <span className='userField' style={{ margin: 5 }}>ip属地:{first.ip}</span>
                                <span className='userField' style={{ margin: 5 }}>{first.createTime}</span>


                                <span style={{ float: "right" }}>举报</span>
                                <span style={{ float: "right", marginRight: "10px" }}>收藏</span>

                            </div>
                            <div className='right-center'>{first.context}<br /><br /></div>
                            <div className='right-buttom'>
                                <a><span style={{ margin: 4 }} onClick={show}>回复</span></a>
                                <span style={{ margin: 4 }}>👍赞</span>
                                <span style={{ margin: 4 }}>👎踩</span>
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
                                                        <span style={{ margin: 10 }}>{second.authorID}</span>
                                                    </a>

                                                    <span className='userField' style={{ margin: 5 }}>{second.level}</span>
                                                    <span className='userField' style={{ margin: 5 }}>ip属地:{ }</span>
                                                    <span className='userField' style={{ margin: 5 }}>{ }</span>

                                                </div>
                                                <div className='right-center'>{second.context} <br /><br /></div>
                                                <div className='right-buttom'>
                                                    <SecondCommentMenu topCommentID={first.commentID} parentID={second.commentID} replayTo={second.authorID}></SecondCommentMenu>
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

                                                                        <div className='right-center'>{third.authorID}@<a>{third.replayTo}</a>: {third.context}<br /><br /></div>
                                                                        <div className='right-buttom'>
                                                                            <SecondCommentMenu topCommentID={first.commentID} parentID={second.commentID} replayTo={third.authorID}></SecondCommentMenu>
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
        <Card style={{ width: 850, margin: 8 }}>

            {getComment(item)}


        </Card>
    )
}

export default CustomComment;