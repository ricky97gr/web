import { Avatar, Divider, List, Skeleton } from "antd";
import { on } from "events";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface DataType {
    name: string,
    description: string
}

const GroupList = () => {
    const data2 = [
        {
            name: '艾欧尼亚',
            description: "一个 ，两个"
        },
        {
            name: '黑色玫瑰',
            description: "你们会输的"
        },
        {
            name: '德玛西亚',
            description: "我于杀戮之中盛放，亦如黎明中的花朵"
        },
        {
            name: '比尔吉沃特',
            description: "让我们来猎杀那些陷入黑暗中的人吧"
        },
        {
            name: '峡谷之巅',
            description: "闪耀吧！光"
        },
    ];
    const data1 = [
        {
            name: '皮城警备',
            description: "哈斯给"
        },
        {
            name: '巨人峰',
            description: "一个 ，两个"
        },
        {
            name: '祖安',
            description: "你们会输的"
        },
        {
            name: '教育专区',
            description: "我于杀戮之中盛放，亦如黎明中的花朵"
        },
        {
            name: '欢乐一家人',
            description: "哈斯给"
        },

    ];
    const [loading, setLoading] = useState(false);
    const [once, setonce] = useState(1);
    const [data, setData] = useState<DataType[]>([]);
    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        if (once === 1) {
            setData([...data, ...data1]);
            setLoading(false);
            setonce(2)
            return
        }
        setData([...data, ...data2]);
        setLoading(true);

    };
    useEffect(() => {
        loadMoreData();
    }, []);
    return (
        <>
            <div id="scrollableDivGroup"
                style={{
                    height: 400,
                    overflow: 'auto',
                    padding: '0 16px',
                    border: '1px solid rgba(140, 140, 140, 0.35)',
                    textAlign: "left"
                }}>
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMoreData}
                    hasMore={data.length == 5}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>群组列表到底了 🤐</Divider>}
                    scrollableTarget="scrollableDivGroup"
                >
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                    title={item.name}
                                    description={item.description}>
                                </List.Item.Meta>
                            </List.Item>
                        )}
                    /></InfiniteScroll>
            </div>





        </>
    )
}

export default GroupList