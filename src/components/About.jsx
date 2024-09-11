import React from "react";
import { Box, Container, Typography } from "@mui/material"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import AnimationLaptopPerson from './models/AnimationLaptopPerson'
import SecondaryButton from "./ui/buttons/SecondaryButton";

const About = () => {
    return (
        <Container sx={{
            height: 'auto',
            padding: '1rem',
            alignItems: 'center',
            display: 'flex',
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: 'center',
            overflow: "hidden",
            position: "relative",
        }}>
            <Box>
                <AnimationLaptopPerson />
            </Box>
            <Box sx={{
                display: "flex",
                width: "100%",
                padding: "1rem",
                flexDirection: "column",
                gap: "1rem",
            }}>
                <Typography sx={{
                    fontSize: "1.3em",
                }}>
                    Hola! 👋🏽 soy Federico Garcia <br /><b>desarrollador web & software</b> con +2 años de experiencia como freelance,
                    en busqueda de aventuras tecnológicas, oriundo de Córdoba Argentina. Me apasiona brindar soluciones a problemas complejos con
                    alta calidad en el <b>backend</b> como también experiencias unicas en <b>diseños</b> de interfaces en el <b>frontend</b>.
                </Typography>
                <Typography sx={{
                    fontSize: "1em"
                }}>
                    En pocas palabras, <u>me encanta lo que hago</u>.
                </Typography>
                <Box variant="div" sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                    gap: "10px",
                    margin: ".5rem"
                }}>
                    <small>Descargar CV</small>
                    <a href="../../public/text.pdf" title="Descargar CV" download >
                        <SecondaryButton text={<FileDownloadOutlinedIcon />} />
                    </a>
                </Box>
            </Box>
        </Container>
    )
}

export default About;