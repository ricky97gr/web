import { Button, Table } from "antd";
import React, { Component, useEffect, useState } from "react";
import AdminLayout from "../layout/layout";
import MyQuery from "../../../utils/query";
import { myFetch } from "../../../utils/fetch";
const colums = [
    {
        title: "时间",
        dataIndex: "createTime",
        key: "createTime"
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

const AdminOperationLogView = () => {
    let param = MyQuery({ page: 1, pageSize: 20 })

    const [dataResource, setDataResource] = useState()
    useEffect(() => {
        getOperationLog()
    }, [])

    const getOperationLog = () => {
        myFetch({ url: "/admin/operationLog", options: {}, params: param }).then((data) => {
            console.log(data)
            setDataResource(data.body.result)
        })
    }



    return (
        <>
            <div className="table-context-body">
                <div className="table-body"><Table columns={colums} dataSource={dataResource}></Table></div>
            </div>
        </>


    )

}

export default AdminOperationLogView