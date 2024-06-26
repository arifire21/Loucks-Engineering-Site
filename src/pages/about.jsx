// import Navbar from "../components/navbar";
// import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Loucks Engineering, Inc.</title>
        <link rel="canonical" href="https://www.louckseng.com/about" />
        <meta name="description" content="Our company was founded in 1966, culminating in a lot of experience in designing multiple types of projects." />
      </Helmet>
    
      <Layout>
      <div className="page-contents" id="abt-ctr">
        <h1 style={{textAlign:'center'}}>About Us</h1>

        <section>
          <h2>Overview</h2>
          <section>
            <p className="abt-p">We have a lot of experience in design, commercial projects, municipal projects, parks, recreation and environmentally-friendly projects. Many of our projects are of existing structures being renovated to meet the continuing needs of our clients. With our knowledge and depth we take great pride in being part of the intelligent reuse of existing facilities. We have many projects that have achieved LEED certification.</p>
            {/* <p className="abt-p">We have many projects that have achieved LEED certification. Loucks Engineering, Inc. has been a member of the US Green Building Council since 2007.</p> */}
          </section>
        </section>

        <br/>

        <section>
          <h2>History</h2>
          <section>
            <p className="abt-p">Our company was founded in 1966, and continues to remain a family business. We do what we can to support all who work here so that their tenure is long. This has built a conscientious team that takes great pride in their work.</p>
          </section>
        </section>
      </div> 

      </Layout>

      <ScrollRestoration/>      
    </>
  )
}
