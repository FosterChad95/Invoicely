import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  input: {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "15px",
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
  icon: {
    position: "absolute",
    top: "30%",
    right: -30,
    color: "rgba(0,0,0,.3)",

    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  },
  Button: {
    backgroundColor: "#F9FAFE",
    color: "#7e88c3",
    borderRadius: "20px",
    height: "3rem",
    marginBottom: "5rem",

    "&:hover": {
      backgroundColor: "#dfe3fa",
    },
  },
}));
