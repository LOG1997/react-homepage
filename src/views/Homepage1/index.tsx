import React, { useState, useRef } from 'react'

import { motion } from "framer-motion";
import { useFollowPointer } from "./use-follow-pointer";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { getRandomGradientColor } from 'random-liner-gradient';

import { message } from 'antd';
import './index.scss'
// import N
export default function index() {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);

    const [messageApi, contextHolder] = message.useMessage();

    const [openToast, setOpenToast] = useState(false);
    const [loginErr, setLoginErr] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        if (userName === '' || password === '') {
            setLoginErr(true);
            message.error('Please enter right username and password');
            return;
        }
        const randBoolean = Math.random() < 0.5;
        setLoginErr(randBoolean)
        setOpenToast(!randBoolean)

    }
    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenToast(false);
    }
    const handleInputName = (e: any) => {
        setUserName(e.target.value)
    }
    const handleInputPassword = (e: any) => {
        setPassword(e.target.value)
    }
    return (
        <div className='w-full h-screen homepage1-root'>
            <motion.div
                ref={ref}
                className="box z--1"
                animate={{ x, y }}
                transition={{
                    type: "spring",
                    damping: 3,
                    stiffness: 50,
                    restDelta: 0.001
                }}
            />
            <div className='homepage1-login-container h-full w-1/2 min-w-600px flex justify-center'
            // style={{ backgroundImage: getRandomGradientColor() }}
            >
                <div className='w-3/4 flex flex-col items-left pt-36'>
                    <div className="home-login-welcom">
                        <h2 className='text-3xl font-bold'>Welcome You!</h2>
                        <p className='pt-5'>please enter your username and password</p>
                    </div>
                    <div className="login-form flex flex-col mt-4">
                        <Box
                            sx={{
                                maxWidth: '100%',
                                '& .MuiTextField-root': { my: 2 },
                            }}>
                            <TextField
                                error={loginErr}
                                required
                                fullWidth
                                label="Username"
                                id="outlined-size-small"
                                defaultValue=""
                                size="small"
                                onChange={handleInputName}
                            />
                            <TextField
                                error={loginErr}
                                required
                                fullWidth
                                label="Password"
                                id="outlined-size-small"
                                type="password"
                                autoComplete="current-password"
                                size="small"

                                onChange={handleInputPassword}
                            />
                        </Box>
                        <Button variant="contained" className='mt-10' onClick={handleLogin}>Login</Button>
                    </div>
                </div>
            </div>
            <Snackbar open={openToast} autoHideDuration={6000}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Success
                </Alert>
            </Snackbar>

        </div >
    )
}
