import BootstrapNavbar from "../components/boostrap-components/bs-navbar";
import Footer from '../components/Widgets/Footer';

export default function About() {
  return (
    <div>
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