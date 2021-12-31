import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab, Typography, Box, AppBar} from '@material-ui/core/';

import Logo from '../../images/logo.png';
import CarouselNew from './CarouselNew';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <AppBar position='static' color='inherit' >
        <Tabs value={value} onChange={handleChange}
            aria-label="basic tabs example"
            variant="fullWidth"
            textColor="secondary"
            borderColor="primary"
            inkBarStyle={{background: 'blue'}}>
          <Tab className='tab' label="Home" {...a11yProps(0)} />
          <Tab className='tab' label="Services" {...a11yProps(1)} />
          <Tab className='tab' label="Project Portfolio" {...a11yProps(2)} />
          <Tab className='tab' label="About Us" {...a11yProps(3)} />
          <Tab className='tab' label="Contact Us" {...a11yProps(4)} />
        </Tabs>
        </AppBar>
      </Box>

      {/* HOME TAB */}
      <TabPanel value={value} index={0}>
        <div className='home-container'>
          <div className='home-item'>
            <img src={Logo} alt="lei logo"/>
          </div>
          <div className='home-item'>
            <CarouselNew/>
          </div>
        </div>

        <hr className='titleheader'/>

        <p>company tagline</p>
        <p>brief details</p>
        
      </TabPanel>

      {/* SERVICES TAB */}
      <TabPanel value={value} index={1}>
        <h2 className='pagetitle'><b>Services</b></h2>
        <hr className='titleheader'/>
        <div className="flex-container">
            <div className="item">
              <p className="subtitle">Mechanical</p>
              <hr className="half-width"/>
                <ul className="list">
                  <li>HVAC Design</li>
                  <li>HVAC Load Calculations</li>
                  <li>Existing HVAC System Analysis</li>
                  <li>Building Energy Audits</li>
                </ul>
            </div>
            <div className="item">
              <p className="subtitle">Electrical</p>
              <hr className="half-width"/>
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
              <hr className="half-width"/>
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
      </TabPanel>


      <TabPanel value={value} index={2}>
        <h1>Portfolio Coming Soon!</h1>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <h2 className='pagetitle'><b>About Us</b></h2>
        <hr color='titleheader'/>
        <h3>Company History</h3>
        <p>temp text. wow such a cool sentence.</p>
        <hr className="half-width"/>

        <h3>Team Members</h3>
        <h4>Name?</h4>
        <p>temp text. wow such a cool sentence.</p>

        <p>something about being licensed in # of states</p>
        <hr className="half-width"/>
      </TabPanel>


      <TabPanel value={value} index={4}>
        {/* <div className="test"> */}
        <h2 className='pagetitle'><b>Contact Us</b></h2>
        <hr color='titleheader'/>
        <h4>Main Phone</h4>


        <h4>Email?</h4>


        <h4>Op Hours?</h4>


        {/* todo, maybe put this in a flexbox */}
        <h4>Location</h4>
        <a href="https://goo.gl/maps/vfK9qLgASjXJTs7r5" target="_blank">Get Directions</a>
        {/* </div> */}
      </TabPanel>

    </Box>
  );
}