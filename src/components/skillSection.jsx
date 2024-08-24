import { Box, Typography } from "@mui/material"
import { IconCloudDemo } from "./IconCapsule"

const SkillSection = () => {
    return(
        <Box sx={{
            height: "100vh",
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
                    textTransform: "uppercase"
                }}>
                Tecnologías que utilizo
                <Typography sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    textTransform: "capitalize",
                    color: (theme) =>
                      theme.palette.mode === "dark" ? 'primary.light' : 'primary.contrastTextDark',
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