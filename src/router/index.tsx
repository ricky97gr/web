import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Comment from "../view/comment/comment";

import AdminLayout from "../view/admin/layout/layout";
import Test from "../view/test";
import CurrentUser from "../view/user/home";
import ChatHome from "../view/chat/chat";




class Router extends Component {
  render() {
    return (

      <Routes>
        <Route path="/" Component={Comment} ></Route>
        {/* <Route path="/admin" Component={AdminLayout}></Route> */}
        <Route path="/test" Component={Test}></Route>
        <Route path="/comment" Component={Comment}></Route>
        <Route path="/currentUser" Component={CurrentUser}></Route>
        <Route path="/admin" Component={AdminLayout}></Route>
        <Route path="chat" Component={ChatHome}></Route>


      </Routes>

    );
  }
}

export default Router;
