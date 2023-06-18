import React from 'react'

export default function Header() {
  return (
    <div className='h-14 w-full backdrop-blur-sm backdrop-opacity-50 bg-white/80 bg-light-50 shadow-md flex  justify-between'>
        <div className='h-full w-20 ml-20'>
            <div className='i-logos:tiktok h-full w-32'></div>
        </div>
        <div className='flex flex-row gap-6 h-full items-center text-xl text-light-300 mr-20 cursor-pointer pt-2'>
            <p className='hover:text-gray-100/80'>首页</p>
            <p className='hover:text-gray-100/80'>支持</p>
        </div>
    </div>
  )
}
