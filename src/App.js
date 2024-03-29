import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

//IMPORT MODULES
import Logo from './images/logo.png'
import HomeCarousel from './components/carousel';
import Helmet from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import Layout from './components/layout';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <>
      <Helmet><title>Loucks Engineering, Inc. - MEP Consulting Engineers</title></Helmet>

      <Layout>
      <div className='page-contents'>
        <div className='home-container'>
          <div className='home-item'>
            <img id='logo' src={Logo} alt="LEI MEP Consulting Engineers Logo" />
          </div>
          <div className='home-item' id='home-caro'>
            <HomeCarousel />
          </div>
        </div>

        <hr id='homeheader' className='titleheader' />
        
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <p className='home-txt'>
          Loucks Engineering, Inc. consulting engineers specialize in mechanical, electrical, and plumbing (MEP) systems. We are known for various commercial and residental projects across Florida, having worked in the state for over 50 years.
          With the ability to provide services in multiple states and Green Building Council certification, we are committed to producing projects with sustainability in mind.
        </p>

        <div className='home-btn'>
          <Button as='a' href='/portfolio' variant='danger'>See our work</Button>
        </div>

        {/* <p className='home-txt'>
          With the ability to provide services in multiple states and Green Building Council certification, we are committed to producing projects with sustainability in mind.
        </p> */}
      </div>
      </div>
      </Layout>
        
      <ScrollRestoration/>
      </>
  );
}

export default App;
