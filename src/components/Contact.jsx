import {
    Box,
    Container,
    Typography
} from "@mui/material"

import ButtonContact from "./ui/buttons/ButtonContact"
import AnimationSendEmailAirplane from "./models/AnimationSendEmailAirplane"

const href = "mailto:feddericogarciaa@gmail.com";
const text = "¡Comenzemos a hablar!";

const Contact = () => {
    return (
        <Box sx={{
            width: 'auto',
            height: { xs: '100vh', sm: '95vh' },
            position: 'relative',
            display: "flex",
            paddingBottom: "3rem"
        }}>
            <Container sx={{
                width: 'auto',
                height: 'auto',
                display: "flex",
                flexDirection: { xs: "column", sm: "row", md: "row" },
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
                            textTransform: "uppercase",
                            padding: "1rem"
                        }}>
                        ¿Tenes una idea en mente?
                    </Typography>
                    <Typography sx={{
                        maxWidth: "35ch",
                        fontSize: "1.3em",
                    }}>
                        Ponete en contacto y lo construyamos juntos, estoy esperando tu correo! <br />
                        de paso, tomamos un café ☕
                    </Typography>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 3,
                        pt: 5,
                    }}>
                        <ButtonContact href={href} text={text} />
                        <small>Si no te gustan los botones llamativos, acá te lo dejo: <b>Feddericogarciaa@gmail.com</b></small>
                    </Box>
                </Box>
                <AnimationSendEmailAirplane />
            </Container>
        </Box>
    )
}

export default Contact;