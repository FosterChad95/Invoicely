import React, { useState } from "react";
import {
  InputLabel,
  Input,
  FormControl,
  FormHelperText,
  Drawer,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./styles";

const AddInvoiceForm = ({ onOpen, onClose }) => {
  const [name, setName] = useState(null);

  const handleChange = (event) => {
    setName(event);
  };

  const classes = useStyles();
  return (
    <>
      <Drawer
        anchor="left"
        classes={{ paper: classes.paper }}
        open={onOpen}
        onClose={() => onClose(false)}
      >
        <form className={classes.form} noValidate autoComplete="off">
          <Typography variant="h5" gutterBottom>
            New Invoice
          </Typography>
          <Typography className={classes.label} variant="body2" color="primary">
            Bill To
          </Typography>
          <FormControl>
            <InputLabel htmlFor="">Name</InputLabel>
            <Input id="component-simple" value={name} onChange={handleChange} />
          </FormControl>
        </form>
      </Drawer>
    </>
  );
};

export default AddInvoiceForm;
