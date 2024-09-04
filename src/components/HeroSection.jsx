import { Box, Container, Stack, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { BlurText } from "./BlurText";

import ButtonContact from "./buttons/ButtonContact";
import SecondaryButton from "./buttons/SecondaryButton";


const HeroSection = () =>{

    const text = "Contáctame";

    const listString = ["Soluciones Tecnológicas", "Sitios Webs", "Applicaciones Web", "Diseños UX / UI"]

    return (
        <Box id="home" sx={{
            height: '100vh',
            width: '100%',
            padding: '2rem',
            textAlign: 'center',
            overflow: 'hidden',
            position:'relative',
            display: 'flex',
            flexDirection: {xs: "column", sm: "column", md:"row"},
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
        }}>            
            <Container>
                <Stack spacing={2} useFlexGap sx={{
                    height: "450px",
                    justifyContent: "end",
                    alignItems: "center",
                    position: "relative",
                }}>
                    <Typography 
                        component="span"
                        variant="h1"
                        p=".5em"
                        sx={{
                        fontSize: 'clamp(1rem, 10vw, 2rem)',
                        }}
                        >
                        Construyo
                            <Typography 
                            id="hero-text"
                            component="span"
                            variant="h1"
                            ml= "10px"                
                            sx={{
                                fontSize: 'clamp(1rem, 10vw, 2rem)',
                                textTransform: "capitalize",
                                color: 'primary.main',
                                textShadow: (theme) =>
                                    theme.palette.mode === "dark" ? '0 0 5px rgba(255, 255, 255, 0.5)' : '0 0 5px rgba(0, 0, 0, 0.5)',
                            }}
                            >
                            {listString[1]}
                            </Typography>   
                    </Typography>
                    {/* <BlurText text={listString[1]} /> */}
                    <Typography component={"h3"} sx={{
                        fontSize: "1.3rem",
                        position: "relative",
                        textAlign:"center"
                    }}>
                        Si tienes una idea, se puede digitalizar 
                    </Typography>
                    <Box component="div" sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px"
                    }}>
                      <SecondaryButton href={"https://github.com/FeddericoGarcia"} text={<GitHubIcon />  } />
                      <ButtonContact section={"contact"} text={text} />
                      <SecondaryButton href={"https://www.linkedin.com/in/feddericogarcia/"} text={<LinkedInIcon />} />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default HeroSection;