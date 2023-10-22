import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import AdminUserView from "../view/admin/user/user-view";



class AdminRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/admin/user" Component={AdminUserView}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AdminRouter;
