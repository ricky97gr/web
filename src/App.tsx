import React, { useEffect, useState } from "react";
import "./App.css";

import { Button, FloatButton, Menu } from "antd";
import { BrowserRouter } from "react-router-dom";
import AdminRouter from "./router/admin-index";
import CommonRouter from "./router/comm-index";
import CustomNav from "./component/base/my-nav";
import { LoginStatus } from "./utils/constant";
import { CommentOutlined } from "@ant-design/icons";

const App = () => {
  const [role, setRole] = useState<LoginStatus>(LoginStatus.TOURIST);
  useEffect(() => {
    setRole(
      sessionStorage.getItem("logon") === "true"
        ? LoginStatus.ADMIN
        : LoginStatus.TOURIST
    );
  }, []);

  return (
    <div className="App">
      <Button
        onClick={() => {
          setRole(
            role === LoginStatus.ADMIN ? LoginStatus.TOURIST : LoginStatus.ADMIN
          );
          sessionStorage.setItem("logon", "true");
          window.location.reload();
        }}
      >
        登录成功
      </Button>
      <Button
        onClick={() => {
          sessionStorage.setItem("logon", "false");
          window.location.reload();
        }}
      >
        退出登录
      </Button>
      <CustomNav role={role}></CustomNav>
      {role === LoginStatus.ADMIN ? <AdminRouter /> : <CommonRouter />}
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
