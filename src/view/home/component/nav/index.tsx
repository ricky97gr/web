import { Affix, FloatButton, Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { myFetch } from "../../../../utils/fetch";
import MenuItem from "antd/es/menu/MenuItem";
import MyQuery from "../../../../utils/query";

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
  type?: "group"
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

const HomeNav = ({ updateData }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(["1"]);

  const [items, setItems] = useState([
    getItem("chatGPT", "1", null, true),
    getItem("综合", "2"),
  ]);

  // const items: MenuItem[] = [
  //   getItem("chatGPT", "1", null, true),
  //   getItem("综合", "2"),
  //   getItem("后端", "3"),
  //   getItem("前端", "4"),
  //   getItem("算法", "5"),
  //   getItem("操作系统", "6"),
  //   getItem("网络", "7", null),
  //   getItem("工具", "8", null),
  //   getItem("人生百态", "9", null),
  // ];

  const getAllCategory = () => {
    myFetch({ url: "/normalUser/category", options: { method: "GET" } }).then(
      (data) => {
        if (data.body.code !== 200) {
          return;
        }
        const newItems = [...items];
        for (let i = 0; i < +data.body.result.length; i++) {
          newItems.push(
            ...[getItem(data.body.result[i].name, data.body.result[i].name)]
          );
        }

        setItems(newItems);
      }
    );
  };
  useEffect(() => {
    getAllCategory();
    getAllArticle("");
  }, []);

  const onclick = (e) => {
    setSelectedKeys([e.key]);
    getAllArticle(e.key);
  };

  const getAllArticle = (key) => {
    let p = MyQuery({
      page: 1,
      pageSize: 20,
      cons: [{ field: "category", value: key, operation: 1 }],
    });
    if (key === "" || key === "1" || key === "2") {
      delete p["conditions"];
    }
    myFetch({
      url: "/normalUser/article",
      options: { method: "GET" },
      params: p,
    }).then((data) => {
      updateData(data.body.result);
    });
  };

  return (
    <Affix offsetTop={80} onChange={(affixed) => console.log(affixed)}>
      <Menu
        selectedKeys={selectedKeys}
        defaultOpenKeys={["1"]}
        mode="inline"
        inlineCollapsed={collapsed}
        style={{ width: "100%", height: "100%" }}
        items={items}
        onClick={onclick}
      />
    </Affix>
  );
};

export default HomeNav;
