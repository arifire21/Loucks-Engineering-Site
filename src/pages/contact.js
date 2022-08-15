import BootstrapNavbar from '../components/boostrap-components/bs-navbar';
import Footer from '../components/Widgets/Footer';
import { Helmet } from 'react-helmet';

export default function Contact() {
  return (
    <div>
      <Helmet>
      <title>Contact Us | Loucks Engineering Inc.</title>  
      </Helmet>

      <BootstrapNavbar />

      <div className='page-contents'>
        <header>
          <h1>Contact Us</h1>
        </header>

        <h2>Main Contact Info</h2>
        <p><b>Phone:</b> (954) 938-1881</p>
        <p><b>Email:</b> Bob Loucks -- bob@louckseng.com</p>
        <br/>

        <h2>Visit Our Office</h2>
          <p>321 E Commercial Blvd<br/>Fort Lauderdale, FL 33334</p>
        <a href="https://goo.gl/maps/vfK9qLgASjXJTs7r5" target="_blank" rel="noreferrer"><b>Click for Directions</b></a>    
      </div>

      <Footer/>
    </div>
  )
}