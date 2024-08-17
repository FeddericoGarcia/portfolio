import { 
    Box, 
    Container, 
    Typography,
    Chip 
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
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
            name: "Sistema Administrativo",
            description: "App web para sistema administrativo de empresa para el registro de ventas de asesores",
            url_github: "https://github.com/FeddericoGarcia/management-system",
            url_site: "https://github.com/FeddericoGarcia/management-system",
            img: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            img_404: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            tech: ["JavaScript", "React", "NodeJS", "Express", "Cloudinary", "Google Identity", "MongoDB", "MaterialUI"]
        },
        {
            name: "Taichi & Chikung",
            description: "Lading Page sobre artes marciales de meditación",
            url_github: "https://github.com/FeddericoGarcia/mibe-landingpage",
            url_site: "https://github.com/FeddericoGarcia/mibe-landingpage",
            img: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            img_404: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            tech: ["JavaScript", "React", "MaterialUI"]
        },
        {
            name: "Mi Portafolio",
            description: "El mismisimo y hermosisimo sitio en el cual te encuentras",
            url_github: "https://github.com/FeddericoGarcia/portfolio",
            url_site: "https://github.com/FeddericoGarcia/portfolio",
            img: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            img_404: "https://res.cloudinary.com/dipoe9wir/image/upload/v1723501052/404_wyyrzj.webp",
            tech: ["JavaScript", "React", "Cloudinary"]
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
        <Box>
            <Container sx={{
                minHeight: '950px',
                display: 'flex',
                flexDirection: {xs: "row", sm: "column", md:"column"},
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1em',
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
                            fontSize: "clamp(1rem, 10vw, 2rem)",
                            color: 'primary.main',
                            position: "relative",
                            textTransform: "uppercase"
                        }}>
                        Proyectos Seleccionados
                    </Typography>
                    <Container sx={{
                        height: "auto",
                        display: "grid",
                        gridTemplateColumns: {sm: "1fr", md:"1fr 1fr"},
                        justifyContent: 'center',
                        alignItems: 'center',
                        m: "4em 0",
                        gap: "10px"
                    }}>
                        {projectsList.map((project, index) => (
                            <Box key={index} sx={{ 
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
                                    display: "grid",
                                    gridTemplateColumns: {xs: "1fr auto", sm: "1fr auto auto", md: "1fr auto auto auto"},
                                    gap: "5px",
                                    alignItems: "center",
                                    p: "0 .8rem"
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
                                                userSelect: "none"
                                            }}
                                        />
                                    ))
                                }
                                        </Box>
                                <Typography
                                    component="p"
                                    sx={{ 
                                        fontSize: '1rem', 
                                        color: 'text.secondary',
                                        p: "1rem",
                                        marginBottom: "15px",
                                        textAlign: "center"
                                        }}>
                                    {project.description}
                                </Typography>
                                <Box sx={{ 
                                    display: "flex",
                                    padding:"10px", 
                                    gap: "10px",
                                    // borderRadius: '5px', 
                                    '& > a': {
                                        textDecoration: "none",
                                        color: "primary.main",
                                        '&:hover': {
                                            // "-webkit-box-shadow": "-2.5px 6.5px 10.5px 8px #dddddd",
                                            // "-moz-box-shadow": "-2.5px 6.5px 10.5px 8px #dddddd",
                                            // boxShadow: "-2.5px 6.5px 10.5px 8px #dddddd",
                                            filter: "drop-shadow(2px 10.5px 8px #dddddd)"  
                                        }
                                    }
                                    }}>
                                    <a href={project.url_github} target="_blank" rel="noopener noreferrer">
                                        <GitHubIcon sx={{ fontSize: "2em", borderRadius: "50%"}}/>
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
            <Box sx={{
                backgroundColor: "primary.main",
                width: '100vw',
                height: {xs: "370px", sm:'250px'},
                display: 'flex',
                flexDirection: {xs: "column", sm:"row" },
                justifyContent: 'center',
                alignItems: 'center',
                position: "relative",
                transform: "rotate(2deg)",
                m: "4em 2em 4em 0",
                overflow: "hidden",
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
                        Visita mi repositorio y conoce más de mis proyectos!
                    </Typography>
                    <ButtonGitHub />
                </Box>
            </Box>
        </Box>
    )
}

export default Proyects;