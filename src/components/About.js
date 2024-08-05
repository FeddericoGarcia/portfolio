import { Box, Container, Typography } from "@mui/material"

const About = () =>{
    return(
        <Container sx={{
            alignItems: 'center',
            backgroundImage: "repeating-conic-gradient(rgba(49, 49, 49, 0.2) 0% 25%, #121212 0% 50%)",
            backgroundPosition: "0 0, 32px 32px",
            backgroundSize: "64px 64px",
            backgroundColor: "#121212",
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
                }}>
                    <Typography 
                        component="h2"
                        sx={{
                            fontWeight: "bold",
                            color: "primary.main",
                            letterSpacing: "-0.02em",
                        }}
                    >
                        Mi nombre es 
                        </Typography>
                        <Typography 
                            component="h2"
                            sx={{
                                fontWeight: "bold",
                                color: "primary.main",
                                letterSpacing: "-0.02em",
                                pl: "5px",
                                position: "relative"
                            }}
                        >
                            Federico Garcia
                        </Typography>
                </Box>
                <Typography>
                    Soy desarrollador web en busqueda de aventuras tecnológicas, oriundo de Córdoba, Argentina. Me apasiona brindar soluciones a problemas complejos
                    como también experiencias unicas para diseñar interfacez de usuarios. 
                </Typography>
                <Typography>
                    En pocas palabras, amo lo que hago.
                </Typography>
            </Box>
            <Box>
                <img
                    src="https://i.ibb.co/9Yk696G/avatar.png"
                    alt="Avatar"
                    width="200px"
                    sx={{ borderRadius: '50%', objectFit: 'cover' }}
                />
            </Box>
        </Container>
        
    )
}

export default About;