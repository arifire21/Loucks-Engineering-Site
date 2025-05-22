import { HiOutlineExternalLink } from 'react-icons/hi';
import { Button } from 'react-bootstrap';
import { useState, useRef } from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { useInView } from "react-intersection-observer";

const SingleCarousel = ({ array = [], arrayName = "", scrollPosition}) => {
    const [btnDisabledLeft, setDisabledLeft] = useState(true);
    const [btnDisabledRight, setDisabledRight] = useState(false);

    const [id, setID] = useState(0);

    const itemRef = useRef(null);
    const wrapperRef = useRef(null);

    const { ref, inView } = useInView({
        root: wrapperRef.current,
        rootMargin: "0px 0px",
        triggerOnce: false,
        initialInView: arrayName == 'restaurants' || arrayName == 'worship' ? true : false
    });

    // function setRefNode(portfolioContainerID) {
    //     if (portfolioContainerID === 'dining-cnt') {
    //         return restaurantsRef.current;
    //     } else if (portfolioContainerID === 'offices-cnt') {
    //         return officesRef.current;
    //     } else if (portfolioContainerID === 'outreach-cnt') {
    //         return outreachRef.current;
    //     } else if (portfolioContainerID === 'res-cnt') {
    //         return residencesRef.current;
    //     } else if (portfolioContainerID === 'aviation-cnt') {
    //         return aviationRef.current;
    //     } else if (portfolioContainerID === 'edu-cnt') {
    //         return educationRef.current;
    //     } else if (portfolioContainerID === 'gym-cnt') {
    //         return gymRef.current;
    //     } else if (portfolioContainerID === 'worship-cnt') {
    //         return worshipRef.current;
    //     } else if (portfolioContainerID === 'meddent-cnt') {
    //         return medDentalRef.current;
    //     } else if (portfolioContainerID === 'beauty-cnt') {
    //         return beautyRef.current;
    //     } else if (portfolioContainerID === 'pets-cnt') {
    //         return petsRef.current;
    //     } else if (portfolioContainerID === 'laundry-cnt') {
    //         return laundryRef.current;
    //     } else if (portfolioContainerID === 'storage-cnt') {
    //         return storageRef.current;
    //     } else if (portfolioContainerID === 'auto-cnt') {
    //         return autoRef.current;
    //     } else if (portfolioContainerID === 'multi-cnt') {
    //         return multipurposeRef.current;
    //     } else if (portfolioContainerID === 'retail-cnt') {
    //         return retailRef.current;
    //     } else if (portfolioContainerID === 'other-cnt') {
    //         return otherRef.current;
    //     } else if (portfolioContainerID === 'market-cnt') {
    //         return supermarketsRef.current;
    //     } else {
    //         return null; // fallback
    //     }
    // }

    function scrollRight() {
        if (typeof window != "undefined") {
            // console.log(portfolioContainerID)
            // const portfolioContainer = document.getElementById(portfolioContainerID);
            // console.log(portfolioContainer)
            //portfolioContainer.scrollLeft += 200;

            //find which node is used
            //const refNode = setRefNode(portfolioContainerID);
            const refNode = itemRef.current;

            // //increment whichever ID is used
            //if (portfolioContainerID === 'dining-cnt') {
                setID(id + 1);
                setDisabledLeft(false);
            //}

            //do the scroll
            //const imgToScroll = refNode.querySelectorAll(portfolio-item[index]);
            refNode.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });

            //check if at end of array
            if (id >= array.length - 1) {
                setDisabledRight(true);
                setID(array.length - 1); //confirm rerender, and avoid OOB
            }
        } else {    //for SR WIndow
            console.log("Window Undefined, please wait...");
        }
    }

    // function scrollLeft(portfolioContainerID) {
    //     if (typeof window != "undefined") {
    //         // console.log(portfolioContainerID)
    //         // const portfolioContainer = document.getElementById(portfolioContainerID);
    //         // console.log(portfolioContainer)
    //         //portfolioContainer.scrollLeft += 200;

    //         //find which node is used
    //         const refNode = setRefNode(portfolioContainerID);

    //         //do the scroll
    //         //const imgToScroll = refNode.querySelectorAll(portfolio-item[index]);
    //         refNode.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'nearest',
    //             inline: 'center'
    //         });

    //         //increment whichever ID is used
    //         if (portfolioContainerID === 'dining-cnt') {
    //             setRestaurantID(restaurantID - 1);
    //             setRestaurantsDisabledRight(false);
    //         } else if (portfolioContainerID === 'offices-cnt') {
    //             setOfficesID(officesID - 1);
    //             setOfficesDisabledRight(false);
    //         } else if (portfolioContainerID === 'outreach-cnt') {
    //             setOutreachID(outreachID - 1);
    //             setOutreachDisabledRight(false);
    //         } else if (portfolioContainerID === 'res-cnt') {
    //             setResidencesID(residencesID - 1);
    //             setResidencesDisabledRight(false);
    //         } else if (portfolioContainerID === 'aviation-cnt') {
    //             setAviationID(aviationID - 1);
    //             setAviationDisabledRight(false);
    //         } else if (portfolioContainerID === 'edu-cnt') {
    //             setEducationID(educationID - 1);
    //             setEducationDisabledRight(false);
    //         } else if (portfolioContainerID === 'gym-cnt') {
    //             setGymsID(gymsID - 1);
    //             setGymsDisabledRight(false);
    //         } else if (portfolioContainerID === 'worship-cnt') {
    //             setWorshipID(worshipID - 1);
    //             setWorshipDisabledRight(false);
    //         } else if (portfolioContainerID === 'meddent-cnt') {
    //             setMedDentalID(medDentalID - 1);
    //             setMedDentalDisabledRight(false);
    //         } else if (portfolioContainerID === 'beauty-cnt') {
    //             setBeautyID(beautyID - 1);
    //             setBeautyDisabledRight(false);
    //         } else if (portfolioContainerID === 'pets-cnt') {
    //             setPetsID(petsID - 1);
    //             setPetsDisabledRight(false);
    //         } else if (portfolioContainerID === 'laundry-cnt') {
    //             setLaundryID(laundryID - 1);
    //             setLaundryDisabledRight(false);
    //         } else if (portfolioContainerID === 'storage-cnt') {
    //             setStorageID(storageID - 1);
    //             setStorageDisabledRight(false);
    //         } else if (portfolioContainerID === 'auto-cnt') {
    //             setAutoID(autoID - 1);
    //             setAutoDisabledRight(false);
    //         } else if (portfolioContainerID === 'multi-cnt') {
    //             setMultipurposeID(multipurposeID - 1);
    //             setMultipurposeDisabledRight(false);
    //         } else if (portfolioContainerID === 'retail-cnt') {
    //             setRetailID(retailID - 1);
    //             setRetailDisabledRight(false);
    //         } else if (portfolioContainerID === 'other-cnt') {
    //             setOtherID(otherID - 1);
    //             setOtherDisabledRight(false);
    //         } else if (portfolioContainerID === 'market-cnt') {
    //             setSupermarketsID(supermarketsID - 1);
    //             setSupermarketsDisabledRight(false);
    //         }

    //         //check if at end of array
    //         if (restaurantID === 0) {
    //             setRestaurantsDisabledLeft(true);
    //             setRestaurantID(0); //confirm rerender
    //         }
    //         if (officesID === 0) {
    //             setOfficesDisabledLeft(true);
    //             setOfficesID(0);
    //         }
    //         if (outreachID === 0) {
    //             setOutreachDisabledLeft(true);
    //             setOutreachID(0);
    //         }
    //         if (residencesID === 0) {
    //             setResidencesDisabledLeft(true);
    //             setResidencesID(0);
    //         }
    //         if (aviationID === 0) {
    //             setAviationDisabledLeft(true);
    //             setAviationID(0);
    //         }
    //         if (educationID === 0) {
    //             setEducationDisabledLeft(true);
    //             setEducationID(0);
    //         }
    //         if (gymsID === 0) {
    //             setGymsDisabledLeft(true);
    //             setGymsID(0);
    //         }
    //         if (worshipID === 0) {
    //             setWorshipDisabledLeft(true);
    //             setWorshipID(0);
    //         }
    //         if (medDentalID === 0) {
    //             setMedDentalDisabledLeft(true);
    //             setMedDentalID(0);
    //         }
    //         if (beautyID === 0) {
    //             setBeautyDisabledLeft(true);
    //             setBeautyID(0);
    //         }
    //         if (petsID === 0) {
    //             setPetsDisabledLeft(true);
    //             setPetsID(0);
    //         }
    //         if (laundryID === 0) {
    //             setLaundryDisabledLeft(true);
    //             setLaundryID(0);
    //         }
    //         if (storageID === 0) {
    //             setStorageDisabledLeft(true);
    //             setStorageID(0);
    //         }
    //         if (autoID === 0) {
    //             setAutoDisabledLeft(true);
    //             setAutoID(0);
    //         }
    //         if (multipurposeID === 0) {
    //             setMultipurposeDisabledLeft(true);
    //             setMultipurposeID(0);
    //         }
    //         if (retailID === 0) {
    //             setRetailDisabledLeft(true);
    //             setRetailID(0);
    //         }
    //         if (otherID === 0) {
    //             setOtherDisabledLeft(true);
    //             setOtherID(0);
    //         }
    //         if (supermarketsID === 0) {
    //             setSupermarketsDisabledLeft(true);
    //             setSupermarketsID(0);
    //         }
    //     } else {
    //         console.log("Window Undefined, please wait...");
    //     }
    // }

    function scrollLeft() {
        if (typeof window != "undefined") {
            // console.log(portfolioContainerID)
            // const portfolioContainer = document.getElementById(portfolioContainerID);
            // console.log(portfolioContainer)
            //portfolioContainer.scrollLeft += 200;

            //find which node is used
            // const refNode = setRefNode(portfolioContainerID);
            const refNode = itemRef.current;    

            // //increment whichever ID is used
            // if (portfolioContainerID === 'dining-cnt') {
                setID(id - 1);
                setDisabledLeft(false);
            // }

            //do the scroll
            //const imgToScroll = refNode.querySelectorAll(portfolio-item[index]);
            refNode.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });

            //check if at start of array
            if (id === 0) {
                setDisabledLeft(true);
                setID(0); //confirm rerender, and avoid OOB
            }
        } else {    //for SR WIndow
            console.log("Window Undefined, please wait...");
        }
    }

    return (
        <div id='overall-wrapper' ref={wrapperRef}>
            <div className='portfolio-flex-container' ref={ref}>
                {inView ? (
                    <>
                        <div className='long-btn-container btn-left'>
                            <Button variant="danger" className="portfolio-btn" disabled={btnDisabledLeft}
                                onClick={() => scrollLeft()}
                            ><FaCaretLeft size={30} /></Button>
                        </div>
                        <div className='portfolio-items-container' id='dining-cnt'>
                            {array.map((item, index) =>
                                <div className='portfolio-item' key={index} ref={index === id ? itemRef : null}>
                                    {item.website ?
                                        <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink /></a>
                                        :
                                        <p className='link-placeholder p-name'>{item.name}</p>
                                    }
                                    {item.image ?
                                        <LazyLoadImage
                                            key={index}
                                            className='portfolio-img'
                                            src={item.image}
                                            alt={`LEI MEP portfolio_img_${item.name}`}
                                            scrollPosition={scrollPosition}
                                            effect='opacity'
                                        />
                                        :
                                        <div className='portfolio-img-placeholder'>No image available</div>
                                    }
                                </div>
                            )}
                        </div>
                        <div className='long-btn-container btn-right'>
                            <Button variant="danger" className="portfolio-btn" disabled={btnDisabledRight}
                                onClick={() => scrollRight()}
                            ><FaCaretRight size={30} /></Button>
                        </div>
                    </>
                ) : null}
                {/* end inView conditional */}
            </div>
        </div>
    )
}

export default SingleCarousel;