import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORT MODULES
import Footer from './components/Widgets/Footer';
import Logo from './images/logo.png'
import BootstrapCarousel from './components/boostrap-components/bs-carousel';
import BootstrapNavbar from './components/boostrap-components/bs-navbar';
import Helmet from 'react-helmet';

window.onload = (event) => {
  window.scrollTo(0,0);
  console.log("scrolled to top!");
};

function App() {
  return (
    <div>
      
      <Helmet><title>Loucks Engineering Inc.</title></Helmet>

        <BootstrapNavbar/>
        <div className='page-contents'>
          <div className='home-container'>
            <div className='home-item'>
              <img id='logo' src={Logo} alt="lei logo" />
            </div>
            <div className='home-item' id='home-caro'>
              <BootstrapCarousel />
            </div>
          </div>

          <hr className='titleheader' />
          
          
          {/* <p>company tagline</p> */}
          <p>Loucks Engineering Inc. consulting engineers specialize in mechanical, electrical, and plumbing systems.</p>
          {/* <p>cool placeholder stuff</p> */}
          </div>

        <Footer/>
      </div>
  );
}

export default App;