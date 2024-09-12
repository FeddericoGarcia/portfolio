import * as React from 'react';
import PropTypes from 'prop-types';

import { 
    AppBar,
    Toolbar,
    Box,
    Typography,
    Container,
    MenuItem,
    Button,
    Drawer,
    Divider
 } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import ToggleColorMode from '../helpers/iconToggleColorMode';
import { scrollToSection } from '../helpers/scrollToSection'
 
const styleBrand = {
    display: "inline-block",
    verticalAlign: "middle",
    width: "60px"
}
const logoStyle = {
    display: "block",
    width: "100%",
    height:"auto",
}

const styleMenuItem = { 
    py: '6px', 
    px: '12px', 
    borderBottom: "1px solid transparent",
    transition: "all 400ms ease",
    '& > p':{
        fontWeight: 500,
    },
    '&:hover': {
        transition: "all 400ms ease-out",
        borderBottom: "1px solid #0099ff",
        background: "transparent",
        '& > p': {
            color: "primary.main"
        }
    },
}

const Header = ({ mode, toggleColorMode }) =>{
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const handleScrollToSection = (sectionId) =>{
        scrollToSection(sectionId, () =>{
            setOpen(false)
        })
    }

    return (
        <AppBar 
            position="fixed"
            sx={{
                background: "rgba(255,255,255,0.05)",
                WebkitBackdropFilter: "blur(10px)",
                backdropFilter: "blur(10px)",
                backgroundImage: 'none',
            }}
        >
            <Container >
                <Toolbar 
                variant="regular"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexShrink: 0,
                    minHeight:"84px!important",
                }}
                >
                    <Box onClick={() => handleScrollToSection('home')} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'space-around',
                        alignItems: 'center',
                        gap: '15px',
                        userSelect: "none"
                    }}>
                        <div style={styleBrand} onClick={() => handleScrollToSection('home')} >
                            <img src="https://res.cloudinary.com/dipoe9wir/image/upload/v1723491427/logo-f-1_g9dl7x.png" alt="logo" style={logoStyle}></img>
                        </div>
                        <Typography component="h1" sx={{
                            color: (theme) =>
                                theme.palette.mode === "dark" ? "primary.contrastText" : "primary.dark",
                            fontWeight: 600,
                            fontSize: { xs:'0', sm: '22px'},
                            fontStyle: "normal",                       
                            lineHeight: '28px',
                            textShadow: "0 0 10px #0099ff",

                        }}>
                            Federico Garcia
                        </Typography>
                    </Box>

                        {/* MENU WEB */}
                    <Box sx={{ 
                        display: { xs: 'none', md: 'flex' }, 
                        gap:"10px",
                    }}
                    >
                        <MenuItem
                            onClick={() => handleScrollToSection('about')}
                            sx={styleMenuItem}
                            >
                            <Typography variant="body2" color="text.primary">
                                Conóceme 
                            </Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => handleScrollToSection('projects', setOpen(false))}
                            sx={styleMenuItem}
                            >
                            <Typography variant="body2" color="text.primary">
                                Proyectos
                            </Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => handleScrollToSection('contact')}
                            sx={styleMenuItem}
                            >
                            <Typography variant="body2" color="text.primary">
                                Contáctame
                            </Typography>
                        </MenuItem>
                        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode}/>
                    </Box>
                    
                        {/* MENU MOVIL */}
                    <Box sx={{ display: { sm: '', md: 'none' }}}>
                        <Button
                            variant="text"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ 
                                minWidth: '30px', 
                                p: '4px', 
                                color: (theme)=>
                                theme.palette.mode === 'dark'? "#efeded": "#002884",
                            }}
                        >
                            <MenuIcon />
                        </Button>
                        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} sx={{background: "transparent!important"}}>
                            <Box
                            sx={{
                                minWidth: '60vw',
                                maxHeight: '40vh',
                                p: 2,
                                backgroundColor: 'transparent!important',
                                WebkitBackdropFilter: "blur(10px)",
                                backdropFilter: "blur(10px)",
                                backgroundImage: 'none',
                                flexGrow: 1,
                            }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'end',
                                        flexGrow: 1,
                                        p: 1,
                                        
                                    }}
                                >
                                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                                </Box>
                                <Divider />
                                <Box sx={{
                                    display: "grid",
                                    gap: 1.5,
                                    mt: 1
                                }}>
                                    <MenuItem onClick={() => handleScrollToSection('home')} sx={styleMenuItem}>
                                        Inicio
                                    </MenuItem>
                                    <MenuItem onClick={() => handleScrollToSection('about')} sx={styleMenuItem}>
                                        Conóceme
                                    </MenuItem>
                                    <MenuItem onClick={() => handleScrollToSection('projects')} sx={styleMenuItem}>
                                        Proyectos
                                    </MenuItem>
                                    <MenuItem onClick={() => handleScrollToSection('contact')} sx={styleMenuItem}>
                                        Contáctame
                                    </MenuItem>
                                </Box>
                            </Box>
                        </Drawer>
                    </Box>
                </Toolbar>
            </Container> 
        </AppBar>
       
    );
};

Header.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
  };

export default Header;