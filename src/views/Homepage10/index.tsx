import React, { useState } from 'react'
import BackImage from '@/assets/images/homepage10-back.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
export default function HomePage10() {
    const [showEyes, setShowEyes] = useState(true);
    return (
        <div className='relative w-screen h-screen relative flex justify-center items-center'>
            <div className='background-png w-100 h-screen overflow-hidden absolute'>
                <div className='w-10 h-10 bg-blue-400 animated animated-bounce'>1</div>
                <img className='animated-backMove absolute left-0 top-0 block w-3000px' src={BackImage} alt="" />
            </div>
            {/* 登录模块 */}
            <div className='login-block bg-gray-300/50 w-200 h-120 z-120 absolute backdrop-blur-lg shadow-lg rounded-md flex'>
               {/* 左侧登录 */}
                <div className='bg-gray-200/60 backdrop-blur-sm w-1/2 h-full flex flex-col gap-6 items-center justify-center rounded-l-md'>
                    <p className='m-0 p-0 text-4xl'>🎋欢迎您登录</p>
                    {showEyes ? <div className='text-3xl animated animated-bounce-in'>😐</div> :
                        <div className='text-3xl animated animated-bounce-in'>😎</div>}
                    <TextField size="small" id="outlined-size-normal" label="用户名" color="secondary" />
                    <TextField
                        size='small'
                        id="outlined-password-input"
                        label="密码"
                        type="password"
                        autoComplete="current-password"
                        onFocus={() => setShowEyes(false)}
                        onBlur={() => setShowEyes(true)}
                    />
                    <div className='w-full flex justify-end mr-46'>
                        <Button size="small" className='w-24' variant="contained" endIcon={<AutoAwesomeIcon />}>
                            登录
                        </Button>

                    </div>
                </div>
                {/* 右侧描述 */}
                <div className='w-1/2 text-center flex flex-col justify-center items-center px-6'>
                    <h3>A股</h3>
                    <p className='text-lg'>截至收盘，上证指数跌0.37%，报3197.82点。深证成指跌0.34%，报10972.96点。创业板指跌0.31%，报2200.62点。</p>
                    <div className='i-logos:handlebars w-52 h-23'></div>
                </div>
            </div>
        </div>
    )
}
