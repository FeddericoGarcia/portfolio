import { Box, Button, Container, Typography } from "@mui/material"


const Contact = () =>{
    return(
        <Box id="contact" sx={{
            width: 'auto',
            height: '350px',
            position: 'relative'
        }}>
            <Container sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Typography>
                    ¿Llegaste hasta acá?
                </Typography>
                <Typography>
                    Entonces ¿que esperas?, escribeme que estoy a disposición para cualquier idea loca! 🤯
                </Typography>
                <Button>

                </Button>
            </Container>
        </Box>
    )
}

export default Contact;