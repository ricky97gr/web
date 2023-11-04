import { Button, Form, Input, Space, Switch, Table, message } from "antd";
import React, { Component, useEffect, useState } from "react";
import AdminLayout from "../layout/layout";
import './../style/table-layout.css'
import CustomDrawer from "../../../component/base/my-drawer";
import { myFetch } from "../../../utils/fetch";
import MyQuery from "../../../utils/query";
import CustomModal from "../../../component/base/my-modal";




type NewCategory = {
    name: string
    isShow: boolean
}

const AdminCategoryView = () => {
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
            title: "状态",
            dataIndex: "isShow",
            key: "isShow",
            render: (_, { isShow }) => {
                console.log(isShow)
                return <>
                    <Switch checked={isShow}></Switch>
                </>
            }
        },
        {
            title: "操作",
            key: "action",
            render: (_, record) => {
                const getInfo = () => {
                    console.log(record)
                }

                const del = () => {
                    console.log("del")
                    setIsModalOpen(true)
                }

                const print = () => {
                    console.log(111)
                }
                return (<>
                    <Space size="middle">
                        <a onClick={getInfo}>详情</a>
                        <a onClick={del}>删除</a>

                    </Space>
                    <CustomModal title="" sendFetch={print} open={isOpenModal} updateParent={setIsModalOpen}>
                        <span>确认要删除分类 "{record.name}" 吗？</span>
                    </CustomModal >
                </>
                )
            }
        },
    ]


    const [isOpenModal, setIsModalOpen] = useState<boolean>(false)
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
                <div className="table-body"><Table columns={colums} dataSource={dataResource} bordered={true}></Table></div>
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