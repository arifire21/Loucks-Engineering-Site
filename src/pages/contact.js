import BootstrapNavbar from '../components/boostrap-components/bs-navbar';
import Footer from '../components/Widgets/Footer';

export default function Contact() {
  return (
    <div>
      <BootstrapNavbar />

      <div className='page-contents'>
        <header>
          <h1>Contact Us</h1>
        </header>

        <h2>Main Contact Info</h2>
        <p><b>Phone:</b></p>
        <br/>

        <h2>Visit Our Office:</h2>
        <a href="https://goo.gl/maps/vfK9qLgASjXJTs7r5" target="_blank"><b>Click for Address</b></a>
        <br/><br/>

        <h2>Website Contact</h2>
        <p>Arianna Loucks -- arianna@louckseng.com</p>
      </div>
      <Footer/>
    </div>
  )
}