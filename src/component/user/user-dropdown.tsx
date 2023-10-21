import React, { Component } from "react";
import CustomDropDown from "../base/my-dropdown";
import type { MenuProps } from "antd";
import UserInfoDrawer from "./user-info-drawer";

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a href="/currentUser">我的主页</a>
        ),
    },
    {
        key: '2',
        label: (
            <span>个人中心</span>
        ),
    },
    {
        key: '3',
        label: (
            <a href="/login">退出登录</a>
        ),

    },
];

interface UserDropDwonProps {
    children?: any
}

class UserDropDwon extends Component <UserDropDwonProps>{
   state={
    isOpen: false,
   }
    
    onclick = ({ key }) => {
        console.log(key)
        if (key === '2') {
            this.setState(()=>({
                isOpen :true
            }));
        }
    }
    udpateIsOpen=(open)=>{
        this.setState(()=>({
            isOpen :open
        }));}
        

    render(){
        return (
            <>
                <CustomDropDown items={items} children={this.props.children } onClick={this.onclick}></CustomDropDown>
                <UserInfoDrawer isOpen={this.state.isOpen} UpdateValue={this.udpateIsOpen}></UserInfoDrawer>
            </>

        )
    }
}
export default UserDropDwon