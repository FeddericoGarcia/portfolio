import { Button } from "@mui/material"
import { scrollToSection } from "../../helpers/scrollToSection"

const ButtonContact = ({text, href, section}) =>{
    return(
        <Button 
            onClick={()=> scrollToSection(section)}
            href={href}
            rel="noopener noreferrer"
            sx={{
                width: "fit-content",
                textTransform: "capitalize",
                display: "flex",
                cursor: "pointer",
                fontWeight: "bold",
                fontsize: "1rem!important",
                borderRadius: "10px",
                textShadow: "2px 2px 3px rgb(136 0 136 / 50%)",
                background: "linear-gradient(15deg, #00406a, #00558d, #0099ff, #0099ff, #00558d, #00406a) no-repeat",
                backgroundSize: "300%",
                color: "primary.light",
                boxShadow: ( theme ) => 
                    theme.palette.mode === "dark" ? "2px 2px 5px rgba(200,200,200,.5)" : "2px 2px 5px rgba(0,0,0,.5)",
                border: "none",
                backgroundPosition:" left center",
                transition: "background 500ms ease-out, box-shadow 1s ease",
                '&:hover': {
                    backgroundSize: "320%",
                    backgroundPosition: "right center",
                    boxShadow: ( theme ) => 
                        theme.palette.mode === "dark" ? "0 0 30px rgba(200,200,200,.5)" : "0 0 30px rgba(0,0,0,.5)"
                }
            }}>
               {text}
        </Button>
    )
}

export default ButtonContact;