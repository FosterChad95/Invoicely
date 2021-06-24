import React, { useContext } from "react";
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
  const formCtx = useContext(FormContext);
  const { values, errors, handleChange, handleSubmit } = useForm(
    submitForm,
    validate
  );

  const handleSubmitHandler = () => {};

  function submitForm() {
    onClose(false);
  }

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
                <Typography
                  variant="h6"
                  style={{ marginTop: "2rem", fontWeight: 700, opacity: 0.5 }}
                  gutterBottom
                >
                  Item List
                </Typography>
              </Grid>
              {formCtx.items.map((item, ind) => (
                <ItemListForm
                  key={ind}
                  id={ind + 1}
                  name={item.itemsName}
                  qty={item.itemsQty}
                  price={item.itemsPrice}
                  total={item.itemsTotal}
                  first={false}
                />
              ))}
              <ItemListForm first={true} />
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
