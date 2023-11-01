import React from "react";
import CustomNav from "../component/base/my-nav";
import './test.css'
import { Col, Row, Avatar, Tag, Tabs, Carousel, Button, message } from "antd";
import type { TabsProps } from "antd"
import ArticleInfo from "../component/article/article-info";
import SuccessMessage from "../component/message/success";



const click = () => {
    message.success("成功")
}

const CurrentUser = () => {
    return (
        <Button onClick={click}>点击</Button>
    )

}






export default CurrentUser;