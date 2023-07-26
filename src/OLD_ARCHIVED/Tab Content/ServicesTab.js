import { Typography } from '@material-ui/core';

export default function ServicesBody() {
    return(
        <div>
            <div className="flex-container">
                        <div className="item">
                        <p className="subtitle">Mechanical</p>
                        <hr className="service-header"/>
                            <ul className="list">
                            <li>HVAC Design</li>
                            <li>HVAC Load Calculations</li>
                            <li>Existing HVAC System Analysis</li>
                            <li>Building Energy Audits</li>
                            </ul>
                        </div>
                        <div className="item">
                        <p className="subtitle">Electrical</p>
                        <hr className="service-header"/>
                            <ul className="list">
                            <li>Power Distribution</li>
                            <li>Lighting Design and Controls</li>
                            <li>Data and IT Systems</li>
                            <li>Photometrics</li>
                            <li>UPS systems?</li>
                            </ul>
                        </div>
                        <div className="item">
                        <p className="subtitle">Plumbing</p>
                        <hr className="service-header"/>
                            <ul className="list">
                            <li>Plumbing Systems Design</li>
                            <li>Domestic Water System Design</li>
                            <li>Sanitary Waste System Design</li>
                            <li>Natural Gas System Design</li>
                            </ul>
                        </div>
                    </div>
                    <hr cstyle='text-align: center'/>
                    <div className='details'>
                    <Typography align='left' variant='h6'>
                        <i>Mechanical Details</i>
                    </Typography>
                    <p align='left'>
                    Put details about mechanical services here.<br/>
                    Wow much text.<br/>
                    Amazing<br/>
                    </p>

                    <Typography align='right' variant='h6'>
                    <i>Electrical Details</i>
                    </Typography>
                    <p align='right'>
                    Put details about electrical services here.<br/>
                    Wow much text.<br/>
                    Amazing
                    </p>

                    <Typography align='left' variant='h6'>
                    <i>Plumbing Details</i>
                    </Typography>
                    <p align='left'>
                    Put details about plumbing services here.<br/>
                    Wow much text.<br/>
                    Amazing
                    </p>
            </div>
      </div>
    )
}