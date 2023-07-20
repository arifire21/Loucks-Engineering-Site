import Navbar from "../components/navbar";
import Footer from '../components/Footer';
import Helmet from 'react-helmet';
import { ScrollRestoration } from 'react-router-dom';

export default function About() {
  return (
    <>
      <Helmet><title>About Us | Loucks Engineering Inc.</title></Helmet>
      <Navbar/>

      <div className="page-contents">
        <header>
          <h1>About Us</h1>
        </header>
        <section>
          <h2>Overview</h2>
          <section className="abt-inner">
            <p>We have a lot of experience in commercial projects, municipal projects, parks, recreation and environmentally-friendly projects.</p>
            <p>Many of our projects are of existing structures being renovated to meet the continuing needs of our clients. With our knowledge and experience we take great pride in being part of the intelligent reuse of existing facilities.</p>
            <p>We have many projects that have achieved LEED certification. Loucks Engineering Inc. has been a member of the US Green Building Council since 2007.</p>
            <p>We are licensed in Florida, South Carolina, Tennessee, Massachusetts, New Jersey, and Idaho.</p>
          </section>
        </section>
        <br/>
        <section>
          <h2>History</h2>
          <section className="abt-inner">
            <p>Our company was founded in 1966, and continues to remain a family business. We do what we can to support all who work here so that their tenure is long. This has built a conscientious team that takes great pride in their work.</p>
          </section>
        </section>
      </div> 

      <Footer/>

      <ScrollRestoration/>      
    </>
  )
}