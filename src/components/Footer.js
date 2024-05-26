// import { Container, Grid, Box, Link } from "@material-ui/core";
import Logo from '../images/logo_sm.png';
// import Pin from '../../images/pin.png';
import { FaMapPin, FaPhoneVolume } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

export default function Footer() {
    let pathname = useLocation().pathname

    return (
    <footer>
        <div className='mobile'>
            <img id='mobile-footer-logo' src={Logo} alt="LEI footer logo" width={100} height={100}/>
            <p style={{fontSize: '16pt', marginBottom: 0}}>MEP Consulting Engineers</p>
        </div>

        <div>
            <p style={{marginBottom:'0.25rem'}}><FaMapPin/> 321 E. Commercial Blvd<br/>Oakland Park, FL 33334</p>
            <p style={{marginBottom: '0'}}><FaPhoneVolume/> (954) 938-1881 | &copy; {new Date().getFullYear()}</p>
        </div>

        <div className='mobile'>
            <p style={{fontSize: '16pt', marginBottom:'0.5rem'}}>Quick Links</p>
            <nav>
                <a className={`footer-nav ${pathname === '/' ? 'f-active' : ''}`} href='/'>Home</a>
                &ensp;<b className='footer-nav-spacer'>|</b>&ensp;
                <a className={`footer-nav ${pathname === '/services' ? 'f-active' : ''}`} href='/services'>Services</a>
                &ensp;<b className='footer-nav-spacer'>|</b>&ensp;
                <a className={`footer-nav ${pathname === '/portfolio' ? 'f-active' : ''}`} href='/portfolio'>Project Portfolio</a>
                <br/>
                <a className={`footer-nav ${pathname === '/about' ? 'f-active' : ''}`} href='/about'>About Us</a>
                &ensp;<b className='footer-nav-spacer'>|</b>&ensp;
                <a className={`footer-nav ${pathname === '/contact' ? 'f-active' : ''}`} href='/contact'>Contact Us</a>
            </nav>
        </div>
    </footer>
    )
}