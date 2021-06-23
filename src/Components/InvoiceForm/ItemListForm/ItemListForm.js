import React, { useState, useEffect } from "react";
import { Grid, InputLabel, TextField, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./styles";
import totalCalc from "../../../helpers/totalCalc";

const ItemListForm = ({ id, onDelete }) => {
  const classes = useStyles();

  const [itemList, setItemList] = useState({
    id: id,
    itemsName: "",
    itemsQty: "",
    itemsPrice: "",
    total: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (itemList.itemsQty.length === 0 || itemList.itemsPrice.length === 0)
        return;
      const totals = totalCalc(+itemList.itemsPrice, +itemList.itemsQty);
      console.log(totals);
      setItemList((prevState) => ({ ...prevState, total: totals }));
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  }, [itemList.itemsPrice, itemList.itemsQty]);

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
          value={itemList.total}
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          InputProps={{ className: classes.input }}
          name="itemsTotal"
        />
        <IconButton className={classes.icon} onClick={(id) => onDelete(id)}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </>
  );
};

export default ItemListForm;
