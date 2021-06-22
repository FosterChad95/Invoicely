import React from "react";
import {
  Grid,
  InputLabel,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useStyles } from "./styles";

const ItemListForm = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          style={{ marginTop: "2rem", fontWeight: 700, opacity: 0.5 }}
          gutterBottom
        >
          Item List
        </Typography>
      </Grid>
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
        />

        <DeleteIcon className={classes.icon} />
      </Grid>
      <Grid item xs={12} justify="center">
        <Button
          fullWidth
          disableElevation
          className={classes.Button}
          variant="contained"
        >
          + Add New Item
        </Button>
      </Grid>
    </>
  );
};

export default ItemListForm;
