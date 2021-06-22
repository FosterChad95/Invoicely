import React from "react";
import {
  Grid,
  Typography,
  TextField,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@material-ui/core";
import { useStyles } from "./styles";

const BillToForm = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Typography className={classes.label} variant="body2" color="primary">
          Bill To
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="Client Name"
          label="Client Name"
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="Client Email"
          label="Client Email"
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="Client Street Address"
          label="Street Address"
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="Client City"
          label="City"
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="Client Postal Code"
          label="Postal Code"
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="Client Country"
          label="Country"
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="Invoice Date"
          type="date"
          InputLabelProps={{ className: classes.picker }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel className={classes.selectLabel} id="Payment Terms">
            Payment Terms
          </InputLabel>
          <Select
            className={classes.select}
            fullWidth
            variant="outlined"
            id="Payment Terms"
            labelId="Payment Terms"
            size="small"
          >
            <MenuItem className={classes.menu} value={1}>
              Net 1 Day
            </MenuItem>
            <MenuItem className={classes.menu} value={7}>
              Net 7 Days
            </MenuItem>
            <MenuItem className={classes.menu} value={14}>
              Net 14 Days
            </MenuItem>
            <MenuItem className={classes.menu} value={30}>
              Net 30 Days
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="Project Description"
          label="Project Description"
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
        />
      </Grid>
    </>
  );
};

export default BillToForm;
