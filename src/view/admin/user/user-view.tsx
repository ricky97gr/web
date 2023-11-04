import { Button, Table } from "antd";
import React, { Component, useEffect, useState } from "react";
import { myFetch } from "../../../utils/fetch";
import AdminLayout from "../layout/layout";
import './../style/table-layout.css';
const colums = [
    {
        title: "姓名",
        dataIndex: "nickName",
        key: "nickName"
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

let dataResource = [
    {
        id: 1,
        nickName: "admin",
        sex: "男",
        status: "在线",
        createTime: "2023-10-22 11:06:11",
        lastOnLineTime: "2023-10-22 11:06:11"
    },
    {
        id: 2,
        nickName: "test",
        sex: "男",
        status: "离线",
        createTime: "2023-10-22 11:06:11",
        lastOnLineTime: "2023-10-22 11:06:11"
    }
]
type Page = {
    page: number,
    limit: number

}

const AdminUserView = () => {
    const [dataRes, setDataRes] = useState()


    const getAllUser = () => {
        var p = new Object()
        p["page"] = 1
        p["pageSize"] = 10
        myFetch({ url: "/admin/user", options: {}, params: p }).then((data) => {
            if (data.body.code !== 200) {
                return
            }
            console.log(dataResource[0].nickName)
            console.log(data.body.result[0].nickName)
            setDataRes(data.body.result)
            // dataResource = data.body.result
            console.log(data)
            console.log(dataResource)
            return
        })
    }
    useEffect(() => {
        getAllUser()
    }, [])
    return (
        <>
            <div className="table-context-body">
                <div className="table-add-button"><Button size="large">新增用户</Button></div>
                <div className="table-body"><Table columns={colums} dataSource={dataRes}></Table></div>
            </div>
        </>
    )
}

export default AdminUserView