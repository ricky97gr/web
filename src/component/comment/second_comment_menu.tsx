import React, { useState } from "react";
import CommentInput from "./commentinput";
import { myFetch } from "../../utils/fetch";
import { errorHandle } from "../../utils/response";

const SecondCommentMenu = ({ topCommentID, parentID, commentID, replayTo = "", likeCount, unLikeCount, replayToUser = "" }) => {
    const [display, setDisplay] = useState<string>("none")
    const show = () => {
        setDisplay("")
    }

    const giveFistLike = () => {
        let uid = commentID
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
        let uid = commentID
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
            <a><span style={{ margin: 4 }} onClick={show}>回复</span></a>
            <a><span style={{ margin: 4 }} onClick={giveFistLike}>👍赞{likeCount}</span></a>
            <a><span style={{ margin: 4 }} onClick={giveFistUnLike}>👎踩{unLikeCount}</span></a>
            <CommentInput topCommentID={topCommentID} parentID={parentID} replayTo={replayTo} replayToUser={replayToUser} display={display} updateParent={setDisplay}></CommentInput>
        </>
    )
}

export default SecondCommentMenu