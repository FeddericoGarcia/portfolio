import React from "react";
import { Box, Container, Typography } from "@mui/material"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import AnimationLaptopPerson from './models/AnimationLaptopPerson'
import SecondaryButton from "./buttons/SecondaryButton";

const About = () =>{
    return(
        <Container sx={{
            height: 'auto',
            alignItems: 'center',
            display: 'flex',
            flexDirection: {xs: "column", sm: "row"},
            justifyContent: 'center',
            overflow: "hidden",
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
                    maxWidth: "30ch",
                    fontSize: "1.3em",
                }}>
                    Hola! 👋🏽 soy Federico Garcia <br/><b>desarrollador web</b> en busqueda de aventuras tecnológicas, oriundo de Córdoba, Argentina. Me apasiona brindar soluciones a problemas complejos con
                    alta calidad en el <b>backend</b> como también experiencias unicas en <b>diseños</b> de interfaces en el <b>frontend</b>. 
                </Typography>
                <Typography sx={{
                    fontSize: "1em"
                }}>
                    En pocas palabras, <u>me encanta lo que hago</u>.
                </Typography>
                <SecondaryButton title="Descargar CV" text={<FileDownloadOutlinedIcon/>}/>
            </Box>
        </Container>
        
    )
}

export default About;