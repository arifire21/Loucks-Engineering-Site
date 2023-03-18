import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollResetHandler from './components/ScrollResetHandler';
//pages
//errors
import PageNotFound from './pages/error-pages/404page';
// import Home from './pages/home';
import Services from './pages/services';
// import Portfolio from './pages/portfolio';
import Portfolio2 from './pages/portfolio2';
import About from './pages/about';
import Contact from './pages/contact';
//portfolio pages
import Residences from './pages/portfolio/residences';
import Restaurants from './pages/portfolio/restaurants';
import Retail from './pages/portfolio/retail';
// import Tenents from './pages/portfolio/ti';
import Aviation from './pages/portfolio/aviation';
import MultiPurpose from './pages/portfolio/multi-purpose';
import Offices from './pages/portfolio/offices';
import Education from './pages/portfolio/education';
import Gyms from './pages/portfolio/gymnasiums';
import Churches from './pages/portfolio/worship';
import MedDental from './pages/portfolio/medical-offices';
// import Media from './pages/portfolio/media';
import Pets from './pages/portfolio/pet-services';
import Laundry from './pages/portfolio/laundry';
import Storage from './pages/portfolio/storage';
import Auto from './pages/portfolio/auto-repair';
import Other from './pages/portfolio/other';

//hashrouter is for redirecting on ghp deployment, check if needs to be changed on final product
ReactDOM.render(
  // <BrowserRouter>
  <React.StrictMode>
    <HashRouter>
      <ScrollResetHandler>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<PageNotFound/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio2 />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/residences" element={<Residences />} />
        <Route path="/portfolio/restaurants" element={<Restaurants />} />
        <Route path="/portfolio/retail" element={<Retail />} />
        {/* <Route path="/portfolio/tenent-impr" element={<Tenents />} /> */}
        <Route path="/portfolio/aviation" element={<Aviation />} />
        <Route path="/portfolio/multipurpose" element={<MultiPurpose />} />
        <Route path="/portfolio/offices" element={<Offices />} />
        <Route path="/portfolio/education" element={<Education />} />
        <Route path="/portfolio/gyms" element={<Gyms />} />
        <Route path="/portfolio/worship" element={<Churches />} />
        <Route path="/portfolio/medical-dental" element={<MedDental />} />
        {/* <Route path="/portfolio/media" element={<Media />} /> */}
        <Route path="/portfolio/pets" element={<Pets />} />
        <Route path="/portfolio/laundry" element={<Laundry />} />
        <Route path="/portfolio/storage" element={<Storage />} />
        <Route path="/portfolio/auto-repair" element={<Auto />} />
        <Route path="/portfolio/other" element={<Other />} />
      </Routes>
      </ScrollResetHandler>
    </HashRouter>
  </React.StrictMode>,
  // </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
