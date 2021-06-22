import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const BillFromForm = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Typography className={classes.label} variant="body2" color="primary">
          Bill From
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="street-address"
          label="Street Address"
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="City"
          label="City"
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="Postal Code"
          label="Postal Code"
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="Country"
          label="Country"
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
    </>
  );
};

export default BillFromForm;
