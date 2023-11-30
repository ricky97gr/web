import { LikeOutlined, MessageOutlined, ShareAltOutlined, StarOutlined, WarningOutlined } from "@ant-design/icons";
import { Affix, Card, FloatButton, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ViewMd from "../../component/article/articleViewer";
import { myFetch } from "../../utils/fetch";
import './articleView.css';
const OneArticleView = () => {
  type articleInfo = {
    title: string
    userName: string
    tags: string[],
    category: string,
    context: string,
  }

  const params = useParams()
  let articleID = params["id"]

  const [article, setArticle] = useState<articleInfo>({ title: "", userName: "", tags: [""], category: "", context: "" })
  const getArticleInfo = () => {
    myFetch({ url: "/normalUser/article/" + articleID, options: { method: "GET", } }).then((data) => {
      console.log(data.body.result)
      setArticle(data.body.result)
    })
  }
  useEffect(() => {
    getArticleInfo()
  }, [])
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
            <div style={{ width: "100%", }}><p>{article.title}</p></div>
            <div style={{ width: "100%", fontSize: 14, marginTop: 12, marginBottom: 12 }}>
              <Tag color="grey" style={{ marginRight: 10 }}><span >{article.userName}</span></Tag>
              <Tag color="blue" style={{ marginRight: 10 }}><span >{article.tags[0]}</span></Tag>
              <Tag color="green" style={{ marginRight: 10 }}><span >{article.category}</span></Tag>
              {/* <span style={{ marginRight: 10 }}>阅读量</span>
              <span style={{ marginRight: 10 }}>举报</span>
              <span style={{ marginRight: 10 }}>纠错</span> */}
            </div>
            <div className="article-copyright-info"> 版权信息</div>
            <div style={{ width: "95%", margin: "auto", }}>
              <ViewMd context={article.context}></ViewMd>
            </div>

          </div>

        </div>
      </div >



    </>
  )

}

export default OneArticleView