import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

const Navbar = () => {
  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Cricket Live</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
