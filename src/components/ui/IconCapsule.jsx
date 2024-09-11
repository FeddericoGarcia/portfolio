import { Box } from "@mui/material";
import IconCloud from "./IconCloud";
 
const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "materialui",
  "mysql",
  "bootstrap",
  "vercel",
  "mongodb",
  "cloudinary",
  "docker",
  "git",
  "jira",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
];
 
export function IconCloudDemo() {
  return (
    <Box sx={{
      position: "relative",
      display: "flex",
      heigth: "100%",
      width: "100%",
      maxWidth: "32rem",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      borderRadius: "10px",
      backgroundColor: "background",
      transition: "all 0.2s ease-in-out",
    }}
    >
      <IconCloud iconSlugs={slugs} />
    </Box>
  );
}