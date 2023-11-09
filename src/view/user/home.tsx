import React from "react";
import CustomNav from "../../component/base/my-nav";
import './home.css'
import { Col, Row, Avatar, Tag, Tabs } from "antd";
import type { TabsProps } from "antd"

const items: TabsProps['items'] = [
    {
        key: '1',
        label: "文章",
        children: "1"
    },
    {
        key: '2',
        label: "回答",
        children: "2"
    },
    {
        key: '3',
        label: "动态",
        children: ""
    },
    {
        key: '4',
        label: "关注",
        children: ""
    },
    {
        key: '5',
        label: "问题",
        children: ""
    },
]



const CurrentUser = () => (
    <>
        {/* <div style={{ height: "5%" }}>
            <CustomNav></CustomNav>
        </div> */}

        <div className="user-body">
            <div className="user-info">
                <div className="user-info-row">
                    <Row gutter={16}>
                        <Col className="user-info-col" span={4}>
                            <div>
                                <span>0</span>
                            </div>
                            <div >文章</div>
                        </Col>
                        <Col className="user-info-col" span={4}><div>
                            <span>0</span>
                        </div>
                            <div >问答</div></Col>
                        <Col className="user-info-col" span={4}><div>
                            <span>0</span>
                        </div>
                            <div >粉丝</div></Col>
                        <Col className="user-info-col" span={4}><div>
                            <span>0</span>
                        </div>
                            <div >关注</div></Col>
                        <Col className="user-info-col" span={4}><div>
                            <span>0</span>
                        </div>
                            <div >动态</div></Col>
                        <Col className="user-info-col" span={4}>
                            <div>
                                <span>0</span>
                            </div>
                            <div >勋章</div>
                        </Col>
                    </Row>
                </div>
                <Avatar size={80} src="https://picture.moguit.cn//blog/admin/jpg/2022/6/4/1654350109734.jpg" style={{ marginTop: 20 }}></Avatar>
                <div className="nickName">微信用户12345</div>
                <div className="level">
                    <Tag color="blue">lv.1</Tag>
                </div>
                <div className="description">这家伙很懒，什么都没有留下</div>
            </div>
            <div className="user-tabs">
                <Tabs size="large" items={items}></Tabs>
                <div className="user-context">

                </div>
            </div>

        </div>
    </>



)

export default CurrentUser;