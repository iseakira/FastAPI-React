import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BasicMenu from '../elements/BasicMenu';
import { Grid } from '@mui/material';
import { LoginUserContext } from '../providers/LoginUserProvider';
import { useContext } from 'react';

const Header = (props) => {
  const { LoginUser } = useContext(LoginUserContext);
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <BasicMenu />
          </Grid>
          <Grid item xs={6} sx={{ textAlign: 'right' }}>
            <Typography variant="h6" component="div">
              ログインユーザー:{LoginUser}
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
