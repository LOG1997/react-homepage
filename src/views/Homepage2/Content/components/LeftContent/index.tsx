import React, { useState, useRef } from 'react'
import SvgIcon from '@/components/SvgIcon'
import './index.scss'
import { getRandomGradientColor } from 'random-liner-gradient';
import { motion, useInView } from "framer-motion"
export default function LeftContent() {
    const styleInit = {
        backgroundImage: `${getRandomGradientColor()}`,
    }

    const leftContent = useRef(null);
    const isInView = useInView(leftContent, { once: true });
    const [style, setStyle] = useState(styleInit)
    const onMouseOver = () => {
        // style.backgroundImage = `${randomGradientColor()}`;
        setStyle({ backgroundImage: `${getRandomGradientColor('', -361, 90)}` })
    }
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                default: {
                    duration: 0.9,
                    ease: [0, 0.71, 0.5, 1.01]
                },
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }}
        >

            <div >
                <div className="left-content h-full font-mono text-light-200 select-none" >
                    <h2 className='text-6xl font-extrabold'>兰亭集会</h2>
                    <p className='text-xl'>
                        <SvgIcon name='location' ></SvgIcon>
                        <span> &nbsp;&nbsp;&nbsp; </span>
                        <span>成都·四川</span>
                        {/* 空格 */}
                        <span> &nbsp;&nbsp;&nbsp; </span>
                        <span>2023/4/23(农历三月初三)</span>
                    </p>
                    <p className='tracking-widest text-xl'>近平十一年，岁在癸卯，暮春之初。</p>
                    <p className='tracking-widest leading-loose text-xl'>夫人之相与，俯仰一世。或取诸怀抱，悟言一室之内；或因寄所托，放浪形骸之外。
                        虽趣舍万殊，静躁不同，当其欣于所遇，暂得于己，快然自足，不知老之将至；及其
                        所之既倦，情随事迁，感慨系之矣。向之所欣，俯仰之间，已为陈迹，犹不能不以之
                        兴怀，况修短随化，终期于尽！古人云：“死生亦大矣。”岂不痛哉！
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}>
                        <div className='w-40 h-16 rounded-md text-light-200 text-2xl tracking-widest flex items-center justify-center' style={style} onMouseEnter={onMouseOver}>
                            <p>立即报名</p>
                        </div>
                    </motion.button>
                </div>

            </div >
        </motion.div>
    )
}
