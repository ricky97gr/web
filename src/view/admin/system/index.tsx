import { Card, Col, Descriptions, DescriptionsProps, Row, Switch } from "antd";
import React from "react";

export const SystemInfo = () => {
    const descriptionItems: DescriptionsProps['items'] = [
        {
            key: "1",
            label: "系统名称",
            span: 3,
            children: <span style={{ float: "right" }}>社区系统</span>

        },
        {
            key: "2",
            label: "版本号",
            span: 3,
            children: <span>betav1</span>

        },
        {
            key: "3",
            label: "CommitID",
            span: 3,
            children: <span>commitid</span>

        },
        {
            key: "4",
            label: "编译时间",
            span: 3,
            children: <span>2023-11-17</span>
        },
    ]

    const systemMonitorItems: DescriptionsProps['items'] = [
        {
            key: "1",
            label: "操作系统",
            span: 3,
            children: <span>linux</span>

        },
        {
            key: "2",
            label: "CPU利用率",
            span: 3,
            children: <span>10%</span>

        },
        {
            key: "3",
            label: "内存利用率",
            span: 3,
            children: <span>1Gb/4GB</span>

        },
        {
            key: "4",
            label: "磁盘利用率",
            span: 3,
            children: <span>12GB/40GB</span>
        },
        {
            key: "5",
            label: "系统运行时长",
            span: 3,
            children: <>
                <span>1</span><span>天</span>
                <span>2</span><span>小时</span>
                <span>36</span><span>分钟</span>
                <span>21</span><span>秒</span>
            </>
        },
    ]

    return (
        <>

            <Row>
                <Col span={12} style={{ padding: 8 }}>
                    <Card title="系统信息" style={{ height: 300, padding: 10 }}>
                        <Descriptions items={descriptionItems}>

                        </Descriptions>

                    </Card>
                </Col>
                <Col span={12} style={{ padding: 8 }}>
                    <Card title="系统监控" style={{ height: 300, padding: 10 }}>
                        <Descriptions items={systemMonitorItems}>

                        </Descriptions>
                    </Card>
                </Col>
            </Row>
            <Row style={{ marginTop: 10, padding: 8 }}>
                <Col span={24}>
                    <Card title="功能控制面板" style={{ padding: 10 }}>
                        <Row>
                            <Col span={6} style={{ padding: 8 }}>
                                <Card title="聊天室">
                                    <Switch></Switch>
                                </Card>
                            </Col>
                            <Col span={6} style={{ padding: 8 }}>
                                <Card title="增加好友">
                                    <Switch></Switch>
                                </Card>
                            </Col>
                            <Col span={6} style={{ padding: 8 }}>
                                <Card title="发表短评">
                                    <Switch></Switch>
                                </Card>
                            </Col>
                            <Col span={6} style={{ padding: 8 }}>
                                <Card title="发表文章">
                                    <Switch></Switch>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={6} style={{ padding: 8 }}>
                                <Card title="评论功能">
                                    <Switch></Switch>
                                </Card>
                            </Col>
                            <Col span={6} style={{ padding: 8 }}>
                                <Card title="插件系统">
                                    <Switch></Switch>
                                </Card>
                            </Col>

                        </Row>

                    </Card>
                </Col>
            </Row>
        </>
    )

}

