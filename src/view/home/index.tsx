import React, { useEffect, useState } from "react";

import './index.css'
import { List, Space, Card, Button, Tag, Affix } from "antd";

import { StarOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import HomeNav from "./component/nav";
import { myFetch } from "../../utils/fetch";
import MyQuery from "../../utils/query";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState()

  const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
    <Space style={{ float: "right" }}>
      {React.createElement(icon)}
      {text}
    </Space>
  );
  const TagText = ({ text }: { text: string }) => (
    <Space >

      {text}
    </Space>
  );

  const getAllArticle = () => {
    let p = MyQuery({ page: 1, pageSize: 20 })
    myFetch({ url: "/normalUser/article", options: { method: "GET", }, params: p }).then((data) => {
      console.log(data)
      setData(data.body.result)
    })
  }

  useEffect(() => {
    getAllArticle()
  }, [])


  return (
    <>
      <div style={{ maxWidth: 1300, margin: "auto", height: "100%", marginTop: 15, display: "flex" }}>
        <div style={{ width: 180, float: "left", textAlign: "center" }} className="categoryNav">
          <HomeNav></HomeNav>
        </div>
        <div style={{ maxWidth: 1100, float: "right" }}>
          <div className="inside" style={{ width: 260, float: "right", }}>

            <Card >
              <p style={{ width: "60%", float: "left" }}>
                <span style={{ fontSize: 16 }}>点亮社区</span>
                <br></br>
                <span>社区欢迎你的到来</span>
              </p>
              <Button style={{ float: "right" }} size="large">去签到</Button>
            </Card>

            <Card title="排行榜" style={{ marginTop: 12 }}>

            </Card>


            <Card style={{ marginTop: 12 }} > 广告位1</Card>
            <Card style={{ marginTop: 12 }}> 广告位2</Card>
            <Card title="推荐话题"></Card>
          </div>
          <div style={{ width: 820, backgroundColor: "#fff", float: "left", marginRight: 10, marginLeft: 10 }}>
            <List
              itemLayout="vertical"
              size="default"
              style={{ padding: 20 }}
              // pagination={{
              //     onChange: (page) => {
              //         console.log(page);
              //     },
              //     pageSize: 3,
              // }}
              dataSource={data}
              renderItem={(item: any) => (
                <List.Item
                  key={item.articleID}

                  actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text={item.likeCount === 0 ? "" : item.likeCount} key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,

                    <Tag style={{ float: "right" }} color="#f2f3f5"><span style={{ color: "#8a919f", fontSize: 13 }}>{item.tags[0]}</span></Tag>
                  ]}
                  extra={
                    <img
                      width={108}
                      height={72}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                      style={{ float: "right" }}
                    />
                  }
                >
                  <List.Item.Meta
                    title={<><Link to={"/article/" + item.articleID}>{item.title}</Link></>}
                  />

                  {item.introduction}

                  <span style={{ color: "#8a919f", fontSize: 13 }}>{item.content}</span>
                </List.Item>
              )}
            />

          </div>


        </div>



      </div>





    </>


  )
}

export default Home