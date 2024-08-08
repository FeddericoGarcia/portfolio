import { 
    Container,
    Box,
    Typography,
 } from "@mui/material"

 import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';


const Footer = () =>{

    const currentYear = () =>{
        const currentYear = new Date().getFullYear();
        return currentYear;
    }

    return (
        <Box sx={{
            width: "100%",
            height: "35vh",
            backgroundColor: "#787879",
            padding: "20px",
            display: "flex",
            position: "relative",
            borderRadius: "85px 85px 0 0",
            boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 0.5)",
            // flexDirection: { xs: "column", sm: "row", md: "row"}
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
                        <Typography sx={{
                            // fontFamily: "Quicksand, sans-serif",
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: '20px',
                        }}>
                            {currentYear()} Copyrigth © All right reserved
                        </Typography>
                </Box>
                <Box>
                    <a href="https://www.facebook.com/FeddericoGarcia" target="__blank">
                    < FacebookRoundedIcon />
                    </a>
                    <a href="https://www.facebook.com/FeddericoGarcia" target="__blank">
                    < FacebookRoundedIcon />
                    </a>
                    <a href="https://www.facebook.com/FeddericoGarcia" target="__blank">
                    < FacebookRoundedIcon />
                    </a>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;