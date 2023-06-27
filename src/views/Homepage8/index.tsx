import React from 'react'
import Homepage8BackImage from '@/assets/images/homepag8mountain.png'
import {menuList} from './constant'
function BackGround() {
    return (
        <>
            <div className='w-screen absolute bottom-0'>
                <img className='w-full' src={Homepage8BackImage} alt="" />
            </div>
            <div className='w-full h-full bg-gradient-to-r from-indigo-500 to-pink-500'>
            </div>
        </>
    )
}

function Header() {
    return (
        <>
            <div className='h-full w-full shadow-md flex justify-center backdrop-blur-sm'>
                <div className='header-logo flex items-center gap-2 w-1/10 drop-shadow '>
                    <div className='i-logos:phoenix h-full w-14'></div>
                    <div className='text-3xl font-bold'>Hugo</div>
                </div>
                <div className='header-menu flex justify-center items-center gap-12 w-7/10 font-mono text-xl text-light-200'>
                   {menuList.map((item,index)=>{
                          return (
                            <div key={index} className=' cursor-pointer   hover:text-gray-200'>{item.name}</div>
                          )
                   })}
                </div>
                <div className='header-userinfo flex items-center justify-center w-2/10 gap-4'>
                   <div className='i-logos:github-icon h-full w-8 cursor-pointer'></div>
                   <div className='i-logos:twitter h-full w-8 cursor-pointer'></div>
                </div>
            </div>
        </>
    )
}
export default function HomePage8() {
    return (
        <div className='h-screen w-full'>
            <div className='absolute w-screen h-screen'>
                <BackGround />
            </div>
            <div className='fixed w-full h-14'>
                <Header />
            </div>
        </div>
    )
}

