// import Navbar from "../components/navbar";
// import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import Layout from '../components/layout';

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Loucks Engineering, Inc.</title>
        <link rel="canonical" href="https://www.louckseng.com/services" />
        <meta name="description" content="We provide our services to various types of projects, from sizable warehouses to small single-family residences. See all services listed here." />
      </Helmet>
      <Layout>

      <div className="page-contents">
        <h1 style={{textAlign:'center'}}>Services Provided</h1>

        <p style={{textAlign:'center'}}>We provide our services to various types of projects, from sizable warehouses to small single-family residences.</p>

        <div className="flex-container">
          <div className="item">
            <p className="subtitle">Mechanical</p>
            <hr className="service-header" />
            <ul className="list">
              <li>HVAC Design</li>
              <li>HVAC Load Calculations</li>
              <li>Existing HVAC System Analysis</li>
              <li>Building Energy Audits</li>
            </ul>
          </div>

          <div className="item">
            <p className="subtitle">Electrical</p>
            <hr className="service-header" />
            <ul className="list">
              <li>Power Distribution</li>
              <li>Lighting Design and Controls</li>
              <li>Data and IT Systems</li>
              <li>Photometrics</li>
              <li>UPS systems</li>
            </ul>
          </div>

          <div className="item">
            <p className="subtitle">Plumbing</p>
            <hr className="service-header" />
            <ul className="list">
              <li>Plumbing Systems Design</li>
              <li>Domestic Water System Design</li>
              <li>Sanitary Waste System Design</li>
              <li>Natural Gas System Design</li>
            </ul>
          </div>
        </div>
      </div>
        
      </Layout>

      <ScrollRestoration/>
    </>
  );
}