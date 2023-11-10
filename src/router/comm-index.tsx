import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../view/system/login";
import Register from "../view/system/register";

const CommonRouter = () => {

    return (

        <Routes>
            <Route path="/login" Component={Login}></Route>
            <Route path="/register" Component={Register}></Route>
        </Routes>

    )

}

export default CommonRouter