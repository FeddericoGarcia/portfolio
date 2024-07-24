import { 
    AppBar,
    Toolbar,
    List,
    Box,
    Icon,
    Typography
 } from '@mui/material';
//  import { mainListItems } from './listItems';

const Header = () =>{
    return (
        <AppBar >
            <Toolbar component="nav">
            <Box>
                <Icon id="logo-navbar" src="../assets/img/logo-f.png" height="28" width="28"></Icon>
            </Box>
            <Typography>
                Federico Garcia
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <List component="nav">
                    {/* {mainListItems} */}
                </List>
            </Box>
            {/* <MenuIcon /> */}
            </Toolbar>
        </AppBar>
    );
};

export default Header;