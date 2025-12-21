import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BasicMenu from '../elements/BasicMenu';
import { Grid } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container>
          <Grid size={6}>
            <BasicMenu />
          </Grid>
          <Grid size={6} sx={{ textAlign: 'center' }}>
            <Typography variant="p" component="div">
              ログインユーザー:
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
