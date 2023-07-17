import React from 'react';
import Homepage8BackImage from '@/assets/images/homepag8mountain.png';
import { menuList } from './constant';
function BackGround() {
    return (
        <>
            <div className="w-screen absolute bottom-0">
                <img className="w-full" src={Homepage8BackImage} alt="" />
            </div>
            <div className="w-full h-full bg-gradient-to-r from-indigo-500 to-pink-500"></div>
        </>
    );
}

function Header() {
    return (
        <>
            <div className="h-full w-full shadow-md flex justify-center backdrop-blur-sm">
                <div className="header-logo flex items-center gap-2 w-1/10 drop-shadow ml-12">
                    <div className="i-logos:phoenix h-full w-14"></div>
                    <div className="text-3xl font-bold">Hugo</div>
                </div>
                <div className="header-menu flex justify-center items-center gap-12 w-7/10 font-mono text-xl text-light-200">
                    {menuList.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className=" cursor-pointer   hover:text-gray-200"
                            >
                                {item.name}
                            </div>
                        );
                    })}
                </div>
                <div className="header-userinfo flex items-center justify-center w-2/10 gap-4">
                    <div className="i-logos:github-icon h-full w-8 cursor-pointer"></div>
                    <div className="i-logos:twitter h-full w-8 cursor-pointer"></div>
                </div>
            </div>
        </>
    );
}
function Main() {
    return (
        <>
            <div className='text-6xl font-bold pb-4'>
                <span>Extrct & Load</span>
            </div>
            <div className='text-6xl font-bold pb-4'>
                <span className='text-purple-700'>/</span>
                <span>With Joe</span>
                <span className='text-violet-600'>/</span>
            </div>
            <div className='text-2xl pb-6'>
                <span>CI/CD with control it`s not limitation</span>
            </div>
            <div className='flex justify-center gap-6'>
                <button className='bg-blue-500 text-light-200 w-32 h-10 rounded-md'>Try live demo</button>
                <button className='bg-transparent w-32 h-10 border-2 border-black rounded-md'>Install locally</button>
            </div>
        </>
    );
}
export default function HomePage8() {
    return (
        <div className="h-screen w-full">
            <div className="absolute w-screen h-screen">
                <BackGround />
            </div>
            <div className="fixed w-full h-14">
                <Header />
            </div>
            <div className="absolute z-100 mt-42 text-center w-full">
                <Main />
            </div>
        </div>
    );
}
