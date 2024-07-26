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

//  import { mainListItems } from './listItems';

const Header = ({ mode, toggleColorMode }) =>{
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const styleA = {
        display: "inline-block",
        verticalAlign: "middle",
        width: "70px"
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
        <div>
            <AppBar 
                position="fixed"
                sx={{
                    boxShadow: "0 1px 2px #CCC",
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
                        // bgcolor:
                        //     theme.palette.mode === 'light'
                        //     ? 'rgba(255, 255, 255, 0.4)'
                        //     : 'rgba(0, 0, 0, 0.1)',
                        backdropFilter: 'blur(24px)',
                        minHeight:"84px!important"
                    })}
                    >
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent:'space-around',
                            alignItems: 'center',
                            gap: '15px',
                        }}>
                            <a href="/#home" style={styleA}>
                                <img src="https://avatars.githubusercontent.com/u/106563428?v=4" alt="logo" style={logoStyle}></img>
                            </a>
                            <Typography component="h1" sx={{
                                fontWeight: 600,
                                fontSize: '20px',
                                lineHeight: '28px',
                            }}>
                                Federico Garcia
                            </Typography>
                        </Box>

                            {/* MENU WEB */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap:"10px" }}>
                            <MenuItem
                                onClick={() => scrollToSection('home')}
                                sx={{ py: '6px', px: '12px' }}
                                >
                                <Typography variant="body2" color="text.primary">
                                    Inicio
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => scrollToSection('proyects')}
                                sx={{ py: '6px', px: '12px' }}
                                >
                                <Typography variant="body2" color="text.primary">
                                    Proyectos
                                </Typography>
                            </MenuItem>
                            <MenuItem
                                onClick={() => scrollToSection('contact')}
                                sx={{ py: '6px', px: '12px' }}
                                >
                                <Typography variant="body2" color="text.primary">
                                    Contactame
                                </Typography>
                            </MenuItem>
                            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                        </Box>

                            {/* MENU MOVIL */}
                         <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
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
                                        }}
                                    >
                                        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                                    </Box>
                                    <Divider />
                                    <MenuItem onClick={() => scrollToSection('home')}>
                                        Inicio
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('proyects')}>
                                        Proyectos
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('contact')}>
                                        Contactame
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container> 
            </AppBar>
        </div>
    );
};

Header.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
  };

export default Header;