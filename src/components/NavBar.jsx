import { AppBar, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Collections } from '@mui/icons-material';

 const Header = styled(AppBar)`
  background-color: #445A6F;
  `
const NavBar = () => {
    return (
        <Header>
            <Toolbar>
             <Collections/> 
             <Typography variant='h5'>Image Finder</Typography>
            </Toolbar>
        </Header>
    );
}
export default NavBar;
