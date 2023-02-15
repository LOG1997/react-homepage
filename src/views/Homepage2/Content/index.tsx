import React, { useRef, useEffect } from 'react'
import backgroundImage from '@/assets/images/background.jpg'
import LeftContent from './components/LeftContent'


import './index.scss'
export default function Content() {

    const imgBackground = useRef<HTMLDivElement>(null);
    // 自动滚动

    const motionBackground = () => {
        if (imgBackground.current) {
            const imgBackgroundScrollLeft = imgBackground.current.scrollLeft
            const imgScrollLeft = imgBackground.current.scrollLeft

            imgBackground.current.scrollLeft = 300;
            const timer = setInterval(() => {
                imgBackground.current.scrollLeft += 0.2;
                // console.log('😈 imgBackground.current.scrollLeft:', imgBackground.current.scrollLeft)
            }, 20)
        }
    }
    useEffect(() => {
        motionBackground();

        imgBackground.current.scrollLeft = 1200;
    }, [])
    return (
        <div className='content bg-blue-200 relative'>
            <div className="back absolute w-full">
                <div className='relative'>
                    <div className="img-background-mask -z-49"></div>
                    <div ref={imgBackground} className="img-background-container -z-50">
                        <img src={backgroundImage} alt="" />
                    </div>
                </div>

            </div>

            <div className='content-container z-50'>
                <LeftContent />
            </div>
        </div>
    )
}
