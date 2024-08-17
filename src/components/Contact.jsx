import { Box, Container, Typography } from "@mui/material"

import ButtonContact from "./buttons/ButtonContact"

const Contact = () =>{

    const href = "mailto:feddericogarciaa@gmail.com"

    return(
        <Box id="contact" sx={{
            width: 'auto',
            height: '350px',
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
                    Entonces ¿que esperas?, escribeme que estoy a disposición para cualquier idea loca! 🤯
                </Typography>
                <ButtonContact href={href} text={"¡Comenzemos a hablar!"}/>
            </Container>
        </Box>
    )
}

export default Contact;