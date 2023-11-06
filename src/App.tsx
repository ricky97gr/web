import React from 'react';
import './App.css';

import { Menu } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import AdminRouter from './router/admin-index';
import CommonRouter from './router/comm-index';
import AdminLayout from './view/admin/layout/layout';
import Router from './router';


const App = () => {

  return (
    <div className="App">

      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <BrowserRouter>
        <AdminRouter />
      </BrowserRouter>





      {/* <Router /> */}

    </div>

  )
}

export default App;