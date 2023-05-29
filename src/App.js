import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORT MODULES
import Footer from './components/Widgets/Footer';
import Logo from './images/logo.png'
import BootstrapCarousel from './components/boostrap-components/bs-carousel';
import BootstrapNavbar from './components/boostrap-components/bs-navbar';
import Helmet from 'react-helmet';

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
          
          <p style={{padding: "0 3rem", display:"flex", textAlign:"center"}}>
            Loucks Engineering Inc. consulting engineers specialize in mechanical, electrical, and plumbing systems. We are known for various project across Florida, having worked in the state for over 50 years. With licenses in X states and Green Building Council certification, we are committed to producing projects with sustainability in mind
          </p>
          </div>

        <Footer/>
      </div>
  );
}

export default App;