import React, { useState } from 'react'
import SvgIcon from '@/components/SvgIcon'


import { navList } from './nav_config'
import './index.scss'
const buttonColor = '#000'
export default function index() {

    return (
        <div className='bg-blue-300 w-full h-16 flex justify-center relative'>
            <div className="header-container bg-yellow-200 h-full flex justify-between">
                <div className="header-left h-16 flex items-center pl-10">
                    <div className="header-logo-container w-66 flex items-center">
                        <div>
                            <SvgIcon name="home2-log" iconStyle={{ width: "40px", height: "40px" }} />
                        </div>
                        <p className='pl-5 font-bold font-mono text-3xl text-dark-500'>CHINA<span className='text-purple-600'>WILD</span></p>
                    </div>
                </div>
                <div className="header-right-container flex items-center pr-6">
                    <div className="header-nav-container">
                        {
                            navList.map((item, index) => {
                                return (
                                    <span key={index} className='header-nav-item text-dark-500 font-bold font-mono text-lg px-3 cursor-pointer'>{item.name}</span>
                                )
                            })
                        }
                    </div>

                    <div className="header-nav-button cursor-pointer">

                        <div>
                            <SvgIcon name="col" iconStyle={{ color: buttonColor }}></SvgIcon>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}
