import { Button, Form, Input, Switch, Table, message } from "antd";
import React, { Component, useEffect, useState } from "react";
import AdminLayout from "../layout/layout";
import './../style/table-layout.css'
import CustomDrawer from "../../../component/base/my-drawer";
import { myFetch } from "../../../utils/fetch";
import MyQuery from "../../../utils/query";
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
        dataIndex: "creator",
        key: "creator"
    },
    {
        title: "文章数量",
        dataIndex: "usedByArticle",
        key: "usedByArticle"
    },
    {
        title: "操作",
        dataIndex: "action",
        key: "action",
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
    const [dataResource, setDataResource] = useState()

    const addCategory = (values: any) => {
        console.log(values)
        myFetch({ url: "/admin/category", options: { body: values, method: "POST" } }).then((data) => {
            console.log(data)
            if (data.body.code !== 200) {
                message.error("新建分类失败")
                return
            }
            message.success("成功新建分类")
            close()
            getAllCategory()
        })

    }

    const getAllCategory = () => {
        let param = MyQuery({})
        myFetch({ url: "/admin/category", options: { method: "GET" }, params: param }).then(
            (data) => {
                setDataResource(data.body.result)
            }
        )
    }

    useEffect(() => {
        getAllCategory()
    }, [])

    return (
        <>
            <div className="table-context-body">
                <div className="table-add-button"><Button size="large" onClick={open}>新增分类</Button></div>
                <div className="table-body"><Table columns={colums} dataSource={dataResource}></Table></div>
            </div>
            <CustomDrawer title="新增分类" isOpen={isshow} UpdateValue={open}>
                <Form onFinish={addCategory}>
                    <Form.Item<NewCategory> label="名称" name="name" rules={[{ required: true, message: "请输入类别名称" }]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item<NewCategory> label="启用" name="isShow">
                        <Switch defaultChecked></Switch>
                    </Form.Item>
                    <Button htmlType="submit">确定</Button>
                    <Button onClick={close}>取消</Button>
                </Form>
            </CustomDrawer>
        </>




    )

}

export default AdminCategoryView