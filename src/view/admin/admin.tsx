import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AdminMenu from './layout/admin-menu';
import CustomNav from '../../component/base/my-nav';
import AdminRouter from '../../router/admin-index';


const { Header, Content, Sider, Footer } = Layout;


const Admin = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (<>
    <Layout>
    <Header style={{}}>
        {/* <div className="demo-logo" /> */}
        {/* <CustomNav></CustomNav> */}
      </Header>
    </Layout>
    
    <Layout>
        <Sider width={256} style={{ background: colorBgContainer }}>
          <AdminMenu></AdminMenu>
        </Sider>
        <Layout style={{ padding: '10px' }}>
          <Breadcrumb style={{ margin: '10px' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Footer style={{ textAlign: 'center', fontSize:16}}>Family ©2023 Created by fogocode</Footer>
        </Layout>
      </Layout>
    
    </>
    );
}

export default Admin