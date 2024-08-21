// import { useEffect } from "react";
import { 
    Container,
    Box,
    Typography,
 } from "@mui/material"

import GitHubIcon from '@mui/icons-material/GitHub';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

const Footer = () =>{

    const currentYear = () =>{
        const currentYear = new Date().getFullYear();
        return currentYear;
    }

    // useEffect(() => {
    //     const handleScroll = () => {
    //       const footer = document.getElementById('footer');
    //       const contact = document.getElementById('contact');
          
    //       const contentRect = contact.getBoundingClientRect();
    //       const windowHeight = window.innerHeight;
    
    //       if (contentRect.bottom <= windowHeight) {
    //         footer.style.transform = 'translateY(0)';
    //       } else {
    //         footer.style.transform = 'translateY(100%)';
    //       }
    //     };
    
    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);
    

    return (
        <Box id="footer" sx={{
            width: "100%",
            height: "27vh",
            display: "flex",
            boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 0.5)",
            position: "absolute",
            left: 0,
            bottom: 0,
            transform: "translateY(100%)",
            transition: "transform 0.3s ease-in-out",
            zIndex: 1,
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
                    userSelect: "none",
                    cursor: "default",
                    fontSize:"2.5rem", 
                    marginRight:"1.2rem", 
                    display: {xs: "none", sm: "none", md:"block"} 
                    }}>
                        👨🏻‍💻
                </Box>
                <Box sx={{
                    '& > a': {
                        p: "5px",
                        textDecoration: "none",
                        transition: "color 250ms ease",
                        color: "primary.main",
                        '&:hover': {
                            color: (theme) =>
                                theme.palette.mode === "dark" ? "primary.light" : "primary.dark",
                            transition: "color 250ms ease"
                        }
                    }
                }}>
                    <a href="mailto:feddericogarciaa@gmail.com" target="__blank" rel="noopener noreferrer">
                        < SendRoundedIcon sx={{ fontSize: "2.3em", transform: "rotate(-20deg)" }} />
                    </a>
                    <a href="https://github.com/FeddericoGarcia" target="__blank" rel="noopener noreferrer">
                        < GitHubIcon sx={{ fontSize: "2.2em" }} />
                    </a>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;