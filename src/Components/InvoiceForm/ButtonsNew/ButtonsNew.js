import React from "react";
import { Grid, Button } from "@material-ui/core";
import { useStyles } from "./styles";

const ButtonsNew = ({ onSubmit }) => {
  const classes = useStyles();

  return (
    <>
      <Grid justify="center" container>
        <div className={classes.overlay}>
          <Button
            style={{ marginRight: "7rem", fontSize: "12px" }}
            className={classes.Button}
            onClick={() => onSubmit("DISCARD")}
          >
            Discard
          </Button>
          <Button
            style={{
              backgroundColor: "#373b53",
              color: "rgba(255,255,255,.5)",
              fontSize: "12px",
            }}
            className={classes.Button}
            onClick={() => onSubmit("SAVE")}
          >
            Save as Draft
          </Button>
          <Button
            style={{
              marginLeft: "2rem",
              backgroundColor: "#7c5dfa",
              color: "white",
              fontSize: "12px",
            }}
            className={classes.Button}
            onClick={() => onSubmit("SEND")}
          >
            Save & Send
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default ButtonsNew;
