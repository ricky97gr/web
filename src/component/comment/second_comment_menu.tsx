import React, { useState } from "react";
import CommentInput from "./commentinput";

const SecondCommentMenu = ({ topCommentID, parentID, replayTo = "" }) => {
    const [display, setDisplay] = useState<string>("none")
    const show = () => {
        setDisplay("")
    }
    return (
        <>
            <a><span style={{ margin: 4 }} onClick={show}>回复</span></a>
            <span style={{ margin: 4 }}>举报</span>
            <span style={{ margin: 4 }}>👍赞</span>
            <span style={{ margin: 4 }}>👎踩</span>
            <CommentInput topCommentID={topCommentID} parentID={parentID} replayTo={replayTo} display={display} updateParent={setDisplay}></CommentInput>
        </>
    )
}

export default SecondCommentMenu