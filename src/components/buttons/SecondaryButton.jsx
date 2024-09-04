import { Button } from "@mui/material"
import { scrollToSection } from "../../helpers/scrollToSection"

const SecondaryButton = ({text, href, section}) =>{
    return(
        <Button 
            onClick={()=> scrollToSection(section)}
            href={href}
            rel="noopener noreferrer"
            sx={{
                width: "fit-content",
                display: "flex",
                cursor: "pointer",
                borderRadius: "10px",
                textShadow: "2px 2px 3px rgb(136 0 136 / 50%)",
                border: "1px solid linear-gradient(15deg, #00406a, #00558d, #0099ff, #0099ff, #00558d, #00406a) no-repeat",
                backdropFilter: "blur(9px)",
                WebkitBackdropFilter: "blur(9px)",
                color: (theme) =>
                    theme.palette.mode === "dark" ? "primary.contrastText" : "primary.contrastTextDark",
                boxShadow: ( theme ) => 
                    theme.palette.mode === "dark" ? "2px 2px 5px rgba(200,200,200,.5)" : "2px 2px 5px rgba(0,0,0,.5)",
                backgroundPosition:" left center",
                transition: "background 500ms ease-out, box-shadow 1s ease",
                '&:hover': {
                    boxShadow: ( theme ) => 
                        theme.palette.mode === "dark" ? "0 0 30px rgba(200,200,200,.5)" : "0 0 30px rgba(0,0,0,.5)",
                    outline: "1px solid #CCC5",
                    transition: "background 500ms ease-out, box-shadow 1s ease",
                }
            }}>
               {text}
        </Button>
    )
}

export default SecondaryButton;