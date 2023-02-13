import React, { useState } from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import { INavCardProps } from './type'
import { randomGradientColor } from '@/utils/color'
import { motion } from "framer-motion"
import SvgIcon from '@/components/SvgIcon'
export default function index(props: INavCardProps) {
    const navigate = useNavigate();
    const { title, link, description = '', image = 'https://w.wallhaven.cc/full/1p/wallhaven-1pqq1w.jpg', icon = 'home' } = props.items;
    const styleInit = {
        backgroundImage: `${randomGradientColor()}`,
    }
    const [style, setStyle] = useState(styleInit)
    const onMouseOver = () => {
        // style.backgroundImage = `${randomGradientColor()}`;
        setStyle({ backgroundImage: `${randomGradientColor()}` })
    }
    const handleSkip = () => {
        setTimeout(() => {
            navigate(link);
        }, 500)
    }
    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}>
            <div style={style} className='w-44 h-20 rounded-md text-light-50 cursor-pointer hover:shadow-lg' onMouseEnter={onMouseOver} onClick={handleSkip} >
                <div className="top flex  items-center pl-2 pt-2">
                    <div className="icon">
                        <SvgIcon name={icon}></SvgIcon>
                    </div>
                    <div className="title truncate align-bottom text-xl">{title}</div>
                </div>
                <div className="bottom text-left pl-7 pt-2">
                    <div className="desc">{description}</div>
                </div>
            </div >
        </motion.button>
    )
}
