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

        <h2>Loucks Engineering</h2>
        <p><b>Office Phone:</b> (954) 938-1881</p>
        <p><b>Email:</b> Bob Loucks - bob@louckseng.com</p>
        <br/>

        <h2>Location</h2>
          <p>321 E Commercial Blvd<br/>Fort Lauderdale, FL 33334</p>
        <a href="https://goo.gl/maps/vfK9qLgASjXJTs7r5" target="_blank" rel="noreferrer">Directions via Google Maps <i class="far fa-external-link-alt"></i></a>    
      </div>

      <Footer/>
    </div>
  )
}