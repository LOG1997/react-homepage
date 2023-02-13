
import { useRoutes } from "react-router-dom";
import React, { Suspense, lazy } from 'react';
// import Loading from "@/components/Skeleton";
import { routes_config } from "./router.config";
import Layout from "@/layouts";

const routes = [
    {
        path: "/",
        component: Layout,
        children: [
            {
                path: "/",
                component: lazy(() => import('@/views/Root')),
            },
            ...routes_config
        ]
    }


];
const checkAuth = (routers: any, path: string) => {
    for (const data of routers) {
        if (data.path === path) {
            return data;
        }
        if (
            data.children
        ) {
            const res: unknown = checkAuth(data.children, path);
            if (res) { return res; }
        }
    }
    return null;
};

const generateRouter = (routers: any) => {
    const rout = routers.map((item: any) => {
        if (item.children) {
            item.children = generateRouter(item.children);
        }
        item.element = <Suspense fallback={<div>加载中</div>}>
            <item.component />
        </Suspense>;

        return item;
    });

    // console.log('😋rout:', rout)
    return rout;
};
// 生成路由
const Router = () => {
    const routerRes = useRoutes(generateRouter(routes));
    // console.log('😊routerRes:', routerRes);
    return routerRes;
};
const checkRouterAuth = (path: string) => {
    let auth = null;
    auth = checkAuth(routes, path);
    return auth;
};

export { Router, checkRouterAuth };