import { 
    Box, 
    Button,
    Container, 
    Typography 
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';


const Proyects = () =>{

    const githubLogoStyle = {
        width: 250,
        height: "auto",
        padding: 5,
        filter: "drop-shadow(2px 4px 6px #000)"        
    }

    const projectsList = [
        {
            name: "Sistema Administrativo",
            description: "App web para sistema administrativo de empresa CETAN®, para el registro de ventas de asesores",
            url_github: "https://github.com/FeddericoGarcia/management-system",
            url_site: "https://github.com/FeddericoGarcia/management-system",
            img: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            img_404: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
        },
        {
            name: "Taichi & Chikung",
            description: "Lading Page sobre artes marciales de meditación",
            url_github: "https://github.com/FeddericoGarcia/mibe-landingpage",
            url_site: "https://github.com/FeddericoGarcia/mibe-landingpage",
            img: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            img_404: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",

        },
        {
            name: "Mi Portafolio",
            description: "El mismisimo y hermosisimo sitio en el cual te encuentras",
            url_github: "https://github.com/FeddericoGarcia/portfolio",
            url_site: "https://github.com/FeddericoGarcia/portfolio",
            img: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            img_404: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",

        },
        {
            name: "Rest Server",
            description: "Rest-Server con autentificación, Google Identity, CRUD y búsqueda de colecciones, y términos con MongoDB y Cloudinary",
            url_github: "https://github.com/FeddericoGarcia/rest-server",
            url_site: "https://github.com/FeddericoGarcia/rest-server",
            img: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            img_404: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",

        },

    ]

    return(
        <Container sx={{
            minHeight: '950px',
            display: 'flex',
            flexDirection: {xs: "row", sm: "column", md:"column"},
            justifyContent: 'center',
            alignItems: 'center',
            p: "7em 0"
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
                    Mis proyectos
                </Typography>
                <Container sx={{
                    height: "auto",
                    display: "grid",
                    gridTemplateColumns: {sm: "1fr", md:"1fr 1fr"},
                    justifyContent: 'center',
                    alignItems: 'center',
                    m: "8em 0"
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
                                <img src={project.img_404} alt={project.name} />
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
            <Box sx={{
                backgroundColor: "primary.main",
                width: '1600px!important',
                height: '250px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: "relative",
                transform: "rotate(2deg)",
                m: "4em 2em 4em 0",
                '& > div, img': {
                    transform: "rotate(-2deg)"
                },
            }}>
                <img src="https://res.cloudinary.com/dipoe9wir/image/upload/v1723502764/github_aqim6z.png" alt="github-logo" style={githubLogoStyle}></img>
                <Box component="div" sx={{
                    display: "flex",
                    alignItems: 'center',
                    flexDirection: "column",
                    justifyContent: 'center',
                }}>
                    <Typography component="h3" sx={{
                        fontSize: "1.3em",
                        color: "primary.contrast",
                        p: ".3em"
                    }}>
                        Visita mi repositorio y conoce más de mis proyectos!
                    </Typography>
                    <Button 
                        href="https://github.com/feddericogarcia"
                        target="__blank"
                        rel="noopener noreferrer"
                        variant="inline"
                        sx={{
                            textTransform: "uppercase",
                            "&:hover": {
                                transform: "scaleX(1.5)",
                                transition: "transform 0.3s ease-out",
                                color: "#000"
                                
                            }
                        }}>
                        ¡ visitame !
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default Proyects;