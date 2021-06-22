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
import { FormContext } from "../../store/FormProvider";
import BillFromForm from "./BillFromForm/BillFromForm";
import BillToForm from "./BillToForm/BillToForm";
import ItemListForm from "./ItemListForm/ItemListForm";
import ButtonsNew from "./ButtonsNew/ButtonsNew";

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
        <Scrollbars>
          <form className={classes.form} noValidate autoComplete="off">
            <Typography
              variant="h5"
              style={{ marginBottom: "2rem", fontWeight: 700 }}
            >
              New Invoice
            </Typography>
            <Grid container spacing={3} style={{ position: "relative" }}>
              <BillFromForm />
              <BillToForm />
              <ItemListForm />
              <div style={{ margin: "auto" }}>
                <ButtonsNew />
              </div>
            </Grid>
          </form>
        </Scrollbars>
      </Drawer>
    </>
  );
};

export default InvoiceForm;
