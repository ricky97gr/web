import { Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import AdminMenu from "../layout/admin-menu";
import React from "react";
import { Content } from "antd/es/layout/layout";
import { Outlet, Route } from "react-router-dom";


export const Admin = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "95%" }}>
      <Sider width={256} style={{ background: colorBgContainer, height: "100%" }} >
        <AdminMenu></AdminMenu>
      </Sider>
      <Layout style={{ padding: "8px" }}>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
