

import { Affix, Menu, MenuProps } from "antd";
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
  getItem("最新", "2"),
  getItem("最热", "3"),
  getItem("上班摸鱼", "4"),
  getItem("书影音", "5"),
  getItem("吃喝玩乐", "6"),
  getItem("许愿池", "7", null),
  getItem("资讯", "8", null),
  getItem("理财", "9", null),

];


const CommentNav = () => {
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

export default CommentNav