import React, { useState } from "react";
import {
  Grid,
  Typography,
  Select,
  Button,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { useStyles } from "./styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import InvoiceList from "../InvoiceList/InvoiceList";

const InvoiceSummary = () => {
  const classes = useStyles();
  const [filteredBy, setFilteredBy] = useState(null);

  const handleSelect = (event) => {
    setFilteredBy(event.target.value);
  };

  return (
    <>
      <Grid container spacing={9}>
        <Grid item xs={false} md={2} xl={4} />
        <Grid item className={classes.grid}>
          <Typography
            variant="h4"
            component="h1"
            className={classes.Typography}
          >
            Invoices
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            There are 7 total invoices
          </Typography>
        </Grid>
        <Grid className={classes.grid} item alignContent="center">
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.select} htmlFor="filter-invoice">
              Filter by status
            </InputLabel>
            <Select
              native
              labelId="filter-invoice"
              id="filter-select"
              className={classes.select}
              onChange={handleSelect}
            >
              <option aria-label="None" value="" />
              <option value="All">All</option>
              <option value="Draft">Draft</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </Select>
          </FormControl>
          <Button
            className={classes.button}
            color={"primary"}
            variant="contained"
          >
            <AddCircleIcon className={classes.iconButton} />
            <span className={classes.span}>New Invoice</span>
          </Button>
        </Grid>
        <Grid item xs={3} />
        <InvoiceList onFiltered={filteredBy} />
        <Grid item xs={false} md={2} />
      </Grid>
    </>
  );
};

export default InvoiceSummary;
