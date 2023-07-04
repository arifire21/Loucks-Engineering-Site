import BootstrapNavbar from "../../components/bs-navbar";
import Footer from '../../components/Footer';
import Helmet from 'react-helmet';
import PortfolioReturnBtn from "../../components/bs-portfolio-btn";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Restaurants() {
  return (
    <div>
      <Helmet>
      <title>Restaurants - Portfolio | Loucks Engineering Inc.</title>  
      </Helmet>

      <BootstrapNavbar/>

      <div className="page-contents">
        <header>
          <h1>Restaurants</h1>
          <p>description text here</p>
        </header>

       {/* <div>
          
        <h2>Dining</h2>
          <p className="project-name">Miller Residence</p>
          <p>date | work done</p>

          <p className="project-name">Loucks Residence Remodel</p>
          <p>date | work done</p>

          <p className="project-name">Kendall Residence</p>
          <p>date | work done</p>

          <p className="project-name">Torres Residence</p>
          <p>date | work done</p>

          <p className="project-name">Torres Residence</p>
          <p>date | work done</p>

          <h2>Dining</h2>

        </div>  */}

  <Tabs
    defaultActiveKey="dining"
    id="uncontrolled-tab-example"
    className="mb-3"
  >
        <Tab eventKey="dining" title="Dining" className="portfolio-tab">
        <p className="project-name">Restaurant1</p>
          <p>date | work done</p>

          <p className="project-name">Restaurant2</p>
          <p>date | work done</p>
        </Tab>
        <Tab eventKey="brewery" title="Breweries">
        <p className="project-name">Funky Buddha Brewery</p>
          <p>date | work done</p>

          <p className="project-name">Restaurant2</p>
          <p>date | work done</p>
        </Tab>
      </Tabs>
        <PortfolioReturnBtn/>
      </div>
      <Footer />
    </div>
  )
}