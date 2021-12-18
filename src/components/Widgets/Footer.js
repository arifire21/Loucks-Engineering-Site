import { Container, Grid, Box, Link } from "@material-ui/core";

export default function Footer() {
    return(
        <Box bgcolor="gray"
        color="white"
        px={{xs: 3, sm: 10}}
        px={{xs: 6, sm: 11}}
        >
        
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}> 
                        <Box borderBottom={1}><b>ItemOne</b></Box>
                        <Box>
                            <Link href="url" underline="always" color="inherit">LinkText</Link>
                        </Box>
                        <Box>
                            <Link href="url" underline="always" color="inherit">LinkText</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}> 
                        <Box borderBottom={1}><b>ItemTwo</b></Box>
                        <Box>
                            <Link href="url" underline="always" color="inherit">LinkText</Link>
                        </Box>
                        <Box>
                            <Link href="url" underline="always" color="inherit">LinkText</Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}> 
                        <Box borderBottom={1}><b>Contact Us</b></Box>
                        <Box>
                            <p><b>Phone</b>: 1234567890</p>
                        </Box>
                        <Box>
                            <p><b>Fax</b>: 1234567890</p>
                        </Box>
                        <Box>
                            {/* <p><b>Address</b>:</p> */}
                            <Link href="https://goo.gl/maps/vfK9qLgASjXJTs7r5" underline="always" color="inherit"><b>Address</b></Link>
                        </Box>
                    </Grid>
                </Grid>
                {/* copyright */}

            </Container>
        </Box>
    )
}