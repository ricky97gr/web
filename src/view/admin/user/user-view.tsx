import { Button, Table } from "antd";
import React, { Component } from "react";
import AdminLayout from "../layout/layout";
import './../style/table-layout.css'
const colums = [
    {
        title: "姓名",
        dataIndex: "name",
        key: "name"
    },
    {
        title: "状态",
        dataIndex: "status",
        key: "status"
    },
    {
        title: "性别",
        dataIndex: "sex",
        key: "sex"
    },
    {
        title: "加入时间",
        dataIndex: "createTime",
        key: "createTime"
    },
    {
        title: "上次在线时间",
        dataIndex: "lastOnLineTime",
        key: "lastOnLineTime"
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
        name: "admin",
        sex: "男",
        status: "在线",
        createTime: "2023-10-22 11:06:11",
        lastOnLineTime: "2023-10-22 11:06:11"
    },
    {
        id: 2,
        name: "test",
        sex: "男",
        status: "离线",
        createTime: "2023-10-22 11:06:11",
        lastOnLineTime: "2023-10-22 11:06:11"
    }
]

class AdminUserView extends Component {

    render(): React.ReactNode {
        return (
            <AdminLayout>
                <div className="table-context-body">
                    <div className="table-add-button"><Button size="large">新增用户</Button></div>
                    <div className="table-body"><Table columns={colums} dataSource={dataResource}></Table></div>
                </div>
            </AdminLayout>
        )
    }
}

export default AdminUserView