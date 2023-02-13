import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { Outlet } from "react-router-dom";
import { Layout, theme } from 'antd';
import { asyncGetUserinfo } from '@/reduce/modules/user';
import '@/style/layout/index.scss'


const LayoutContainer: React.FC = () => {
    const dispatch = useDispatch();
    dispatch(asyncGetUserinfo() as any)


    return (
        <Layout className='layout'>
            <Outlet></Outlet>
        </Layout >
    );
};

export default LayoutContainer;
