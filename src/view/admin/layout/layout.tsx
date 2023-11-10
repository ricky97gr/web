import React from 'react';

import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AdminMenu from './admin-menu';
import AdminHeader from './admin-header';
import AdminRouter from '../../../router/admin-index';
import { Content } from 'antd/es/layout/layout';
import { BrowserRouter } from 'react-router-dom';



const { Header, Sider, Footer } = Layout;


const AdminLayout = () => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <>
            {/* <Layout style={{ height: "5%" }}>
                <Header style={{ backgroundColor: "white" }}>
                    <AdminHeader></AdminHeader>
                </Header>
            </Layout> */}

            <Layout style={{ height: "95%" }}>
                <Sider width={256} style={{ background: colorBgContainer }}>
                    <AdminMenu></AdminMenu>
                </Sider>
                <Layout style={{ padding: '8px' }}>
                    {/* <Breadcrumb style={{ margin: '5px', width: "80%" }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Content>
                        <AdminRouter></AdminRouter>
                    </Content>

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