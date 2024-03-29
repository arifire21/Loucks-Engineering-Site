import Navbar from "../../components/navbar";
import Footer from '../../components/Footer';
import Helmet from 'react-helmet';
import PortfolioReturnBtn from "../../components/bs-portfolio-btn";

export default function Retail() {
  return (
    <div>
      <Helmet>
      <title>Retail - Portfolio | Loucks Engineering Inc.</title>  
      </Helmet>

      <Navbar/>

      <div className="page-contents">
        <header>
          <h1>Retail Spaces</h1>
          <p>description text here</p>
        </header>

       <div>
          

          <p className="project-name">Mizner Park</p>
          <ul>
            <li>Whitebox Suites</li>
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