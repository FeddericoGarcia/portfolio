import { Box, Container, Typography } from "@mui/material";

const Proyects = () =>{
    return(
        <Container sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '750px',
            width: "auto",

        }}>
            <Box >
                <Typography
                    component="h3"
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '3rem',
                        color: 'primary.main',
                        margin: '20px 0',
                        position: "relative"
                    }}>
                    Proyectos
                </Typography>
                {/* Aquí se agregarán los componentes de cada proyecto */}
                {/* Por ejemplo: <ProjectCard /> */}
            </Box>
        </Container>
    )
}

export default Proyects;