import { HiOutlineExternalLink } from 'react-icons/hi';
import { Button } from 'react-bootstrap';
import { useState, useRef, useEffect } from 'react';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { useInView } from "react-intersection-observer";

const RowCarousel = ({ array = [], arrayName = "", scrollPosition, rootWrapper}) => {
    const [btnDisabledLeft, setDisabledLeft] = useState(true);
    const [btnDisabledRight, setDisabledRight] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);
    const itemRef = useRef(null); //for scroll LR functions

    const [heightSetOnce, setHeightOnceCheck] = useState(false);

    const { ref:inViewRef, inView } = useInView({ //portfolio-flex-container
        root: rootWrapper,   //root container, in parent component
        rootMargin: "0px 0px 0px 0px", //margin of element to look for?
        threshold: 0.1, //10% visible in order to trigger
        triggerOnce: false,
        //skip: false,
        initialInView: arrayName === 'restaurants' || arrayName === 'offices' ? true : false
    });

    useEffect(() => {
        //debug
        if (inView) {
          console.log(`${arrayName} in view!`);
        } else {
          console.log(`${arrayName} out of view`);
        }

        //to avoid jarring effect when scrolling past cont in view,
        //set known height (some containers have slight differences)
        if(inView && !heightSetOnce){
            const container = document.getElementById(arrayName);
            console.log(arrayName, container.offsetHeight);
            container.style.height = container.offsetHeight + 'px';
            setHeightOnceCheck(true);
        }
    }, [inView, arrayName, heightSetOnce]);

    function scrollRight() {
        //set current ref, image that matches mapped index
        const refNode = itemRef.current;

        // //increment whichever imgIndex is used
            setImgIndex(imgIndex + 1);
            setDisabledLeft(false);

        //do the scroll, scroll the new index into view
        refNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center' //test if best fit
        });

        //check if at end of array
        if (imgIndex >= array.length - 1) {
            setDisabledRight(true);
            setImgIndex(array.length - 1); //confirm rerender, and avoid OOB
        }
    }

    function scrollLeft() {
        //set current ref, image that matches mapped index
        const refNode = itemRef.current;

        // //increment whichever imgIndex is used
            setImgIndex(imgIndex - 1);
            setDisabledRight(false);

        //do the scroll, scroll the new index into view
        refNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center' //test if best fit
        });

        //check if back at beginning of array
        if (imgIndex === 0) {
            setDisabledRight(false);
            setImgIndex(0); //confirm rerender, and avoid OOB
        }
        console.log(arrayName, imgIndex)
    }

    return (
            <div className='portfolio-flex-container' id={arrayName ?? "cnt"} ref={inViewRef}>
                {inView ? (
                    <>
                    {array.length > 2 && (
                        <div className='long-btn-container btn-left'>
                            <Button variant="danger" className="portfolio-btn"
                                disabled={btnDisabledLeft}
                                onClick={() => scrollLeft()}
                            ><FaCaretLeft size={30} /></Button>
                        </div>
                    )}
                        <div className='portfolio-items-container'>
                            {array.map((item, index) =>
                                <div className='portfolio-item' key={index} ref={index === imgIndex ? itemRef : null}>
                                    {item.website ?
                                        <a className='link p-name' href={item.website} target="_blank" rel="noreferrer">{item.name} {item.smallText && <small>{item.smallText}</small>}<HiOutlineExternalLink /></a>
                                        :
                                        <p className='link-placeholder p-name'>{item.name} {item.smallText && <small>{item.smallText}</small>}</p>
                                    }
                                    {item.image ?
                                        <LazyLoadImage
                                            key={index}
                                            className='portfolio-img'
                                            src={item.image}
                                            alt={`LEI MEP portfolio_img_${item.name}`}
                                            scrollPosition={scrollPosition}
                                            effect='opacity'
                                            // wrapperProps={{
                                            //     // debugging
                                            //     style: {transitionDelay: "1s"},
                                            // }}
                                        />
                                        :
                                        <div className='portfolio-img-placeholder'>No image available</div>
                                    }
                                </div>
                            )}
                        </div>
                        {array.length > 2 && (
                        <div className='long-btn-container btn-right'>
                            <Button variant="danger" className="portfolio-btn"
                                disabled={btnDisabledRight}
                                onClick={() => scrollRight()}
                            ><FaCaretRight size={30} /></Button>
                        </div>
                        )}
                    </>
                ) : null} {/* if inView, render. if not, render nothing */}
                {/* end inView conditional */}
            </div>
    )
}

export default RowCarousel;