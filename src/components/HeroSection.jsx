import { Box, Container, Stack, Typography } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import AnimationHero1 from './models/AnimationHero1'
import AnimationHero2 from './models/AnimationHero2'
import ButtonContact from "./ui/buttons/ButtonContact";
import { FlipWords } from "./ui/FlipWords";
import SecondaryButton from "./ui/buttons/SecondaryButton";

const text = "Contáctame";

const words = ["Soluciones Tecnológicas", "Páginas Web", "Aplicaciones Web", "Diseños UX / UI"]

const HeroSection = () => {
    return (
        <Box id="home" sx={{
            height: '100%',
            minHeight: '100vh',
            width: '100%',
            textAlign: 'center',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
        }}>
            <Container sx={{ position: "relative" }}>
                <Box sx={{
                    height: { xs: "auto", sm: "100%" },
                    width: "100%",
                    margin: "auto",
                    marginTop: { xs: "50px", sm: "50px" },
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column-reverse", sm: "column-reverse", md: "row" },
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: '2rem',
                    '& > #hero': {
                        marginTop: { md: '15rem' }
                    }
                }}>
                    <AnimationHero1 />

                    <Stack id="hero" spacing={2} useFlexGap sx={{
                        height: "200px",
                        width: "420px",
                        justifyContent: "center",
                        alignItems: "center",
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
                                component="span"
                                variant="h1"
                                sx={{
                                    fontSize: 'clamp(1rem, 10vw, 2rem)',
                                    textTransform: "capitalize",
                                    color: 'primary.main',
                                    textShadow: (theme) =>
                                        theme.palette.mode === "dark" ? '0 0 5px rgba(255, 255, 255, 0.5)' : '0 0 5px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                <FlipWords words={words} />
                            </Typography>
                        </Typography>
                        <Typography component={"h3"} sx={{
                            fontSize: "1.3rem",
                            position: "relative",
                            textAlign: "center",
                            padding: '.7rem'
                        }}>
                            Si tienes una idea, se puede digitalizar
                        </Typography>
                        <Box component="div" sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "10px"
                        }}>
                            <SecondaryButton href={"https://github.com/FeddericoGarcia"} text={<GitHubIcon />} />
                            <ButtonContact section={"contact"} text={text} />
                            <SecondaryButton href={"https://www.linkedin.com/in/feddericogarcia/"} text={<LinkedInIcon />} />
                        </Box>
                    </Stack>

                    <AnimationHero2 />

                </Box>
            </Container>
        </Box>
    )
}

export default HeroSection;