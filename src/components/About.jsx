import React from "react";
import { Box, Container, Typography } from "@mui/material"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

import SecondaryButton from "./ui/buttons/SecondaryButton";

const About = () => {
    return (
        <Container sx={{
            height: "100%",
            padding: '1rem',
            alignItems: 'center',
            display: 'flex',
            flexDirection: { xs: "column", sm: "column", md: "row" },
            justifyContent: 'center',
            gap: '2rem',
            overflow: "hidden",
            position: "relative",
        }}>
            <Box sx={{
                heigth: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}> 
                <img src="https://res.cloudinary.com/dipoe9wir/image/upload/v1726101932/selfie-headphone-curt_nxnlfa.png" id="about-img" alt="Fotografía personal"></img>
            </Box>
            <Box sx={{
                display: "flex",
                width: "auto",
                padding: "1rem",
                flexDirection: "column",
                gap: "1rem",
            }}>
                <Typography sx={{
                    fontSize: "1.3em",
                }}>
                    Hola! 👋🏽 soy Federico Garcia <br /><b>desarrollador web & software</b> con +2 años de experiencia como freelance,
                    en busqueda de aventuras tecnológicas, oriundo de Córdoba Argentina.<br /> Me apasiona brindar soluciones a problemas complejos con
                    buenas prácticas, código limpio y de alta calidad en el <b>backend</b>, como también en experiencias unicas en <b>diseños</b> de 
                    interfaces atractivas y funcionales en el <b>frontend</b>.
                </Typography>
                <Typography sx={{
                    fontSize: "1em",
                    ' & > span': {
                        borderBottom: "1px solid #0099ff",
                    },
                }}>
                    En pocas palabras, <span>me encanta lo que hago</span>.
                </Typography>
                <Box variant="div" sx={{
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "end",
                    gap: "10px",
                    margin: ".5rem"
                }}>
                    <small>Currículum Vitae</small>
                    <a href="https://drive.google.com/file/d/13s-pCXzmXAHeiAG4Y4W7xozzTlN9Avy9/view?usp=drive_link" title="Visualizar CV" target="__blank" >
                        <SecondaryButton text={<FileDownloadOutlinedIcon />} />
                    </a>
                </Box>
            </Box>
        </Container>
    )
}

export default About;