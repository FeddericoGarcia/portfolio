import React from "react";
import { Box, Container, Typography } from "@mui/material"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

// import AnimationLaptopPerson from './models/AnimationLaptopPerson'
import SecondaryButton from "./ui/buttons/SecondaryButton";

const About = () => {
    return (
        <Container id="about" sx={{
            height: {xs: 'auto', sm: 'auto', md: '100vh'},
            padding: '1rem',
            alignItems: 'center',
            display: 'flex',
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: 'center',
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
                {/* <AnimationLaptopPerson /> */}
                <div id="about-img"></div>
                {/* <img src="https://res.cloudinary.com/dipoe9wir/image/upload/v1726100790/selfie-headphone_poqsqv.jpg" alt="foto del programador"></img> */}
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