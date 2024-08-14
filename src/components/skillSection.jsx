import { Box, Typography } from "@mui/material"
import { IconCloudDemo } from "./IconCapsule"

const SkillSection = () => {
    return(
        <Box sx={{
            height: "80vh",
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            m: "8em 0"
        }}> 
            <Typography
                component="h3"
                sx={{
                    fontSize: "clamp(1rem, 10vw, 2rem)",
                    color: 'primary.main',
                    position: "relative",
                    textTransform: "uppercase"
                }}>
                Tecnologías que utilizo
                <Typography sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    textTransform: "capitalize"
                }}>
                    Y contando...
                </Typography>
            </Typography>
            <Box>
                < IconCloudDemo />
            </Box>
        </Box>
    )
}

export default SkillSection;