import React from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Typography, Toolbar, Avatar} from '@material-ui/core';
import useStyles from "./styles";
import perfil from "../../images/perfil.jpg";

const Navbar = () => {
  const classes = useStyles();
  const username = 'Oduber Vasquez';
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
      <Typography  component={Link} to="/" className={classes.heading} variant="h6" align="center">
          Desafío Nro 1
      </Typography>
        
      </div>
      <Toolbar className={classes.toolbar}>
        {username ? (
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={username} src={perfil}>{username.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{username}</Typography>
            <Typography  component={Link} to="/empresas" className={classes.heading} variant="h6" align="center">
          Desafío Nro 2
      </Typography>
          </div>
        ) : (
          <div className={classes.profile}>

          </div>
        )}
      </Toolbar>    
    </AppBar>
  );
};

export default Navbar;