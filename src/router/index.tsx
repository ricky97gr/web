import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../view/admin/admin";
import Comment from "../view/comment/comment";
import Login from "../view/system/login";
import Register from "../view/system/register";
import Test from "../view/test";
import CurrentUser from "../view/user/home";
import AdminArticleView from "../view/admin/article/article";
import AdminCategoryView from "../view/admin/category/category";
import AdminOperationLogView from "../view/admin/log/operation-log";
import AdminSystemLogView from "../view/admin/log/systemlog";
import AdminTagView from "../view/admin/tag/tag";
import AdminUserView from "../view/admin/user/user-view";



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


      </Routes>

    );
  }
}

export default Router;
