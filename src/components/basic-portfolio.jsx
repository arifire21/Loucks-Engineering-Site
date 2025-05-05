import { restaurants, offices, outreach, residences, aviation, education, gyms, worship, medDental, beauty, pets, laundry, storage, auto, multipurpose, retail, other, supermarkets } from '../data/portfolio_data';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function BasicPortfolio() {
    const [btnDisabledLeft, setDisabledLeft] = useState(false);
    const [btnDisabledRight, setDisabledRight] = useState(false);

    function scrollRight(portfolioContainerID) {
        if (typeof window != "undefined") {
            console.log(portfolioContainerID)
            const portfolioContainer = document.getElementById(portfolioContainerID);
            console.log(portfolioContainer)

            portfolioContainer.scrollLeft += 200;

            if (portfolioContainer.scrollLeft === 0) {
                //setDisabledRight(true)
            }
        } else {
            console.log("Window Undefined, please wait...");
        }
    }

    function scrollLeft(portfolioContainerID) {
        if (typeof window != "undefined") {
            console.log(portfolioContainerID)
            const portfolioContainer = document.getElementById(portfolioContainerID);
            console.log(portfolioContainer)

            portfolioContainer.scrollLeft -= 200;

            if (portfolioContainer.scrollLeft === 0) {
                //setDisabledLeft(true)
            }
        } else {
            console.log("Window Undefined, please wait...");
        }
    }

    return (
        <>
            <h2 id='dining'>Dining</h2>
            <div className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('dining-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='dining-cnt'>
                    {restaurants.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('dining-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2 id='worship'>Worship</h2>
            <div className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('worship-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='worship-cnt'>
                    {worship.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('worship-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2 id='offices'>Offices</h2>
            <div className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('offices-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='offices-cnt'>
                    {offices.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('offices-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Aviation</h2>
            <div id='aviation' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('aviation-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='aviation-cnt'>
                    {aviation.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('aviation-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Outreach</h2>
            <div id='outreach' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('outreach-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='outreach-cnt'>
                    {outreach.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('outreach-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Storage Facilities</h2>
            <div id='storage' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('storage-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='storage-cnt'>
                    {storage.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('storage-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Gyms</h2>
            <div id='gyms' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('gym-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='gym-cnt'>
                    {gyms.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('gym-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Medical & Dental</h2>
            <div id='med-dent' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('meddent-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='meddent-cnt'>
                    {medDental.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('meddent-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Beauty</h2>
            <div id='beauty' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('beauty-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='beauty-cnt'>
                    {beauty.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('beauty-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Retail</h2>
            <div id='retail' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('retail-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='retail-cnt'>
                    {retail.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('retail-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Educational Institutions</h2>
            <div id='education' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('edu-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='edu-cnt'>
                    {education.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('edu-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Supermarkets</h2>
            <div id='supermarkets' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('market-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='market-cnt'>
                    {supermarkets.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('market-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Laundry Facilities</h2>
            <div id='laundry' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('laundry-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                    <div className='portfolio-items-container' id='laundry-cnt'>
                    </div>
                    {laundry.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('laundry-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Automotive</h2>
            <div id='auto' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('auto-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='auto-cnt'>
                    {auto.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('auto-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Pet Care</h2>
            <div id='pets' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('pet-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='pet-cnt'>
                    {pets.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('pet-cnt')}
                    ><FaCaretRight size={30} /></Button></div>
            </div>

            <hr />

            <h2>Multipurpose Spaces</h2>
            <div id='multipurpose' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('multi-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='multi-cnt'>
                    {multipurpose.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('multi-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Residences (Single & Multi-Family)</h2>
            <div id='residences' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('res-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='res-cnt'>
                    {residences.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('res-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Other Notable Projects</h2>
            <div id='other' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                        onClick={() => scrollLeft('other-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='other-cnt'>
                    {other.map((item, index) =>
                        <div className='portfolio-item' key={index}>
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                            {item.website ?
                                <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder'>{item.name}</p>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                        onClick={() => scrollRight('other-cnt')}
                    ><FaCaretRight size={30} /></Button></div>
            </div>
        </>
    )
}