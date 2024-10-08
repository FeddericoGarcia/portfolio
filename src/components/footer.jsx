import {
    Container,
    Box,
    Typography,
} from "@mui/material"

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailRoundedIcon from '@mui/icons-material/MailRounded';


const currentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
}

const Footer = () => {
    return (
        <Box id="footer" sx={{
            width: "100%",
            height: "27vh",
            display: "flex",
            boxShadow: "inset 0px 0px 20px rgba(0, 0, 0, 0.5)",
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
                    zIndex: "-1",
                    opactity: .7
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
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: '20px',
                        textTransform: "uppercase",

                    }}>
                        Hecho con ♥ y dedicación
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
                    width: "fit-content",
                    height: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "4px",
                    '& > a': {
                        p: "5px",
                        textDecoration: "none",
                        transition: "color 250ms ease, transform 400ms ease-out",
                        color: "primary.main",
                        '&:hover': {
                            transform: "rotate(-20deg)",
                            color: (theme) =>
                                theme.palette.mode === "dark" ? "primary.light" : "primary.dark",
                            transition: "color 250ms ease, transform 400ms ease-out",
                        }
                    },
                }}>
                    <a href="mailto:feddericogarciaa@gmail.com" rel="noopener noreferrer" title="Correo electronico">
                        < MailRoundedIcon sx={{ fontSize: "2.3em" }} />
                    </a>
                    <a href="https://github.com/FeddericoGarcia" target="__blank" rel="noopener noreferrer" title="GitHub">
                        < GitHubIcon sx={{ fontSize: "2.1em" }} />
                    </a>
                    <a href="https://www.linkedin.com/in/feddericogarcia/" target="__blank" rel="noopener noreferrer" title="Linkedin">
                        < LinkedInIcon sx={{ fontSize: "2.3em" }} />
                    </a>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;