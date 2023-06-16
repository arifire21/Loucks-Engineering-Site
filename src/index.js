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
// import Portfolio from './pages/portfolio';
import Portfolio2 from './pages/portfolio2';
import About from './pages/about';
import Contact from './pages/contact';

//test
import PortfolioLayout from './OLD_ARCHIVED/Tab Content/PortfolioLayout';

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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/services",
    element: <Services/>,
  },
  {
    path: "/portfolio",
    element: <Portfolio2/>,
  },
  {
    path: "portfolio-dev",
    element: <PortfolioLayout/>
  },
    {
      path: "/portfolio/residences",
      element: <Residences/>
    },
    {
      path: "/portfolio/restaurants",
      element: <Restaurants/>
    },
    {
      path: "/portfolio/retail",
      element: <Retail/>
    },
    {
      path: "/portfolio/multipurpose",
      element: <MultiPurpose/>
    },
    {
      path: "/portfolio/offices",
      element: <Offices/>
    },
    {
      path: "/portfolio/education",
      element: <Education/>
    },
    {
      path: "/portfolio/gyms",
      element: <Gyms/>
    },
    {
      path: "/portfolio/aviation",
      element: <Aviation/>
    },
    {
      path: "/portfolio/churches",
      element: <Churches/>
    },
    {
      path: "/portfolio/medical-dental",
      element: <MedDental/>
    },
    {
      path: "/portfolio/pets",
      element: <Pets/>
    },
    {
      path: "/portfolio/laundry",
      element: <Laundry/>
    },
    {
      path: "/portfolio/storage",
      element: <Storage/>
    },
    {
      path: "/portfolio/Auto",
      element: <Auto/>
    },
    {
      path: "/portfolio/other",
      element: <Other/>
    },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  }
]);

//hashrouter is for redirecting on ghp deployment, check if needs to be changed on final product
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
