
import React from "react";

import { Button, Dropdown, Space } from "antd"


interface CustomDropDownProps {
    items?: any
    onClick?: any
    children?: any
}

const CustomDropDown = ({ items, onClick, children }: CustomDropDownProps) => {
    return (
        <Dropdown menu={{ items, onClick }} placement="bottomRight" overlayStyle={{ backgroundColor: "white", padding: 0, }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {children}
                </Space>
            </a>
        </Dropdown>
    )
}

export default CustomDropDown