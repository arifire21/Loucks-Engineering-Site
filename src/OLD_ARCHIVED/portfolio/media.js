import BootstrapNavbar from "../../components/bs-navbar";
import Footer from '../../components/Footer';
import Helmet from 'react-helmet';
import PortfolioReturnBtn from "../../components/bs-portfolio-btn";

export default function Media() {
  return (
    <div>
      <Helmet>
      <title>Media - Portfolio | Loucks Engineering Inc.</title>  
      </Helmet>

      <BootstrapNavbar/>

      <div className="page-contents">
        <header>
          <h1>Media and Entertainment</h1>
          <p>description text here</p>
        </header>

       <div>
          

          <p className="project-name">Project Name</p>
          <p>date | work done</p>

          <p className="project-name">Project Name</p>
          <p>date | work done</p>

          <p className="project-name">Project Name</p>
          <p>date | work done</p>

          <p className="project-name">Project Name</p>
          <p>date | work done</p>

          <p className="project-name">Project Name</p>
          <p>date | work done</p>
        </div> 
        <PortfolioReturnBtn/>
      </div>
      <Footer />
    </div>
  )
}