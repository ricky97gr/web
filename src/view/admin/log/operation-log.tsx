import { Button, Table } from "antd";
import React, { Component } from "react";
const colums = [
    {
        title: "时间",
        dataIndex: "time",
        key: "time"
    },
    {
        title: "操作者",
        dataIndex: "user",
        key: "user"
    },
    {
        title: "模块",
        dataIndex: "module",
        key: "module"
    },
    {
        title: "日志",
        dataIndex: "msg",
        key: "msg"
    },
    
]

const dataResource = [
    {
        id:1,
        time:"2023-10-22 11:06:11",
        user:"admin",
        module:"系统模块",
        msg:"admin用户登录成功"
    },
    {
        id:2,
        time:"2023-10-22 11:06:11",
        user:"admin",
        module:"标签模块",
        msg:"admin用户创建标签'go"
    }
]

class AdminOperationLogView extends Component {

    render(): React.ReactNode {
        return (
            <>
                <div><Table columns={colums} dataSource={dataResource}></Table></div>
            </>
        )
    }
}

export default AdminOperationLogView