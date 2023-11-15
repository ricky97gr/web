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

import { Admin } from "../view/admin/home";
import Comment from "../view/comment/comment";
import Test from "../view/test";
import Register from "../view/system/register";
import ChatHome from "../view/chat/chat";
import CurrentUser from "../view/user/home";
import { SystemInfo } from "../view/admin/system";


export const touristRoutes = [
  <Route path="home" Component={Test}></Route>,
  <Route path="comment" Component={Comment}></Route>,
  <Route path="log" Component={Register}></Route>,
  <Route path="about" Component={Register}></Route>,
  <Route path="chat" Component={ChatHome}></Route>,
  <Route path="currentUser" Component={CurrentUser}></Route>
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
      <Route path="systeminfo" Component={SystemInfo}></Route>
    </Route>
  </>
);
