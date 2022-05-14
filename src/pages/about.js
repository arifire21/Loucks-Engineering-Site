import MiniLogo from '../images/logo192.png';
import { Link } from 'react-router-dom';

export default function About(){
    return(
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
              <a class="nav-link"><Link className="nav-link-link" to='/'>Home</Link></a>
              <a class="nav-link"><Link className="nav-link-link" to='/services'>Services</Link></a>
              <a class="nav-link"><Link className="nav-link-link" to='/portfolio'>Project Portfolio</Link></a>
              <a class="nav-link active" aria-current="page"><Link className="nav-link-link" to='/about'>About Us</Link></a>
              <a class="nav-link"><Link className="nav-link-link" to='/contact'>Contact Us</Link></a>
            </div>
          </div>
        </div>
      </nav>
    </div>

            <h1>About Us</h1>
        </div>
    )
}