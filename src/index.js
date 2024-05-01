import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import ScrollResetHandler from './components/ScrollResetHandler';

//pages
import ErrorPage from './pages/error';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
// import Portfolio2 from './pages/portfolio2_old';
import About from './pages/about';
import Contact from './pages/contact';
import PortfolioNew from './pages/portfolio-new';

//test
// import PortfolioLayout from './pages/portfolio';

//portfolio pages
// import Residences from './OLD_ARCHIVED/portfolio/residences';
// import Restaurants from './OLD_ARCHIVED/portfolio/restaurants';
// import Retail from './OLD_ARCHIVED/portfolio/retail';
// import Tenents from './pages/portfolio/ti';
// import Aviation from './OLD_ARCHIVED/portfolio/aviation';
// import MultiPurpose from './OLD_ARCHIVED/portfolio/multi-purpose';
// import Offices from './OLD_ARCHIVED/portfolio/offices';
// import Education from './OLD_ARCHIVED/portfolio/education';
// import Gyms from './OLD_ARCHIVED/portfolio/gymnasiums';
// import Churches from './OLD_ARCHIVED/portfolio/worship';
// import MedDental from './OLD_ARCHIVED/portfolio/medical-offices';
// import Media from './pages/portfolio/media';
// import Pets from './OLD_ARCHIVED/portfolio/pet-services';
// import Laundry from './OLD_ARCHIVED/portfolio/laundry';
// import Storage from './OLD_ARCHIVED/portfolio/storage';
// import Auto from './OLD_ARCHIVED/portfolio/auto-repair';
// import Other from './OLD_ARCHIVED/portfolio/other';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/services",
    element: <Services/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/portfolio",
    element: <Portfolio/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/about",
    element: <About/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/contact",
    element: <Contact/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/portfolio-new",
    element: <PortfolioNew/>,
    errorElement: <ErrorPage/>
  }
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
