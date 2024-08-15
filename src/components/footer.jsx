import { 
    Container,
    Box,
    Typography,
 } from "@mui/material"

 import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
 import GitHubIcon from '@mui/icons-material/GitHub';
 import SendRoundedIcon from '@mui/icons-material/SendRounded';
//  import GitHubIcon2 from '../assets/img/logo-f-notbg.png';

const Footer = () =>{

    const currentYear = () =>{
        const currentYear = new Date().getFullYear();
        return currentYear;
    }

    return (
        <Box sx={{
            width: "100%",
            height: "27vh",
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
                position: "relative"
            }}>
                <Box sx={{
                    background: "url(https://res.cloudinary.com/dipoe9wir/image/upload/v1723491427/logo-f-1_g9dl7x.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    maskImage: 'linear-gradient(to bottom, transparent, black)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, black)',
                    position: "absolute",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%",
                    zIndex: "-1"
                }}></Box>    
                <Box>
                        <Typography component="h2" sx={{
                            fontFamily: "Quicksand, sans-serif",
                            fontWeight: 600,
                            lineHeight: '28px',
                            fontStyle: "normal",                       
                        }}>
                            Federico Garcia
                        </Typography>
                        <Typography sx={{
                            fontSize: "14px",
                            fontWeight: 500,
                            lineHeight: '20px',
                        }}>
                            {currentYear()} Copyrigth © All right reserved
                        </Typography>
                </Box>
                <Box sx={{
                    '& > a': {
                        p: "5px",
                        textDecoration: "none",
                        color: "primary.main",
                        '&:hover': {
                            color: "primary.dark",
                        }
                    }
                }}>
                    <a href="mailto:feddericogarciaa@gmail.com" target="__blank" rel="noopener noreferrer">
                    < SendRoundedIcon sx={{ fontSize: "2.3em", transform: "rotate(-20deg)" }} />
                    </a>
                    <a href="https://github.com/FeddericoGarcia" target="__blank" rel="noopener noreferrer">
                    < GitHubIcon sx={{ fontSize: "2.2em" }} />
                    </a>
                    {/* <a href="https://www.facebook.com/FeddericoGarcia" target="__blank" rel="noopener noreferrer">
                    < FacebookRoundedIcon sx={{ fontSize: "2.3em" }} />
                    </a> */}
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;