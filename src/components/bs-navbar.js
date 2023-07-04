import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import MiniLogo from '../images/logo192.png';
import { LinkContainer } from 'react-router-bootstrap'

export default function BootstrapNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="md" sticky="top">
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand><img src={MiniLogo} alt="lei-logo-sm" width="50" height="50" /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Offcanvas placement="start">
                    <Offcanvas.Header closeButton/>
                    <Offcanvas.Body>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to="/">
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/services">
                                    <Nav.Link>Services</Nav.Link>
                                </LinkContainer>
                                {/* <LinkContainer to="/portfolio">
                                    <Nav.Link>Project Portfolio</Nav.Link>
                                </LinkContainer> */}
                                <LinkContainer to="/portfolio">
                                    <Nav.Link>Project Portfolio</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/about">
                                    <Nav.Link>About Us</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/contact">
                                    <Nav.Link>Contact Us</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>

    )
}