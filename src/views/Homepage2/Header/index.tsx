import React, { useState } from 'react'
import SvgIcon from '@/components/SvgIcon'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { navList } from './nav_config'
import './index.scss'
const buttonColor = '#000'
export default function index() {

    return (
        <div className='w-full h-16 flex justify-center relative shadow-xl bg-transparent'>
            <Navbar expand="md" className='header-container bg-transparent navbar-transparent'>
                <Container fluid className="header-container  h-full flex justify-between bg-transparent">
                    <Navbar.Brand href="#" className="header-left h-16 flex items-center pl-10 bg-transparent">
                        <div className="header-logo-container w-30 h-16 flex items-center">
                            <div className='h-20 absolute'>
                                <SvgIcon name="home2-log" iconStyle={{ width: "120px", height: "120px" }} />
                            </div>
                            {/* <p className='pl-5 font-bold font-mono text-3xl text-dark-500'>CHINA<span className='text-purple-600'>WILD</span></p> */}
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    {/* <div className="header-right-container flex items-center pr-6"> */}
                    <Navbar.Collapse id="navbarScroll" className="header-nav-container">
                        {
                            navList.map((item, index) => {
                                return (
                                    <p key={index} className='header-nav-item text-dark-500  font-bold font-mono text-lg px-3 mt-3 cursor-pointer'>{item.name}</p>
                                )
                            })
                        }
                    </Navbar.Collapse>

                    {/* <div className="header-nav-button cursor-pointer">

                            <div>
                                <SvgIcon name="col" iconStyle={{ color: buttonColor }}></SvgIcon>
                            </div>
                        </div>

                    </div> */}
                </Container>
            </Navbar>
        </div >
    )
}
