import React from "react";
import CustomNav from "../component/base/my-nav";
import './test.css'
import { Col, Row, Avatar, Tag, Tabs, Carousel, List, Space, Card } from "antd";
import type { TabsProps } from "antd"
import ArticleInfo from "../component/article/article-info";
import { StarOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";





const Test = () => {
    const data = Array.from({ length: 23 }).map((_, i) => ({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
        description:
            'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    }));

    const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    return (
        <>
            <div style={{ width: "60%", margin: "auto" }}>

                <div className="home-body-buttom">

                    <List
                        itemLayout="vertical"
                        size="large"
                        // pagination={{
                        //     onChange: (page) => {
                        //         console.log(page);
                        //     },
                        //     pageSize: 3,
                        // }}
                        dataSource={data}
                        renderItem={(item) => (
                            <List.Item
                                key={item.title}
                                actions={[
                                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                                ]}
                                extra={
                                    <img
                                        width={272}
                                        alt="logo"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                    />
                                }
                            >
                                <List.Item.Meta
                                    avatar={<Avatar src={item.avatar} />}
                                    title={<a href={item.href}>{item.title}</a>}
                                    description={item.description}
                                />
                                {item.content}
                            </List.Item>
                        )}
                    />

                </div>
                <div style={{ width: "20%", height: "10%", float: "right" }}>
                    <Card></Card>
                </div>

            </div>


            {/* <ArticleInfo></ArticleInfo> */}



        </>


    )
}

export default Test