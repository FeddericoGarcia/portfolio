import { Box, Container, Stack, Typography } from "@mui/material"
import ButtonContact from "./buttons/ButtonContact";

import Animation3DIconsCup from "./models/Animation3DIconsCup";
import Animation3DIconsRocket from "./models/Animation3DIconsRocket";

const HeroSection = () =>{

    const text = "Contáctame";

    const listString = ["Soluciones Tecnológicas", "Sitios Webs", "Applicaciones Web", "Diseños UX / UI"]

    return (
        <Box id="home" sx={{
            padding: '2rem',
            textAlign: 'center',
            position:'relative',
            overflow: 'hidden',
            height: '100vh',
            display: 'flex',
            flexDirection: {xs: "column", sm: "column", md:"row"},
            justifyContent: 'center',
            alignItems: 'center',
        }}> 
            <Box sx={{width: "100%"}}>
                <Animation3DIconsCup />
            </Box>
            
            <Container>
                <Stack spacing={2} useFlexGap sx={{
                    height: "450px",
                    justifyContent: "end",
                    alignItems: "center",
                    position: "relative",
                }}>
                    <Typography 
                        component="span"
                        variant="h2"
                        p=".5em"
                        sx={{
                        fontSize: 'clamp(1rem, 10vw, 2rem)',
                        }}
                        >
                        Construyo
                            <Typography 
                            id="hero-text"
                            component="span"
                            variant="h2"
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
                    <Typography component={"h3"} sx={{
                        fontSize: "1.3rem",
                        position: "relative",
                        textAlign:"center"
                    }}>
                        Si tienes una idea, se puede digitalizar 
                    </Typography>
                    <ButtonContact section={"contact"} text={text} />
                </Stack>
            </Container>
            <Box sx={{width: "100%"}}>
                <Animation3DIconsRocket />
            </Box>
        </Box>
    )
}

export default HeroSection;