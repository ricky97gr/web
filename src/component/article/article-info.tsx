import { Card } from "antd";
import React from "react";
import './article-info.css'

interface ArticleInfoProps{
    title :string
    abstract: string
    author: string
    avator: string
    tags: string[]
    lookcount: number
    likecount:number
    unlickcount:number
    savecount:number
    createtime:string
}

const ArticleInfo =()=>{
    
        return (
            <Card style={{ width: 800, margin: 5 }}>
               <div className="article-title"><h2>文章标题</h2></div>
               <div className="article-abstract">这是文章的摘要信息</div>
               <div className="article-info">
                <ul>
                    <li>
                        <img src="https://picture.moguit.cn//blog/admin/jpg/2022/12/30/1672381731245.jpg" alt="" style={{height:"36px", width:"36px"}}/>
                    </li>
                    <li>
                        author
                    </li>
                    <li>
                        标签
                    </li>
                    <li>阅读次数</li>
                    <li>收藏数</li>
                    <li>点赞数</li>
                    <li>踩数</li>
                    <li>创建时间</li>
                </ul>
               </div>
            </Card>
        )
    }

export default ArticleInfo