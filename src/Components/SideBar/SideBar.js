import React from "react";
import {
  Drawer,
  Avatar,
  List,
  ListItemIcon,
  ListItem,
  Grid,
} from "@material-ui/core";
import { useStyles } from "./styles";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { ReactComponent as ReactLogo } from "../../assets/logo.svg";

const SideBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <Grid
          container
          align="center"
          direction="column"
          justify="space-between"
        >
          <Grid item xs={12}>
            <ReactLogo />
          </Grid>
          <Grid item xs={12}>
            <Avatar className={classes.purple}>CF</Avatar>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
};

export default SideBar;
