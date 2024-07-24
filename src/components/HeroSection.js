import { Box, Typography } from "@mui/material"


const HeroSection = () =>{

    <Box sx={{
        backgroundColor: '#192337',
        color: '#ffffff',
        padding: '2rem',
        textAlign: 'center',
        position:'relative',
        overflow: 'hidden',
        borderRadius: '20px',
        textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
        height: '50vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Typography component={"h1"}>
            ¡ Hi,I'm Federico Garcia!
        </Typography>
    </Box>
}

export default HeroSection;
