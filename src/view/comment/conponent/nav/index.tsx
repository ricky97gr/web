import { Affix, Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { myFetch } from "../../../../utils/fetch";
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

const CommentNav = ({ updateData }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(["1"]);
  const [items, setItems] = useState([
    getItem("chatGPT", "1", null, true),
    getItem("最新", "2"),
    getItem("最热", "3"),
  ]);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const getAllComment = (key) => {
    let p = MyQuery({
      page: 1,
      pageSize: 20,
      cons: [{ field: "topic", value: key, operation: 1 }],
      sorts: [{ field: "createTime", orderBy: -1 }],
    });
    if (key === "") {
      delete p["conditions"];
      p["sorts"] = [{ field: "createTime", orderBy: -1 }];
    }
    if (key === "1") {
      delete p["conditions"];
    }
    if (key === "2") {
      delete p["conditions"];
    }
    if (key === "3") {
      delete p["conditions"];
      p["sorts"] = [
        { field: "likeCount", orderBy: -1 },
        { field: "createTime", orderBy: -1 },
      ];
    }
    myFetch({ url: "/comment", options: { method: "GET" }, params: p }).then(
      (data) => {
        updateData(data.body.result);
      }
    );
  };

  const getAllTopic = () => {
    myFetch({ url: "/normalUser/topic", options: { method: "GET" } }).then(
      (data) => {
        if (data.body.code !== 200) {
          return;
        }
        const newItems = [...items];
        for (let i = 0; i < data.body.result.length; i++) {
          newItems.push(
            ...[getItem(data.body.result[i].name, data.body.result[i].name)]
          );
        }

        setItems(newItems);
      }
    );
  };
  useEffect(() => {
    getAllTopic();
    getAllComment("");
  }, []);

  const onclick = (e) => {
    setSelectedKeys([e.key]);
    getAllComment(e.key);
  };

  return (
    <Affix offsetTop={80} onChange={(affixed) => console.log(affixed)}>
      <Menu
        defaultSelectedKeys={["2"]}
        defaultOpenKeys={["2"]}
        mode="inline"
        inlineCollapsed={collapsed}
        style={{ width: "100%", height: "100%" }}
        items={items}
        onClick={onclick}
      />
    </Affix>
  );
};

export default CommentNav;
