import { Button, Form, Input, Switch, Table } from "antd";
import React, { useState } from "react";
import AdminLayout from "../layout/layout";
import './../style/table-layout.css';

import CustomDrawer from "../../../component/base/my-drawer";
const colums = [
    {
        title: "标签名",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "加入时间",
        dataIndex: "createTime",
        key: "createTime"
    },
    {
        title: "添加者",
        dataIndex: "who",
        key: "who"
    },
    {
        title: "文章使用数量",
        dataIndex: "usedByArticle",
        key: "usedByArticle"
    },
    {
        title: "操作",
        dataIndex: "action",
        key: "action"
    },
]

const dataResource = [
    {
        id: 1,
        name: "go",
        who: "admin",
        createTime: "2023-10-22 11:06:11",
        usedByArticle: 10
    },
    {
        id: 2,
        name: "mysql",
        who: "admin",
        createTime: "2023-10-22 11:06:11",
        usedByArticle: 0
    },
]



const AdminTagView = () => {
    const [isshow, setShow] = useState<boolean>(false)
    const open = () => {
        setShow(true)
    }
    const close = () => {
        setShow(false)
    }


    return (
        <AdminLayout>
            <div className="table-context-body">
                <div className="table-add-button"><Button size="large" onClick={open}>新增</Button></div>
                <div className="table-body"><Table columns={colums} dataSource={dataResource}></Table></div>
            </div>
            <CustomDrawer title="新增标签" isOpen={isshow} UpdateValue={open}>
                <Form>
                    <Form.Item label="名称">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item label="启用">
                        <Switch defaultChecked></Switch>
                    </Form.Item>
                    <Button onClick={close}>取消</Button>
                </Form>
            </CustomDrawer>
        </AdminLayout>
    )
}


export default AdminTagView