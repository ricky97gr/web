import { Input, Button } from "antd";
import React from "react";

const CommentInput = ({ display, updateParent }) => {
    const { TextArea } = Input;
    const onChange = () => {

    }
    const closeInput = () => {
        updateParent("none")
    }
    return (
        <div style={{ display: display }}>
            <div>
                <TextArea showCount maxLength={120} style={{ height: 120, marginBottom: 24, width: 700, float: "right" }}
                    onChange={onChange}
                    placeholder="分享你的新鲜事吧"
                />
            </div>

            <div style={{}}>
                <Button size="small" type="primary" style={{ marginRight: 5, marginBottom: 10 }} onClick={closeInput}>取消评论</Button>
                <Button size="small" type="primary" style={{ marginRight: 5, marginBottom: 10, }} onClick={closeInput}>发表评论</Button>
            </div>
        </div>
    )
}

export default CommentInput;