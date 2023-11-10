import { Button, Table } from "antd";
import React, { Component, useEffect, useState } from "react";
import { myFetch } from "../../../utils/fetch";
import AdminLayout from "../layout/layout";
import './../style/table-layout.css';
import HandleTime from "../../../utils/time";
import MyQuery from "../../../utils/query";



const AdminUserView = () => {
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
            title: "邮箱",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "加入时间",
            dataIndex: "createTime",
            key: "createTime"
        },
        {
            title: "上次登陆时间",
            dataIndex: "lastLoginTime",
            key: "lastLoginTime"
        },
        {
            title: "操作",
            dataIndex: "action",
            key: "action"
        },
    ]


    const [dataResource, setDataResource] = useState()


    const getAllUser = () => {
        let param = MyQuery({})
        param["page"] = 1
        param["pageSize"] = 10
        myFetch({ url: "/admin/user", options: {}, params: param }).then((data) => {
            if (data.body.code !== 200) {
                return
            }

            for (let i = 0; i < (data.body.result).length; i++) {
                // data.body.result[i].status = data.body.result[i].status === 0 ? "正常" : "异常"
                data.body.result[i].createTime = HandleTime.MillTime2Date(data.body.result[i].createTime)
                data.body.result[i].lastLoginTime = HandleTime.MillTime2Date(data.body.result[i].lastLoginTime)
            }
            setDataResource(data.body.result)
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
                <div className="table-body"><Table columns={colums} dataSource={dataResource}></Table></div>
            </div>
        </>
    )
}

export default AdminUserView