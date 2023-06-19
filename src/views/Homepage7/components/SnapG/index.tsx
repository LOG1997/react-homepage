import React,{useState,useEffect} from 'react'
import {useScroll} from 'ahooks'
export default function Snip(props:any) {
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
        <h2 className='text-6xl'>截图功能</h2>
        <p className='text-gray-600'>随心截图，截你所需</p>
        <div className='w-full'>
            <img className='w-2/3' src="https://w.wallhaven.cc/full/rr/wallhaven-rro63j.jpg" alt="" />
        </div>
    </div>
  )
}
