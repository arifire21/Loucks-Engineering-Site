import * as React from 'react';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="nav tabs example" variant="fullWidth">
        <LinkTab label="Home" href="/#" />
        <LinkTab label="Services" href="/#" />
        <LinkTab label="Project Portfolio" href="/#" />
        <LinkTab label="About Us" href="/#" />
        <LinkTab label="Contact Us" href="/#" />
      </Tabs>
    </Box>
  );
}