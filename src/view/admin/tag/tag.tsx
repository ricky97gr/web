import { Button, Form, Input, Switch, Table, message } from "antd";
import React, { useEffect, useState } from "react";
import AdminLayout from "../layout/layout";
import './../style/table-layout.css';

import CustomDrawer from "../../../component/base/my-drawer";
import { myFetch } from "../../../utils/fetch";
import MyQuery from "../../../utils/query";
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

type NewTag = {
    name: string
    isShow: boolean
}



const AdminTagView = () => {
    const [isshow, setShow] = useState<boolean>(false)
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