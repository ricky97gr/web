import React, { Component, useState } from "react";
import CustomDropDown from "../base/my-dropdown";
import type { MenuProps } from "antd";
import UserInfoDrawer from "./user-info-drawer";
import { clearLocalUserInfo } from "../../utils/auth";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: <a href="/currentUser">我的主页</a>,
  },
  {
    key: "2",
    label: <span>个人中心</span>,
  },
  {
    key: "3",
    label: <a href="/login" onClick={clearLocalUserInfo}>退出登录</a>,
  },
];

interface UserDropDwonProps {
  children?: any;
}

const UserDropDwon = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    if (e.key === '2') {
      setIsOpen(true);
    }
  };

  return (
    <>
      <CustomDropDown
        items={items}
        children={children}
        onClick={handleMenuClick}
      ></CustomDropDown>
      <UserInfoDrawer
        isOpen={isOpen}
        UpdateValue={setIsOpen}
      ></UserInfoDrawer>
    </>
  );

}
export default UserDropDwon;
