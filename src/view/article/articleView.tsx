import React from "react";
import ArticleInfo from "../../component/article/article-info";
import ViewMd from "../../component/article/articleViewer";
import './articleView.css'
import { Affix, Card, FloatButton } from "antd";
import { LikeOutlined, MessageOutlined, ShareAltOutlined, StarOutlined, WarningOutlined } from "@ant-design/icons";

const OneArticleView = () => {
  return (
    <>
      <div style={{ maxWidth: 1200, margin: "auto", marginTop: 15 }}>
        <div className="article-left" style={{ width: 30, float: "left", position: "relative" }}>
          <Affix offsetTop={80} onChange={(affixed) => console.log(affixed)}>
            <FloatButton.Group shape="circle" style={{ position: "absolute", top: 10, right: 10 }}>
              <FloatButton icon={<LikeOutlined />}></FloatButton>
              <FloatButton icon={<StarOutlined />}></FloatButton>
              <FloatButton icon={<MessageOutlined />}></FloatButton>
              <FloatButton icon={<ShareAltOutlined />}></FloatButton>
              <FloatButton icon={<WarningOutlined />}></FloatButton>
            </FloatButton.Group>


          </Affix>

        </div>
        <div style={{ maxWidth: 1300, marginLeft: 12 }}>
          <div className="article-right" style={{ width: 260, float: "right" }}>
            <Card style={{ width: "100%", marginTop: 12 }}>作者信息</Card>
            <Card style={{ width: "100%", marginTop: 12 }}>目录</Card>
            <Card style={{ width: "100%", marginTop: 12 }}>相关推荐</Card>
            <Card style={{ width: "100%", marginTop: 12 }}>广告位1</Card>
          </div>
          <div className="article-body" style={{ maxWidth: 850, float: "right", marginRight: 10, marginLeft: 10, padding: 12 }}>
            <div style={{ width: "100%", }}><p>title</p></div>
            <div style={{ width: "100%", }}>
              <span>author</span>
              <span>标签</span>
              <span>分类</span>
              <span>阅读量</span>
              <span>举报</span>
              <span>纠错</span>
            </div>
            <div className="article-copyright-info"> 版权信息</div>
            <div style={{ width: "95%", margin: "auto", }}>
              <ViewMd></ViewMd>
            </div>

          </div>

        </div>
      </div >



    </>
  )

}

export default OneArticleView