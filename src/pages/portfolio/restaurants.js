import BootstrapNavbar from "../../components/boostrap-components/bs-navbar";
import Footer from '../../components/Widgets/Footer';
import Helmet from 'react-helmet';

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

       <div>
          <h2><i>Notable Projects</i></h2>

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
        </div> 
      </div>
      <Footer />
    </div>
  )
}