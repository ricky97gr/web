import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import AdminTagView from "../tag/tag";
import AdminUserView from "../user/user-view";
import Admin from "../admin";
import { useNavigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("首页", "/admin/home"),
  getItem("用户管理", "/admin/user"),
  getItem("标签管理", "/admin/tags"),
  getItem("分类管理", "/admin/category"),
  getItem("话题管理", "/admin/topic"),
  getItem("文章管理", "/admin/article"),
  getItem("日志管理", "log", null, [
    getItem("操作日志", "/admin/operationlog"),
    getItem("系统日志", "/admin/systemlog"),
  ]),
];

const AdminMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();
  const onclick = (e) => {
    console.log(e);
    navigate(e.key, { replace: true });
  };

  return (
    <div style={{ width: "100%" }}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        style={{ width: "100%", height: "100%" }}
        items={items}
        onClick={onclick}
      />
    </div>
  );
};

export default AdminMenu;
