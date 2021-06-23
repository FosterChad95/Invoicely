import React, { useState, useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Grid, Drawer, Typography, Button } from "@material-ui/core";
import { useStyles } from "./styles";
import { FormContext } from "../../store/FormProvider";
import BillFromForm from "./BillFromForm/BillFromForm";
import BillToForm from "./BillToForm/BillToForm";
import ItemListForm from "./ItemListForm/ItemListForm";
import ButtonsNew from "./ButtonsNew/ButtonsNew";
import validate from "../../helpers/validateForm";
import useForm from "../../hooks/use-form";

const InvoiceForm = ({ onOpen, onClose }) => {
  const classes = useStyles();
  const [numItems, setNumItems] = useState(0);
  const formCtx = useContext(FormContext);
  const { values, errors, handleChange, handleSubmit } = useForm(
    submitForm,
    validate
  );

  const deleteItemHandler = () => {
    if (numItems === 0) return;
    setNumItems((item) => item - 1);
  };

  const FilledItems = () => {
    let appendedItems = [];
    for (let i = 0; i < numItems; i++) {
      appendedItems.push(
        <ItemListForm
          key={i}
          onChange={handleChange}
          vals={values}
          errors={errors}
          onDelete={deleteItemHandler}
        />
      );
    }
    return appendedItems;
  };

  const handleSubmitHandler = (event) => {};

  function submitForm() {
    onClose(false);
  }

  const NoItems = () => (
    <>
      <Typography variant="h5" color="primary">
        {errors.items || ""}
      </Typography>
    </>
  );

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
              <BillFromForm
                onChange={handleChange}
                vals={values}
                errors={errors}
              />
              <BillToForm
                onChange={handleChange}
                vals={values}
                errors={errors}
              />
              <Grid item xs={12}>
                {!numItems === 0 && (
                  <Typography
                    variant="h6"
                    style={{ marginTop: "2rem", fontWeight: 700, opacity: 0.5 }}
                    gutterBottom
                  >
                    Item List
                  </Typography>
                )}
              </Grid>
              {errors.items || numItems === 0 ? <NoItems /> : <FilledItems />}
              <Grid item xs={12} justify="center">
                <Button
                  fullWidth
                  disableElevation
                  className={classes.Button}
                  variant="contained"
                  onClick={() => setNumItems((item) => item + 1)}
                >
                  + Add New Item
                </Button>
              </Grid>
              <div style={{ margin: "auto" }}>
                <ButtonsNew onSubmit={handleSubmitHandler} />
              </div>
            </Grid>
          </form>
        </Scrollbars>
      </Drawer>
    </>
  );
};

export default InvoiceForm;
