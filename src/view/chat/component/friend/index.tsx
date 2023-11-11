import { Avatar, Divider, List, Skeleton } from "antd";
import { on } from "events";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface DataType {
    name: string,
    description: string
}

const FrientList = () => {
    const data2 = [

        {
            name: '压缩1',
            description: "哈斯给"
        },
        {
            name: '卡莎1',
            description: "一个 ，两个"
        },
        {
            name: '聪明的墨菲特1',
            description: "你们会输的"
        },
        {
            name: '烬1',
            description: "我于杀戮之中盛放，亦如黎明中的花朵1"
        },
    ];
    const data1 = [
        {
            name: '亚索',
            description: "哈斯给"
        },
        {
            name: '卡莎',
            description: "一个 ，两个"
        },
        {
            name: '聪明的墨菲特',
            description: "你们会输的"
        },
        {
            name: '烬',
            description: "我于杀戮之中盛放，亦如黎明中的花朵"
        },
        {
            name: '亚索',
            description: "哈斯给"
        },
        {
            name: '卡莎',
            description: "一个 ，两个"
        },
        {
            name: '聪明的墨菲特',
            description: "你们会输的"
        },
        {
            name: '烬',
            description: "我于杀戮之中盛放，亦如黎明中的花朵"
        },
        {
            name: '薇恩',
            description: "让我们来猎杀那些陷入黑暗中的人吧"
        },
        {
            name: '光辉女郎',
            description: "闪耀吧！光"
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
        console.log(111111)
        setData([...data, ...data2]);
        setLoading(true);

    };
    useEffect(() => {
        loadMoreData();
    }, []);
    return (
        <>
            <div id="scrollableDiv"
                style={{
                    height: 400,
                    overflow: 'auto',
                    padding: '0 16px',
                    border: '1px solid rgba(140, 140, 140, 0.35)',
                    textAlign: "left",
                    textOverflow: "ellipsis",
                    overflowX: "hidden",
                    whiteSpace: "nowrap",

                }}>
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMoreData}
                    hasMore={data.length == 10}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>好友列表到底了 🤐</Divider>}
                    scrollableTarget="scrollableDiv"
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

export default FrientList