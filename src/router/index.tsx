import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../view/system/login";
import Register from "../view/system/register";
import Test from "../view/test";
import Comment from "../view/comment/comment"
import CurrentUser from "../view/user/home";
import Admin from "../view/admin/admin";
import AdminUserView from "../view/admin/user/user-view";
import AdminTagView from "../view/admin/tag/tag";
import AdminCategoryView from "../view/admin/category/category";
import AdminArticleView from "../view/admin/article/article";
import AdminOperationLogView from "../view/admin/log/operation-log";
import AdminSystemLogView from "../view/admin/log/systemlog";
import AdminRouter from "./admin-index";



class Router extends Component {
  render() {
    return (
     
        <Routes>
          <Route path="/" Component={Comment} ></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/test" Component={Test}></Route>
          <Route path="/comment" Component={Comment}></Route>
          <Route path="/currentUser" Component={CurrentUser}></Route>
          <Route path="/admin" Component={Admin}></Route>
          
        </Routes>
   
    );
  }
}

export default Router;
