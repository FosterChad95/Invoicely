import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import InvoiceSummary from "./Components/InvoiceSummary/InvoiceSummary";
import { Paper, Grid } from "@material-ui/core";
import { useStyles } from "./styles";

function App() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <SideBar />
        <InvoiceSummary />
      </Paper>
    </>
  );
}

export default App;
