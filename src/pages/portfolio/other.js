import BootstrapNavbar from "../../components/boostrap-components/bs-navbar";
import Footer from '../../components/Widgets/Footer';
import Helmet from 'react-helmet';

export default function Other() {
  return (
    <div>
      <Helmet>
      <title>Other Projects - Portfolio | Loucks Engineering Inc.</title>  
      </Helmet>

      <BootstrapNavbar/>

      <div className="page-contents">
        <header>
          <h1>Other Projects</h1>
          <p>description text here</p>
        </header>

       <div>
          {/* <h2><i>Notable Projects</i></h2> */}

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
      </div>
      <Footer />
    </div>
  )
}