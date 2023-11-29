import React, { Component, useState } from "react";
import { Button, Col, Drawer, Form, Input, Radio, Row, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import CustomEditor from "../../component/editor/my-editor";
import { myFetch } from "../../utils/fetch";
import ByteMd from "../../component/editor/my-editor";




const onFinish = (values: any) => {
    console.log('Success:', values);
    myFetch({ url: "/normalUser/article", options: { method: "POST", body: values } }).then((data) => {
        console.log(data)
    })
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    title: string
    introduction: string
    category: string
    tags: string[]
    isOriginal: boolean

    // picture: string
    context: string
}

const NewArticleDrawer = ({ isOpen, setIsOpen = function (boolean) { } }) => {
    const [tagsoptions, settags] = useState<any>()
    const [cateoptions, setcates] = useState<any>()

    const updateParent = () => {
        setIsOpen(false)
    }
    const gettags = () => {
        myFetch({ url: "/normalUser/tags", options: { method: "GET" } }).then((data) => {
            if (data.body.code !== 200) {
                return
            }
            let tags = []
            for (let i = 0; i < (data.body.result).length; i++) {
                tags.push({ "value": data.body.result[i].name })
            }
            settags(tags)

        })
    }
    const [value, setValue] = useState(false);
    const onChange = (e) => {
        setValue(e.target.value);
    };
    const getcates = () => {
        myFetch({ url: "/normalUser/category", options: { method: "GET" } }).then((data) => {
            if (data.body.code !== 200) {
                return
            }
            let cates = []
            for (let i = 0; i < (data.body.result).length; i++) {
                cates.push({ "value": data.body.result[i].name })
            }
            setcates(cates)

        })
    }

    return (<>
        <Drawer title="写文章" placement="right" open={isOpen} width={"100%"} closable={false}>

            <Form size="large" style={{ width: "100%" }} onFinish={onFinish}>
                <Row style={{ marginTop: 20 }}>
                    <Col span={15} offset={1}>
                        <Form.Item<FieldType> label="标题" rules={[{ required: true, message: "请输入标题" }]} name="title">
                            <Input ></Input>
                        </Form.Item>
                        <Form.Item<FieldType> label="简介" name="introduction">
                            <Input></Input>
                        </Form.Item>
                        <Row>
                            <Col span={6} >
                                <Form.Item<FieldType> label="分类" name="category" rules={[{ required: true }]}>
                                    <Select options={cateoptions} placeholder="请选择分类" onClick={getcates}></Select>
                                </Form.Item>
                            </Col>
                            <Col span={6} offset={3}>
                                <Form.Item<FieldType> label="标签" name="tags" rules={[{ required: true }]}>
                                    <Select mode="multiple" options={tagsoptions} placeholder="请选择标签" onClick={gettags}></Select>
                                </Form.Item>
                            </Col>
                            <Col span={6} offset={3}>
                                <Form.Item<FieldType> label="是否原创" name="isOriginal" rules={[{ required: false }]}>
                                    <Radio.Group onChange={onChange} value={value}>
                                        <Radio value={true}>原创</Radio>
                                        <Radio value={false}>转载</Radio>

                                    </Radio.Group>

                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={7} offset={1}>
                        <Form.Item label="标题图" name="picture">
                            <Upload action="/upload.do" listType="picture-card">
                                <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 10 }}>Upload</div>
                                </div>
                            </Upload>
                        </Form.Item>

                    </Col>
                </Row>
                <Row>
                    <Col span={22} offset={1}>
                        <Form.Item<FieldType> label="内容" style={{ marginTop: 15 }} name="context" rules={[{ required: false }]}>
                            <ByteMd></ByteMd>
                        </Form.Item>
                    </Col>
                </Row>
                <div style={{ float: "right" }}>
                    <Button onClick={updateParent} size="large" style={{ margin: 10 }}>取消</Button>
                    <Button size="large" style={{ margin: 10, backgroundColor: "#909399" }} >保存草稿</Button>
                    <Button size="large" style={{ margin: 10 }} type="primary" htmlType="submit">提交审核</Button>
                </div>
            </Form>






        </Drawer>
    </>
    )

}





export default NewArticleDrawer