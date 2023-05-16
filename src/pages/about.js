import BootstrapNavbar from "../components/boostrap-components/bs-navbar";
import Footer from '../components/Widgets/Footer';
import Helmet from 'react-helmet';

export default function About() {
  return (
    <div>
      <Helmet>
      <title>About Us | Loucks Engineering Inc.</title>  
      </Helmet>

      <BootstrapNavbar/>

      <div className="page-contents">
        <header>
          <h1>About Us</h1>
        </header>
        <section>
          <h2>Overview</h2>
          <p>We have a lot of experience in design build, municipal projects, parks, recreation and environmentally friendly projects.</p>
          <p>Many of our projects are of existing structures being renovated to meet the continuing needs of our clients. With our knowledge and depth we take great pride in being part of the intelligent reuse of existing facilities.</p>
          <p>We have many projects that have achieved LEED certification. Loucks Engineering Inc. has been a member of the US Green Building Council since 2007.</p>
        </section>
        <br/>
        <section>
          <h2>History</h2>
          <p>Our company was founded in 1966, and continues to remain a family business. We do what we can to support all who work here so that their tenure is long. This has built a conscientious team that takes great pride in their work.</p>
        </section>
      </div> 
      <Footer/>
    </div>
  )
}