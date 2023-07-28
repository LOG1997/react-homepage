import React, { useState } from 'react'
import Home11Back from '@/assets/images/home11img.jpg'
export default function Homepage11() {
    return (
        <div className='flex w-full h-screen pb-10'>
            <div className='w-1/3 min-w-110 h-full'>
                <LeftBox />
            </div>
            <div className='w-2/3 h-full'>
                <RightBox />
            </div>
        </div>
    )
}


function LeftBox() {
    return (
        <div className='w-full  h-full flex justify-center  relative'>
            <div className='w-32 h-10 rounded-3xl bg-gray-200/50 backdrop-blur-sm z-14 shadow-inner mt-6 left-10 absolute flex justify-center items-center gap-2'>
                <div className='h-7 w-7 bg-gray-200/70 rounded-full flex justify-center items-center'>
                    <div className='i-logos:supergiant w-4 h-4'></div>
                </div>
                <div className='h-7 w-7 bg-gray-200/70 rounded-full flex justify-center items-center'>
                    <div className='i-logos:watchman w-4 h-4'></div>
                </div>
                <div className='h-7 w-7 bg-gray-200/70 rounded-full flex justify-center items-center'>
                    <div className='i-logos:itsalive-icon w-4 h-4'></div>
                </div>
            </div>
            <div className='w-1/2 h-52 bg-gray-400/20 z-12 backdrop-blur-md rounded-md absolute bottom-73 left-7 shadow-md text-gray-200/70 px-1'>
                <p className='text-gray-200/90 pt-2 text-lg'>Connection</p>
                <span className='text-xl w-full bg-clip-text text-transparent bg-gradient-to-rt from-pink-500 to-green-500'>未来已来</span>
                <p>您还可以使用变体修饰符来定位媒体查询，例如响应断点、深色模式、首选减少运动等。例如，用于仅在中等屏幕尺寸及以上屏幕上应用该实用程序。</p>
            </div>
            <div className='w-1/2 h-62 absolute bg-gray-400/30 backdrop-blur-lg rounded-md z-13 bottom-6 left-7'>
                <div className='w-2/3 h-10 rounded-3xl bg-gray-100 shadow-md flex items-center justify-between px-2 text-gray-800/90 mt-6 ml-2 cursor-pointer group hover:bg-gray-700/70 transition'>
                    <p className='h-full leading-13 align-middle group-hover:text-gray-200'>翻译翻译</p>
                    <div className='w-7 h-7 rounded-2xl flex justify-center items-center text-gray-100 bg-gradient-to-lb from-indigo-500 via-purple-500 to-pink-500 group-hover:from-red-500 group-hover:via-orange-500 group-hover:from-rose-500 transition'>
                        <div className='i-mdi:arrow-right w-5 h-5'></div>
                    </div>
                </div>

                <div className='w-4/5 h-10 rounded-3xl bg-gray-100 shadow-md flex items-center justify-between px-2 text-gray-800/90 mt-2 ml-2 cursor-pointer group hover:bg-gray-700/70 transition'>
                    <p className='h-full leading-13 align-middle group-hover:text-gray-200'>无啦无啦</p>
                    <div className='w-7 h-7 rounded-2xl flex justify-center items-center text-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:from-red-500 group-hover:via-orange-500 group-hover:from-rose-500 transition'>
                        <div className='i-mdi:arrow-right w-5 h-5'></div>
                    </div>
                </div>

                <div className='w-1/2 h-10 rounded-3xl bg-gray-100 shadow-md flex items-center justify-between px-2 text-gray-800/90 mt-2 ml-2 cursor-pointer group hover:bg-gray-700/70 transition'>
                    <p className='h-full leading-13 align-middle group-hover:text-gray-200'>哈哈哈</p>
                    <div className='w-7 h-7 rounded-2xl flex justify-center items-center text-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:from-red-500 group-hover:via-orange-500 group-hover:from-rose-500 transition'>
                        <div className='i-mdi:arrow-right w-5 h-5'></div>
                    </div>
                </div>

                <div className='w-5/7 h-10 rounded-3xl bg-gray-100 shadow-md flex items-center justify-between px-2 text-gray-800/90 mt-2 ml-2 cursor-pointer group hover:bg-gray-700/70 transition'>
                    <p className='h-full leading-13 align-middle group-hover:text-gray-200'>鱼乐合于安逸</p>
                    <div className='w-7 h-7 rounded-2xl flex justify-center items-center text-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:from-red-500 group-hover:via-orange-500 group-hover:from-rose-500 transition'>
                        <div className='i-mdi:arrow-right w-5 h-5'></div>
                    </div>
                </div>
            </div>
            <div className='w-9/10 h-full py-3 rounded-md absolute'>
                <img className='h-full w-full object-cover rounded-md' src={Home11Back} alt="" />
            </div>
        </div>
    )
}

function RightBox() {
    const [colorArr1, setColorArr1] = useState([{
        offset: '0%',
        color: '#ff0000'
    },
    {
        offset: '40%',
        color: '#00ff00'
    },
    {
        offset: '100%',
        color: '#0000ff'
    }
    ]);
    const [colorArr2, setColorArr2] = useState([{
        offset: '0%',
        color: 'blue'
    },
    {
        offset: '40%',
        color: 'red'
    },
    {
        offset: '100%',
        color: 'orange'
    }
    ]);
    const [position1, setPosition1] = useState('M 0 50 C 30 10, 70 90, 90 50 S 150 90, 190 50 T 290 50')

    const [position2, setPosition2] = useState('M 0 20 C 20 30, 40 70, 60 50 S 150 90, 190 50 T 290 50')
    return (
        <div className='w-full h-full relative z-16 flex items-center justify-center'>
            <div className='absolute right-12 top-8  w-22 h-8 border border-2 border-indigo-600 rounded-3xl flex justify-center items-center cursor-pointer  hover:bg-gray-400 transition z-20'>
                <span>Contact Us</span>
            </div>
            <div className='z-20'>
                <p className='text-6xl '>(⊙o⊙)？</p>
                <p className='mt-12 text-4xl bg-clip-text text-transparent bg-gradient-to-lt from-pink-500 to-green-500'>AI同志是人类的好朋友</p>
            </div>
            <div>

            </div>
            <div className='w-full h-full absolute z-17 bg-transparent flex items-center'>
                <SmoothCurve colorArr={colorArr1} position={position1} />
            </div>
            <div className='w-full h-full absolute bg-transparent flex items-center'>
                <SmoothCurve colorArr={colorArr2} position={position2} />
            </div>
        </div>
    )
}

function SmoothCurve(props: any) {
    const { colorArr, position } = props;
    console.log('😉 colorArr, positionArr:', colorArr, position)
    return (
        <svg viewBox="0 0 190 100">
            <defs>
                <linearGradient id="gradient" x1="10%" y1="60%" x2="100%" y2="20%">
                    {
                        colorArr.map((item: any, index: number) => {
                            return <stop key={index} offset={item.offset} stopColor={item.color} />
                        })
                    }
                </linearGradient>
            </defs>
            <path
                d={position}
                fill="none"
                stroke="blue"
                strokeWidth="0.2"
            >
                <animate
                    attributeName="stroke"
                    values={colorArr.map((item: any) => item.color).join(';')}
                    dur="3s"
                    repeatCount="indefinite"
                />
            </path>
        </svg>
    );
}