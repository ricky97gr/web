import React, { useEffect, useState } from "react";
import "./App.css";

import { Button, FloatButton, Menu } from "antd";
import { BrowserRouter } from "react-router-dom";
import AdminRouter from "./router/admin-index";
import CommonRouter from "./router/comm-index";
import CustomNav from "./component/base/my-nav";
import { LoginStatus } from "./utils/constant";
import { CommentOutlined } from "@ant-design/icons";
import { getLocalRole } from "./utils/auth";

const App = () => {


  return (
    <div className="App">

      <CustomNav role={getLocalRole()}></CustomNav>
      {(getLocalRole() === LoginStatus.ADMIN || getLocalRole() === LoginStatus.SuperAdmin) ? <AdminRouter /> : <CommonRouter />}
      <FloatButton
        shape="circle"
        href="/chat"
        style={{ right: 50 }}
        icon={<CommentOutlined />}
      />
    </div>
  );
};

export default App;
