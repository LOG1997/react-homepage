import React, { useRef, useEffect } from 'react'
import backgroundImage from '@/assets/images/background.jpg'



import './index.scss'
export default function Content() {

    const imgBackground = useRef<HTMLDivElement>(null);
    // 自动滚动
    const motionBackground = () => {
        if (imgBackground.current) {
            const imgScrollLeft = imgBackground.current.scrollLeft
            setInterval(() => {
                imgBackground.current.scrollLeft += 0.2;
            }, 20)
        }
    }
    useEffect(() => {
        // motionBackground();
    }, [])
    return (
        <div className='bg-blue-200 relative'>

            <div className="img-background-mask"></div>
            <div ref={imgBackground} className="img-background-container">
                <img src={backgroundImage} alt="" />
            </div>

        </div>
    )
}
