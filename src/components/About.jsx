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
                    fontSize: "1.3em",
                    '& > b': {
                        fontWeight: 'bold',
                    }
                }}>
                    Soy <b>desarrollador web</b> en busqueda de aventuras tecnológicas, oriundo de Córdoba, Argentina. Me apasiona brindar soluciones a problemas complejos con
                    alta calidad en el <b>backend</b> como también experiencias unicas en el <b>diseño</b> de interfacez en el <b>frontend</b>. 
                </Typography>
                <Typography sx={{
                    maxWidth: "35ch",
                    fontSize: "1em"
                }}>
                    En pocas palabras, <u>amo lo que hago</u>.
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