import React from 'react';
import Router from './router/index';
import './App.css'
import CustomDropDown from './component/base/my-dropdown';

import { BrowserRouter } from 'react-router-dom';
import AdminRouter from './router/admin-index';


const App = () => (

  <div className="App">
    <BrowserRouter>
      <Router />
    </BrowserRouter>

    <BrowserRouter>
      <AdminRouter />

    </BrowserRouter>

  </div>


);

export default App;