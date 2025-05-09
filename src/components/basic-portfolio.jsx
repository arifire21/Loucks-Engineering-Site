import { restaurants, offices, outreach, residences, aviation, education, gyms, worship, medDental, beauty, pets, laundry, storage, auto, multipurpose, retail, other, supermarkets } from '../data/portfolio_data';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { Button } from 'react-bootstrap';
import { useState, useRef } from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

export default function BasicPortfolio() {
    const [restaurantsBtnDisabledLeft, setRestaurantsDisabledLeft] = useState(true);
    const [restaurantsBtnDisabledRight, setRestaurantsDisabledRight] = useState(false);
    const [officesBtnDisabledLeft, setOfficesDisabledLeft] = useState(true);
    const [officesBtnDisabledRight, setOfficesDisabledRight] = useState(false);
    const [outreachBtnDisabledLeft, setOutreachDisabledLeft] = useState(true);
    const [outreachBtnDisabledRight, setOutreachDisabledRight] = useState(false);
    const [residencesBtnDisabledLeft, setResidencesDisabledLeft] = useState(true);
    const [residencesBtnDisabledRight, setResidencesDisabledRight] = useState(false);
    const [aviationBtnDisabledLeft, setAviationDisabledLeft] = useState(true);
    const [aviationBtnDisabledRight, setAviationDisabledRight] = useState(false);
    const [educationBtnDisabledLeft, setEducationDisabledLeft] = useState(true);
    const [educationBtnDisabledRight, setEducationDisabledRight] = useState(false);
    const [gymsBtnDisabledLeft, setGymsDisabledLeft] = useState(true);
    const [gymsBtnDisabledRight, setGymsDisabledRight] = useState(false);
    const [worshipBtnDisabledLeft, setWorshipDisabledLeft] = useState(true);
    const [worshipBtnDisabledRight, setWorshipDisabledRight] = useState(false);
    const [medDentalBtnDisabledLeft, setMedDentalDisabledLeft] = useState(true);
    const [medDentalBtnDisabledRight, setMedDentalDisabledRight] = useState(false);
    const [beautyBtnDisabledLeft, setBeautyDisabledLeft] = useState(true);
    const [beautyBtnDisabledRight, setBeautyDisabledRight] = useState(false);
    const [petsBtnDisabledLeft, setPetsDisabledLeft] = useState(true);
    const [petsBtnDisabledRight, setPetsDisabledRight] = useState(false);
    const [laundryBtnDisabledLeft, setLaundryDisabledLeft] = useState(true);
    const [laundryBtnDisabledRight, setLaundryDisabledRight] = useState(false);
    const [storageBtnDisabledLeft, setStorageDisabledLeft] = useState(true);
    const [storageBtnDisabledRight, setStorageDisabledRight] = useState(false);
    const [autoBtnDisabledLeft, setAutoDisabledLeft] = useState(true);
    const [autoBtnDisabledRight, setAutoDisabledRight] = useState(false);
    const [multipurposeBtnDisabledLeft, setMultipurposeDisabledLeft] = useState(true);
    const [multipurposeBtnDisabledRight, setMultipurposeDisabledRight] = useState(false);
    const [retailBtnDisabledLeft, setRetailDisabledLeft] = useState(true);
    const [retailBtnDisabledRight, setRetailDisabledRight] = useState(false);
    const [otherBtnDisabledLeft, setOtherDisabledLeft] = useState(true);
    const [otherBtnDisabledRight, setOtherDisabledRight] = useState(false);
    const [supermarketsBtnDisabledLeft, setSupermarketsDisabledLeft] = useState(true);
    const [supermarketsBtnDisabledRight, setSupermarketsDisabledRight] = useState(false);

    const [restaurantID, setRestaurantID] = useState(0);
    const [officesID, setOfficesID] = useState(0);
    const [outreachID, setOutreachID] = useState(0);
    const [residencesID, setResidencesID] = useState(0);
    const [aviationID, setAviationID] = useState(0);
    const [educationID, setEducationID] = useState(0);
    const [gymsID, setGymsID] = useState(0);
    const [worshipID, setWorshipID] = useState(0);
    const [medDentalID, setMedDentalID] = useState(0);
    const [beautyID, setBeautyID] = useState(0);
    const [petsID, setPetsID] = useState(0);
    const [laundryID, setLaundryID] = useState(0);
    const [storageID, setStorageID] = useState(0);
    const [autoID, setAutoID] = useState(0);
    const [multipurposeID, setMultipurposeID] = useState(0);
    const [retailID, setRetailID] = useState(0);
    const [otherID, setOtherID] = useState(0);
    const [supermarketsID, setSupermarketsID] = useState(0);

    const restaurantsRef = useRef(null);
    const officesRef = useRef(null);
    const outreachRef = useRef(null);
    const residencesRef = useRef(null);
    const aviationRef = useRef(null);
    const educationRef = useRef(null);
    const gymRef = useRef(null);
    const worshipRef = useRef(null);
    const medDentalRef = useRef(null);
    const beautyRef = useRef(null);
    const petsRef = useRef(null);
    const laundryRef = useRef(null);
    const storageRef = useRef(null);
    const autoRef = useRef(null);
    const multipurposeRef = useRef(null);
    const retailRef = useRef(null);
    const supermarketsRef = useRef(null);
    const otherRef = useRef(null);

    function setListNode(portfolioContainerID){
        if (portfolioContainerID === 'restaurants') {
            return restaurantsRef.current;
        } else if (portfolioContainerID === 'offices') {
            return officesRef.current;
        } else if (portfolioContainerID === 'outreach') {
            return outreachRef.current;
        } else if (portfolioContainerID === 'residences') {
            return residencesRef.current;
        } else if (portfolioContainerID === 'aviation') {
            return aviationRef.current;
        } else if (portfolioContainerID === 'education') {
            return educationRef.current;
        } else if (portfolioContainerID === 'gyms') {
            return gymRef.current;
        } else if (portfolioContainerID === 'worship') {
            return worshipRef.current;
        } else if (portfolioContainerID === 'medDental') {
            return medDentalRef.current;
        } else if (portfolioContainerID === 'beauty') {
            return beautyRef.current;
        } else if (portfolioContainerID === 'pets') {
            return petsRef.current;
        } else if (portfolioContainerID === 'laundry') {
            return laundryRef.current;
        } else if (portfolioContainerID === 'storage') {
            return storageRef.current;
        } else if (portfolioContainerID === 'auto') {
            return autoRef.current;
        } else if (portfolioContainerID === 'multipurpose') {
            return multipurposeRef.current;
        } else if (portfolioContainerID === 'retail') {
            return retailRef.current;
        } else if (portfolioContainerID === 'other') {
            return otherRef.current;
        } else if (portfolioContainerID === 'supermarkets') {
            return supermarketsRef.current;
        } else {
            return null; // fallback
        }
    }

    function scrollRight(portfolioContainerID) {
        if (typeof window != "undefined") {
            // console.log(portfolioContainerID)
            // const portfolioContainer = document.getElementById(portfolioContainerID);
            // console.log(portfolioContainer)
            //portfolioContainer.scrollLeft += 200;

            //find which node is used
            const listNode = setListNode(portfolioContainerID);

            //do the scroll
            //const imgToScroll = listNode.querySelectorAll(portfolio-item[index]);
            listNode.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            
            //increment whichever ID is used
            if (portfolioContainerID === 'restaurants') {
                setRestaurantID(restaurantID + 1);
            } else if (portfolioContainerID === 'offices') {
                setOfficesID(officesID + 1);
            } else if (portfolioContainerID === 'outreach') {
                setOutreachID(outreachID + 1);
            } else if (portfolioContainerID === 'residences') {
                setResidencesID(residencesID + 1);
            } else if (portfolioContainerID === 'aviation') {
                setAviationID(aviationID + 1);
            } else if (portfolioContainerID === 'education') {
                setEducationID(educationID + 1);
            } else if (portfolioContainerID === 'gyms') {
                setGymsID(gymsID + 1);
            } else if (portfolioContainerID === 'worship') {
                setWorshipID(worshipID + 1);
            } else if (portfolioContainerID === 'medDental') {
                setMedDentalID(medDentalID + 1);
            } else if (portfolioContainerID === 'beauty') {
                setBeautyID(beautyID + 1);
            } else if (portfolioContainerID === 'pets') {
                setPetsID(petsID + 1);
            } else if (portfolioContainerID === 'laundry') {
                setLaundryID(laundryID + 1);
            } else if (portfolioContainerID === 'storage') {
                setStorageID(storageID + 1);
            } else if (portfolioContainerID === 'auto') {
                setAutoID(autoID + 1);
            } else if (portfolioContainerID === 'multipurpose') {
                setMultipurposeID(multipurposeID + 1)
            } else if (portfolioContainerID === 'retail') {
                setRetailID(retailID + 1);
            } else if (portfolioContainerID === 'other') {
                setOtherID(otherID + 1);
            } else if (portfolioContainerID === 'supermarkets') {
                setSupermarketsID(supermarketsID + 1);
            }

            //check if at end of array
            if (restaurantID >= restaurants.length) {
                setRestaurantsDisabledRight(true);
            }
            if (officesID >= offices.length) {
                setOfficesDisabledRight(true);
            }
            if (outreachID >= outreach.length) {
                setOutreachDisabledRight(true);
            }
            if (residencesID >= residences.length) {
                setResidencesDisabledRight(true);
            }
            if (aviationID >= aviation.length) {
                setAviationDisabledRight(true);
            }
            if (educationID >= education.length) {
                setEducationDisabledRight(true);
            }
            if (gymsID >= gyms.length) {
                setGymsDisabledRight(true);
            }
            if (worshipID >= worship.length) {
                setWorshipDisabledRight(true);
            }
            if (medDentalID >= medDental.length) {
                setMedDentalDisabledRight(true);
            }
            if (beautyID >= beauty.length) {
                setBeautyDisabledRight(true);
            }
            if (petsID >= pets.length) {
                setPetsDisabledRight(true);
            }
            if (laundryID >= laundry.length) {
                setLaundryDisabledRight(true);
            }
            if (storageID >= storage.length) {
                setStorageDisabledRight(true);
            }
            if (autoID >= auto.length) {
                setAutoDisabledRight(true);
            }
            if (multipurposeID >= multipurpose.length) {
                setMultipurposeDisabledRight(true);
            }
            if (retailID >= retail.length) {
                setRetailDisabledRight(true);
            }
            if (otherID >= other.length) {
                setOtherDisabledRight(true);
            }
            if (supermarketsID >= supermarkets.length) {
                setSupermarketsDisabledRight(true);
            }
        } else {    //for SR WIndow
            console.log("Window Undefined, please wait...");
        }
    }

    function scrollLeft(portfolioContainerID) {
        if (typeof window != "undefined") {
            // console.log(portfolioContainerID)
            // const portfolioContainer = document.getElementById(portfolioContainerID);
            // console.log(portfolioContainer)
            //portfolioContainer.scrollLeft += 200;

            //find which node is used
            const listNode = setListNode(portfolioContainerID);

            //do the scroll
            //const imgToScroll = listNode.querySelectorAll(portfolio-item[index]);
            listNode.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
            
            //increment whichever ID is used
            if (portfolioContainerID === 'restaurants') {
                setRestaurantID(restaurantID - 1);
                setRestaurantsDisabledRight(false);
            } else if (portfolioContainerID === 'offices') {
                setOfficesID(officesID - 1);
                setOfficesDisabledRight(false);
            } else if (portfolioContainerID === 'outreach') {
                setOutreachID(outreachID - 1);
                setOutreachDisabledRight(false);
            } else if (portfolioContainerID === 'residences') {
                setResidencesID(residencesID - 1);
                setResidencesDisabledRight(false);
            } else if (portfolioContainerID === 'aviation') {
                setAviationID(aviationID - 1);
                setAviationDisabledRight(false);
            } else if (portfolioContainerID === 'education') {
                setEducationID(educationID - 1);
                setEducationDisabledRight(false);
            } else if (portfolioContainerID === 'gyms') {
                setGymsID(gymsID - 1);
                setGymsDisabledRight(false);
            } else if (portfolioContainerID === 'worship') {
                setWorshipID(worshipID - 1);
                setWorshipDisabledRight(false);
            } else if (portfolioContainerID === 'medDental') {
                setMedDentalID(medDentalID - 1);
                setMedDentalDisabledRight(false);
            } else if (portfolioContainerID === 'beauty') {
                setBeautyID(beautyID - 1);
                setBeautyDisabledRight(false);
            } else if (portfolioContainerID === 'pets') {
                setPetsID(petsID - 1);
                setPetsDisabledRight(false);
            } else if (portfolioContainerID === 'laundry') {
                setLaundryID(laundryID - 1);
                setLaundryDisabledRight(false);
            } else if (portfolioContainerID === 'storage') {
                setStorageID(storageID - 1);
                setStorageDisabledRight(false);
            } else if (portfolioContainerID === 'auto') {
                setAutoID(autoID - 1);
                setAutoDisabledRight(false);
            } else if (portfolioContainerID === 'multipurpose') {
                setMultipurposeID(multipurposeID - 1);
                setMultipurposeDisabledRight(false);
            } else if (portfolioContainerID === 'retail') {
                setRetailID(retailID - 1);
                setRetailDisabledRight(false);
            } else if (portfolioContainerID === 'other') {
                setOtherID(otherID - 1);
                setOtherDisabledRight(false);
            } else if (portfolioContainerID === 'supermarkets') {
                setSupermarketsID(supermarketsID - 1);
                setSupermarketsDisabledRight(false);
            }

            //check if at end of array
            if (restaurantID == 0) {
                setRestaurantsDisabledLeft(true);
            }
            if (officesID == 0) {
                setOfficesDisabledLeft(true);
            }
            if (outreachID == 0) {
                setOutreachDisabledLeft(true);
            }
            if (residencesID == 0) {
                setResidencesDisabledLeft(true);
            }
            if (aviationID == 0) {
                setAviationDisabledLeft(true);
            }
            if (educationID == 0) {
                setEducationDisabledLeft(true);
            }
            if (gymsID == 0) {
                setGymsDisabledLeft(true);
            }
            if (worshipID == 0) {
                setWorshipDisabledLeft(true);
            }
            if (medDentalID == 0) {
                setMedDentalDisabledLeft(true);
            }
            if (beautyID == 0) {
                setBeautyDisabledLeft(true);
            }
            if (petsID == 0) {
                setPetsDisabledLeft(true);
            }
            if (laundryID == 0) {
                setLaundryDisabledLeft(true);
            }
            if (storageID == 0) {
                setStorageDisabledLeft(true);
            }
            if (autoID == 0) {
                setAutoDisabledLeft(true);
            }
            if (multipurposeID == 0) {
                setMultipurposeDisabledLeft(true);
            }
            if (retailID == 0) {
                setRetailDisabledLeft(true);
            }
            if (otherID == 0) {
                setOtherDisabledLeft(true);
            }
            if (supermarketsID == 0) {
                setSupermarketsDisabledLeft(true);
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
                    <Button variant="danger" className="portfolio-btn" disabled={restaurantsBtnDisabledLeft}
                        onClick={() => scrollLeft('dining-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='dining-cnt'>
                    {restaurants.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === restaurantID ? restaurantsRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={restaurantsBtnDisabledRight}
                        onClick={() => scrollRight('dining-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2 id='worship'>Worship</h2>
            <div className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={worshipBtnDisabledLeft}
                        onClick={() => scrollLeft('worship-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='worship-cnt'>
                    {worship.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === worshipID ? worshipRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={worshipBtnDisabledRight}
                        onClick={() => scrollRight('worship-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2 id='offices'>Offices</h2>
            <div className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={officesBtnDisabledLeft}
                        onClick={() => scrollLeft('offices-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='offices-cnt'>
                    {offices.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === officesID ? officesRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={officesBtnDisabledRight}
                        onClick={() => scrollRight('offices-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Aviation</h2>
            <div id='aviation' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={aviationBtnDisabledLeft}
                        onClick={() => scrollLeft('aviation-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='aviation-cnt'>
                    {aviation.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === aviationID ? aviationRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={aviationBtnDisabledRight}
                        onClick={() => scrollRight('aviation-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Outreach</h2>
            <div id='outreach' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={outreachBtnDisabledLeft}
                        onClick={() => scrollLeft('outreach-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='outreach-cnt'>
                    {outreach.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === outreachID ? outreachRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={outreachBtnDisabledRight}
                        onClick={() => scrollRight('outreach-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Storage Facilities</h2>
            <div id='storage' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={storageBtnDisabledLeft}
                        onClick={() => scrollLeft('storage-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='storage-cnt'>
                    {storage.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === storageID ? storageRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={storageBtnDisabledRight}
                        onClick={() => scrollRight('storage-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Gyms</h2>
            <div id='gyms' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={gymsBtnDisabledLeft}
                        onClick={() => scrollLeft('gym-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='gym-cnt'>
                    {gyms.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === gymsID ? gymRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={gymsBtnDisabledRight}
                        onClick={() => scrollRight('gym-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Medical & Dental</h2>
            <div id='med-dent' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={medDentalBtnDisabledLeft}
                        onClick={() => scrollLeft('meddent-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='meddent-cnt'>
                    {medDental.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === medDentalID ? medDentalRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={medDentalBtnDisabledRight}
                        onClick={() => scrollRight('meddent-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Beauty</h2>
            <div id='beauty' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={beautyBtnDisabledLeft}
                        onClick={() => scrollLeft('beauty-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='beauty-cnt'>
                    {beauty.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === beautyID ? beautyRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={beautyBtnDisabledRight}
                        onClick={() => scrollRight('beauty-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Retail</h2>
            <div id='retail' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={retailBtnDisabledLeft}
                        onClick={() => scrollLeft('retail-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='retail-cnt'>
                    {retail.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === retailID ? retailRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={retailBtnDisabledRight}
                        onClick={() => scrollRight('retail-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Educational Institutions</h2>
            <div id='education' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={educationBtnDisabledLeft}
                        onClick={() => scrollLeft('edu-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container' id='edu-cnt'>
                    {education.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === educationID ? educationRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={educationBtnDisabledRight}
                        onClick={() => scrollRight('edu-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Supermarkets</h2>
            <div id='supermarkets' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={supermarketsBtnDisabledLeft}
                        onClick={() => scrollLeft('market-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                <div className='portfolio-items-container'>
                    {supermarkets.map((item, index) =>
                        <div className='portfolio-item' key={index} id='market-cnt' ref={index === supermarketsID ? supermarketsRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={supermarketsBtnDisabledRight}
                        onClick={() => scrollRight('market-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Laundry Facilities</h2>
            <div id='laundry' className='portfolio-flex-container'>
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={laundryBtnDisabledLeft}
                        onClick={() => scrollLeft('laundry-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                    <div className='portfolio-items-container' id='laundry-cnt'>
                    </div>
                    {laundry.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === laundryID ? laundryRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={laundryBtnDisabledRight}
                        onClick={() => scrollRight('laundry-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
            </div>

            <hr />

            <h2>Automotive</h2>
            <div id='auto' className='portfolio-flex-container'>
            {auto.length > 2 && (
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={autoBtnDisabledLeft}
                        onClick={() => scrollLeft('auto-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
            )}
                <div className='portfolio-items-container' id='auto-cnt'>
                    {auto.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === autoID ? autoRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                {auto.length > 2 && (
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={autoBtnDisabledRight}
                        onClick={() => scrollRight('auto-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
                )}
            </div>

            <hr />

            <h2>Pet Care</h2>
            <div id='pets' className='portfolio-flex-container'>
                {pets.length > 2 && (
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={petsBtnDisabledLeft}
                        onClick={() => scrollLeft('pet-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                )}
                <div className='portfolio-items-container' id='pet-cnt'>
                    {pets.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === petsID ? petsRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                {pets.length > 2 && (
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={petsBtnDisabledRight}
                        onClick={() => scrollRight('pet-cnt')}
                    ><FaCaretRight size={30} /></Button></div>
                )}
            </div>

            <hr />

            <h2>Multipurpose Spaces</h2>
            <div id='multipurpose' className='portfolio-flex-container'>
                {multipurpose.length > 2 && (
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={multipurposeBtnDisabledLeft}
                        onClick={() => scrollLeft('multi-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                )}
                <div className='portfolio-items-container' id='multi-cnt'>
                    {multipurpose.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === multipurposeID ? multipurposeRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                {multipurpose.length > 2 && (
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={multipurposeBtnDisabledRight}
                        onClick={() => scrollRight('multi-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
                )}
            </div>

            <hr />

            <h2>Residences (Single & Multi-Family)</h2>
            <div id='residences' className='portfolio-flex-container'>
                {residences.length > 2 && (
                    <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={residencesBtnDisabledLeft}
                        onClick={() => scrollLeft('res-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                )}
                <div className='portfolio-items-container' id='res-cnt'>
                    {residences.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === residencesID ? residencesRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                {residences.length > 2 && (
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={residencesBtnDisabledRight}
                        onClick={() => scrollRight('res-cnt')}
                    ><FaCaretRight size={30} /></Button>
                </div>
                )}
            </div>

            <hr />

            <h2>Other Notable Projects</h2>
            <div id='other' className='portfolio-flex-container'>
                {other.length > 2 && (
                <div className='long-btn-container btn-left'>
                    <Button variant="danger" className="portfolio-btn" disabled={setOtherDisabledLeft}
                        onClick={() => scrollLeft('other-cnt')}
                    ><FaCaretLeft size={30} /></Button>
                </div>
                )}
                <div className='portfolio-items-container' id='other-cnt'>
                    {other.map((item, index) =>
                        <div className='portfolio-item' key={index} ref={index === otherID ? otherRef : null}>
                            {item.website ?
                                <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                :
                                <p className='link-placeholder p-name'>{item.name}</p>
                            }
                            {item.image ?
                                <img className='portfolio-img' src={item.image} alt={`LEI MEP portfolio_img_${item.name}`} />
                                :
                                <div className='portfolio-img-placeholder'>No image available</div>
                            }
                        </div>
                    )}
                </div>
                {other.length > 2 && (
                <div className='long-btn-container btn-right'>
                    <Button variant="danger" className="portfolio-btn" disabled={otherBtnDisabledRight}
                        onClick={() => scrollRight('other-cnt')}
                    ><FaCaretRight size={30} /></Button></div>
                )}
            </div>
        </>
    )
}