import React, { useRef, useEffect, useState } from 'react'
import Header from './Header'
import Content from './Content'
import './index.scss'
export default function HomePage2() {

    return (
        <div className='w-full h-screen'>
            <div className='fixed w-full z-50'>
                <Header></Header>
            </div>
            <div className='bg-gray-500'>
                <Content></Content>
            </div>
        </div>
    )
}
