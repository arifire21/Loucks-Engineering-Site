import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import {HiOutlineExternalLink} from 'react-icons/hi';
// import { ScrollRestoration } from 'react-router-dom';    //remove bc messes w anchor tags

import { restaurants, offices, outreach, residences, aviation, education, gyms, worship, medDental, beauty, pets, laundry, storage, auto, other } from '../data/portfolio_data';

// const observer = new IntersectionObserver( 
//     ([e]) => e.target.classList.add('stuck'),
//     {threshold: [1]}
// );

// observer.observe(document.getElementById('sticky-portfolio-nav'));

export default function Portfolio() {
    return(
        <>
        <Helmet><title>Portfolio | Loucks Engineering Inc.</title></Helmet>
        <Navbar/>
        <div className="page-contents">

            <div id='sticky-portfolio-nav'>
            <h4>Jump to:</h4>
                <nav>
                    <a className='link' href='#dining'>Dining</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#aviation'>Aviation</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#outreach'>Outreach</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#storage'>Storage</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#worship'>Worship</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#gyms'>Gyms</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#med-dent'>Medical & Dental</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#beauty'>Beauty</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#education'>Education</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#pets'>Pet Care</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#offices'>Offices</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#laundry'>Laundry</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#auto'>Automotive</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#residences'>Residences</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#other'>Other Notable Projects</a>
                </nav>
            </div>

            <h1 id='dining'>Dining</h1>
            <div className='portfolio-flex-container'>
                {restaurants.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='aviation'>Aviation</h1>
            <div className='portfolio-flex-container'>
                {aviation.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='outreach'>Outreach</h1>
            <div className='portfolio-flex-container'>
                {outreach.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='storage'>Storage Facilities</h1>
            <div className='portfolio-flex-container'>
                {storage.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='worship'>Worship</h1>
            <div className='portfolio-flex-container'>
                {worship.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='gyms'>Gyms</h1>
            <div className='portfolio-flex-container'>
                {gyms.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='med-dent'>Medical & Dental</h1>
            <div className='portfolio-flex-container'>
                {medDental.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='beauty'>Beauty</h1>
            <div className='portfolio-flex-container'>
                {beauty.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='education'>Educational Institutions</h1>
            <div className='portfolio-flex-container'>
                {education.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='pets'>Pet Care</h1>
            <div className='portfolio-flex-container'>
                {pets.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='offices'>Offices</h1>
            <div className='portfolio-flex-container'>
                {offices.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='laundry'>Laundry Facilities</h1>
            <div className='portfolio-flex-container'>
                {laundry.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='auto'>Automotive</h1>
            <div className='portfolio-flex-container'>
                {auto.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='residences'>Residences (Single & Multi-Family)</h1>
            <div className='portfolio-flex-container'>
                {residences.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>

            <hr/>

            <h1 id='other'>Other Notable Projects</h1>
            <div className='portfolio-flex-container'>
                {other.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                {/* <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> */}
            </div>
        </div>

        <Footer />
        {/* <ScrollRestoration/> */}

        {/* <h1 id='retail'>Retail</h1>
            <div className='portfolio-flex-container'>
                {retail.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div>
            </div> */}

        {/* <h1 id='multipurpose'>Multipurpose Spaces</h1>
            <div className='portfolio-flex-container'>
                {multipurpose.map((item, index) =>
                    <div className='portfolio-item' key={index}>
                        {item.image ?
                            <img className='portfolio-img' src={item.image} alt="portfolio_img"/>
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

                <div className='portfolio-item'>
                    <div className='portfolio-img-placeholder tbd'>More projects coming soon!</div>
                </div> 
            </div> */}

        </>
    )
}