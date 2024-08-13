import { Box, Typography } from "@mui/material"
import { IconCloudDemo } from "./IconCapsule"

const SkillSection = () => {
    return(
        <Box sx={{
            height: "450px",
            width: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            pt: "5em"
        }}> 
            <Typography>
                Algunas de mis tecnologías...
            </Typography>
            <Box>
                < IconCloudDemo />
            </Box>
        </Box>
    )
}

export default SkillSection;