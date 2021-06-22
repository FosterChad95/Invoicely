import React, { useState, useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import {
  TextField,
  Grid,
  Drawer,
  Typography,
  Select,
  InputLabel,
  FormControl,
  MenuItem,
  Button,
} from "@material-ui/core";
import { useStyles } from "./styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { FormContext } from "../../store/FormProvider";

const InvoiceForm = ({ onOpen, onClose }) => {
  const formCtx = useContext(FormContext);
  const classes = useStyles();

  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.paper }}
        open={onOpen}
        onClose={() => onClose(false)}
      >
        <Scrollbars autoHeightMax={100}>
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
                  <InputLabel
                    className={classes.selectLabel}
                    id="Payment Terms"
                  >
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
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  style={{ marginTop: "2rem", fontWeight: 700, opacity: 0.5 }}
                  gutterBottom
                >
                  Item List
                </Typography>
              </Grid>
              <Grid className={classes.container} item xs={12} sm={4}>
                <InputLabel htmlFor="Item Name" className={classes.inputTotal}>
                  Item Name
                </InputLabel>
                <TextField
                  id="Item Name"
                  InputLabelProps={{ className: classes.input }}
                  fullWidth
                  variant="outlined"
                  InputProps={{ className: classes.input }}
                />
              </Grid>
              <Grid className={classes.container} item xs={12} sm={2}>
                <InputLabel htmlFor="Qty" className={classes.inputTotal}>
                  Qty.
                </InputLabel>
                <TextField
                  id="Quantity"
                  InputLabelProps={{ className: classes.input }}
                  fullWidth
                  variant="outlined"
                  InputProps={{ className: classes.input }}
                />
              </Grid>
              <Grid className={classes.container} item xs={12} sm={3}>
                <InputLabel htmlFor="Price" className={classes.inputTotal}>
                  Price
                </InputLabel>
                <TextField
                  id="Price"
                  InputLabelProps={{ className: classes.input }}
                  fullWidth
                  variant="outlined"
                  InputProps={{ className: classes.input }}
                />
              </Grid>
              <Grid className={classes.container} item xs={12} sm={2}>
                <InputLabel htmlFor="Total" className={classes.inputTotal}>
                  Total
                </InputLabel>
                <TextField
                  id="Total"
                  disabled
                  InputLabelProps={{ className: classes.input }}
                  fullWidth
                  variant="outlined"
                  value={"140$"}
                  InputProps={{ className: classes.input }}
                />

                <DeleteIcon className={classes.icon} />
              </Grid>
              <Grid item xs={12} justify="center">
                <Button
                  fullWidth
                  disableElevation
                  className={classes.Button}
                  variant="contained"
                >
                  + Add New Item
                </Button>
              </Grid>
              <Grid
                justify="center"
                container
                className={classes.bottomButtons}
              >
                <div>
                  <Button
                    style={{ marginRight: "7rem", fontSize: "12px" }}
                    className={classes.Button}
                  >
                    Discard
                  </Button>
                  <Button
                    style={{
                      backgroundColor: "#373b53",
                      color: "rgba(255,255,255,.5)",
                      fontSize: "12px",
                    }}
                    className={classes.Button}
                  >
                    Save as Draft
                  </Button>
                  <Button
                    style={{
                      marginLeft: "2rem",
                      backgroundColor: "#7c5dfa",
                      color: "white",
                      fontSize: "12px",
                    }}
                    className={classes.Button}
                  >
                    Save & Send
                  </Button>
                </div>
              </Grid>
            </Grid>
          </form>
        </Scrollbars>
      </Drawer>
    </>
  );
};

export default InvoiceForm;
