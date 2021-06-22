import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
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
  overlay: {
    padding: "2rem 6rem 1.5rem 10rem",
    borderRadius: "20px",
    backgroundColor: "#fff",
    zIndex: 100,
    position: "fixed",
    bottom: -90,
    left: 20,
  },
}));
