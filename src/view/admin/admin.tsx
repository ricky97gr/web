import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import AdminMenu from './layout/admin-menu';
import CustomNav from '../../component/base/my-nav';
import AdminRouter from '../../router/admin-index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminArticleView from './article/article';
import AdminCategoryView from './category/category';
import AdminOperationLogView from './log/operation-log';
import AdminSystemLogView from './log/systemlog';
import AdminTagView from './tag/tag';
import AdminUserView from './user/user-view';
import AdminLayout from './layout/layout';



const Admin = () => {
  return (
    <AdminLayout></AdminLayout>
  )
}

export default Admin