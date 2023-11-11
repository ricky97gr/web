import { Avatar, Divider, List, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";


const SessionList = () => {
    const data = [
        {
            userName: "1",
            lastMsgTime: "2023-11-11 13:12:59",
            lastContext: "你好"
        },
        {
            userName: "2",
            lastMsgTime: "2023-11-11 13:12:59",
            lastContext: "你好"
        },
        {
            userName: "3",
            lastMsgTime: "2023-11-11 13:12:59",
            lastContext: "你好"
        },
        {
            userName: "4",
            lastMsgTime: "2023-11-11 13:12:59",
            lastContext: "你好"
        },
        {
            userName: "5",
            lastMsgTime: "2023-11-11 13:12:59",
            lastContext: "你好"
        },
        {
            userName: "6",
            lastMsgTime: "2023-11-11 13:12:59",
            lastContext: "你好"
        },
        {
            userName: "7",
            lastMsgTime: "2023-11-11 13:12:59",
            lastContext: "你好"
        },
        {
            userName: "8",
            lastMsgTime: "2023-11-11 13:12:59",
            lastContext: "你好"
        },
        {
            userName: "9",
            lastMsgTime: "2023-11-11 13:12:59",
            lastContext: "你好"
        },
        {
            userName: "10",
            lastMsgTime: "2023-11-11 13:12:59",
            lastContext: "你好"
        },
    ];


    const loadMoreData = () => {
        return

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
                    textAlign: "left"
                }}>
                <InfiniteScroll
                    dataLength={data.length}
                    next={loadMoreData}
                    hasMore={false}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>只能加载10条最新会话哦 😀</Divider>}
                    scrollableTarget="scrollableDiv"
                >
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                    title={item.userName}
                                    description={item.lastContext}>
                                </List.Item.Meta>
                            </List.Item>
                        )}
                    /></InfiniteScroll>
            </div>



        </>

    )

}

export default SessionList