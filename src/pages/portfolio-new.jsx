import PortfolioMap from "../components/portfolio-map";
import Layout from "../components/layout";
import { SlLayers } from "react-icons/sl";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function PortfolioNew() {
    return(
    <>
    <Layout>
        <hgroup style={{textAlign:'center'}}>
            <h1>Portfolio</h1>
            <p>[flavor text]<br/>Use the layer control <SlLayers/> to toggle project categories. Click any project name on the side bar to be taken to that project location, or click any marker <FaMapMarkerAlt/> to highlight the project entry.</p>
        </hgroup>
        <PortfolioMap/>

        {/* <section style={{margin:"1rem 2rem"}}>
            <p><span style={{color:'red', fontWeight:'bold'}}>Disclaimer:</span> Pictures are used to indicate the spaces on location of listed projects. Projects include tenant improvements, shell buildings, remodels, and complete jobs. By using them, we are not intending to misrepresent our projects.
            Pictures used are either provided by us or pulled from the general internet. We believe that no copyright laws have been violated. If we are notified differently, we will immediately remove the picture(s) in question.</p>
        </section> */}
    </Layout>
    </>
    )
}