import { message } from "antd";
import React from "react";

const SuccessMessage = (msg: string) => {
    const [messageApi, contextHolder] = message.useMessage()
    messageApi.open({
        type: "success",
        content: msg,
    })
    return (
        <>
            {contextHolder}
        </>
    )
}