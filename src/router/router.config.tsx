
import { lazy } from 'react';

export const routes_config = [

    {
        path: "/homepage1",
        component: lazy(() => import('@/views/Homepage1')),
        meta: {
            title: 'Homepage1',
            icon: 'home1',
            description: 'Homepage1'
        },
        children: []
    },

    {
        path: "/homepage2",
        component: lazy(() => import('@/views/Homepage2')),
        meta: {
            title: 'Homepage2',
            icon: 'home2',
            description: 'Homepage2'
        },
        children: []
    }
];