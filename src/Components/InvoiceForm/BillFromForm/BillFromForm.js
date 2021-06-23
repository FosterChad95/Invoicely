import React from "react";
import { Grid, TextField, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const BillFromForm = ({ onChange, vals, errors }) => {
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
          label={errors.fromAddress ? errors.fromAddress : "Street Address"}
          InputLabelProps={{ className: classes.input }}
          fullWidth
          value={vals.fromAddress}
          variant="outlined"
          InputProps={{ className: classes.input }}
          name="fromAddress"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="City"
          label={errors.fromCity ? errors.fromCity : "City"}
          InputLabelProps={{ className: classes.input }}
          onChange={(event) => onChange(event)}
          fullWidth
          value={vals.fromCity}
          variant="outlined"
          InputProps={{ className: classes.input }}
          name="fromCity"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="Postal Code"
          label={errors.fromPost ? errors.fromPost : "Postal Code"}
          InputLabelProps={{ className: classes.input }}
          onChange={(event) => onChange(event)}
          fullWidth
          value={vals.fromPost}
          variant="outlined"
          InputProps={{ className: classes.input }}
          name="fromPost"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="Country"
          label={errors.fromCountry ? errors.fromCountry : "Country"}
          InputLabelProps={{ className: classes.input }}
          onChange={(event) => onChange(event)}
          fullWidth
          error={errors.fromCountry}
          value={vals.fromCountry}
          variant="outlined"
          InputProps={{ className: classes.input }}
          name="fromCountry"
        />
      </Grid>
    </>
  );
};

export default BillFromForm;
