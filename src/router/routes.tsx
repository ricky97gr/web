import React, { ComponentType } from "react";
import { Route, Routes } from "react-router-dom";
import AdminHome from "../view/admin/admin";
import AdminUserView from "../view/admin/user/user-view";
import AdminTagView from "../view/admin/tag/tag";
import AdminCategoryView from "../view/admin/category/category";
import AdminArticleView from "../view/admin/article/article";
import AdminOperationLogView from "../view/admin/log/operation-log";
import AdminSystemLogView from "../view/admin/log/systemlog";
import AdminTopicView from "../view/admin/topic/topic";
import { Button } from "antd";
import { Aboout, Log, ToursitHome, Comment } from "../view/will_be_delete/test";
import { Admin } from "../view/admin/home";

export const touristRoutes = [
  <Route path="home" Component={ToursitHome}></Route>,
  <Route path="comment" Component={Comment}></Route>,
  <Route path="log" Component={Log}></Route>,
  <Route path="about" Component={Aboout}></Route>,
];

export const adminRouters = (
  <>
    {touristRoutes.map((item) => item)}
    <Route path="admin" Component={Admin}>
      <Route path="home" Component={AdminHome}></Route>
      <Route path="user" Component={AdminUserView}></Route>
      <Route path="tags" Component={AdminTagView}></Route>
      <Route path="category" Component={AdminCategoryView}></Route>
      <Route path="article" Component={AdminArticleView}></Route>
      <Route path="operationlog" Component={AdminOperationLogView}></Route>
      <Route path="systemlog" Component={AdminSystemLogView}></Route>
      <Route path="topic" Component={AdminTopicView}></Route>
    </Route>
  </>
);
