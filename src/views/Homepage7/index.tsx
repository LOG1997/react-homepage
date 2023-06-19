import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import backImage from '@/assets/images/home4-background.jpg';
import backImageTop1 from '@/assets/images/homemaintop1.png';
import mobilePic from '@/assets/images/mmobilepic.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { motion } from 'framer-motion';

import { useScroll } from 'ahooks';

import TabShow from './components/TabShow';
import GobleSearch from './components/GobleSearch';
import SnapG from './components/SnapG';

import 'animate.css'
import './index.scss'
function Main1() {

    const scroll = useScroll(document);
    const backRef = useRef(null);
    const back1 = useRef(null);
    const homeTextRef = useRef(null);
    const mobilePicRef = useRef(null);
    useEffect(() => {
        if (!scroll?.top) {
            return
        }
        if (scroll?.top > 100) {
            // 显示
            back1.current?.classList.remove('invisible');
            mobilePicRef.current?.classList.remove('invisible');
        }
    }, [scroll?.top]);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: backRef.current,
                // pin: true,   // pin the trigger element while active
                start: 'top', // when the top of the trigger hits the top of the viewport
                end: '+=900px', // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                // markers: true,
            },
        });
        t1.to(backRef.current, { scale: 0.25, opacity: 1, duration: 1 });

        const t2 = gsap.timeline({
            scrollTrigger: {
                trigger: back1.current,
                start: 'top', // when the top of the trigger hits the top of the viewport
                end: '+=900px', // end after scrolling 500px beyond the start
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            },

        });
        // move to center while scrolling
        t2.to(back1.current, { duration: 1, y: 940, x: 1660 });
        const t3 = gsap.timeline({
            scrollTrigger: {
                trigger: homeTextRef.current,
                start: '800', // when the top of the trigger hits the top of the viewport
                end: '1000', // end after scrolling 500px beyond the s
                scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar

            }
        });
        t3.to(homeTextRef.current, { opacity: 0, duration: 1 });
        const t4 = gsap.timeline({
            scrollTrigger: {
                trigger: mobilePicRef.current,
                start: 'top',
                end: '+=600px',
                scrub: 1,
            }
        })
        t4.to(mobilePicRef.current, { duration: 1, y: -900, x: -1700 })
    }, []);
    return (
        <div className='absolute w-1000 h-auto mx-auto flex flex-col'>

            <div
                ref={backRef}
                className="backRef absolute w-1000 "
            >
                <img className="w-full h-full" src={backImage} alt="" />
            </div>

            <div className='z-120 invisible' ref={back1}>
                <img className='w-170' src={backImageTop1} alt="" />
            </div>
            <div className='z-199 self-end pt-400' ref={mobilePicRef}>
                <img className='w-40' src={mobilePic} alt="" />
            </div>

        </div>
    );
}

function HomeText(props: any) {
    // const {scrollTopStart,scrollTopStart} =props;
    const homeTextRef = useRef(null);
    const scroll = useScroll(document);
    const [isShow, setIsShow] = useState(false);
    const listenScroll = (top: number | undefined) => {
        if (top==undefined) {
            // setIsShow(true);
            return
        }
        if (top >= props.scrollTopStart && top < props.scrollTopEnd) {
            setIsShow(true);
        }
        else {
            setIsShow(false);
        }
    }
    useEffect(() => {
        listenScroll(scroll?.top);
    }, [scroll?.top])
    return (
        <div
            className="animate__animated animate__fadeInUp"
            ref={homeTextRef}>
            {isShow ? <motion.div
                className="w-120 h-96"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <div className='text-center font-bold'>
                    <p className='text-xl'>QQ Linux版</p>
                    <p className='text-5xl'><span className='text-blue-400'>新</span>不止步 <span className='text-blue-600'>乐</span>不设限</p>
                    <div className='flex gap-3 justify-center mt-6'>
                        <button className='bg-blue-600 w-32 h-12 border-none text-xl rounded-3 text-light-300/80'>x86版下载</button>
                        <button className='bg-blue-600 w-32 h-12 border-none text-xl rounded-3 text-light-300/80'>ARM版下载</button>
                        <button className='bg-blue-600 w-45 h-12 border-none text-xl rounded-3 text-light-300/80'>LoongArch版下载</button>
                    </div>
                    <p className='mt-4 text-gray-400'>v3.1.2 | 2023.5.20</p>
                </div>
            </motion.div> : null}
            {/* <motion.div></motion.div> */}
        </div>
    );
}
export default function Homepage7() {
    const mainRef = useRef(null);
    return (
        <div className=" h-1000 w-full flex flex-col items-center">
            <div className="fixed w-full z-1000">
                <Header></Header>
            </div>
            <div className="w-full h-360 flex justify-center">
                <Main1></Main1>
            </div>
            <div className="fixed mt-60 flex w-full justify-center">
                <HomeText scrollTopStart={0} scrollTopEnd={100}></HomeText>
            </div>
            <div className='flex justify-center'>
                <HomeText scrollTopStart={600} scrollTopEnd={2400}></HomeText>
            </div>
            <div className='min-w-1000px h-90 flex justify-center'>
                <TabShow scrollTopStart={1200} scrollTopEnd={3200}></TabShow>
            </div>
            <div className='w-220 flex h-290 justify-center pb-30'>
                <GobleSearch scrollTopStart={1500} scrollTopEnd={4800}></GobleSearch>
            </div>
            <div className='w-220 flex h-120 justify-center'>
                <SnapG scrollTopStart={2500} scrollTopEnd={5200}></SnapG>
            </div>
            {/* <div id='logo' ref={backRef} className='h-20 w-80 bg-black'>
            <img className='w-full h-full' src={backImage} alt="" />
        </div> */}
        </div>
    );
}
