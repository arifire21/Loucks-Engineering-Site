import BootstrapNavbar from "../../components/boostrap-components/bs-navbar";
import Footer from '../../components/Widgets/Footer';
import Helmet from 'react-helmet';
import PortfolioReturnBtn from "../../components/boostrap-components/bs-portfolio-btn";

export default function Aviation() {
  return (
    <div>
      <Helmet>
      <title>Aviation Services - Portfolio | Loucks Engineering Inc.</title>  
      </Helmet>

      <BootstrapNavbar/>

      <div className="page-contents">
        <header>
          <h1>Aviation Services</h1>
          <p>description text here</p>
        </header>

       <div>
          

          <p className="project-name">Avenger Flight Group</p>
          <ul>
            <li>Phase 1 and 2 Revisions</li>
            <li>Flight Simulator</li>
            <li>Sheltair Westside Developments</li>
          </ul>
          <p>Work done: mechanical, electrical</p>

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