"use client"
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import MiniLogo from '../images/logo_sm.png';
//import { LinkContainer } from 'react-router-bootstrap'
import Link from "next/link";
import { FaHome, FaComments, FaInfo, FaList, FaImages } from 'react-icons/fa'

export default function BootstrapNavbar() {
    return( 
        <header>
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Link href="/">
                    <Navbar.Brand><img src={MiniLogo.src} alt="lei-logo-sm" width="50" height="50" /></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Offcanvas placement="start" className='navbar-offc'>
                    <Offcanvas.Header closeButton/>
                    <Offcanvas.Body>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link href="/">
                                    <FaHome className='mobile-icon' size={22}/>Home
                                </Link>
                                <Link href="/services">
                                    <FaList className='mobile-icon' size={22}/>Services
                                </Link>
                                <Link href="/portfolio">
                                    <FaImages className='mobile-icon' size={22}/>Project Portfolio
                                </Link>
                                {/* <Link href="/portfolio-new">
                                    <FaImages className='mobile-icon' size={22}/>Project Portfolio
                                </Link> */}
                                <Link href="/about">
                                    <FaInfo className='mobile-icon' size={22}/>About Us
                                </Link>
                                <Link href="/contact">
                                    <FaComments className='mobile-icon' size={22}/>Contact Us
                                </Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        </header>
    )
}