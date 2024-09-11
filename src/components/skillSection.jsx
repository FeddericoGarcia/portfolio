import { Box, Typography } from "@mui/material"
import { IconCloudDemo } from "./ui/IconCapsule"

const SkillSection = () => {
    return(
        <Box sx={{
            height: "auto",
            width: "auto",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
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
                Tecnologías que utilizo
            </Typography>
            <Box>
                < IconCloudDemo />
            </Box>
        </Box>
    )
}

export default SkillSection;