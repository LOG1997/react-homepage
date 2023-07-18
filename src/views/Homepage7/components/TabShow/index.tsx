import React, { useState, useEffect, useRef } from 'react';

import { useScroll } from 'ahooks';
import { debounce } from 'lodash';
let timer: any = null;
export default function TabShow(props: any) {

    const [activeLi, setActiveLi] = useState(1);
    const tabShowRef = useRef(null);
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
    const debouncedSetActiveLi = debounce((value: number) => {
        setActiveLi(value);
    }, 500);
    useEffect(() => {
        if (activeLi > 3) {
            setActiveLi(1)
        }
    }, [activeLi]); 
    useEffect(() => {
        listenScroll(scroll?.top);
    }, [scroll?.top]);
    return (
        isShow && <div className="w-250 flex justify-center gap-3 animated animate__fadeInUp" ref={tabShowRef}>
            <div className="w-1/2">
                <TabBar
                    scrollTopStart={props.scrollTopStart}
                    scrollTopEnd={props.scrollTopEnd}
                    activeLi={activeLi}
                    setActiveLi={debouncedSetActiveLi}
                />
            </div>
            <div className="w-1/2">
                <TabContent activeLi={activeLi} />
            </div>
        </div>
    );
}
function TabContent(props: any) {
    switch (props.activeLi) {
        case 1:
            return (<div className='w-full animated animate__fadeIn'>
                <img className='w-full' src="https://w.wallhaven.cc/full/p9/wallhaven-p9j7ee.png" alt="" />
            </div>);
        case 2:
            return (
                <div className='w-full animated animate__fadeIn'>
                    <img className='w-full' src="https://w.wallhaven.cc/full/9d/wallhaven-9d8zvd.jpg" alt="" />
                </div>);
        case 3:
            return (<div className='w-full animated animate__fadeIn'>
                <img className='w-full' src="https://w.wallhaven.cc/full/yx/wallhaven-yxg2og.jpg" alt="" />
            </div>)
        default:
            return (<div className='w-full'></div>)

    }

}
function TabBar(props: any) {


    const liOne = useRef<HTMLLIElement>(null);

    const liTwo = useRef<HTMLLIElement>(null);
    const liThree = useRef<HTMLLIElement>(null);
    const tipOne = useRef<HTMLDivElement>(null);
    const tipTwo = useRef<HTMLDivElement>(null);
    const tipThree = useRef<HTMLDivElement>(null);
    // const debouncedSetActiveLi = debounce((value: number) => {
    //   props.setActiveLi(value);
    // }, 500);
    const [isHover, setIsHover] = useState(false);
    const listenActiveLi = (activeLiProp: number) => {

        if (activeLiProp > 3) {
            props.setActiveLi(1);
        }
        if (activeLiProp == 1) {
            liOne.current?.classList.add('text-blue-600');
            tipOne.current?.classList.add('bg-green-600');
            liTwo.current?.classList.remove('text-blue-600');
            liThree.current?.classList.remove('text-blue-600');
            tipTwo.current?.classList.remove('bg-green-600');
            tipThree.current?.classList.remove('bg-green-600');
        }
        if (activeLiProp == 2) {
            liTwo.current?.classList.add('text-blue-600');
            tipTwo.current?.classList.add('bg-green-600');
            liOne.current?.classList.remove('text-blue-600');
            liThree.current?.classList.remove('text-blue-600');
            tipOne.current?.classList.remove('bg-green-600');
            tipThree.current?.classList.remove('bg-green-600');
        }
        if (activeLiProp == 3) {
            liThree.current?.classList.add('text-blue-600');
            tipThree.current?.classList.add('bg-green-600');
            liOne.current?.classList.remove('text-blue-600');
            liTwo.current?.classList.remove('text-blue-600');
            tipOne.current?.classList.remove('bg-green-600');
            tipTwo.current?.classList.remove('bg-green-600');
        } if (isHover) {
            return
        }
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            props.setActiveLi(activeLiProp + 1);
        }, 5000)
        // clearTimeout(timer);

    };

    const handleHover = (key: number, isOver: boolean) => {

        setIsHover(isOver);
        if (timer) {
            clearTimeout(timer);
        }
        if (!isOver) {
            setIsHover(isOver);
            props.setActiveLi(key + 1);
            return;
        }
        props.setActiveLi(key);
    }
    useEffect(() => {
        listenActiveLi(props.activeLi);
    }, [props.activeLi])

    return (
        <>

            <div className="w-full flex flex-col justify-center ">
                <h2 className="text-6xl tracking-20px">全新架构</h2>
                <div className="flex items-center gap-3">
                    <div className="i-logos:netflix w-30 h-15"></div>
                    <span className="text-xl tracking-5px">技术架构驱动</span>
                </div>
                <div>
                    <div>
                        <ul className="list-none text-2xl flex gap-5 ">
                            <li ref={liOne} className='relative cursor-pointer' key={1} onMouseOver={() => handleHover(1, true)} onMouseLeave={() => handleHover(1, false)}>
                                <div className="i-mdi-message-settings-outline w-12 h-12"></div>
                                <div>消息</div>
                                <div ref={tipOne} className='absolute -mt-3 -z-1 rounded-1 w-full h-3 '></div>
                            </li>
                            <li ref={liTwo} className='relative cursor-pointer' onMouseOver={() => handleHover(2, true)} onMouseLeave={() => handleHover(2, false)}>
                                <div className="i-mdi:earth w-12 h-12"></div>
                                <div>世界</div><div ref={tipTwo} className='absolute -mt-3 -z-1 rounded-1 w-full h-3'></div>
                            </li>
                            <li ref={liThree} className='relative cursor-pointer' onMouseOver={() => handleHover(3, true)} onMouseLeave={() => handleHover(3, false)}>
                                <div className="i-mdi:space-invaders w-12 h-12"></div>
                                <div>空间</div>
                                <div ref={tipThree} className='absolute -mt-3 -z-1 rounded-1 w-full h-3 '></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
}
