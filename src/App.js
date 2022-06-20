import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORT MODULES
// import { BrowserView, MobileView } from 'react-device-detect';
// import * as rdd from 'react-device-detect';
import Footer from './components/Widgets/Footer';
import Logo from './images/logo.png'
import BootstrapCarousel from './components/boostrap-components/bs-carousel';
import BootstrapNavbar from './components/boostrap-components/bs-navbar';
import Helmet from 'react-helmet';

function App() {
  //for testing mobile view
  // rdd.isMobile = true;

  return (
    <div>
      <Helmet>
      <title>Loucks Engineering Inc.</title>  
      </Helmet>

      <BootstrapNavbar/>
      {/* <h1>Home</h1> */}


      {/* <Example/> */}

      <div className='home-container'>
        <div className='home-item'>
          <img id='logo' src={Logo} alt="lei logo" />
        </div>
        <div className='home-item'>
          <BootstrapCarousel />
        </div>
      </div>

      <hr className='titleheader' />
      
      <div className='page-contents'>
      {/* <p>company tagline</p> */}
      <p>Loucks Engineering Inc. specializes in mechanical, electrical, and plumbing systems.</p>
      {/* <p>cool placeholder stuff</p> */}
      </div>

      <Footer/>
    </div>
  );
}

export default App;