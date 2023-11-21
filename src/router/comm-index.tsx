import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { touristRoutes } from "./routes";
import Login from "../view/system/login";
import Register from "../view/system/register";

const CommonRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" Component={Login}></Route>
        <Route path="/register" Component={Register}></Route>
        {touristRoutes.map((route) => route)}
      </Routes>
    </>
  );
};

export default CommonRouter;
