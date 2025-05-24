import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//pages
import ErrorPage from './pages/error';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
// import Portfolio2 from './pages/portfolio2_old';
import About from './pages/about';
import Contact from './pages/contact';
import PortfolioNew from './pages/portfolio-new';
import NotFoundPage from './pages/notfound';

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
  },
  {
    path: "/404",
    element: <NotFoundPage/>
  },
  {
    path: "*",
    element: <NotFoundPage/>
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
