import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    width: "55vw",
    borderRadius: "0 20px 20px 0",
    overflowY: "scroll",
  },
  form: {
    marginLeft: "8rem",
    marginTop: "2rem",
    padding: "2rem",
  },
  label: {
    fontWeight: 700,
    fontSize: "12px",
  },
  input: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "15px",
  },
}));
