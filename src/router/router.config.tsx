
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
    }, {
        path: "/homepage3",
        component: lazy(() => import('@/views/Homepage3')),
        meta: {
            title: 'Homepage3',
            icon: 'home3',
            description: 'Homepage3'
        },
        children: []
    }
    , {
        path: "/homepage4",
        component: lazy(() => import('@/views/Homepage4')),
        meta: {
            title: 'Homepage4',
            icon: 'home4',
            description: 'Homepage4'
        },
        children: []
    }, {
        path: "/homepage5",
        component: lazy(() => import('@/views/Homepage5/canvas')),
        meta: {
            title: 'Homepage5',
            icon: 'home5',
            description: 'Homepage5'
        },
        children: []
    }, {
        path: "/homepage6",
        component: lazy(() => import('@/views/Homepage6')),
        meta: {
            title: 'Homepage6',
            icon: 'home6',
            description: 'Homepage6'
        },
    }, {
        path: "/homepage7",
        component: lazy(() => import('@/views/Homepage7')),
        meta: {
            title: 'Homepage7',
            icon: 'home7',
            description: 'Homepage7'
        },
    },
    {
        path: "/homepage8",
        component: lazy(() => import('@/views/Homepage8')),
        meta: {
            title: 'Homepage8',
            icon: 'home8',
            description: 'Homepage8'
        },
    },
    {
        path: "/homepage9",
        component: lazy(() => import('@/views/Homepage9')),
        meta: {
            title: 'Homepage9',
            icon: 'home9',
            description: 'Homepage9'
        },
    },
    {
        path: "/homepage10",
        component: lazy(() => import('@/views/Homepage10')),
        meta: {
            title: 'Homepage10',
            icon: 'home10',
            description: 'Homepage10'
        },
    },
    {
        path: "/homepage11",
        component: lazy(() => import('@/views/Homepage11')),
        meta: {
            title: 'Homepage11',
            icon: 'home11',
            description: 'Homepage11'
        },
    }
];