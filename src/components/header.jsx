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
 
const Header = ({ mode, toggleColorMode }) =>{
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

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
        borderRadius: "5px",
        background: "transparent!important", 
        '& > p, span': {
             color: "primary.main",
            position: "relative",
             "&:hover": {
                background: "rgba(255,255,255,0.1)",
                color: "primary.main",
             }
             }
        }
  
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
                "-webkit-backdrop-filter": "blur(10px)",
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
                            color: "primary.main",
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
                            onClick={() => handleScrollToSection('home')}
                            sx={{py: '6px', px: '12px', borderRadius: "5px",
                                // '&:hover': {
                                //     outlineBottom: "1px solid #CCC"
                                // }
                            }}
                            >
                            <Typography variant="body2" color="text.primary">
                                Inicio
                            </Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => handleScrollToSection('projects', setOpen(false))}
                            sx={{ py: '6px', px: '12px', borderRadius: "5px"}}
                            >
                            <Typography variant="body2" color="text.primary">
                                Proyectos
                            </Typography>
                        </MenuItem>
                        <MenuItem
                            onClick={() => handleScrollToSection('contact')}
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
                                    <MenuItem onClick={() => handleScrollToSection('home')} sx={{borderRadius: "5px"}}>
                                        Inicio
                                    </MenuItem>
                                    <MenuItem onClick={() => handleScrollToSection('projects')} sx={{borderRadius: "5px"}}>
                                        Proyectos
                                    </MenuItem>
                                    <MenuItem onClick={() => handleScrollToSection('contact')} sx={{borderRadius: "5px"}}>
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