import React, { useState } from "react";
import { TextField, Grid, Drawer, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

const InvoiceForm = ({ onOpen, onClose }) => {
  const [name, setName] = useState(null);

  const handleChange = (event) => {
    setName(event);
  };

  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.paper }}
        open={onOpen}
        onClose={() => onClose(false)}
      >
        <form className={classes.form} noValidate autoComplete="off">
          <Typography
            variant="h5"
            style={{ marginBottom: "2rem", fontWeight: 700 }}
          >
            New Invoice
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography
                className={classes.label}
                variant="body2"
                color="primary"
              >
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
                size="small"
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
                size="small"
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
                size="small"
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
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                className={classes.label}
                variant="body2"
                color="primary"
              >
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
                size="small"
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
                size="small"
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
                size="small"
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
                size="small"
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
                size="small"
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
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="Invoice Date"
                label="Invoice Date"
                InputLabelProps={{ className: classes.input }}
                fullWidth
                variant="outlined"
                InputProps={{ className: classes.input }}
                size="small"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="Client Country"
                label="Country"
                InputLabelProps={{ className: classes.input }}
                fullWidth
                variant="outlined"
                InputProps={{ className: classes.input }}
                size="small"
              />
            </Grid>
          </Grid>
        </form>
      </Drawer>
    </>
  );
};

export default InvoiceForm;
