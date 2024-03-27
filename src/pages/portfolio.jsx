// import Navbar from '../components/navbar';
// import Footer from '../components/Footer';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import {HiOutlineExternalLink} from 'react-icons/hi';
import { PortfolioNavDesktop, PortfolioNavMobile } from '../components/portfolio-nav';
// import { ScrollRestoration } from 'react-router-dom';    //remove bc messes w anchor tags

import { restaurants, offices, outreach, residences, aviation, education, gyms, worship, medDental, beauty, pets, laundry, storage, auto, multipurpose, retail, other, supermarkets } from '../data/portfolio_data';


export default function Portfolio() {
    return(
        <>
        <Helmet><title>Portfolio | Loucks Engineering, Inc.</title></Helmet>
        <Layout>
        <PortfolioNavDesktop/>
        <PortfolioNavMobile/>
        
        <div className="page-contents" id='portfolio-page'>

            <h1 id='dining'>Dining</h1>
            <div className='portfolio-flex-container'>
                {restaurants.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1 id='worship'>Worship</h1>
            <div className='portfolio-flex-container'>
                {worship.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1 id='offices'>Offices</h1>
            <div className='portfolio-flex-container'>
                {offices.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Aviation</h1>
            <div id='aviation' className='portfolio-flex-container'>
                {aviation.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Outreach</h1>
            <div  id='outreach' className='portfolio-flex-container'>
                {outreach.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Storage Facilities</h1>
            <div id='storage' className='portfolio-flex-container'>
                {storage.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Gyms</h1>
            <div id='gyms' className='portfolio-flex-container'>
                {gyms.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Medical & Dental</h1>
            <div id='med-dent' className='portfolio-flex-container'>
                {medDental.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Beauty</h1>
            <div id='beauty' className='portfolio-flex-container'>
                {beauty.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Retail</h1>
            <div id='retail' className='portfolio-flex-container'>
                {retail.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Educational Institutions</h1>
            <div id='education' className='portfolio-flex-container'>
                {education.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Supermarkets</h1>
            <div id='supermarkets' className='portfolio-flex-container'>
                {supermarkets.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Laundry Facilities</h1>
            <div id='laundry' className='portfolio-flex-container'>
                {laundry.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Automotive</h1>
            <div id='auto' className='portfolio-flex-container'>
                {auto.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Pet Care</h1>
            <div id='pets' className='portfolio-flex-container'>
                {pets.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Multipurpose Spaces</h1>
            <div id='multipurpose' className='portfolio-flex-container'>
                {multipurpose.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Residences (Single & Multi-Family)</h1>
            <div id='residences' className='portfolio-flex-container'>
                {residences.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <h1>Other Notable Projects</h1>
            <div id='other' className='portfolio-flex-container'>
                {other.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="LEI MEP portfolio_img"/>
                        :
                            <div className='portfolio-img-placeholder'>No image available</div>
                        }
                        {item.website ?
                            <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                        :
                            <p className='link-placeholder'>{item.name}</p>
                        }
                    </div>
                )}
            </div>

            <hr/>

            <section style={{margin:"1rem 2rem"}}>
                <p><span style={{color:'red', fontWeight:'bold'}}>Disclaimer:</span> Pictures are used to indicate the spaces on location of listed projects. Projects include tenant improvements, shell buildings, remodels, and complete jobs. By using them, we are not intending to misrepresent our projects.
                Pictures used are either provided by us or pulled from the general internet. We believe that no copyright laws have been violated. If we are notified differently, we will immediately remove the picture(s) in question.</p>
            </section>

        </div>

        </Layout>

        {/* <ScrollRestoration/> */}
        </>
    )
}