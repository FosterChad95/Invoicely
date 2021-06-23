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

const BillToForm = ({ onChange, vals, errors }) => {
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
          label={errors.toName ? errors.toName : "Client Name"}
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          value={vals.toName}
          error={errors.toName}
          onChange={(event) => onChange(event)}
          InputProps={{ className: classes.input }}
          name="toName"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="Client Email"
          label={errors.toEmail ? errors.toEmail : "Client Email"}
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          value={vals.toEmail}
          onChange={(event) => onChange(event)}
          InputProps={{ className: classes.input }}
          name="toEmail"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="Client Street Address"
          label={errors.toAddress ? errors.toAddress : "Client Address"}
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          onChange={(event) => onChange(event)}
          InputProps={{ className: classes.input }}
          name="toAddress"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="Client City"
          label={errors.toCity ? errors.toCity : "Client City"}
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          value={vals.toCity}
          onChange={(event) => onChange(event)}
          InputProps={{ className: classes.input }}
          name="toCity"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="Client Postal Code"
          label={errors.toPost ? errors.toPost : "Client Postal Code"}
          InputLabelProps={{ className: classes.input }}
          fullWidth
          value={vals.toPost}
          variant="outlined"
          onChange={(event) => onChange(event)}
          InputProps={{ className: classes.input }}
          name="toPost"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <TextField
          id="Client Country"
          label={errors.toCountry ? errors.toCountry : "Client Country"}
          InputLabelProps={{ className: classes.input }}
          fullWidth
          value={vals.toCountry}
          variant="outlined"
          onChange={(event) => onChange(event)}
          InputProps={{ className: classes.input }}
          name="toCountry"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          id="Invoice Date"
          type="date"
          label={errors.invoiceDate ? errors.invoiceDate : ""}
          InputLabelProps={{ className: classes.picker }}
          fullWidth
          value={vals.invoiceDate}
          variant="outlined"
          onChange={(event) => onChange(event)}
          InputProps={{ className: classes.input }}
          name="invoiceDate"
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
            value={vals.paymentTerms || 1}
            variant="outlined"
            id="Payment Terms"
            labelId="Payment Terms"
            size="small"
            name="paymentTerms"
            onChange={(event) => onChange(event)}
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
          label={
            errors.projectDescription
              ? errors.projectDescription
              : "Project Description"
          }
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          value={vals.projectDescription}
          InputProps={{ className: classes.input }}
          name="projectDescription"
        />
      </Grid>
    </>
  );
};

export default BillToForm;
