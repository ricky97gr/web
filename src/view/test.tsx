import React from "react";
import CustomCard from "../component/my-card.tsx";
import CustomTextArea from "../component/my-textarea.tsx";
import CustomNav from "../component/my-nav.tsx";
import './test.css'


const Test = () => (
    <div className="quanzi" > 
    <div className="quanzi-header">
        <CustomNav></CustomNav>
    </div>
    

<div className="quanzi-body">
     <CustomTextArea></CustomTextArea>
    <CustomCard author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
        <span style={{fontSize: 15}}>测试数据</span>
    </CustomCard>
    <CustomCard author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
        <span style={{fontSize: 15}}>测试数据</span>
    </CustomCard>
    <CustomCard author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
        <span style={{fontSize: 15}}>测试数据</span>
    </CustomCard>
    <CustomCard author="Tom" level="摸鱼高手" ip="江苏省" createTime={"一天前"}>
        <span style={{fontSize: 15}}>测试数据</span>
    </CustomCard>
</div>
   
    </div>
   

    

)

export default Test;