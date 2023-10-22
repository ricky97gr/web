import { Button, Table } from "antd";
import React, { Component } from "react";
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
        id:1,
        name:"后端开发",
        who:"admin",
        createTime:"2023-10-22 11:06:11",
        usedByArticle:10
    },
    {
        id:2,
        name:"数据库",
        who:"admin",
        createTime:"2023-10-22 11:06:11",
        usedByArticle:0
    },
    {
        id:3,
        name:"Kubernetes",
        who:"admin",
        createTime:"2023-10-22 11:06:11",
        usedByArticle:3
    },
]

class AdminCategoryView extends Component {

    render(): React.ReactNode {
        return (
            <>
                <div><Button>新增分类</Button></div>
                <div><Table columns={colums} dataSource={dataResource}></Table></div>
            </>
        )
    }
}

export default AdminCategoryView