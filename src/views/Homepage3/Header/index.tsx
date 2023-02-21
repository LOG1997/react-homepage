import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import SvgIcon from '@/components/SvgIcon'
import './index.scss'
import { navList } from './nav_config'
export default function Homepage3Header() {
    return (
        <div className='header-full w-full h-16 flex justify-center shadow-2xl fixed'>
            <Navbar expand="lg" className=" w-1200px">
                <Container fluid className="">
                    <Navbar.Brand href="#">
                        <SvgIcon name='home2-log' iconStyle={{ width: 60, height: 60 }}></SvgIcon>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className=''>
                        <Nav
                            className="me-auto my-2 my-lg-0 text-xl"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {
                                navList.map((item, index) => {
                                    return (
                                        <Nav.Link key={index} className="mx-4">{item.name}</Nav.Link>
                                    )
                                })
                            }

                        </Nav>
                        <Nav>
                            <button className='bg-dark-500 w-20 h-10 text-light-200 hover:bg-dark-200 mx-4'>登录</button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
