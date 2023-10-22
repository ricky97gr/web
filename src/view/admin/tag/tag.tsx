import { Button, Table } from "antd";
import React, { Component } from "react";
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
        id:1,
        name:"go",
        who:"admin",
        createTime:"2023-10-22 11:06:11",
        usedByArticle:10
    },
    {
        id:2,
        name:"mysql",
        who:"admin",
        createTime:"2023-10-22 11:06:11",
        usedByArticle:0
    },
]

class AdminTagView extends Component {

    render(): React.ReactNode {
        return (
            <>
                <div><Button>新增标签</Button></div>
                <div><Table columns={colums} dataSource={dataResource}></Table></div>
            </>
        )
    }
}

export default AdminTagView