import React from "react";
import CustomCard from "../../component/base/my-card";
import CustomTextArea from "../../component/base/my-textarea";
import CustomNav from "../../component/base/my-nav";
import './comment.css'


const Test = () => (
    <>
        <CustomNav></CustomNav>
        <div className="quanzi-body">
            <CustomTextArea></CustomTextArea>
            <CustomCard author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
                <span style={{ fontSize: 15 }}>测试数据</span>
            </CustomCard>
            <CustomCard author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
                <span style={{ fontSize: 15 }}>测试数据</span>
            </CustomCard>
            <CustomCard author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
                <span style={{ fontSize: 15 }}>测试数据</span>
            </CustomCard>
            <CustomCard author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
                <span style={{ fontSize: 15 }}>测试数据</span>
            </CustomCard>
            <CustomCard author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
                <span style={{ fontSize: 15 }}>测试数据</span>
            </CustomCard>
        </div>
    </>

)

export default Test;