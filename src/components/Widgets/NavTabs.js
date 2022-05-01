import * as React from 'react';
import {Tabs, Tab, Box, AppBar} from '@material-ui/core/';
import { Link } from 'react-router-dom';

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // TODO FIX SET SELECTED TAB

  return (
    <Box sx={{ width: '100%' }}>
      <div className='navbar'>
        <AppBar position='fixed' color='inherit' >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
            variant="fullWidth"
            textColor="secondary"
          >
            <Tab component={Link} className="nav-link" label="Home" to="/"/>
            <Tab component={Link} className="nav-link" label="Services" to="/services"/>
            <Tab component={Link} className="nav-link" label="Project Portfolio" to="/portfolio"/>
            <Tab component={Link} className="nav-link" label="About Us" to="/about"/>
            <Tab component={Link} className="nav-link" label="Contact Us" to="/contact"/>
          </Tabs>
        </AppBar>
        </div>
    </Box>
  );
}