import { Box, Button, Container, Stack, Typography } from "@mui/material"


const HeroSection = () =>{

    return (
        <Box sx={{
            backgroundColor: '#121212',
            padding: '2rem',
            textAlign: 'center',
            position:'sticky',
            overflow: 'hidden',
            // borderRadius: '0 0 20px 20px',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
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
                    justifyContent: "center",
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
                        Soy
                            <Typography 
                            id="hero-text"
                            component="span"
                            variant="h2"
                            ml= "10px"                
                            sx={{
                            fontSize: 'clamp(1rem, 10vw, 2rem)',
                            textTransform: "capitalize",
                            color: (theme) =>
                                theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                            }}
                            >
                            Desarrollador web
                            </Typography>   
                    </Typography>
                    <Typography component={"h3"} sx={{
                        width: "44vw",
                        position: "relative",
                        textAlign:"center"
                    }}>
                        Convirtiendo tu futura visión digital en realidad, construyamos juntos el camino.
                        No dejes pasar el tiempo y ponte en contacto hoy mismo!
                    </Typography>
                    <Button 
                    href="#contact"
                    variant="outline"
                    sx={{
                    }}>
                        ¡ Contactame !
                    </Button>
                </Stack>
            </Container>
        </Box>
    )
}

export default HeroSection;