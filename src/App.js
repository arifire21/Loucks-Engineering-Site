import './App.scss';

//IMPORT MODULES
// import Hero from './components/Hero';
// import Section from './components/Section';
// import { Container, Row, Col } from "react-bootstrap"
// import Headline from './components/Widgets/Heading'
// import Card from './components/Widgets/Card';
// import Idea from './components/Icons/Idea';
// import Mockup from './components/Icons/Mockup';
// import Engineer from './components/Icons/Engineer';
// import ShowcaseData from './data/showcase.js';
// import Showcase from './components/Widgets/Showcase';
// import Button from './components/Widgets/Button';
// import NavTabs from './components/Widgets/NavTabs';
// import EngineeringBanner from './images/engineerbanner.png';

import DesktopTabs from './OLD_ARCHIVED/DesktopTabs';
import MobileTabs from './OLD_ARCHIVED/MobileTabs';
import {BrowserView, MobileView} from 'react-device-detect';
import * as rdd from 'react-device-detect';
import Footer from './components/Widgets/Footer';
import NavTabs from './components/Widgets/NavTabs';
import Logo from './images/logo.png'
import CarouselNew from './components/Widgets/CarouselNew';
import NavBar from './components/Widgets/NavBar';
import BootstrapCarousel from './components/boostrap-components/bs-carousel';

import MiniLogo from './images/logo192.png';
import { Link } from 'react-router-dom';

function App() {
  //for testing mobile view
  // rdd.isMobile = true;

  return (
    <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={MiniLogo} alt="logo_small" width="50" height="50" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page"><Link className="nav-link-link" to='/'>Home</Link></a>
              <a class="nav-link"><Link className="nav-link-link" to='/services'>Services</Link></a>
              <a class="nav-link"><Link className="nav-link-link" to='/portfolio'>Project Portfolio</Link></a>
              <a class="nav-link"><Link className="nav-link-link" to='/about'>About Us</Link></a>
              <a class="nav-link"><Link className="nav-link-link" to='/contact'>Contact Us</Link></a>
            </div>
          </div>
        </div>
      </nav>
    </div>
            <h1>Home</h1>
            {/* <div className='home-container'>
            <div className='home-item'>
                <img id='logo' src={Logo} alt="lei logo"/>
            </div>
            <div className='home-item'>
                <CarouselNew/>
            </div>
            </div>

            <hr className='titleheader'/>

            <p>company tagline</p>
            <p>Loucks Engineering Inc. specializes in mechanical, electrical, and plumbing systems.</p>
            <p>cool placeholder stuff</p> */}
        </div>
  );
}

export default App;