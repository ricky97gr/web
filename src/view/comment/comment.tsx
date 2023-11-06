import React from "react";
import CustomComment from "../../component/comment/customcomment";
import CustomTextArea from "../../component/base/my-textarea";
import CustomNav from "../../component/base/my-nav";
import './comment.css'


const Comment = () => (
    <>
        <div style={{ height: "5%" }}>
            <CustomNav></CustomNav>
        </div>

        <div className="quanzi-body">
            <CustomTextArea></CustomTextArea>
            <CustomComment author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
                <span style={{ fontSize: 15 }}>测试数据</span>
            </CustomComment>
            <CustomComment author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
                <span style={{ fontSize: 15 }}>测试数据</span>
            </CustomComment>
            <CustomComment author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
                <span style={{ fontSize: 15 }}>测试数据</span>
            </CustomComment>
            <CustomComment author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
                <span style={{ fontSize: 15 }}>测试数据</span>
            </CustomComment>
            <CustomComment author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
                <span style={{ fontSize: 15 }}>测试数据</span>
            </CustomComment>
        </div>
    </>

)

export default Comment;