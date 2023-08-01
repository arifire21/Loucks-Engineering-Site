import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORT MODULES
import Footer from './components/Footer';
import Logo from './images/logo.png'
import HomeCarousel from './components/carousel';
import Navbar from './components/navbar';
import Helmet from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';

function App() {
  return (
    <>
      <Helmet><title>Loucks Engineering Inc.</title></Helmet>
      <Navbar/>

      <div className='page-contents'>
        <div className='home-container'>
          <div className='home-item'>
            <img id='logo' src={Logo} alt="lei logo" />
          </div>
          <div className='home-item' id='home-caro'>
            <HomeCarousel />
          </div>
        </div>

        <hr id='homeheader' className='titleheader' />
        
        <p className='home-txt'>
          Loucks Engineering Inc. consulting engineers specialize in mechanical, electrical, and plumbing systems. We are known for various project across Florida, having worked in the state for over 50 years. With the ability to provide services in multiple states and Green Building Council certification, we are committed to producing projects with sustainability in mind.
        </p>
      </div>

      <Footer/>

        <ScrollRestoration/>
      </>
  );
}

export default App;