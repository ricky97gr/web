import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
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
  // getItem('首页', 'sub1', <MailOutlined />, [
  //     getItem('Option 1', '1'),
  //     getItem('Option 2', '2'),
  //     getItem('Option 3', '3'),
  //     getItem('Option 4', '4'),])
  getItem(<a href='/admin/home'>首页</a>, 'sub1'),
  getItem(<a href='/admin/user'>用户管理</a>, 'sub2'),
  getItem(<a href='/admin/tags'>标签管理</a>, 'sub3'),
  getItem(<a href='/admin/category'>分类管理</a>, 'sub4'),
  getItem(<a href="/admin/article">文章管理</a>, 'sub5'),
  getItem('日志管理', 'sub6',null,[
    getItem(<a href='/admin/operationlog'>操作日志</a>, "1"),
    getItem(<a href='/admin/systemlog'>系统日志</a>,"2"),]),

]

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5', 'sub6'];

const AdminMenu = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  const [current, setCurrent] = useState('sub1');

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key)
  }
  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256, height: "100%" }}
      items={items}
    />
  )
}

export default AdminMenu;