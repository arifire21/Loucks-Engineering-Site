import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import { PortfolioNavDesktop, PortfolioNavMobile } from '../components/portfolio-nav';
import BasicPortfolio from '../components/basic-portfolio';
// import { ScrollRestoration } from 'react-router-dom';    //remove bc messes w anchor tags

export default function Portfolio() {
    return (
        <>
            <Helmet>
                <title>Portfolio | Loucks Engineering, Inc.</title>
                <link rel="canonical" href="https://www.louckseng.com/portfolio" />
                <meta name="description" content="View a gallery showcasing notable projects." />
            </Helmet>
            <Layout>
                <PortfolioNavDesktop />
                <PortfolioNavMobile />

                <div className="page-contents" id='portfolio-page'>
                    <h1 style={{ textAlign: 'center' }}>Project Portfolio</h1>
                    <p style={{ textAlign: 'center' }}>View a gallery showcasing notable projects.</p>

                    <BasicPortfolio />

                    <hr />

                    <section style={{ margin: "1rem 2rem" }}>
                        <p><span style={{ color: 'red', fontWeight: 'bold' }}>Disclaimer:</span> Pictures are used to indicate the spaces on location of listed projects. Projects include tenant improvements, shell buildings, remodels, and complete jobs. By using them, we are not intending to misrepresent our projects.
                            Pictures used are either provided by us or pulled from the general internet. We believe that no copyright laws have been violated. If we are notified differently, we will immediately remove the picture(s) in question.</p>
                    </section>

                </div>

            </Layout>

            {/* <ScrollRestoration/> */}
        </>
    )
}