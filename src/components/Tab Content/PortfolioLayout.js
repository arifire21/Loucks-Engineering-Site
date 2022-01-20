import React from 'react';
import { Typography } from '@material-ui/core';


import Placeholder_Image from '../../images/examplebuilding.png';
import Oceanic_Img from '../../images/oceanic.jpg';
import Lucky_Fish_Img from '../../images/lucky_fish.jpg';
import Blu_Img from '../../images/blu-apt.jpg';
import Funky_Buddha_Img from '../../images/funkyb.png';
import Temp from '../../images/warehouse.jpg';

export default function PortfolioLayout() {
    return(
        <div>

        <h3>Jump to: <a href='#res'>Residental (Single/Multi-Family)</a> | <a href='#com'>Commercial Buildings</a> | <a href='#edu'>tbd?</a> | <a href='#oth'>Other Notable Projects</a></h3>
        <br/>

        <h4 id='res'>Residental</h4> 
        <div className='portfolio-flex-container'>
            <div className='portfolio-item'>
                <img src={Placeholder_Image} alt="img"/>
                <p>name</p>
                <p>location?</p>
            </div>
            <div className='portfolio-item'>
                <img src={Placeholder_Image} alt="img"/>
                <p>name</p>
                <p>location?</p>
            </div>
            <div className='portfolio-item'>
                <img src={Placeholder_Image} alt="img"/>
                <p>name</p>
                <p>location?</p>
            </div>
            <div className='portfolio-item'>
                <img src={Placeholder_Image} alt="img"/>
                <p>name</p>
                <p>location?</p>
            </div>
            <div className='portfolio-item'>
                <img src={Placeholder_Image} alt="img"/>
                <p>name</p>
                <p>location?</p>
            </div>
        </div>

        <br/>

        <h4 id='com'>Commercial</h4> 
        <div className='portfolio-flex-container'>
            <div className='portfolio-item'>
                <img src={Placeholder_Image} alt="img"/>
                <p>name</p>
                <p>location?</p>
            </div>
            <div className='portfolio-item'>
                <img src={Placeholder_Image} alt="img"/>
                <p>name</p>
                <p>location?</p>
            </div>
            <div className='portfolio-item'>
                <img src={Placeholder_Image} alt="img"/>
                <p>name</p>
                <p>location?</p>
            </div>
            <div className='portfolio-item'>
                <img src={Placeholder_Image} alt="img"/>
                <p>name</p>
                <p>location?</p>
            </div>
            <div className='portfolio-item'>
                <img src={Placeholder_Image} alt="img"/>
                <p>name</p>
                <p>location?</p>
            </div>
        </div>


        <div>
            <h4 id='oth'>Other Notable Projects:</h4>
            <br/>
            <ul className="list">
                <li>Gulfstream Park Track Display</li>
                <li>Warehouse for Fun Sweets Cotton Candy (Pompano Beach)</li>
                <li>temp</li>
                <li>temp</li>
            </ul>
        </div>

        </div>



    )
}