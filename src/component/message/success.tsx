import { message } from "antd";
import React from "react";

const SuccessMessage = () => {
    const [messageApi, contextHolder] = message.useMessage()
    messageApi.open({
        type: "success",
        content: "msg",
    })
    return (
        <>  {contextHolder}
        </>

    )
}

export default SuccessMessage