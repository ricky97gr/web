import React, { Component } from 'react';

import { Route, Routes } from 'react-router-dom';

import Login from '../view/system/login.tsx'
import Register from '../view/system/register.tsx'
import Test from '../view/test.tsx';

class Router extends Component{
    render(){
        return(
            <Routes>
                <Route path="/login" Component={Login}></Route>
                <Route path="/register" Component={Register}></Route>
                <Route path="/test" Component={Test}></Route>
            </Routes>
        )
    }
}


export default Router;
