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

 import ToggleColorMode from './ToggleColorMode';

 
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
                bgcolor: 'transparent',
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
                    <Box sx={{
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
                            fontFamily: "Quicksand, sans-serif",
                            fontWeight: 600,
                            fontSize: { xs:'18px', sm: '22px'},
                            lineHeight: '28px',
                            fontStyle: "normal",                       
                        }}>
                            Federico Garcia
                        </Typography>
                    </Box>

                        {/* MENU WEB */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap:"10px" }}>
                        <MenuItem
                            onClick={() => scrollToSection('home')}
                            sx={{ py: '6px', px: '12px', borderRadius: "5px" }}
                            >
                            <Typography variant="body2" color="text.primary">
                                Inicio
                            </Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => scrollToSection('proyects')}
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
                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                        <Button
                            variant="text"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                            sx={{ minWidth: '30px', p: '4px', color:"#efeded" }}
                        >
                            <MenuIcon />
                        </Button>
                        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                            <Box
                            sx={{
                                minWidth: '60dvw',
                                p: 2,
                                backgroundColor: 'background.paper',
                                flexGrow: 1,
                            }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'end',
                                        flexGrow: 1,
                                        p: 1
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
                                    <MenuItem onClick={() => scrollToSection('proyects')} sx={{borderRadius: "5px"}}>
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