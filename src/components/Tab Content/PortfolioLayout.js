import React from 'react';
import { Typography } from '@material-ui/core';


import Placeholder_Image from '../../images/examplebuilding.png';
import Oceanic_Img from '../../images/oceanic.jpg';
import Lucky_Fish_Img from '../../images/lucky_fish.jpg';
import Blu_Img from '../../images/blu-apt.jpg';
import Funky_Buddha_Img from '../../images/funkyb.png';

export default function PortfolioLayout() {
    return(
        <div>

        <h4>Jump to: <a className='link' href='#res'>Residental (Single/Multi-Family)</a> | <a className='link' href='#com'>Commercial Buildings</a> | <a href='#edu'>tbd?</a> | <a className='link' href='#oth'>Other Notable Projects</a></h4>
        <br/>

        <h4 id='res'><b>Residental</b></h4> 
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
        </div>

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



    )
}