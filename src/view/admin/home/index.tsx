import { Layout, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import AdminMenu from "../layout/admin-menu";
import React from "react";
import { Content } from "antd/es/layout/layout";
import { Outlet, Route } from "react-router-dom";
import AdminHome from "../admin";
import AdminUserView from "../user/user-view";
import AdminTagView from "../tag/tag";
import AdminCategoryView from "../category/category";
import AdminArticleView from "../article/article";
import AdminOperationLogView from "../log/operation-log";
import AdminSystemLogView from "../log/systemlog";
import AdminTopicView from "../topic/topic";

export const Admin = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ height: "95%" }}>
      <Sider width={256} style={{ background: colorBgContainer }}>
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
