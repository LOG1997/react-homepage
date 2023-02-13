import React from 'react'
import { routes_config } from '@/router/router.config';
import NavCard from '@/components/NavCard';
import { root_config } from './root.config';
export default function index() {
    return (
        <div>
            {
                root_config.map((item, index) => {
                    return <NavCard key={index} items={item}></NavCard>
                })
            }
            {/* <NavCard items={{ title: 'Homepag1', link: '/homepage1' }}></NavCard> */}
        </div>
    )
}
