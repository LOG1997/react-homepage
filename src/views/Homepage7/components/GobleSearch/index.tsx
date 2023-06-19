import React,{useState,useEffect} from 'react'
import {useScroll} from 'ahooks'
export default function GobleSearch(props:any) {
    const [isShow, setIsShow] = useState(false);
    const scroll = useScroll(document);
    const listenScroll = (top: number | undefined) => {
        if (top == undefined) {
            // setIsShow(true);
            return;
        }
        if (top >= props.scrollTopStart && top < props.scrollTopEnd) {
            setIsShow(true);
        } else {
            setIsShow(false);
        }
    };
    useEffect(() => {
        listenScroll(scroll?.top);
    }, [scroll?.top]);
  return (

   isShow&&<div className='flex flex-col justify-center animated animate__fadeInUp text-center mt-20'>
        <h2 className='text-6xl'>全局搜索</h2>
        <p className='text-gray-600'>快速搜索，便捷全面</p>
        <div className='w-full'>
            <img className='w-full' src="https://w.wallhaven.cc/full/5g/wallhaven-5gk859.jpg" alt="" />
        </div>
    </div>
  )
}
