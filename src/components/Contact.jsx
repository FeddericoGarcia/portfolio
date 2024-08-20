import { Box, Container, Typography } from "@mui/material"

import ButtonContact from "./buttons/ButtonContact"

const Contact = () =>{

    const href = "mailto:feddericogarciaa@gmail.com";
    const text = "¡Comenzemos a hablar!";

    return(
        <Box id="contact" sx={{
            width: 'auto',
            minHeight: '100vh',
            position: 'relative'
        }}>
            <Container sx={{
                width: 'auto',
                height: '300px',
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Typography>
                    ¿Llegaste hasta acá?
                </Typography>
                <Typography>
                    Entonces no esperes más y haz click en el botom, estoy esperando tu correo!
                </Typography>
                <ButtonContact href={href} text={text}/>
            </Container>
        </Box>
    )
}

export default Contact;