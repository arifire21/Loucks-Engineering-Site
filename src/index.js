import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
//pages
// import Home from './pages/home';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Contact from './pages/contact';
//portfolio pages
import Residences from './pages/portfolio/residences';

ReactDOM.render(
  // <BrowserRouter>
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio/residences" element={<Residences />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  // </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
