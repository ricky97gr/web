import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../view/system/login";
import Register from "../view/system/register";
import Test from "../view/test";
import Comment from "../view/comment/comment"

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Comment}></Route>
          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/test" Component={Test}></Route>
          <Route path="/comment" Component={Comment}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
