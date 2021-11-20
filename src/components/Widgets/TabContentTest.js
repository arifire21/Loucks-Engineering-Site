import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="fullWidth" textColor="secondary">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Services" {...a11yProps(1)} />
          <Tab label="Project Portfolio" {...a11yProps(2)} />
          <Tab label="About Us" {...a11yProps(3)} />
          <Tab label="Contact Us" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h2><b>Services</b></h2>
        <div className="flex-container">
            <div className="item">
              <p className="subtitle">Mechanical</p>
              <hr className="half-width"/>
                <ul className="list">
                  <li>HVAC Design</li>
                  <li>HVAC Load Calculations</li>
                  <li>todo</li>
                </ul>
            </div>
            <div className="item">
              <p className="subtitle">Electrical</p>
              <hr className="half-width"/>
                <ul className="list">
                  <li>Power Distribution</li>
                  <li>Lighting Design</li>
                  <li>Data and IT Systems</li>
                  <li>todo</li>
                </ul>
            </div>
            <div className="item">
              <p className="subtitle">Plumbing</p>
              <hr className="half-width"/>
                <ul className="list">
                  <li>insert stuff about plumbing</li>
                </ul>
            </div>
        </div> 
      </TabPanel>

      <TabPanel value={value} index={2}>
        Portfolio
      </TabPanel>

      <TabPanel value={value} index={3}>
        <h2><b>About Us</b></h2>
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
        <h2><b>Contact Us</b></h2>
        <h4>Main Phone</h4>

        <h4>Email?</h4>

        <h4>Op Hours?</h4>

        {/* todo, maybe put this in a flexbox */}
        <h4>Location</h4>
        <a href="https://goo.gl/maps/vfK9qLgASjXJTs7r5" target="_blank">TEST: Get Directions</a>
        {/* </div> */}
      </TabPanel>

    </Box>
  );
}