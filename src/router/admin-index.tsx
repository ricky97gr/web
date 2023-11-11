import React, { Component } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import AdminUserView from "../view/admin/user/user-view";

import AdminArticleView from "../view/admin/article/article";
import AdminCategoryView from "../view/admin/category/category";
import AdminOperationLogView from "../view/admin/log/operation-log";
import AdminSystemLogView from "../view/admin/log/systemlog";
import AdminTagView from "../view/admin/tag/tag";
import AdminHome from "../view/admin/admin";
import AdminTopicView from "../view/admin/topic/topic";
import { adminRouters } from "./routes";

const AdminRouter = () => {
  return <Routes>{adminRouters}</Routes>;
};

export default AdminRouter;
