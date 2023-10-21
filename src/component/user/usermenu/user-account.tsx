
import React from "react";

import { Space, Table, Tag } from "antd";
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: string;
    name: string;
    from: string;
    createTime: string;
    tags: string[];
}

const columns: ColumnsType<DataType> = [
    {
        title: '用户名',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: '渠道',
        dataIndex: 'from',
        key: 'from',
    },
    {
        title: '绑定时间',
        dataIndex: 'createTime',
        key: 'createTime',
    },
    // {
    //   title: 'Tags',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? 'geekblue' : 'green';
    //         if (tag === 'loser') {
    //           color = 'volcano';
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    {
        title: '动作',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>解绑</a>
            </Space>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        from: "微信",
        createTime: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        from: "github",
        createTime: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        from: "手机号",
        createTime: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const UserAccountTable = <div>
    <Table columns={columns} dataSource={data}>
    </Table>
</div>

export default UserAccountTable