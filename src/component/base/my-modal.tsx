

import { Modal } from "antd";
import React, { useState } from "react";

const CustomModal = ({ title = "", open, sendFetch = function () { }, updateParent = function (boolean) { }, children }) => {
    const handleOk = () => {
        sendFetch()
        updateParent(false)
    };

    const handleCancel = () => {
        updateParent(false)
    };

    return (
        <>
            <Modal title={title} open={open} onOk={handleOk} onCancel={handleCancel}>
                {children}
            </Modal>
        </>
    )
}

export default CustomModal