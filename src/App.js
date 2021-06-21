import React, { useState } from "react";
import SideBar from "./Components/SideBar/SideBar";
import InvoiceSummary from "./Components/InvoiceSummary/InvoiceSummary";
import { Paper } from "@material-ui/core";
import { useStyles } from "./styles";
import { Route, Switch } from "react-router-dom";
import AddInvoiceForm from "./Components/AddInvoiceForm/AddInvoiceForm";

function App() {
  const classes = useStyles();
  const [drawer, setDrawer] = useState(false);

  const toggleDrawerHandler = (event) => {
    setDrawer(event);
  };

  return (
    <>
      <Paper className={classes.paper}>
        <SideBar />
        <AddInvoiceForm onOpen={drawer} onClose={toggleDrawerHandler} />
        <Switch>
          <Route exact path="/">
            <InvoiceSummary onOpen={toggleDrawerHandler} />
          </Route>
          <Route exact path="/invoice-detail/:invoiceId"></Route>
        </Switch>
      </Paper>
    </>
  );
}

export default App;
