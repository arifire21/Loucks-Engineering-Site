import { restaurants, offices, outreach, residences, aviation,
    education, gyms, worship, medDental, beauty, pets, laundry,
    storage, auto, multipurpose, retail, other, supermarkets, cleanrooms } from '@/data/portfolio_data';
import RowCarousel from './row-carousel';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import { useRef } from 'react';
import styles from "@/styles/carousel.module.scss";

function BasicPortfolio({scrollPosition}) {
    const rootWrapperRef = useRef(null); //per docs used to observe scrollable container, not viewport

    return (
        <div ref={rootWrapperRef} className={styles.portfolioWrapper}>
            <h2 id='dining'>Dining</h2>
            <RowCarousel array={restaurants} arrayName="restaurants" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>
            <hr />

            <h2 id='offices-cnt'>Office Spaces</h2>
            <RowCarousel array={offices} arrayName="offices" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Aviation</h2>
            <RowCarousel array={aviation} arrayName="aviation" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Manufacturing/Compounding Cleanrooms</h2>
            <RowCarousel array={cleanrooms} arrayName="cleanrooms" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2 id='worship-cnt'>Worship</h2>
            <RowCarousel array={worship} arrayName="worship" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Outreach</h2>
            <RowCarousel array={outreach} arrayName="outreach" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Storage Facilities</h2>
            <RowCarousel array={storage} arrayName="storage" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Gyms</h2>
            <RowCarousel array={gyms} arrayName="gyms" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>
            
            <hr />

            <h2>Medical and Dental</h2>
            <RowCarousel array={medDental} arrayName="medDental" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Beauty</h2>
            <RowCarousel array={beauty} arrayName="beauty" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Retail</h2>
            <RowCarousel array={retail} arrayName="retail" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Educational Institutions</h2>
            <RowCarousel array={education} arrayName="education" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Supermarkets</h2>
            <RowCarousel array={supermarkets} arrayName="supermarkets" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Laundry Facilities</h2>
            <RowCarousel array={laundry} arrayName="laundry" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Automotive</h2>
            <RowCarousel array={auto} arrayName="auto" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Pet Care</h2>
            <RowCarousel array={pets} arrayName="pets" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Multipurpose Spaces</h2>
            <RowCarousel array={multipurpose} arrayName="multipurpose" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Residences (Single & Multi-Family)</h2>
            <RowCarousel array={residences} arrayName="residences" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>

            <hr />

            <h2>Other Notable Projects</h2>
            <RowCarousel array={other} arrayName="other" scrollPosition={scrollPosition} rootWrapper={rootWrapperRef.current}/>
        </div>
    )
}

export default trackWindowScroll(BasicPortfolio);