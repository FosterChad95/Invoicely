import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  label: {
    fontWeight: 700,
    fontSize: "12px",
  },
  input: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "15px",
  },
  selectLabel: {
    fontSize: "12px",
    fontWeight: 700,
    paddingLeft: ".5rem",
  },
  select: {
    fontSize: "12px",
    fontWeight: 700,
  },
  picker: {
    fontSize: "12px",
    fontWeight: 700,
    opacity: 0.5,
  },
  menu: {
    borderBottom: "1px solid rgba(0,0,0,.1)",
  },
  inputTotal: {
    position: "absolute",
    top: "-18px",
    left: "45%",
    transform: "translate(-50%,50%)",
    fontSize: "12px",
    fontWeight: 500,
    color: "#7e88c3",
  },
  container: {
    position: "relative",
  },
}));
