import React, { useEffect } from "react";
import { Grid, List, ListItem, Paper } from "@material-ui/core";
import { ListItemText, Typography, CircularProgress } from "@material-ui/core";
import { useStyles } from "./styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import useRequest from "../../hooks/use-request";
import { getInvoices } from "../../lib/api";

const InvoiceList = () => {
  const classes = useStyles();
  const { requestSent, error, loading, data } = useRequest(getInvoices);

  useEffect(() => {
    requestSent(getInvoices);
  }, [requestSent]);

  if (error) {
    return (
      <Grid container justify="center" xs={7}>
        <Typography variant="h2">{error}</Typography>
      </Grid>
    );
  }

  return (
    <Grid container justify="center" xs={9}>
      {loading ? (
        <CircularProgress />
      ) : (
        <List>
          <Paper>
            <ListItem className={classes.listItem} button>
              <ListItemText className={classes.listItemText}>
                <span className={classes.span}>#</span>RT3080
              </ListItemText>
              <ListItemText className={classes.listItemText}>
                <span className={classes.span}>Due 19 Aug 2021</span>
              </ListItemText>
              <ListItemText className={classes.listItemText}>
                <span className={classes.span}>Jensen Huang</span>
              </ListItemText>
              <ListItemText className={classes.listItemText}>
                <span className={classes.bold}>$1,800.90</span>
              </ListItemText>
              <div className={classes.listItemText}>
                <span className={classes.bulletPaid}>Paid</span>
              </div>
              <KeyboardArrowRightIcon color="primary" />
            </ListItem>
          </Paper>
        </List>
      )}
      <Grid item xs={2} />
    </Grid>
  );
};

export default InvoiceList;
