import React from "react";
import { Drawer, Avatar, Grid, IconButton, Divider } from "@material-ui/core";
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
          xs={12}
          className={classes.grid}
        >
          <Grid item className={classes.logo}>
            <ReactLogo />
          </Grid>

          <Grid item>
            <IconButton>
              <Brightness3Icon color="primary" className={classes.icon} />
            </IconButton>
            <Divider className={classes.divider} />
            <IconButton>
              <Avatar className={classes.purple}>CF</Avatar>
            </IconButton>
          </Grid>
        </Grid>
      </Drawer>
    </div>
  );
};

export default SideBar;
