import { Skeleton, Divider, List, Avatar } from "antd";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { myFetch } from "../../../../utils/fetch";

const GroupMember = ({ groupUID, display }) => {

    const [resoutceData, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [once, setonce] = useState(2);

    const listGroupMember = (groupUID) => {

        myFetch({ url: "/normalUser/groupmember/" + groupUID, options: { method: "GET" } }).then((data) => {

            var result = []
            for (let i = 0; i < data.body.result.length; i++) {
                let tmp = {
                    name: data.body.result[i].name,
                    description: data.body.result[i].description,
                }
                result.push(tmp)

            }
            setData([...resoutceData, ...result])


        })
    }

    const loadMoreData = () => {
        if (loading) {
            return;
        }
        setLoading(true);
        if (once === 1) {
            listGroupMember(groupUID)
            setLoading(false);
            setonce(2)
            return
        }
        // setData([...resoutceData, ...data2]);
        setLoading(true);

    };

    useEffect(()=>{
        console.log(groupUID)
        if (groupUID === ""){
            return
        }
        listGroupMember(groupUID)
    },[])

    return (
        <>
            <div id="scrollableDivGroup"
                style={{
                    height: 400,
                    overflow: 'auto',
                    padding: '0 16px',
                    border: '1px solid rgba(140, 140, 140, 0.35)',
                    textAlign: "left",
                    display: display,
                }}>
                <InfiniteScroll
                    dataLength={resoutceData.length}
                    next={loadMoreData}
                    hasMore={resoutceData.length == 5}
                    loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                    endMessage={<Divider plain>这是群内所有的成员了哦</Divider>}
                    scrollableTarget="scrollableDivGroup"
                >
                    <List
                        itemLayout="horizontal"
                        dataSource={resoutceData}
                        renderItem={(item, index) => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                                    title={<a>{item.name}</a>}
                                    description={item.description}>
                                </List.Item.Meta>
                            </List.Item>
                        )}
                    /></InfiniteScroll>
            </div>
        </>
    )
}

export default GroupMember