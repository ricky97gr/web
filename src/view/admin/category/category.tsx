import { Button, Form, Input, Switch, Table } from "antd";
import React, { Component, useState } from "react";
import AdminLayout from "../layout/layout";
import './../style/table-layout.css'
import CustomDrawer from "../../../component/base/my-drawer";
import { myFetch } from "../../../utils/fetch";
const colums = [
    {
        title: "分类名",
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
        title: "文章数量",
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
        name: "后端开发",
        who: "admin",
        createTime: "2023-10-22 11:06:11",
        usedByArticle: 10
    },
    {
        id: 2,
        name: "数据库",
        who: "admin",
        createTime: "2023-10-22 11:06:11",
        usedByArticle: 0
    },
    {
        id: 3,
        name: "Kubernetes",
        who: "admin",
        createTime: "2023-10-22 11:06:11",
        usedByArticle: 3
    },
]

type NewCategory = {
    name: string
    isShow: boolean
}

const AdminCategoryView = () => {
    const [isshow, setShow] = useState<boolean>(false)
    const open = () => {
        setShow(true)
    }
    const close = () => {
        setShow(false)
    }

    const addCategory = (values: any) => {
        console.log(values)
        myFetch({ url: "/admin/category", options: { body: values, method: "POST" } }).then(
            (data) => {
                console.log(data)
            }
        )
        close()
    }

    return (
        <AdminLayout>
            <div className="table-context-body">
                <div className="table-add-button"><Button size="large" onClick={open}>新增分类</Button></div>
                <div className="table-body"><Table columns={colums} dataSource={dataResource}></Table></div>
            </div>
            <CustomDrawer title="新增分类" isOpen={isshow} UpdateValue={open}>
                <Form onFinish={addCategory}>
                    <Form.Item<NewCategory> label="名称" name="name">
                        <Input></Input>
                    </Form.Item>
                    <Form.Item<NewCategory> label="启用" name="isShow">
                        <Switch defaultChecked></Switch>
                    </Form.Item>
                    <Button htmlType="submit">确定</Button>
                    <Button onClick={close}>取消</Button>
                </Form>
            </CustomDrawer>
        </AdminLayout>


    )

}

export default AdminCategoryView