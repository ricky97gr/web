

import { LikeOutlined, StarOutlined, MessageOutlined, ShareAltOutlined, WarningOutlined } from "@ant-design/icons";
import { Affix, FloatButton, Menu, MenuProps } from "antd";
import React, { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  //标题
  label: React.ReactNode,
  //唯一标识
  key: React.Key,
  //图标
  icon?: React.ReactNode,
  disabled?: boolean,
  children?: MenuItem[],
  type?: "group",

): MenuItem {
  return {
    key,
    icon,
    disabled,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("chatGPT", "1", null, true),
  getItem("综合", "2"),
  getItem("后端", "3"),
  getItem("前端", "4"),
  getItem("算法", "5"),
  getItem("操作系统", "6"),
  getItem("网络", "7", null),
  getItem("工具", "8", null),
  getItem("人生百态", "9", null),

];


const HomeNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const onclick = () => {

  }
  return (

    <Affix offsetTop={80} onChange={(affixed) => console.log(affixed)}>
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        style={{ width: "100%", height: "100%" }}
        items={items}
        onClick={onclick}

      />

    </Affix>


  )
}

export default HomeNav