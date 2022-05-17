import { Container, Grid, Box, Link } from "@material-ui/core";
import Logo from '../../images/logo.png';
import Pin from '../../images/pin.png';

export default function Footer() {
    return (
        <footer>
            <Box bgcolor="gray"
                color="white"
                px={{ xs: 5, sm: 5 }}
                py={{ xs: 5, sm: 5 }}
            >

                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        <Grid item xs={8} sm={3}>
                            <Box> <img src={Logo} alt="lei logo" width='220' height='100' /></Box>
                        </Grid>
                        <Grid item xs={8} sm={4}>
                            <Box borderBottom={1}><b>ItemOne</b></Box>
                            <Box>
                                <p>Filler text about company here??</p>
                                <p>Line test</p>
                                <p>Line test</p>
                            </Box>
                            {/*
                            <Box>
                                <Link href="url" underline="always" color="inherit">LinkText</Link>
                            </Box> */}
                        </Grid>
                        {/* <Grid item xs={12} sm={4}> 
                            <Box borderBottom={1}><b>ItemTwo</b></Box>
                            <Box>
                                <Link href="url" underline="always" color="inherit">LinkText</Link>
                            </Box>
                            <Box>
                                <Link href="url" underline="always" color="inherit">LinkText</Link>
                            </Box>
                        </Grid> */}
                        <Grid item xs={8} sm={4}>
                            <Box borderBottom={1}><b>Contact Us</b></Box>
                            <Box>
                                <p><b>Phone</b>: (123) 456-7890</p>
                            </Box>
                            <Box>
                                <p><b>Fax</b>: (123) 456-7890</p>
                            </Box>
                            <Box>
                                <img src={Pin} alt="maps_pin" width='20' height='30' className="maps-pin" />
                                <Link href="https://goo.gl/maps/vfK9qLgASjXJTs7r5" underline="always" color="inherit" target="_blank"><b>Address</b></Link>
                            </Box>
                        </Grid>
                    </Grid>
                    {/* copyright */}
                    <Box textAlign="center">
                        reg number | &copy; {new Date().getFullYear()}"\n"
                        Maintained by _name_
                    </Box>
                </Container>
            </Box>
        </footer>
    )
}