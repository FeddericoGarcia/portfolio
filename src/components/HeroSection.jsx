import { Box, Button, Container, Stack, Typography } from "@mui/material"


const HeroSection = () =>{

    return (
        <Box sx={{
            backgroundColor: '#192337',
            padding: '2rem',
            textAlign: 'center',
            position:'relative',
            overflow: 'hidden',
            borderRadius: '0 0 20px 20px',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Container>
                <Stack spacing={2} useFlexGap sx={{
                    height: "450px",
                    justifyContent: "center",
                    alignItems: "center",

                }}>
                    <Typography 
                        component="span"
                        variant="h2"
                        p=".5em"
                        sx={{
                        fontSize: 'clamp(1rem, 10vw, 2rem)',
                        }}
                        >
                        Soy
                            <Typography 
                            id="hero-text"
                            component="span"
                            variant="h2"
                            ml= "10px"                
                            sx={{
                            fontSize: 'clamp(1rem, 10vw, 2rem)',
                            textTransform: "capitalize",
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                            >
                            Desarrollador web
                            </Typography>   
                    </Typography>
                    <Typography component={"h3"} sx={{
                        width: "44vw",
                        position: "relative",
                        textAlign:"center"
                    }}>
                        Convirtiendo tu futura visión digital en realidad, construyamos juntos el camino.
                        No dejes pasar el tiempo y ponte en contacto hoy mismo!
                    </Typography>
                    <Button 
                    href="#contact"
                    variant="outline"
                    sx={{
                    }}>
                        ¡ Contactame !
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}

export default HeroSection;
