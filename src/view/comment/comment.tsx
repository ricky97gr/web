import React from "react";
import CustomComment from "../../component/comment/customcomment";
import CustomTextArea from "../../component/base/my-textarea";
import CustomNav from "../../component/base/my-nav";
import './comment.css'
import { isTemplateMiddle } from "typescript";

type CommentInfo = {
    id: string,
    parentID: string,
    author: string,
    level: string,
    ip: string,
    creaTime: string,
    context: string,
    replayTo: string,
}


const Comment = () => {
    var info = [
        { author: "Tom", id: "1", parentID: "", level: "lv1", ip: "江苏省", creaTime: "一天前", context: "测试数据", replayTo: "", type: 1 },
        { author: "Tom2", id: "2", parentID: "1", level: "lv1", ip: "江苏省", creaTime: "一天前", context: "测试数据", replayTo: "Tom", type: 2 },
        { author: "Tom3", id: "3", parentID: "1", level: "lv1", ip: "江苏省", creaTime: "一天前", context: "测试数据", replayTo: "Tom", type: 2 },
        { author: "Tom4", id: "4", parentID: "3", level: "lv1", ip: "江苏省", creaTime: "一天前", context: "测试数据", replayTo: "Tom3", type: 3 },
        { author: "Tom5", id: "5", parentID: "3", level: "lv1", ip: "江苏省", creaTime: "一天前", context: "测试数据", replayTo: "Tom3", type: 3 },
        { author: "Tom6", id: "6", parentID: "", level: "lv1", ip: "江苏省", creaTime: "一天前", context: "测试数据", replayTo: "", type: 1 },
    ]
    return (
        <>
            <div style={{ height: "5%" }}>
                <CustomNav></CustomNav>
            </div>

            <div className="quanzi-body">
                <CustomTextArea></CustomTextArea>
                {
                    info.map((item) => (
                        <>
                            <CustomComment author={item.author} level={item.level} ip={item.ip} createTime={item.creaTime}>
                                <span style={{ fontSize: 15 }}>{item.context}</span>
                            </CustomComment>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Comment;