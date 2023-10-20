
import React from "react";

import { Dropdown, Space } from "antd";
import type { MenuProps } from 'antd';


const items: MenuProps['items'] = [
    {
        key: '6',
        label: (

            <a href="" >系统通知</a>

        ),

    },
    {
        key: '1',
        label: (
            <a href="">评论</a>
        ),
    },
    {
        key: '2',
        label: (
            <a href="">关注</a>
        ),

    },
    {
        key: '3',
        label: (
            <a href="">点赞</a>
        ),

    },
    {
        key: '4',
        label: (
            <a href="">收藏</a>
        ),

    },
    {
        key: '5',
        label: (
            <a href="">转发</a>
        ),

    },

];


const CustomDropDown = ({ children }) => (
    <Dropdown menu={{ items }} placement="bottomRight" overlayStyle={{ backgroundColor: "white", padding: 0, }}>
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                {children}
            </Space>
        </a>
    </Dropdown>
)

export default CustomDropDown