import { 
    Container,
    Box,
    Typography,
    // Link
 } from "@mui/material"


const Footer = () =>{
    return (
        <Box sx={{
            width: "100%",
            height: "35vh",
            backgroundColor: "#5658a1",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            position: "relative",
            borderRadius: "85px 85px 0 0",
            boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 0.5)"
        }}>
            <Container sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px"
            }}>
                <Box>
                <Typography component="h2" sx={{
                            fontFamily: "Quicksand, sans-serif",
                            fontWeight: 600,
                            // fontSize: { xs:'0', sm: '22px'},
                            lineHeight: '28px',
                            fontStyle: "normal",                       
                        }}>
                            Federico Garcia
                        </Typography>
                    <p>Copyrigth © All right reserved</p>
                </Box>
                <Box>
                    <h4>Contact Us</h4>
                    <p>Email: 123@example.com</p>
                    <p>Phone: +1 123-456-7890</p>
                </Box>
                <Box>
                    <h4>Social Media</h4>
                    <Box>
                        {/* Add your social media icons here */}
                        {/* Example: <Link href="#" target="_blank">
                            <img src="your-icon-url" alt="social media icon" />
                        </Link> */}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;