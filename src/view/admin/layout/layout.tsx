import React from 'react';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AdminMenu from './admin-menu';
import AdminHeader from './admin-header';



const { Header, Sider, Footer } = Layout;


const AdminLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (<>

        <Layout style={{ height: "5%" }}>

            <AdminHeader></AdminHeader>

        </Layout>

        <Layout style={{ height: "95%" }}>
            <Sider width={240} style={{ background: colorBgContainer }}>
                <AdminMenu></AdminMenu>
            </Sider>
            <Layout style={{ padding: '10px' }}>
                <Breadcrumb style={{ margin: '10px' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                {children}
                {/* <Footer style={{
                    textAlign: 'center', fontSize: 16, position: "absolute",
                    bottom: 0,padding:8,margin:"auto"
                }}>Family ©2023 Created by fogocode</Footer> */}
            </Layout>
        </Layout>

    </>
    );
}

export default AdminLayout