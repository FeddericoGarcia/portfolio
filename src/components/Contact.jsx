import { Box, Container, Typography } from "@mui/material"

import ButtonContact from "./buttons/ButtonContact"
import AnimationSendEmailAirplane from "./animations/AnimationSendEmailAirplane"

const Contact = () =>{

    const href = "mailto:feddericogarciaa@gmail.com";
    const text = "¡Comenzemos a hablar!";

    return(
        <Box id="contact" sx={{
            width: 'auto',
            height: '100vh',
            position: 'relative'
        }}>
            <Container sx={{
                width: 'auto',
                height: 'auto',
                display: "flex",
                flexDirection: {xs: "column", sm: "column", md: "row"},
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Box sx={{ 
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    maxWidth: "500px",
                    textAlign: "center",
                    height: "350px"
                 }}>
                    <Typography>
                        ¿Llegaste hasta acá?
                    </Typography>
                    <Typography>
                        Entonces no esperes más y haz click en el botom, estoy esperando tu correo!
                    </Typography>
                    <ButtonContact href={href} text={text}/>
                </Box>
                <AnimationSendEmailAirplane />
            </Container>
        </Box>
    )
}

export default Contact;