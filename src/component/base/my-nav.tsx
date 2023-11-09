
import React from "react";
import "./my-nav.css"
import CustomSearch from "./my-search"
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import NoticeDropDwon from "../notice-dropdown";
import UserDropDwon from "../user/user-dropdown";
import { Button } from "antd";
import NewArticleDropDwon from "../article/article-menu";

const CustomNav = ({ showAdmin }) => {
    const click = () => {
        showAdmin(true)
    }
    return (
        <div className="header-nav">
            <div className="logo">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" alt="" style={{ cursor: "pointer", width: "100%", height: "100%" }} />
            </div>
            <div >
                <ul className="nav-menu">
                    <li className="nav-menu-li">
                        <span>
                            <a href="/test">
                                首页
                            </a>
                        </span>
                    </li>
                    <li className="nav-menu-li">
                        <span>
                            <a href="/comment">
                                社区圈
                            </a>
                        </span>
                    </li>

                    <li className="nav-menu-li">
                        <span>
                            <a href="/register">
                                更新日志
                            </a>
                        </span>
                    </li>
                    <li className="nav-menu-li">
                        <span>
                            <a href="/register">
                                关于本站
                            </a>
                        </span>
                    </li>
                    <li className="nav-menu-li">
                        <span>
                            <a href="/admin" onClick={click}>
                                管理员页面
                            </a>
                        </span>
                    </li>
                </ul>
            </div>


            <div className="login-down">
                <UserDropDwon>
                    <UserOutlined />
                </UserDropDwon>
            </div>
            <div className="notice">
                <NoticeDropDwon>
                    <BellOutlined />
                </NoticeDropDwon>

            </div>
            <div className="search-box">
                <CustomSearch></CustomSearch>
            </div>
            <div style={{ float: "right", marginTop: 0, width: "5%" }}>
                <NewArticleDropDwon>
                    <Button size="large" style={{ margin: 0 }}>创作</Button>
                </NewArticleDropDwon>

            </div>
        </div>
    )
}

export default CustomNav;