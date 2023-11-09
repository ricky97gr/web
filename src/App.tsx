import React, { useEffect, useState } from 'react';
import './App.css';

import { Menu } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import AdminRouter from './router/admin-index';
import CommonRouter from './router/comm-index';
import AdminLayout from './view/admin/layout/layout';
import Router from './router';
import CustomNav from './component/base/my-nav';


const App = () => {
  const [loadAdminRouter, setLoadAdminRouter] = useState(false)

  return (
    <div className="App">
      <BrowserRouter>

        <CommonRouter></CommonRouter>
      </BrowserRouter>

      <CustomNav showAdmin={setLoadAdminRouter}></CustomNav>

      <BrowserRouter>
        {/* {loadAdminRouter === false ? <Router></Router> : <AdminLayout></AdminLayout>} */}
        <Router></Router>

      </BrowserRouter>


    </div>

  )
}

export default App;