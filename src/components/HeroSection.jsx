import { Box, Container, Stack, Typography } from "@mui/material"
import ButtonContact from "./buttons/ButtonContact";


const HeroSection = () =>{

    return (
        <Box id="home" sx={{
            padding: '2rem',
            textAlign: 'center',
            position:'sticky',
            overflow: 'hidden',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Container>
                {/* <Box sx={{
                    width: "100vw",
                    height: "auto",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    // zIndex: "-1",
                    backgroundImage: 'url("https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=2.9&cPolarAngle=120&cameraZoom=1&color1=%235703ff&color2=%2325003b&color3=%23000000&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=1.8&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.1&uStrength=3&uTime=0.2&wireframe=false&zoomOut=false")'
                }}>
                    <canvas></canvas>
                </Box> */}
                <Stack spacing={2} useFlexGap sx={{
                    height: "450px",
                    justifyContent: "end",
                    alignItems: "center",

                }}>
                    <Typography 
                        component="span"
                        variant="h2"
                        p=".5em"
                        sx={{
                        fontSize: 'clamp(1rem, 10vw, 2rem)',
                        }}
                        >
                        Creando
                            <Typography 
                            id="hero-text"
                            component="span"
                            variant="h2"
                            ml= "10px"                
                            sx={{
                            fontSize: 'clamp(1rem, 10vw, 2rem)',
                            textTransform: "capitalize",
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'secondary.main',
                            textShadow: (theme) =>
                                theme.palette.mode === "dark" ? '0 0 5px rgba(255, 255, 255, 0.5)' : '0 0 5px rgba(0, 0, 0, 0.5)',
                            }}
                            >
                            Soluciones Tecnológicas
                            </Typography>   
                    </Typography>
                    <Typography component={"h3"} sx={{
                        fontSize: "1.3rem",
                        maxWidth: "50ch",
                        minWidth: "50ch",
                        position: "relative",
                        textAlign:"center"
                    }}>
                        Si tienes una idea, se puede digitalizar. 
                    </Typography>
                    <ButtonContact href={"#contact"} text={" Contáctame "} />
                </Stack>
            </Container>
        </Box>
    )
}

export default HeroSection;