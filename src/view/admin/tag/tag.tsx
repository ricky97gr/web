import { Button, Form, Input, Space, Switch, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/layout";
import './../style/table-layout.css';

import CustomDrawer from "../../../component/base/my-drawer";
import { myFetch } from "../../../utils/fetch";
import MyQuery from "../../../utils/query";
import CustomModal from "../../../component/base/my-modal";
import HandleTime from "../../../utils/time";





const AdminTagView = () => {

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
            dataIndex: "creator",
            key: "creator"
        },
        {
            title: "文章使用数量",
            dataIndex: "usedByArticle",
            key: "usedByArticle"
        },
        {
            title: "状态",
            dataIndex: "isShow",
            key: "isShow",
            render: (_, { uuid, isShow }) => {
                const onchange = (checked) => {
                    let body = {
                        "uuid": uuid,
                        "isShow": checked
                    }
                    myFetch({ url: "/admin/tags", options: { body: body, method: "PUT" } })

                    getAllTag()
                    if (checked) {
                        message.success("标签启用成功")
                        return
                    }
                    message.success("标签已关闭")



                }
                return <>
                    <Switch defaultChecked={isShow} onChange={onchange}></Switch>
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
                    // setIsModalOpen(true)
                    getAllTag()
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
                        <span>确认要删除标签 "{record.name}" 吗？</span>
                    </CustomModal >
                </>
                )
            }
        },
    ]


    type NewTag = {
        name: string
        isShow: boolean
    }


    const [isshow, setShow] = useState<boolean>(false)
    const [isOpenModal, setIsModalOpen] = useState<boolean>(false)
    const open = () => {
        setShow(true)
    }
    const close = () => {
        setShow(false)
    }

    const [dataResource, setDataResource] = useState()
    const addTag = (values: any) => {
        console.log(values)
        myFetch({ url: "/admin/tags", options: { body: values, method: "POST" } }).then((data) => {
            if (data.body.code !== 200) {
                message.error("新建标签失败")
                return
            }
            message.success("成功新建标签")
            close()
            getAllTag()
        })

    }

    const getAllTag = () => {
        let param = MyQuery({})
        myFetch({ url: "/admin/tags", options: { method: "GET" }, params: param }).then(
            (data) => {
                console.log(data.body.result)
                for (let i = 0; i < (data.body.result).length; i++) {
                    data.body.result[i].createTime = HandleTime.MillTime2Date(data.body.result[i].createTime)
                }
                setDataResource(data.body.result)
            }
        )
    }

    useEffect(() => {
        getAllTag()
    }, [])
    return (
        <>
            <div className="table-context-body">
                <div className="table-add-button"><Button size="large" onClick={open}>新增</Button></div>
                <div className="table-body"><Table columns={colums} dataSource={dataResource}></Table></div>
            </div>
            <CustomDrawer title="新增标签" isOpen={isshow} UpdateValue={open}>
                <Form onFinish={addTag}>
                    <Form.Item<NewTag> label="名称" name="name" rules={[{ required: true, message: "请输入标签名称" }]}>
                        <Input></Input>
                    </Form.Item>
                    <Form.Item<NewTag> label="启用" name="isShow">
                        <Switch defaultChecked></Switch>
                    </Form.Item>
                    <Button htmlType="submit">确定</Button>
                    <Button onClick={close}>取消</Button>
                </Form>
            </CustomDrawer>
        </>
    )
}


export default AdminTagView