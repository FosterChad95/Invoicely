import React, { useState, useEffect, useContext } from "react";
import {
  Grid,
  InputLabel,
  TextField,
  IconButton,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./styles";
import totalCalc from "../../../helpers/totalCalc";
import { FormContext } from "../../../store/FormProvider";

const ItemListForm = ({ id, name, qty, price, total, first }) => {
  const classes = useStyles();
  const formCtx = useContext(FormContext);

  const [itemList, setItemList] = useState({
    itemsName: "",
    itemsQty: "",
    itemsPrice: "",
    itemsTotal: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (itemList.itemsQty.length === 0 || itemList.itemsPrice.length === 0)
        return;
      const totals = totalCalc(+itemList.itemsPrice, +itemList.itemsQty);
      setItemList((prevState) => ({ ...prevState, itemsTotal: totals }));
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, [itemList.itemsPrice, itemList.itemsQty]);

  const onClickHandler = () => {
    formCtx.addItem(itemList);
    setItemList({
      itemsName: "",
      itemsQty: "",
      itemsPrice: "",
      itemsTotal: "",
    });
  };

  const onChangeHandler = (event) => {
    event.persist();
    setItemList((prevItemVal) => ({
      ...prevItemVal,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <Grid className={classes.container} item xs={12} sm={4}>
        <InputLabel htmlFor="Item Name" className={classes.inputTotal}>
          Item Name
        </InputLabel>
        <TextField
          id="Item Name"
          InputLabelProps={{ className: classes.input }}
          onChange={onChangeHandler}
          fullWidth
          value={name || itemList.itemsName}
          variant="outlined"
          InputProps={{ className: classes.input }}
          name="itemsName"
        />
      </Grid>
      <Grid className={classes.container} item xs={12} sm={2}>
        <InputLabel htmlFor="Qty" className={classes.inputTotal}>
          Qty.
        </InputLabel>
        <TextField
          id="Quantity"
          onChange={onChangeHandler}
          InputLabelProps={{ className: classes.input }}
          fullWidth
          value={qty || itemList.itemsQty}
          variant="outlined"
          InputProps={{ className: classes.input }}
          name="itemsQty"
        />
      </Grid>
      <Grid className={classes.container} item xs={12} sm={3}>
        <InputLabel htmlFor="Price" className={classes.inputTotal}>
          Price
        </InputLabel>
        <TextField
          id="Price"
          InputLabelProps={{ className: classes.input }}
          onChange={onChangeHandler}
          fullWidth
          value={price || itemList.itemsPrice}
          variant="outlined"
          InputProps={{ className: classes.input }}
          name="itemsPrice"
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
          value={total || itemList.itemsTotal}
          variant="outlined"
          InputProps={{ className: classes.input }}
          name="itemsTotal"
        />
        {!first && (
          <IconButton
            className={classes.icon}
            onClick={() => formCtx.deleteItem(id)}
          >
            <DeleteIcon />
          </IconButton>
        )}
      </Grid>
      <Grid item xs={12} justify="center">
        {!first ? (
          ""
        ) : (
          <Button
            fullWidth
            disableElevation
            className={classes.Button}
            variant="contained"
            onClick={onClickHandler}
          >
            + Add New Item
          </Button>
        )}
      </Grid>
    </>
  );
};

export default ItemListForm;
