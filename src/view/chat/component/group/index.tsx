import { Avatar, Divider, List, Skeleton } from "antd";
import { on } from "events";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { myFetch } from "../../../../utils/fetch";
import { setCurrenChatInfo } from "../../../../utils/chat";
import { group } from "console";
import { ChatType } from "../../../../utils/constant";
import { getLocalUserUID } from "../../../../utils/auth";

interface DataType {
    name: string,
    description: string,
    groupUID: string,
}



const GroupList = ({ setGroupMember, showGroupMemberFunc }) => {
    const [loading, setLoading] = useState(false);
    const [once, setonce] = useState(1);
    const [resoutceData, setData] = useState<DataType[]>([]);

    const ListGroup = () => {
        myFetch({ url: "/normalUser/grouplist", options: { method: "GET" } }).then((data) => {
            var result = []
            for (let i = 0; i < data.body.result.length; i++) {
                let tmp = {
                    name: data.body.result[i].name,
                    description: data.body.result[i].description,
                    groupUID: data.body.result[i].groupUID,
                }
                result.push(tmp)
            }
            setData([...resoutceData, ...result])

        })
    }
    const data2 = [

    ];

    const listGroupMember = (groupUID) => {

        myFetch({ url: "/normalUser/groupmember/" + groupUID, options: { method: "GET" } }).then((data) => {

            var result = []
            for (let i = 0; i < data.body.result.length; i++) {
                let tmp = {
                    name: data.body.result[i].nickName,
                    description: data.body.result[i].description,
                }
                result.push(tmp)

            }
            console.log(result)
            setGroupMember(result)


        })
    }

    let clcikTime = 0

    const handleDobbleClickGroup = (events, record) => {
        if (clcikTime === 0) {
            clcikTime = new Date().getTime()
        } else {
            if ((new Date().getTime() - clcikTime) < 800) {
                clcikTime = 0

                showGroupMemberFunc("")
                listGroupMember(record.groupUID)
                setCurrenChatInfo({ type: ChatType.GroupMessage, uid: getLocalUserUID, groupUID: record.groupUID })

            } else {
                clcikTime = new Date().getTime()
            }
        }
    }


    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        if (once === 1) {
            ListGroup();
            setLoading(false);
            setonce(2)
            return
        }
        setData([...resoutceData, ...data2]);
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
                    dataLength={resoutceData.length}
                    next={loadMoreData}
                    hasMore={resoutceData.length == 5}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>群组列表到底了 🤐</Divider>}
                    scrollableTarget="scrollableDivGroup"
                >
                    <List
                        itemLayout="horizontal"
                        dataSource={resoutceData}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                    title={<a onClick={e => handleDobbleClickGroup(e, item)}>{item.name}</a>}
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