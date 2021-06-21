import React from "react";
import { ListItem, Paper, ListItemText, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const InvoiceListItem = ({ id, due, name, total, status, paginate }) => {
  const classes = useStyles();
  let classed;
  if (status.toLowerCase() === "paid") {
    classed = classes.bulletPaid;
  } else if (status.toLowerCase() === "draft") {
    classed = classes.bulletDraft;
  } else {
    classed = classes.bulletPending;
  }

  return (
    <Paper>
      <ListItem className={classes.listItem} button>
        <ListItemText className={classes.listItemText}>
          <Typography align="left" variant="body1">
            <span className={classes.span}>#</span> {id}
          </Typography>
        </ListItemText>
        <ListItemText align="left" className={classes.listItemText}>
          <Typography variant="body1" className={classes.span}>
            Due {due}
          </Typography>
        </ListItemText>
        <ListItemText align="left" className={classes.listItemText}>
          <Typography variant="body1" className={classes.span}>
            {name}
          </Typography>
        </ListItemText>
        <ListItemText className={classes.listItemText}>
          <span className={classes.bold}>{total}</span>
        </ListItemText>
        <div className={classes.listItemText}>
          <Typography variant="body2" align="left" className={classed}>
            {status}
          </Typography>
        </div>
        <KeyboardArrowRightIcon color="primary" />
      </ListItem>
    </Paper>
  );
};

export default InvoiceListItem;
