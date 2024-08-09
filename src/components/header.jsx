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

 import ToggleColorMode from '../helpers/ToggleColorMode';

 
const Header = ({ mode, toggleColorMode }) =>{
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const styleA = {
        display: "inline-block",
        verticalAlign: "middle",
        width: "60px"
    }
    const logoStyle = {
        display: "block",
        width: "100%",
        height:"auto",
    }
  
    const scrollToSection = (sectionId) => {
      const sectionElement = document.getElementById(sectionId);
      const offset = 128;
      if (sectionElement) {
        const targetScroll = sectionElement.offsetTop - offset;
        sectionElement.scrollIntoView({ behavior: 'smooth' });
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth',
        });
        setOpen(false);
      }
    };
    

    return (
       
        <AppBar 
            position="fixed"
            sx={{
                background: "rgba(255,255,255,0.05)",
                "-webkit-backdrop-filter": "blur(5px)",
                backdropFilter: "blur(5px)",
                border: "1px solid rgba(255,255,255,0.025)",
                backgroundImage: 'none',
            }}
        >
            <Container >
                <Toolbar 
                variant="regular"
                sx={(theme) => ({
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexShrink: 0,
                    minHeight:"84px!important",
                })}
                >
                    <Box onClick={() => scrollToSection('home')} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent:'space-around',
                        alignItems: 'center',
                        gap: '15px',
                        userSelect: "none"
                    }}>
                        <a href="/#home" style={styleA} >
                            <img src="https://avatars.githubusercontent.com/u/106563428?s=400&u=bd0cd7063c638a5679aa15d88a679f0de8f73060&v=4" alt="logo" style={logoStyle}></img>
                        </a>
                        <Typography component="h1" sx={{
                            color: (theme) =>
                                theme.palette.mode === "dark" ? "primary.main" : "secondary.main",
                            fontFamily: "Quicksand, sans-serif",
                            fontWeight: 600,
                            fontSize: { xs:'0', sm: '22px'},
                            fontStyle: "normal",                       
                            lineHeight: '28px',
                            textShadow: (theme) =>
                                theme.palette.mode === "dark" ? '0 0 5px rgba(255, 255, 255, 0.5)' : '0 0 5px rgba(0, 0, 0, 0.3)',

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
                            onClick={() => scrollToSection('home')}
                            sx={{ py: '6px', px: '12px', borderRadius: "5px" }}
                            >
                            <Typography variant="body2" color="text.primary">
                                Inicio
                            </Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => scrollToSection('projects')}
                            sx={{ py: '6px', px: '12px', borderRadius: "5px"}}
                            
                            >
                            <Typography variant="body2" color="text.primary">
                                Proyectos
                            </Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => scrollToSection('contact')}
                            sx={{ py: '6px', px: '12px', borderRadius: "5px" }}
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
                            sx={{ minWidth: '30px', p: '4px', color:"#efeded" }}
                        >
                            <MenuIcon />
                        </Button>
                        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)} height="60vh!important">
                            <Box
                            sx={{
                                minWidth: '60dvw',
                                p: 2,
                                backgroundColor: 'background.paper',
                                flexGrow: 1,
                                // borderRadius: "25px 0 0 25px",
                                // maxHeight: "60vh"
                                // TODO: ACHICAR MENU A LA MITAD CON BORDES REDONDOS Y SOMBREADO ***
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
                                    <MenuItem onClick={() => scrollToSection('home')} sx={{borderRadius: "5px"}}>
                                        Inicio
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('projects')} sx={{borderRadius: "5px"}}>
                                        Proyectos
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('contact')} sx={{borderRadius: "5px"}}>
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