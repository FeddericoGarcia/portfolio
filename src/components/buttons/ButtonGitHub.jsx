import { Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const ButtonGitHub = () => {
    return(
        <Button 
            href="https://github.com/feddericogarcia"
            target="__blank"
            rel="noopener noreferrer"
            variant="inline"
            sx={{
                textTransform: "uppercase",
                textDecoration: "none",
                backgroundColor: "primary.light",
                color: "#121212",
                borderRadius: "10px",
                "&:hover": {
                    boxShadow: "0 0 10px #121212",
                    color: "primary.light",
                    outline: "1px solid #0003"
                }
            }}>
                Ir al repo <GitHubIcon sx={{ paddingLeft: "5px"}}/>
    </Button>
    )
}

export default ButtonGitHub;
