import { 
    Box, 
    Container, 
    Typography 
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';


const Proyects = () =>{

    const projectsList = [
        {
            name: "Sistema Administrativo",
            description: "App web para sistema administrativo de empresa CETAN®, para el registro de ventas de asesores",
            url_github: "https://github.com/FeddericoGarcia/management-system",
            url_site: "https://github.com/FeddericoGarcia/management-system",
            img: "https://imgs.search.brave.com/Jkm_TFdARezVjLb_zfeFV5TzG7N2LpJQJlMXXNTzI0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/OTU0NDIwNS9pdC92/ZXR0b3JpYWxlLzQw/NC1lcnJvcmUtZXJy/b3JlLWRlbC1wcm9n/cmFtbWEtcGFnaW5h/LXdlYi1ub24tcHUl/QzMlQjItZXNzZXJl/LWFwZXJ0YS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TzZ0/ZVVtT0FNVXFUbk11/azhUYnpmOVJrLU9z/SzFtNWQ3Y01QN0VR/VmpmRT0",
        },
        {
            name: "Taichi & Chikung",
            description: "Lading Page sobre artes marciales de meditación",
            url_github: "https://github.com/FeddericoGarcia/mibe-landingpage",
            url_site: "https://github.com/FeddericoGarcia/mibe-landingpage",
            img: "https://imgs.search.brave.com/Jkm_TFdARezVjLb_zfeFV5TzG7N2LpJQJlMXXNTzI0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/OTU0NDIwNS9pdC92/ZXR0b3JpYWxlLzQw/NC1lcnJvcmUtZXJy/b3JlLWRlbC1wcm9n/cmFtbWEtcGFnaW5h/LXdlYi1ub24tcHUl/QzMlQjItZXNzZXJl/LWFwZXJ0YS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TzZ0/ZVVtT0FNVXFUbk11/azhUYnpmOVJrLU9z/SzFtNWQ3Y01QN0VR/VmpmRT0",

        },
        {
            name: "Mi Portafolio",
            description: "El mismisimo y hermosisimo sitio en el cual te encuentras",
            url_github: "https://github.com/FeddericoGarcia/portfolio",
            url_site: "https://github.com/FeddericoGarcia/portfolio",
            img: "https://imgs.search.brave.com/Jkm_TFdARezVjLb_zfeFV5TzG7N2LpJQJlMXXNTzI0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/OTU0NDIwNS9pdC92/ZXR0b3JpYWxlLzQw/NC1lcnJvcmUtZXJy/b3JlLWRlbC1wcm9n/cmFtbWEtcGFnaW5h/LXdlYi1ub24tcHUl/QzMlQjItZXNzZXJl/LWFwZXJ0YS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TzZ0/ZVVtT0FNVXFUbk11/azhUYnpmOVJrLU9z/SzFtNWQ3Y01QN0VR/VmpmRT0",

        },
        {
            name: "Rest Server",
            description: "Sistema Rest-Server con autentificación, Google Identity, CRUD y búsqueda de colecciones, y términos con MongoDB y Cloudinary",
            url_github: "https://github.com/FeddericoGarcia/rest-server",
            url_site: "https://github.com/FeddericoGarcia/rest-server",
            img: "https://imgs.search.brave.com/Jkm_TFdARezVjLb_zfeFV5TzG7N2LpJQJlMXXNTzI0A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM1/OTU0NDIwNS9pdC92/ZXR0b3JpYWxlLzQw/NC1lcnJvcmUtZXJy/b3JlLWRlbC1wcm9n/cmFtbWEtcGFnaW5h/LXdlYi1ub24tcHUl/QzMlQjItZXNzZXJl/LWFwZXJ0YS5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9TzZ0/ZVVtT0FNVXFUbk11/azhUYnpmOVJrLU9z/SzFtNWQ3Y01QN0VR/VmpmRT0",

        },

    ]

    return(
        <Container sx={{
            minHeight: '950px',
            display: 'flex',
            flexDirection: {xs: "row", sm: "column", md:"column"},
            justifyContent: 'center',
            alignItems: 'center',
            // position: "fixed",

        }}>
            <Box id="projects" sx={{
                display: "flex",
                alignItems: 'center',
                flexDirection: "column",
                justifyContent: 'center',
                position: "relative"
            }}>
                <Typography
                    component="h3"
                    sx={{
                        margin: '20px 0',
                        fontSize: "clamp(1rem, 10vw, 2.5rem)",
                        color: 'primary.main',
                        position: "relative",
                    }}>
                    Proyectos
                </Typography>
                <Container sx={{
                    height: "auto",
                    display: "grid",
                    gridTemplateColumns: {sm: "1fr", md:"1fr 1fr"},
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {projectsList.map((project, index) => (
                        <Box key={index} sx={{ 
                            margin: '5px', 
                            minWidth: '200px', 
                            maxWidth: '450px',
                            borderRadius: '10px',
                            boxShadow: (theme) =>
                                theme.palette.mode === "dark" ? "0px 10px 20px rgba(231,231,231,0.1)" : "0px 10px 20px rgba(0,0,0,0.1)",
                            transition: 'box-shadow 0.3s ease',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: "column",
                            '&:hover': {
    
                            }
                            }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '200px',
                                width: '100%',
                                overflow: 'hidden',
                                backgroundSize: "cover",
                                '& > img':{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    zIndex: "-1",
                                    borderRadius: "10px 10px 0 0"
                                }
                            }}>
                                <img src={project.img} alt={project.name} />
                            </Box>
                            <Typography
                                component="h4"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: '1.5rem',
                                    margin: '10px 0',
                                    color: 'primary.main',
                                    p: "0 15px"
                                }}>
                                {project.name}
                            </Typography>
                            <Typography
                                component="p"
                                sx={{ 
                                    fontSize: '1rem', 
                                    color: 'text.secondary',
                                    p: "0 15px",
                                    marginBottom: "15px",
                                    textAlign: "center"
                                    }}>
                                {project.description}
                            </Typography>
                            <Box sx={{ 
                                display: "flex",
                                padding:"10px", 
                                gap: "10px",
                                borderRadius: '5px', 
                                '& > a': {
                                    textDecoration: "none",
                                    color: "primary.main",
                                    '&:hover': {
                                        color: "primary.dark",
                                    }
                                }
                                }}>
                                <a href={project.url_github} target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon sx={{ fontSize: "2em"}}/>
                                </a> 
                                <a href={project.url_site} target="_blank" rel="noopener noreferrer">
                                    <LanguageIcon sx={{ fontSize: "2.1em"}} />
                                </a>
                            </Box>
                        </Box>
                    ))}
                </Container>
            </Box>
        </Container>
    )
}

export default Proyects;