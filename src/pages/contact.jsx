// import Navbar from '../components/navbar';
// import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import {HiOutlineExternalLink} from 'react-icons/hi';
import { ScrollRestoration } from 'react-router-dom';
import Layout from '../components/layout';

export default function Contact() {
  return (
    <>
      <Helmet><title>Contact Us | Loucks Engineering, Inc.</title>  </Helmet>

      <Layout>
      <div className='page-contents'>
        <h1 style={{textAlign:'center'}}>Contact Us</h1>

        <h2>Main Contact</h2>
        <p style={{marginBottom:0}}><b>Office Phone:</b> (954) 938-1881</p>
        <p><b>Email:</b> Bob Loucks - bob@louckseng.com</p>

        <h2>Office Location</h2>
          <p style={{marginBottom:0}}>321 E. Commercial Blvd<br/>Oakland Park, FL 33334</p>
        <a href="https://goo.gl/maps/vfK9qLgASjXJTs7r5" target="_blank" rel="noreferrer">Directions via Google Maps <HiOutlineExternalLink/></a>
        <br/><br/>

        <h2>Hours of Operation</h2>
          <p><b>Monday - Friday:</b> 8:00AM - 5:00PM</p>
      </div>
      </Layout>

      <ScrollRestoration/>
    </>
  )
}