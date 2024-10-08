import React from "react";
import "./my-nav.css";
import CustomSearch from "./my-search";
import { BellOutlined, UserOutlined } from "@ant-design/icons";
import NoticeDropDwon from "../notice-dropdown";
import UserDropDwon from "../user/user-dropdown";
import { Button } from "antd";
import NewArticleDropDwon from "../article/article-menu";
import { LoginStatus } from "../../utils/constant";
import { Link } from "react-router-dom";

const CustomNav = ({ role }) => {
  return (
    <div className="header-nav">
      <div className="logo">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          alt=""
          style={{ cursor: "pointer", width: "100%", height: "100%" }}
        />
      </div>
      <div style={{ width: "30%" }}>
        <ul className="nav-menu">
          <li className="nav-menu-li">
            <span>
              <Link to="/home">首页</Link>
            </span>
          </li>
          <li className="nav-menu-li">
            <span>
              <Link to="/comment">社区圈</Link>
            </span>
          </li>

          <li className="nav-menu-li">
            <span>
              <Link to="/uplog">更新日志</Link>
            </span>
          </li>
          <li className="nav-menu-li">
            <span>
              <Link to="/about">关于本站</Link>
            </span>
          </li>
          {(LoginStatus.ADMIN === role || LoginStatus.SuperAdmin === role) && (
            <li className="nav-menu-li">
              <span>
                <Link to="/admin">管理员页面</Link>
              </span>
            </li>
          )}
        </ul>
      </div>
      <div style={{ width: "60%", paddingRight: "15px" }}>
        <div className="login-down">
          <UserDropDwon>
            <UserOutlined />
          </UserDropDwon>
        </div>
        <div className="notice">
          <NoticeDropDwon>
            <BellOutlined height={"100%"} />
          </NoticeDropDwon>
        </div>
        <div className="search-box">
          <CustomSearch></CustomSearch>
        </div>
        <div style={{ float: "right", marginTop: 0, width: "5%" }}>
          <NewArticleDropDwon>
            <Button size="large" style={{ margin: 0 }}>
              创作
            </Button>
          </NewArticleDropDwon>
        </div>
      </div>
    </div>
  );
};

export default CustomNav;
