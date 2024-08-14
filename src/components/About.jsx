import React from "react";
import { Box, Container, Typography } from "@mui/material"


const About = () =>{
    return(
        <Container sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: {xs: "column-reverse", sm: "row"},
            justifyContent: 'center',
            height: '650px',
            overflow: "hidden",
            padding: '2rem',
            position: "relative",
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: "500px",
            }}>
                <Typography sx={{
                    maxWidth: "35ch",
                    fontSize: "1.3em"
                }}>
                    Soy desarrollador web en busqueda de aventuras tecnológicas, oriundo de Córdoba, Argentina. Me apasiona brindar soluciones a problemas complejos con
                    alta calidad en el backend como también experiencias unicas en el diseño de interfacez en el frontend. 
                </Typography>
                <Typography sx={{
                    maxWidth: "35ch",
                    fontSize: "1em"
                }}>
                    En pocas palabras, amo lo que hago.
                </Typography>
            </Box>
            <Box>
                <img
                    src="https://res.cloudinary.com/dipoe9wir/image/upload/v1723491427/logo-f-1_g9dl7x.png"
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