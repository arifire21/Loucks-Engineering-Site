import * as React from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab, Typography, Box, AppBar} from '@material-ui/core/';

import HomeBody from '../Tab Content/HomeTab';
import ServicesBody from '../Tab Content/ServicesTab';
import Portfolio from '../Tab Content/PortfolioLayout';
import AboutBody from '../Tab Content/AboutUsTab';
import ContactBody from '../Tab Content/ContactUsTab';

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
        <div className='navbar'>
          <AppBar position='fixed' color='inherit' >
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
        </div>
      </Box>

      {/* HOME TAB */}
      <TabPanel value={value} index={0}>
        <HomeBody/>
      </TabPanel>

      {/* SERVICES TAB */}
      <TabPanel value={value} index={1}>
        <h2 className='pagetitle'>Services</h2>
        <hr/> {/* <hr className='titleheader'/> */}
        <ServicesBody/>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <h2 className='pagetitle'>Portfolio</h2>
        <hr/>
        <Portfolio/>
      </TabPanel>

      <TabPanel value={value} index={3}>
        <h2 className='pagetitle'>About Us</h2>
        <hr/>
        <AboutBody/>
      </TabPanel>

      <TabPanel value={value} index={4}>
        <h2 className='pagetitle'>Contact Us</h2>
        <hr/>
        <ContactBody/>
      </TabPanel>

    </Box>
  );
}