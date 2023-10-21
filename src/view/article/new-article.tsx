import React, { Component } from "react";
import { Button, Col, Drawer, Form, Input, Radio, Row, Select, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";


interface NewArticleDrawerProps {
    isOpen: boolean
    UpdateValue: Function
}
const tagsoptions = [{ value: 'gold' }, { value: 'lime' }, { value: 'green' }, { value: 'cyan' }];
class NewArticleDrawer extends Component<NewArticleDrawerProps>{
    state: {
        isShow: false
    }
    updateParent = () => {
        this.props.UpdateValue(false)
    }
    render(): React.ReactNode {
        return (<>
            <Drawer title="写文章" placement="right" open={this.props.isOpen} width={"100%"} closable={false}>
                
                <Form size="large" style={{ width: "100%", }} >
                    <Row style={{marginTop:20}}>
                        <Col span={15} offset={1}>
                        <Form.Item label="标题" rules={[{ required: true, message: "请输入标题" }]} style={{width:"60%"}} >
                                <Input></Input>
                            </Form.Item>
                            <Form.Item label="简介" >
                                <Input></Input>
                            </Form.Item>

                            <Form.Item label="分类">
                                <Select options={tagsoptions} placeholder="请选择分类"></Select>
                            </Form.Item>
                            <Form.Item label="标签" >
                                <Select mode="multiple" options={tagsoptions} placeholder="请选择标签"></Select>
                            </Form.Item>
                        </Col>
                        <Col span={7} offset={1}>
                        <Form.Item label="标题图">
                                <Upload action="/upload.do" listType="picture-card">
                                    <div>
                                        <PlusOutlined />
                                        <div style={{ marginTop: 20 }}>Upload</div>
                                    </div>
                                </Upload>
                            </Form.Item>
                            <Form.Item label="是否原创">
                                <Radio>原创</Radio>
                                <Radio>转赞</Radio>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={22} offset={1}>
                         <Form.Item label="内容">
                            <TextArea></TextArea>
                        </Form.Item>
                        </Col>
                    </Row>

                    </Form>
                    <Button onClick={this.updateParent}>取消</Button>
                <Button>提交审核</Button>
                <Button>保存草稿</Button>
              


                
            </Drawer>
        </>
        )
    }
}





export default NewArticleDrawer