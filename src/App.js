import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import InvoiceSummary from "./Components/InvoiceSummary/InvoiceSummary";
import { Paper } from "@material-ui/core";
import { useStyles } from "./styles";
import { Route, Switch } from "react-router-dom";

function App() {
  const classes = useStyles();
  return (
    <>
      <Paper className={classes.paper}>
        <SideBar />
        <Switch>
          <Route exact path="/">
            <InvoiceSummary />
          </Route>
          <Route exact path="/invoice-detail/:invoiceId"></Route>
        </Switch>
      </Paper>
    </>
  );
}

export default App;
