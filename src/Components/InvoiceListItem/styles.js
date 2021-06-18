import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  listItem: {
    height: "3.5rem",
    marginBottom: "1rem",
  },
  listItemText: {
    fontSize: "12px",
    margin: "0 2rem",
  },
  list: {
    listStyleType: "none",
  },
  money: {
    fontWeight: 700,
  },
  bold: {
    fontFamily: "inherit",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
  },
  span: {
    color: "#888EB0",
  },
  bulletPaid: {
    position: "relative",
    fontFamily: "Roboto",
    padding: ".5rem 1.5rem",
    borderRadius: "6px",
    backgroundColor: "rgba(51,214,159,.1)",
    margin: "auto",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "40%",
      left: 10,
      width: ".5rem",
      height: ".5rem",
      borderRadius: "50%",
      backgroundColor: "#33D69F",
    },
  },
  bulletPending: {
    position: "relative",
    fontFamily: "Roboto",
    padding: ".5rem 1.5rem",
    borderRadius: "6px",
    backgroundColor: "rgba(255, 143, 0, .1)",
    margin: "auto",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "40%",
      left: 10,
      width: ".5rem",
      height: ".5rem",
      borderRadius: "50%",
      backgroundColor: " #FF8F00",
    },
  },
  bulletDraft: {
    position: "relative",
    fontFamily: "Roboto",
    padding: ".5rem 1.5rem",
    borderRadius: "6px",
    backgroundColor: "rgba(55, 59, 83, .1)",
    margin: "auto",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "40%",
      left: 10,
      width: ".5rem",
      height: ".5rem",
      borderRadius: "50%",
      backgroundColor: "rgba(55, 59, 83, 1)",
    },
  },
}));
