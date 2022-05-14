import * as React from 'react';
import {Tabs, Tab, Box, AppBar} from '@material-ui/core/';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Services from '../../pages/services'
import Home from '../../pages/home';

export default function NavTabs() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // TODO FIX SET SELECTED TAB

  return (
    <Box sx={{ width: '100%' }}>
      {/* <BrowserRouter> */}
        {/* <div className='navbar'> */}
          <AppBar position='sticky' color='inherit' >
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              aria-label="navbar"
              variant="fullWidth"
              textColor="secondary"
              disableRipple="false"
            >
              <Tab component={Link} className="nav-link" label="Home" to="/" selectedTab={0}/>
              <Tab component={Link} className="nav-link" label="Services" to="/services" selectedTab={1}/>
              <Tab component={Link} className="nav-link" label="Project Portfolio" to="/portfolio"/>
              <Tab component={Link} className="nav-link" label="About Us" to="/about"/>
              <Tab component={Link} className="nav-link" label="Contact Us" to="/contact"/>
            </Tabs>
          </AppBar>
          {/* <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/services' element={<Services/>}/>
          </Routes> */}
        {/* </div> */}
      {/* </BrowserRouter> */}
    </Box>
  );
}