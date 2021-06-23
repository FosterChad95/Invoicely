import React from "react";
import { Grid, InputLabel, TextField, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./styles";

const ItemListForm = ({ onChange, vals, errors, onDelete }) => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.container} item xs={12} sm={4}>
        <InputLabel htmlFor="Item Name" className={classes.inputTotal}>
          Item Name
        </InputLabel>
        <TextField
          id="Item Name"
          InputLabelProps={{ className: classes.input }}
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
          InputLabelProps={{ className: classes.input }}
          fullWidth
          variant="outlined"
          value={"140$"}
          InputProps={{ className: classes.input }}
          name="itemsTotal"
        />
        <IconButton className={classes.icon} onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </>
  );
};

export default ItemListForm;
