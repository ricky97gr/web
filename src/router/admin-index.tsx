import React, { Component } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";


import { adminRouters } from "./routes";

const AdminRouter = () => {
  return <Routes>{adminRouters}</Routes>;
};

export default AdminRouter;
