import BootstrapNavbar from '../components/bs-navbar';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import {HiOutlineExternalLink} from 'react-icons/hi';
import { ScrollRestoration } from 'react-router-dom';

// import Placeholder_Image from '../../images/examplebuilding.png';
// import Oceanic_Img from '../../images/oceanic.jpg';
// import Lucky_Fish_Img from '../../images/lucky_fish.jpg';
// import Blu_Img from '../../images/blu-apt.jpg';
// import Funky_Buddha_Img from '../../images/funkyb.png';

import { restaurants } from '../data/portfolio_data';

export default function Portfolio() {
    return(
        <>
        <Helmet><title>Portfolio | Loucks Engineering Inc.</title></Helmet>
        <BootstrapNavbar/>
        <div className="page-contents">

            <div id='sticky-portfolio-nav'>
            <h4>Jump to:</h4>
                <nav>
                    <a className='link' href='#restaurants'>Restaurants</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#residential'>Residental (Single/Multi-Family)</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#commercial'>Commercial Buildings</a>&ensp;<b>|</b>&ensp;
                    <a href='#edu'>tbd?</a>&ensp;<b>|</b>&ensp;
                    <a className='link' href='#oth'>Other Notable Projects</a>
                </nav>
            <br/>
            </div>

            <h1 id='restaurants'>Restaurants</h1>
            <div className='portfolio-flex-container'>
                {restaurants.map(item =>
                    <div className='portfolio-item'>
                        <img className='portfolio-img' src={item.image} alt="img"/>
                        <a className='link' href={item.website} target="_blank" rel="noreferrer">{item.name} <HiOutlineExternalLink/></a>
                    </div>
                )}
            </div>

            {/* <h4 id='res'><b>Residental</b></h4> 
            <div className='portfolio-flex-container'>
                <div className='portfolio-item'>
                    <img className='portfolio-img' src={Placeholder_Image} alt="img"/>
                    <p className='item-name'>name</p>
                    <p className='item-location'>location</p>
                    <p className='item-category'>MEP category</p>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-img' src={Placeholder_Image} alt="img"/>
                    <p className='item-name'>name</p>
                    <p className='item-location'>location</p>
                    <p className='item-category'>MEP category</p>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-img' src={Placeholder_Image} alt="img"/>
                    <p className='item-name'>name</p>
                    <p className='item-location'>location</p>
                    <p className='item-category'>MEP category</p>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-img' src={Placeholder_Image} alt="img"/>
                    <p className='item-name'>name</p>
                    <p className='item-location'>location</p>
                    <p className='item-category'>MEP category</p>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-img' src={Placeholder_Image} alt="img"/>
                    <p className='item-name'>name</p>
                    <p className='item-location'>location</p>
                    <p className='item-category'>MEP category</p>
                </div>
            </div>

            <hr/>
            <br/>

            <h4 id='com'><b>Commercial</b></h4> 
            <div className='portfolio-flex-container'>
                <div className='portfolio-item'>
                    <img className='portfolio-img' src={Oceanic_Img} alt="img"/>
                    <p className='item-name'>Oceanic</p>
                    <p className='item-location'>Pompano Pier</p>
                    <p className='item-category'>MEP category</p>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-img' src={Lucky_Fish_Img} alt="img"/>
                    <p className='item-name'>Lucky Fish</p>
                    <p className='item-location'>Pompano Pier</p>
                    <p className='item-category'>MEP category</p>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-img' src={Blu_Img} alt="img"/>
                    <p className='item-name'>Blu Apartments</p>
                    <p className='item-location'>Marina Mile Blvd, Ft. Lauderdale</p>
                    <p className='item-category'>MEP category</p>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-img' src={Placeholder_Image} alt="img"/>
                    <p className='item-name'>name</p>
                    <p className='item-location'>location</p>
                    <p className='item-category'>MEP category</p>
                </div>
                <div className='portfolio-item'>
                    <img className='portfolio-img' src={Placeholder_Image} alt="img"/>
                    <p className='item-name'>name</p>
                    <p className='item-location'>location</p>
                    <p className='item-category'>MEP category</p>
                </div>
            </div> */}

            <hr/>
            <br/>

            <div>
                <h4 id='oth'><b>Other Notable Projects:</b></h4>
                <br/>
                <ul className="list">
                    <li>Gulfstream Park Track Display (Hallendale Beach) - MEP category</li>
                    <li>Warehouse for Fun Sweets Cotton Candy (Pompano Beach) - MEP category</li>
                    <li>temp - MEP category</li>
                    <li>temp - MEP category</li>
                    <li>temp - MEP category</li>
                </ul>
            </div>
        </div>

        <Footer />
        <ScrollRestoration/>
        </>
    )
}