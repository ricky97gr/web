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
import Comment from "../view/comment";
import Register from "../view/system/register";
import ChatHome from "../view/chat/chat";
import CurrentUser from "../view/user/home";
import { SystemInfo } from "../view/admin/system";
import PluginView from "../view/admin/plugin";
import OneArticleView from "../view/article/articleView";
import Home from "../view/home";
import UserHome from "../view/user/component/UserHome";
import AdminFeedbackPage from "../view/admin/feedback";
import BackupConfigPage from "../view/admin/backup/backup";

export const touristRoutes = [
  <Route path="home" Component={Home}></Route>,
  <Route path="comment" Component={Comment}></Route>,
  // <Route path="uplog" Component={OneArticleView}></Route>,
  <Route path="about" Component={Register}></Route>,
  <Route path="chat" Component={ChatHome}></Route>,
  <Route path="currentUser" Component={CurrentUser}></Route>,
  <Route path="article/:id" element={<OneArticleView />}></Route>,
  <Route path="user/:id/:name" element={<UserHome />}></Route>,
  // <Route path="article" Component={OneArticleView}></Route>,
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
      <Route path="plugin" Component={PluginView}></Route>
      <Route path="feedback" Component={AdminFeedbackPage}></Route>
      <Route path="backup" Component={BackupConfigPage}></Route>
    
    </Route>
  </>
);
