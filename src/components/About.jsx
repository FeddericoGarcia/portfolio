import { Box, Container, Typography } from "@mui/material"

const About = () =>{
    return(
        <Container sx={{
            alignItems: 'center',
            backgroundImage: (theme) =>
                theme.palette.mode === "dark" ? 
            "repeating-conic-gradient(rgba(49, 49, 49, 0.2) 0% 25%, #121212 0% 50%)" 
            :
            "repeating-conic-gradient(rgba(255, 255, 255, 0.9) 0% 25%, #c3c3c4 0% 50%)",
            backgroundPosition: "0 0, 32px 32px",
            backgroundSize: "64px 64px",
            backgroundColor: "#121212",
            // background: "rgba(255,255,255,0.05)",
            // "-webkit-backdrop-filter": "blur(5px)",
            backdropFilter: "blur(5px)",
            border: "1px solid rgba(255,255,255,0.025)",
            // backgroundImage: 'none',
            borderRadius: "25% 25% 0% 25% / 0% 25% 25% 25%",
            "-webkit-box-shadow": "inset 0 15px 30px 1.5px #e6e3e315",
            "-moz-box-shadow": "inset 0 15px 30px 1.5px #e6e3e315",
            boxShadow: "inset 0 15px 30px 1.5px #e6e3e315, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
            display: 'flex',
            flexDirection: {xs: "column-reverse", sm: "row"},
            justifyContent: 'center',
            height: '650px',
            maxWidth: "100%!important",
            overflow: "hidden",
            padding: '2rem',
            position: "relative",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginLeft: "2rem",
                maxWidth: "400px",
            }}>
                <Box sx={{
                    display: "inherit",
                    flexDirection: "row",
                    justifyContent: "start",
                    alignItems: "center",
                    
                }}>
                    <Typography 
                        component="h3"
                        sx={{
                            color: "primary.ligth",
                            letterSpacing: "-0.02em",
                            fontWeight: 600
                        }}
                    >
                        Mi nombre es 
                        </Typography>
                        <Typography 
                            component="h1"
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1.5em",
                                color: "primary.main",
                                letterSpacing: "-0.02em",
                                p: "0 0 6px 5px",
                                position: "relative",
                            }}
                        >
                            Federico Garcia
                        </Typography>
                </Box>
                <Typography>
                    Soy desarrollador web en busqueda de aventuras tecnológicas, oriundo de Córdoba, Argentina. Me apasiona brindar soluciones a problemas complejos con
                    alta calidad como también experiencias unicas en el diseño de interfacez. 
                </Typography>
                <Typography>
                    En pocas palabras, amo lo que hago.
                </Typography>
            </Box>
            <Box>
                <img
                    src="https://avatars.githubusercontent.com/u/106563428?s=400&u=bd0cd7063c638a5679aa15d88a679f0de8f73060&v=4"
                    alt="Avatar"
                    width="200px"
                    sx={{ 
                        borderRadius: '50%', 
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </Container>
        
    )
}

export default About;