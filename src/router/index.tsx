import React, { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "../view/system/login";
import Register from "../view/system/register";
import Test from "../view/test";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>register</button>
        </Link>
        <Link to="/test">
          <button>test</button>
        </Link>
        <Routes>
          <Route path="/login" Component={Login}></Route>
          <Route path="/register" Component={Register}></Route>
          <Route path="/test" Component={Test}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
