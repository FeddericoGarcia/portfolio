import { 
    Box, 
    Container, 
    Typography,
    Chip 
} from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

import ButtonGitHub from "./buttons/ButtonGitHub";

const Proyects = () =>{

    const githubImgStyle = {
        width: 250,
        height: "auto",
        padding: 5,
        filter: "drop-shadow(2px 4px 6px #000)"        
    }

    const projectsList = [
        {
            name: "Taichi & Chikung",
            description: "Lading Page de servicio de enseñanzas sobre artes marciales chinas y meditación",
            url_github: "https://github.com/FeddericoGarcia/mibe-landingpage",
            url_site: "https://github.com/FeddericoGarcia/mibe-landingpage",
            img: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            img_404: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            tech: ["JavaScript", "React", "MaterialUI", "Cloudinary"]
        },
        {
            name: "Sistema Administrativo",
            description: "App web de sistema administrativo empresarial para el registro de ventas de asesores",
            url_github: "https://github.com/FeddericoGarcia/management-system",
            url_site: "https://github.com/FeddericoGarcia/management-system",
            img: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            img_404: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            tech: ["MongoDB", "Express", "React", "NodeJS", "Cloudinary", "Google Identity", "MaterialUI"]
        },
        {
            name: "Rest Server",
            description: "Rest-Server con auth Google Identity, CRUD, búsqueda de colecciones y términos con MongoDB",
            url_github: "https://github.com/FeddericoGarcia/rest-server",
            url_site: "https://github.com/FeddericoGarcia/rest-server",
            img: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            img_404: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            tech: ["NodeJS", "Express", "Cloudinary", "Google Identity", "MongoDB"]
        },

    ]

    return(
        <Box sx={{overflow: "hidden", paddingTop: "2rem", paddingBottom: "3em", height: "auto", width: "auto"}}>
            <Container sx={{
                display: 'flex',
                flexDirection: {xs: "row", sm: "column", md:"column"},
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1em',
            }}>
                <Box id="projects" sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: 'center',
                    justifyContent: 'center',
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
                        Proyectos Seleccionados
                    </Typography>
                    <Container sx={{
                        height: {md:"800px", lg: "480px"},
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: "4em",
                        gap: "10px",
                        position: "relative"
                    }}>
                        {projectsList.map((project, index) => (
                            <Box key={index} sx={{ 
                                    maxHeight: "330px",
                                    maxWidth: '350px',
                                    borderRadius: '10px',
                                    boxShadow: (theme) =>
                                        theme.palette.mode === "dark" ? "0px 10px 20px rgba(231,231,231,0.1)" : "0px 10px 20px rgba(0,0,0,0.1)",
                                    display: 'flex',
                                    flexDirection: "column",
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    overflow: "hidden",
                                    position: "relative",
                                    transition: 'box-shadow 0.3s ease, max-height 400ms ease, height 400ms ease-out',
                                    '&:hover': {
                                        maxHeight: '100%', 
                                        '& > p': {
                                            opacity: 1, 
                                            transition: 'opacity 400ms ease-out', 
                                            height: 'auto', 
                                            padding: "20px",
                                        },
                                    },
                                    '& > p': {
                                        opacity: 0,
                                        height: 0, 
                                        overflow: 'hidden', 
                                        transition: 'opacity 800ms ease-out', 
                                        // padding: "10px",
                                    },
                                }}>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: '100%',
                                    overflow: 'hidden',
                                    backgroundSize: "cover",
                                    position: "relative",
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
                                    <Box sx={{
                                        width: "auto",
                                        heigth: "100%",
                                        position: "absolute",
                                        bottom: 2,
                                        right: 0,
                                        borderRadius: "50%",
                                        padding: "5px",
                                        backdropFilter: "blur(9px)",
                                        "-webkit-backdrop-filter":" blur(9px)",
                                        backgroundColor: "rgba(10,10,10, 0.1)",
                                        border: "1px solid #002884",
                                        '& > a': {
                                            textDecoration: "none",
                                            color: "primary.dark",
                                            transition: "color 250ms ease, transform 400ms ease-out",
                                            display: "flex",
                                            '&:hover': {
                                                transform: "rotate(-20deg)",
                                                color: "primary.light",
                                                transition: "color 250ms ease, transform 400ms ease-out",
                                            }
                                        }
                                    }}>
                                        <a href={project.url_github} target="_blank" rel="noopener noreferrer" title={`Repositorio `+ project.name}>
                                            <GitHubIcon sx={{ fontSize: "2.1em", borderRadius: "50%"}}/>
                                        </a> 
                                    </Box>
                                    <Box sx={{
                                        width: "auto",
                                        heigth: "100%",
                                        position: "absolute",
                                        bottom: 2,
                                        right: 48,
                                        borderRadius: "50%",
                                        padding: "5px",
                                        backdropFilter: "blur(9px)",
                                        "-webkit-backdrop-filter":" blur(9px)",
                                        backgroundColor: "rgba(10,10,10, 0.1)",
                                        border: "1px solid #002884",
                                        '& > a': {
                                            textDecoration: "none",
                                            color: "primary.dark",
                                            transition: "color 250ms ease, transform 400ms ease-out",
                                            display: "flex",
                                            '&:hover': {
                                                transform: "rotate(-20deg)",
                                                color: "primary.light",
                                                transition: "color 250ms ease, transform 400ms ease-out",
                                            }
                                        }
                                    }}>
                                        <a href={project.url_site} target="_blank" rel="noopener noreferrer" title={`Sitio web `+ project.name}>
                                            <LaunchIcon sx={{ fontSize: "2em"}} />
                                        </a>
                                    </Box>
                                </Box>
                                <Typography
                                    component="h4"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '1.5rem',
                                        margin: '10px',
                                        color: 'primary.main',
                                        position: "relative",
                                        '&:hover': {
                                            '&:before': {
                                                content: '"#"',
                                                position: "absolute",
                                                left: "-20px"
                                            }
                                        }
                                    }}>
                                    {project.name}
                                </Typography>
                                <Box sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: "5px",
                                    padding: ".4rem"
                                }}>
                                    { project.tech.map((tech, index) => (
                                            <Chip 
                                            variant="outlined"
                                            key={index} 
                                            label={tech} 
                                            sx={{ 
                                                height: "auto",
                                                width: "auto!important",
                                                fontSize: '0.8rem',
                                                userSelect: "none",
                                            }}
                                            />
                                        ))
                                    }
                                </Box>
                                <Typography
                                    component="p"
                                    sx={{ 
                                        height: "0px",
                                        opactity: 0,
                                        fontSize: '1rem', 
                                        color: 'text.secondary',
                                        paddingBottom: "0",
                                        textAlign: "center",
                                        overflow: "hidden",
                                        transition: 'opacity 800ms ease-out'
                                        }}>
                                    {project.description}
                                </Typography>
                            </Box>
                        ))}
                    </Container>
                </Box>
            </Container>
            <Box sx={{
                backgroundColor: "rgb(0,153,255)",
                background: "radial-gradient(circle, rgba(0,153,255,1) 32%, rgba(0,40,132,1) 100%)",
                width: '100vw',
                padding: "1rem",
                display: 'flex',
                flexDirection: {xs: "column", sm:"row" },
                justifyContent: 'center',
                alignItems: 'center',
                position: "relative",
                transform: "rotate(2deg)",
                '& > div, img': {
                    transform: "rotate(-2deg)"
                },
            }}>
                <img src="https://res.cloudinary.com/dipoe9wir/image/upload/v1723502764/github_aqim6z.png" alt="github-logo" style={githubImgStyle}></img>
                <Box component="div" sx={{
                    display: "flex",
                    alignItems: 'center',
                    flexDirection: "column",
                    justifyContent: 'center',
                }}>
                    <Typography component="h3" sx={{
                        fontSize: "1.3em",
                        color: "primary.contrast",
                        p: "1rem"
                    }}>
                        Visita mi repositorio en GitHub y conoce más de mis proyectos!
                    </Typography>
                    <ButtonGitHub />
                </Box>
            </Box>
        </Box>
    )
}

export default Proyects;