import { Button, Table } from "antd";
import React, { Component } from "react";
import AdminLayout from "../layout/layout";
import './../style/table-layout.css'
const colums = [
    {
        title: "标题",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "作者",
        dataIndex: "author",
        key: "author"
    },
    {
        title: "分类",
        dataIndex: "category",
        key: "category"
    },
    {
        title: "标签",
        dataIndex: "tags",
        key: "tags"
    },
    {
        title: "提交时间",
        dataIndex: "createTime",
        key: "createTime"
    },
    {
        title: "状态",
        dataIndex: "status",
        key: "status"
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
        name: "go的基本常识",
        author: "admin",
        createTime: "2023-10-22 11:06:11",
        status: "已发布",
        tags: ["go", "编程"],
        category: "后端开发"
    },
    {
        id: 2,
        name: "go的基本常识",
        author: "admin",
        createTime: "2023-10-22 11:06:11",
        status: "已发布",
        tags: ["go", "编程"],
        category: "后端开发"
    },
]

class AdminArticleView extends Component {

    render(): React.ReactNode {
        return (
            <>
                <div className="table-context-body">
                    <div className="table-body">
                        <Table columns={colums} dataSource={dataResource}></Table>
                    </div>
                </div>

            </>


        )
    }
}

export default AdminArticleView