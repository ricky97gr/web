import React from "react";
import ArticleInfo from "../../component/article/article-info";
import ViewMd from "../../component/article/articleViewer";
import './articleView.css'

const OneArticleView = () => {
  return (
    <>
      <div className="article-body">
        <div style={{ width: "90%", margin: "auto" }}><p>title</p></div>
        <div style={{ width: "90%", margin: "auto" }}>
          <span>author</span>
          <span>标签</span>
          <span>分类</span>
          <span>阅读量</span>
          <span>举报</span>
          <span>纠错</span>
        </div>
        <div className="article-copyright-info"> 版权信息</div>
        <div style={{ width: "90%", margin: "auto", marginTop: 20 }}>
          <ViewMd></ViewMd>
        </div>

      </div>

    </>
  )

}

export default OneArticleView