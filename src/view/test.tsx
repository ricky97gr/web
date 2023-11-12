import React from "react";
import CustomNav from "../component/base/my-nav";
import './test.css'
import { Col, Row, Avatar, Tag, Tabs, Carousel } from "antd";
import type { TabsProps } from "antd"
import ArticleInfo from "../component/article/article-info";


const contentStyle: React.CSSProperties = {
    height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};


const Test = () => (
    <>
        <div className="home-body">
            <div style={{ width: "65%", height: "100%", padding: 5 }}>
                <Carousel autoplay style={{ height: "100%" }}>
                    <div>
                        <img width="100%" height="100%" src="https://picture.moguit.cn//blog/admin/jpg/2019/4/28/1556433062383.jpg" alt="" />
                    </div>
                    <div>
                        <img width="100%" height="100%" src="https://picture.moguit.cn//blog/admin/jpg/2019/4/28/1556433062383.jpg" alt="" />
                    </div>
                    <div>
                        <img width="100%" height="100%" src="https://picture.moguit.cn//blog/admin/jpg/2019/4/28/1556433062383.jpg" alt="" />
                    </div>
                    <div>
                        <img width="100%" height="100%" src="https://picture.moguit.cn//blog/admin/jpg/2019/4/28/1556433062383.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
            <div style={{ width: "35%", float: "right", height: "100%" }} >
                <div style={{ height: "50%", padding: 5 }}>
                    <img width="100%" height="100%" src="https://picture.moguit.cn//blog/admin/jpg/2019/4/28/1556433062383.jpg" alt="" />
                </div>
                <div style={{ height: "50%", padding: 5 }}>
                    <img width="100%" height="100%" src="https://picture.moguit.cn//blog/admin/jpg/2019/4/28/1556433062383.jpg" alt="" />
                </div>
            </div>
            <div>

            </div>


        </div>
        <div className="home-body-buttom">
            <div style={{ width: "65%", height: "100%", padding: 5 }}>
                <ArticleInfo></ArticleInfo>
                <ArticleInfo></ArticleInfo>
                <ArticleInfo></ArticleInfo>
                <ArticleInfo></ArticleInfo>
                <ArticleInfo></ArticleInfo>
                <ArticleInfo></ArticleInfo>
            </div>

        </div>

        {/* <ArticleInfo></ArticleInfo> */}



    </>


)

export default Test