import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import MiniLogo from '../images/logo_sm.png';
import { LinkContainer } from 'react-router-bootstrap'
import { FaHome, FaComments, FaInfo, FaList, FaImages } from 'react-icons/fa'

export default function BootstrapNavbar() {
    return( 
        <header>
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand><img src={MiniLogo} alt="lei-logo-sm" width="50" height="50" /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Offcanvas placement="start" className='navbar-offc'>
                    <Offcanvas.Header closeButton/>
                    <Offcanvas.Body>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/">
                                    <Nav.Link><FaHome className='mobile-icon' size={22}/>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/services">
                                    <Nav.Link><FaList className='mobile-icon' size={22}/>Services</Nav.Link>
                                </LinkContainer>
                                {/* <LinkContainer to="/portfolio">
                                    <Nav.Link>Project Portfolio</Nav.Link>
                                </LinkContainer> */}
                                <LinkContainer to="/portfolio">
                                    <Nav.Link><FaImages className='mobile-icon' size={22}/>Project Portfolio</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link><FaInfo className='mobile-icon' size={22}/>About Us</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/contact">
                                    <Nav.Link><FaComments className='mobile-icon' size={22}/>Contact Us</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        </header>
    )
}