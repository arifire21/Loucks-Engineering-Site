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


function App() {
  //for testing mobile view
  // rdd.isMobile = true;

  return (
    <div>
      {/* <BrowserView>
          <DesktopTabs/>
          <Footer/>
      </BrowserView>

      <MobileView>
        <MobileTabs/>
        <Footer/>
      </MobileView> */}

      <NavTabs/>

      <div>
            <div className='home-container'>
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
            <p>cool placeholder stuff</p>
        </div>
    </div>
  );
}

export default App;