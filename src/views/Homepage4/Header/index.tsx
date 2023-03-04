import React from 'react'
import SvgIcon from '@/components/SvgIcon'
import { navList } from './navList'
import './index.scss'
export default function HeaderContainer() {
    return (
        <div className='h-14 w-full flex justify-center'>
            <div className='head-center-container flex justify-between items-center'>
                <div className='header-icon-logo h-full flex items-center w-300px'>
                    <SvgIcon name="home4" iconStyle={{ width: 40, height: 40 }}></SvgIcon>
                    <h2 className='ml-5'>Heavy</h2>
                </div>
                <div className='header-nav flex justify-center'>
                    {
                        navList.map((item, index) => {
                            return <div key={index} className='nav-item ml-12 text-xl leading-52px  cursor-pointer hover:text-gray-200'>{item.name}</div>

                        })
                    }
                </div>
                <div className='header-user w-300px flex justify-center'>
                    <button className='sign-button  h-10 w-30 bg-green-400 rounded-lg'>SIGN  UP</button>
                </div>
            </div>
        </div>
    )
}
