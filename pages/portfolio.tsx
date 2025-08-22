import Head from "next/head";
import { PortfolioNavDesktop, PortfolioNavMobile } from '@/components/simple-portfolio/portfolio-nav';
import BasicPortfolio from '@/components/simple-portfolio/basic-portfolio';
import { useEffect } from "react";

export default function Portfolio() {
  //need to have a static height for sticky nav to work
  // useEffect(() => {
  //   if(typeof window !== "undefined"){
  //     const portfolioPageLayout = document.getElementById("portfolio-main") as HTMLElement;
  //     console.log("client height: ", portfolioPageLayout!.clientHeight)
  //     // console.log("scroll height: ", portfolioPageLayout!.scrollHeight)
  //     portfolioPageLayout!.style.height = portfolioPageLayout!.clientHeight + 'px';

  //     console.log(portfolioPageLayout)
  //   }
  // }, []);

    return (
      <>
        <Head>
        <title>Portfolio | Loucks Engineering, Inc.</title>
        <link rel="canonical" href="https://www.louckseng.com/portfolio" />
        <meta name="description" content="View a gallery showcasing notable projects." />
        </Head>

        <div id="portfolio-main">
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
        </div>
      </>
    )
}