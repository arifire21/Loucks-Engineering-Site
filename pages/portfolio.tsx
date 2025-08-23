import Head from "next/head";
import { PortfolioNavDesktop, PortfolioNavMobile } from '@/components/simple-portfolio/portfolio-nav';
import BasicPortfolio from '@/components/simple-portfolio/basic-portfolio';
import { useEffect } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Portfolio() {
  useEffect(() => {
    const navD = document.querySelector('#portfolio-nav-desktop') as HTMLElement;
    const navM = document.querySelector('#portfolio-nav-mobile') as HTMLElement;
    let navTopD = navD.offsetTop;
    let navTopM = navM.offsetTop;

    function fixedNav() {
      if (window.scrollY >= navTopD) {    
        navD.classList.add('fixed');
      } else {
        navD.classList.remove('fixed');    
      }

      if (window.scrollY >= navTopM) {    
        navM.classList.add('fixed');
      } else {
        navM.classList.remove('fixed');    
      }
    }
    
    window.addEventListener('scroll', fixedNav);
  }, []);

    return (
      <>
        <Head>
        <title>Portfolio | Loucks Engineering, Inc.</title>
        <link rel="canonical" href="https://www.louckseng.com/portfolio" />
        <meta name="description" content="View a gallery showcasing notable projects." />
        </Head>

        <Navbar />

        <main id="portfolio-main">
          <h1>Project Portfolio</h1>
          <p>View a gallery showcasing notable projects.</p>

          <PortfolioNavDesktop />
          <PortfolioNavMobile />

          <BasicPortfolio />

          <hr />

          <section style={{ margin: "1rem 2rem", textAlign: 'left', fontSize:'12pt' }}>
              <p><span style={{ color: 'darkred', fontWeight: 'bold' }}>Disclaimer:</span> Pictures are used to indicate the spaces on location of listed projects. Projects include tenant improvements, shell buildings, remodels, and complete jobs. By using them, we are not intending to misrepresent our projects.
                  Pictures used are either provided by us or pulled from the general internet. We believe that no copyright laws have been violated. If we are notified differently, we will immediately remove the picture(s) in question.</p>
          </section>
        </main>

        <Footer/>

      </>
    )
}