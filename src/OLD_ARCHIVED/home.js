import NavTabs from "../components/Widgets/NavTabs";
import Logo from '../images/logo.png';
import CarouselNew from "../components/Widgets/CarouselNew";

import MiniLogo from '../images/logo192.png';
import { Link } from 'react-router-dom';

export default function Home() {
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