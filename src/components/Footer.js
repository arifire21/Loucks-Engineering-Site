// import { Container, Grid, Box, Link } from "@material-ui/core";
import Logo from '../images/logo_sm.png';
// import Pin from '../../images/pin.png';
import { FaMapPin, FaPhoneVolume } from "react-icons/fa";

export default function Footer() {
    return (
    <footer>
        <div>
            <img src={Logo} alt="LEI small logo" width={100} height={100}/>
            <p style={{fontSize: '16pt', marginBottom: 0}}>MEP Consulting Engineers</p>
        </div>

        <div>
            <p style={{marginBottom:'0.25rem'}}><FaMapPin/> 321 E. Commercial Blvd<br/>Oakland Park, FL 33334</p>
            <p style={{marginBottom: '0'}}><FaPhoneVolume/> (954) 938-1881 | &copy; {new Date().getFullYear()}</p>
        </div>

        <div>
            <p style={{fontSize: '16pt', marginBottom:'0.5rem'}}>Quick Links</p>
            <nav>
                <a className='footer-nav' href='/'>Home</a>&ensp;<b className='footer-nav-spacer'>|</b>&ensp;
                <a className='footer-nav' href='/services'>Services</a>&ensp;<b className='footer-nav-spacer'>|</b>&ensp;
                <a className='footer-nav'href='/portfolio'>Project Portfolio</a>
                <br/>
                <a className='footer-nav' href='/about'>About Us</a>&ensp;<b className='footer-nav-spacer'>|</b>&ensp;
                <a className='footer-nav' href='/contact'>Contact Us</a>
            </nav>
        </div>
    </footer>
    )
}