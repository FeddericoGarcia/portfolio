import React from "react";
import { Box, Container, Typography } from "@mui/material"

import AnimationLaptopPerson from './models/AnimationLaptopPerson'

const About = () =>{
    return(
        <Container sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: {xs: "column", sm: "row"},
            justifyContent: 'center',
            height: 'auto',
            overflow: "hidden",
            padding: '2rem',
            position: "relative",
        }}>
            <Box>
                <AnimationLaptopPerson />
            </Box>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                maxWidth: "500px",
            }}>
                <Typography sx={{
                    maxWidth: "35ch",
                    fontSize: "1.3em",
                }}>
                    Soy <b>desarrollador web</b> en busqueda de aventuras tecnológicas, oriundo de Córdoba, Argentina. Me apasiona brindar soluciones a problemas complejos con
                    alta calidad en el <b>backend</b> como también experiencias unicas en el <b>diseño</b> de interfaces en el <b>frontend</b>. 
                </Typography>
                <Typography sx={{
                    fontSize: "1em"
                }}>
                    En pocas palabras, <u>amo lo que hago</u>.
                </Typography>
            </Box>
        </Container>
        
    )
}

export default About;