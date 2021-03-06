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
import { ReactComponent as ReactLogo } from "../../assets/illustration-empty.svg";

const InvoiceSummary = ({ onOpen }) => {
  const classes = useStyles();
  const [filteredBy, setFilteredBy] = useState("All");
  const [number, setNumber] = useState(null);

  const handleSelect = (event) => {
    setFilteredBy(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event);
  };

  return (
    <>
      <Grid container spacing={9}>
        <Grid item xs={false} md={2} />
        <Grid item className={classes.grid}>
          <Typography
            variant="h4"
            component="h1"
            className={classes.Typography}
          >
            Invoices
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            There are {number} total invoices
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
              {/* <option aria-label="None" value="" /> */}
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
            onClick={() => onOpen(true)}
          >
            <AddCircleIcon className={classes.iconButton} />
            <span className={classes.span}>New Invoice</span>
          </Button>
        </Grid>
        <Grid item xs={3} />
        <Grid container justify="center">
          {number === 0 ? (
            <div>
              <ReactLogo />
              <Typography variant="h5">There are no invoices</Typography>
            </div>
          ) : (
            <InvoiceList
              onFiltered={filteredBy}
              onNumberChange={handleNumberChange}
            />
          )}
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>
    </>
  );
};

export default InvoiceSummary;
