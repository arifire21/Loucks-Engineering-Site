import BootstrapNavbar from "../components/boostrap-components/bs-navbar";
import Footer from '../components/Widgets/Footer';
import Helmet from 'react-helmet';

export default function About() {
  return (
    <div>
      <Helmet>
      <title>About Us | Loucks Engineering Inc.</title>  
      </Helmet>

      <BootstrapNavbar/>

      <div className="page-contents">
        <header>
          <h1>About Us</h1>
        </header>

        <h2>History</h2>

        <h2>Second Header</h2>
      </div>
      <Footer/>
    </div>
  )
}