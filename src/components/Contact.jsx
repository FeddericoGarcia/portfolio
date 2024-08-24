import { Box, Container, Typography } from "@mui/material"

import ButtonContact from "./buttons/ButtonContact"
import AnimationSendEmailAirplane from "./models/AnimationSendEmailAirplane"

const Contact = () =>{

    const href = "mailto:feddericogarciaa@gmail.com";
    const text = "¡Comenzemos a hablar!";

    return(
        <Box id="contact" sx={{
            width: 'auto',
            height: 'auto',
            position: 'relative',
            display: "flex",
            paddingBottom: "3rem"
        }}>
            <Container sx={{
                width: 'auto',
                height: 'auto',
                display: "flex",
                flexDirection: {xs: "column-reverse", sm: "column-reverse", md: "row"},
                justifyContent: "space-between",
                alignItems: "center",
            }}>
                <Box sx={{ 
                    width: "100%", 
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyItems: "space-between",
                    alignItems: "center",
                    gap: "20px"
                 }}>
                    <Typography
                        component="h3"
                        sx={{
                            fontSize: "clamp(1rem, 10vw, 2rem)",
                            color: 'primary.main',
                            position: "relative",
                            textTransform: "uppercase"
                        }}>
                        ¿Llegaste hasta acá?
                    </Typography>
                    <Typography sx={{
                        maxWidth: "35ch",
                        fontSize: "1.3em",
                    }}>
                        Entonces no esperes más y ponete en contacto, estoy esperando tu correo! <br/>
                        de paso, tomamos un café ☕
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                    }}>
                        <ButtonContact href={href} text={text}/>
                        <small>En caso contrario, acá te lo dejo: <b>Feddericogarciaa@gmail.com</b></small>
                    </Box>
                </Box>
                <AnimationSendEmailAirplane />
            </Container>
        </Box>
    )
}

export default Contact;