import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useScroll } from 'ahooks'
export default function Homepage6() {
    const scroll = useScroll(document);
    console.log('😎scroll:', scroll)
    console.log('😌scroll:', scroll)
    const box1 = useRef(null)
    const box2 = useRef(null)
    const t1 = gsap.timeline({ defaults: { duration: 3, ease: "elastic" } })
    useEffect(() => {
        t1.to('.box1', { x: 400, duration: 1 })
            .to('.box1', { opacity: 1, x: 0, duration: 1 })
        t1.to('.box2', { x: -400, duration: 1 })
            .to('.box2', { x: 0, duration: 1 })
    }, [])
    return (
        <div>
            <div className='gsap-container flex justify-between h-1900px w-screen '>
                <div className='box1 mt-60 w-200px h-200px  bg-red-400 opacity-0.1'></div>
                <div className='box2 w-100px h-100px bg-blue-400'></div>
            </div>
        </div>
    )
}
