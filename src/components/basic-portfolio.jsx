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

    function setRefNode(portfolioContainerID) {
        if (portfolioContainerID === 'dining-cnt') {
            return restaurantsRef.current;
        } else if (portfolioContainerID === 'offices-cnt') {
            return officesRef.current;
        } else if (portfolioContainerID === 'outreach-cnt') {
            return outreachRef.current;
        } else if (portfolioContainerID === 'res-cnt') {
            return residencesRef.current;
        } else if (portfolioContainerID === 'aviation-cnt') {
            return aviationRef.current;
        } else if (portfolioContainerID === 'edu-cnt') {
            return educationRef.current;
        } else if (portfolioContainerID === 'gym-cnt') {
            return gymRef.current;
        } else if (portfolioContainerID === 'worship-cnt') {
            return worshipRef.current;
        } else if (portfolioContainerID === 'meddental-cnt') {
            return medDentalRef.current;
        } else if (portfolioContainerID === 'beauty-cnt') {
            return beautyRef.current;
        } else if (portfolioContainerID === 'pets-cnt') {
            return petsRef.current;
        } else if (portfolioContainerID === 'laundry-cnt') {
            return laundryRef.current;
        } else if (portfolioContainerID === 'storage-cnt') {
            return storageRef.current;
        } else if (portfolioContainerID === 'auto-cnt') {
            return autoRef.current;
        } else if (portfolioContainerID === 'multi-cnt') {
            return multipurposeRef.current;
        } else if (portfolioContainerID === 'retail-cnt') {
            return retailRef.current;
        } else if (portfolioContainerID === 'other-cnt') {
            return otherRef.current;
        } else if (portfolioContainerID === 'market-cnt') {
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
            const refNode = setRefNode(portfolioContainerID);

            //increment whichever ID is used
            if (portfolioContainerID === 'dining-cnt') {
                setRestaurantID(restaurantID + 1);
                setRestaurantsDisabledLeft(false);
            } else if (portfolioContainerID === 'offices-cnt') {
                setOfficesID(officesID + 1);
                setOfficesDisabledLeft(false);
            } else if (portfolioContainerID === 'outreach-cnt') {
                setOutreachID(outreachID + 1);
                setOutreachDisabledLeft(false);
            } else if (portfolioContainerID === 'res-cnt') {
                setResidencesID(residencesID + 1);
                setResidencesDisabledLeft(false);
            } else if (portfolioContainerID === 'aviation-cnt') {
                setAviationID(aviationID + 1);
                setAviationDisabledLeft(false);
            } else if (portfolioContainerID === 'edu-cnt') {
                setEducationID(educationID + 1);
                setEducationDisabledLeft(false);
            } else if (portfolioContainerID === 'gym-cnt') {
                setGymsID(gymsID + 1);
                setGymsDisabledLeft(false);
            } else if (portfolioContainerID === 'worship-cnt') {
                setWorshipID(worshipID + 1);
                setWorshipDisabledLeft(false);
            } else if (portfolioContainerID === 'meddental-cnt') {
                setMedDentalID(medDentalID + 1);
                setMedDentalDisabledLeft(false);
            } else if (portfolioContainerID === 'beauty-cnt') {
                setBeautyID(beautyID + 1);
                setBeautyDisabledLeft(false);
            } else if (portfolioContainerID === 'pets-cnt') {
                setPetsID(petsID + 1);
                setPetsDisabledLeft(false);
            } else if (portfolioContainerID === 'laundry-cnt') {
                setLaundryID(laundryID + 1);
                setLaundryDisabledLeft(false);
            } else if (portfolioContainerID === 'storage-cnt') {
                setStorageID(storageID + 1);
                setStorageDisabledLeft(false);
            } else if (portfolioContainerID === 'auto-cnt') {
                setAutoID(autoID + 1);
                setAutoDisabledLeft(false);
            } else if (portfolioContainerID === 'multi-cnt') {
                setMultipurposeID(multipurposeID + 1);
                setMultipurposeDisabledLeft(false);
            } else if (portfolioContainerID === 'retail-cnt') {
                setRetailID(retailID + 1);
                setRetailDisabledLeft(false);
            } else if (portfolioContainerID === 'other-cnt') {
                setOtherID(otherID + 1);
                setOtherDisabledLeft(false);
            } else if (portfolioContainerID === 'market-cnt') {
                setSupermarketsID(supermarketsID + 1);
                setSupermarketsDisabledLeft(false);
            }

            //do the scroll
            //const imgToScroll = refNode.querySelectorAll(portfolio-item[index]);
            refNode.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });

            //check if at end of array
            if (restaurantID >= restaurants.length - 1) {
                setRestaurantsDisabledRight(true);
                setRestaurantID(restaurants.length - 1); //confirm rerender, and avoid OOB
            }
            if (officesID >= offices.length - 1) {
                setOfficesDisabledRight(true);
                setOfficesID(offices.length - 1);
            }
            if (outreachID >= outreach.length - 1) {
                setOutreachDisabledRight(true);
                setOutreachID(outreach.length - 1);
            }
            if (residencesID >= residences.length - 1) {
                setResidencesDisabledRight(true);
                setResidencesID(residences.length - 1);
            }
            if (aviationID >= aviation.length - 1) {
                setAviationDisabledRight(true);
                setAviationID(aviation.length - 1);
            }
            if (educationID >= education.length - 1) {
                setEducationDisabledRight(true);
                setEducationID(education.length - 1);
            }
            if (gymsID >= gyms.length - 1) {
                setGymsDisabledRight(true);
                setGymsID(gyms.length - 1);
            }
            if (worshipID >= worship.length - 1) {
                setWorshipDisabledRight(true);
                setWorshipID(worship.length - 1);
            }
            if (medDentalID >= medDental.length - 1) {
                setMedDentalDisabledRight(true);
                setMedDentalID(medDental.length - 1);
            }
            if (beautyID >= beauty.length - 1) {
                setBeautyDisabledRight(true);
                setBeautyID(beauty.length - 1);
            }
            if (petsID >= pets.length - 1) {
                setPetsDisabledRight(true);
                setPetsID(pets.length - 1);
            }
            if (laundryID >= laundry.length - 1) {
                setLaundryDisabledRight(true);
                setLaundryID(laundry.length - 1);
            }
            if (storageID >= storage.length - 1) {
                setStorageDisabledRight(true);
                setStorageID(storage.length - 1);
            }
            if (autoID >= auto.length - 1) {
                setAutoDisabledRight(true);
                setAutoID(auto.length - 1);
            }
            if (multipurposeID >= multipurpose.length - 1) {
                setMultipurposeDisabledRight(true);
                setMultipurposeID(multipurpose.length - 1);
            }
            if (retailID >= retail.length - 1) {
                setRetailDisabledRight(true);
                setRetailID(retail.length - 1);
            }
            if (otherID >= other.length - 1) {
                setOtherDisabledRight(true);
                setOtherID(other.length - 1);
            }
            if (supermarketsID >= supermarkets.length - 1) {
                setSupermarketsDisabledRight(true);
                setSupermarketsID(supermarkets.length - 1);
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
            const refNode = setRefNode(portfolioContainerID);

            //do the scroll
            //const imgToScroll = refNode.querySelectorAll(portfolio-item[index]);
            refNode.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });

            //increment whichever ID is used
            if (portfolioContainerID === 'dining-cnt') {
                setRestaurantID(restaurantID - 1);
                setRestaurantsDisabledRight(false);
            } else if (portfolioContainerID === 'offices-cnt') {
                setOfficesID(officesID - 1);
                setOfficesDisabledRight(false);
            } else if (portfolioContainerID === 'outreach-cnt') {
                setOutreachID(outreachID - 1);
                setOutreachDisabledRight(false);
            } else if (portfolioContainerID === 'res-cnt') {
                setResidencesID(residencesID - 1);
                setResidencesDisabledRight(false);
            } else if (portfolioContainerID === 'aviation-cnt') {
                setAviationID(aviationID - 1);
                setAviationDisabledRight(false);
            } else if (portfolioContainerID === 'edu-cnt') {
                setEducationID(educationID - 1);
                setEducationDisabledRight(false);
            } else if (portfolioContainerID === 'gym-cnt') {
                setGymsID(gymsID - 1);
                setGymsDisabledRight(false);
            } else if (portfolioContainerID === 'worship-cnt') {
                setWorshipID(worshipID - 1);
                setWorshipDisabledRight(false);
            } else if (portfolioContainerID === 'meddental-cnt') {
                setMedDentalID(medDentalID - 1);
                setMedDentalDisabledRight(false);
            } else if (portfolioContainerID === 'beauty-cnt') {
                setBeautyID(beautyID - 1);
                setBeautyDisabledRight(false);
            } else if (portfolioContainerID === 'pets-cnt') {
                setPetsID(petsID - 1);
                setPetsDisabledRight(false);
            } else if (portfolioContainerID === 'laundry-cnt') {
                setLaundryID(laundryID - 1);
                setLaundryDisabledRight(false);
            } else if (portfolioContainerID === 'storage-cnt') {
                setStorageID(storageID - 1);
                setStorageDisabledRight(false);
            } else if (portfolioContainerID === 'auto-cnt') {
                setAutoID(autoID - 1);
                setAutoDisabledRight(false);
            } else if (portfolioContainerID === 'multi-cnt') {
                setMultipurposeID(multipurposeID - 1);
                setMultipurposeDisabledRight(false);
            } else if (portfolioContainerID === 'retail-cnt') {
                setRetailID(retailID - 1);
                setRetailDisabledRight(false);
            } else if (portfolioContainerID === 'other-cnt') {
                setOtherID(otherID - 1);
                setOtherDisabledRight(false);
            } else if (portfolioContainerID === 'market-cnt') {
                setSupermarketsID(supermarketsID - 1);
                setSupermarketsDisabledRight(false);
            }

            //check if at end of array
            if (restaurantID === 0) {
                setRestaurantsDisabledLeft(true);
                setRestaurantID(0); //confirm rerender
            }
            if (officesID === 0) {
                setOfficesDisabledLeft(true);
                setOfficesID(0);
            }
            if (outreachID === 0) {
                setOutreachDisabledLeft(true);
                setOutreachID(0);
            }
            if (residencesID === 0) {
                setResidencesDisabledLeft(true);
                setResidencesID(0);
            }
            if (aviationID === 0) {
                setAviationDisabledLeft(true);
                setAviationID(0);
            }
            if (educationID === 0) {
                setEducationDisabledLeft(true);
                setEducationID(0);
            }
            if (gymsID === 0) {
                setGymsDisabledLeft(true);
                setGymsID(0);
            }
            if (worshipID === 0) {
                setWorshipDisabledLeft(true);
                setWorshipID(0);
            }
            if (medDentalID === 0) {
                setMedDentalDisabledLeft(true);
                setMedDentalID(0);
            }
            if (beautyID === 0) {
                setBeautyDisabledLeft(true);
                setBeautyID(0);
            }
            if (petsID === 0) {
                setPetsDisabledLeft(true);
                setPetsID(0);
            }
            if (laundryID === 0) {
                setLaundryDisabledLeft(true);
                setLaundryID(0);
            }
            if (storageID === 0) {
                setStorageDisabledLeft(true);
                setStorageID(0);
            }
            if (autoID === 0) {
                setAutoDisabledLeft(true);
                setAutoID(0);
            }
            if (multipurposeID === 0) {
                setMultipurposeDisabledLeft(true);
                setMultipurposeID(0);
            }
            if (retailID === 0) {
                setRetailDisabledLeft(true);
                setRetailID(0);
            }
            if (otherID === 0) {
                setOtherDisabledLeft(true);
                setOtherID(0);
            }
            if (supermarketsID === 0) {
                setSupermarketsDisabledLeft(true);
                setSupermarketsID(0);
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

            <h2 id='worship-cnt'>Worship</h2>
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

            <h2 id='offices-cnt'>Office Spaces</h2>
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
            <div id='aviation-cnt' className='portfolio-flex-container'>
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
            <div id='outreach-cnt' className='portfolio-flex-container'>
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
            <div id='storage-cnt' className='portfolio-flex-container'>
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
            <div id='gym-cnt' className='portfolio-flex-container'>
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
            <div id='beauty-cnt' className='portfolio-flex-container'>
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
            <div id='retail-cnt' className='portfolio-flex-container'>
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
            <div id='edu-cnt' className='portfolio-flex-container'>
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
            <div id='market-cnt' className='portfolio-flex-container'>
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
            <div id='laundry-cnt' className='portfolio-flex-container'>
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
            <div id='auto-cnt' className='portfolio-flex-container'>
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
            <div id='pets-cnt' className='portfolio-flex-container'>
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
            <div id='multi-cnt' className='portfolio-flex-container'>
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
            <div id='res-cnt' className='portfolio-flex-container'>
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
            <div id='other-cnt' className='portfolio-flex-container'>
                {other.length > 2 && (
                    <div className='long-btn-container btn-left'>
                        <Button variant="danger" className="portfolio-btn" disabled={otherBtnDisabledLeft}
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