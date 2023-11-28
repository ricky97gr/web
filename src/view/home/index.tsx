import React from "react";

import './index.css'
import { List, Space, Card, Button, Tag, Affix } from "antd";

import { StarOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import HomeNav from "./component/nav";

const Home = () => {
  const data = Array.from({ length: 23 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: `https://xsgames.co/randomusers/avatar.php?g=pixel&key=${i}`,
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  }));

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
          <div style={{ maxWidth: 820, backgroundColor: "#fff", float: "left", marginRight: 10, marginLeft: 10 }}>
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
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                  actions={[
                    <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                    <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                    <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    <Tag style={{ float: "right" }} color="#f2f3f5"><span style={{ color: "#8a919f", fontSize: 13 }}>go</span></Tag>
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
                  />
                  <p style={{ fontSize: 16, color: "#252933", fontWeight: 600 }}>
                    {item.title}
                  </p>
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