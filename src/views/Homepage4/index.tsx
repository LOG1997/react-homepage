import React from 'react'
import Header from './Header'
import Content from './Content'
import Home4bg from '@/assets/images/home4-background.jpg'
import './index.scss'
export default function index() {
    return (
        <div>
            <div className="background h-screen w-screen -z-10 absolute">
                <div className='background-mask h-full w-full  absolute'></div>
                <img className='h-full w-full -z-80' src={Home4bg} alt="" />
            </div>
            <div className='h-14 fixed bg-gray-800 text-gray-200/80 w-full shadow-2xl z-10'>
                <Header></Header>
            </div>
            <div className='h-clac(100%-56px) z-1 mt-14'>
                <Content></Content>
            </div>
        </div>
    )
}
