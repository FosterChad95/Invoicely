import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  grid: {
    marginRight: "18rem",
    marginTop: "5rem",
    marginBottom: "3rem",
  },
  Typography: {
    fontWeight: "700",
  },
  subtitle: {
    opacity: 0.5,
    color: "#888EB0",
  },
  formControl: {
    minWidth: 135,
  },
  select: {
    fontWeight: 700,
    color: theme.palette.primary,
    marginRight: "1rem",
    minWidth: 135,
  },
  button: {
    borderRadius: "24px",
    height: "48px",
    width: "150px",
    color: "#fff",
    marginLeft: "1.5rem",
    marginTop: ".5rem",
    position: "relative",
    fontSize: "12px",
    backgroundColor: "#7c5dfa",
    "&:hover": {
      backgroundColor: "#9277ff",
    },
  },
  span: {
    marginLeft: "1rem",
  },
  iconButton: {
    color: "#fff",
    position: "absolute",
    right: "75%",
    fontSize: "32px",
  },
}));
