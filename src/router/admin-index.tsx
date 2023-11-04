import React, { Component } from "react";
import { BrowserRouter, Route, Router, Routes, } from "react-router-dom";


import AdminUserView from "../view/admin/user/user-view";
import Admin from "../view/admin/admin";
import AdminArticleView from "../view/admin/article/article";
import AdminCategoryView from "../view/admin/category/category";
import AdminOperationLogView from "../view/admin/log/operation-log";
import AdminSystemLogView from "../view/admin/log/systemlog";
import AdminTagView from "../view/admin/tag/tag";





const AdminRouter = () => {

    return (
        <Routes>
            <Route path="/admin" Component={Admin}></Route>
            <Route path="/admin/user" Component={AdminUserView} ></Route>
            <Route path="/admin/tags" Component={AdminTagView}></Route>
            <Route path="/admin/category" Component={AdminCategoryView}></Route>
            <Route path="/admin/article" Component={AdminArticleView}></Route>
            <Route path="/admin/operationlog" Component={AdminOperationLogView}></Route>
            <Route path="/admin/systemlog" Component={AdminSystemLogView}></Route>
        </Routes>

    );

}

export default AdminRouter;
