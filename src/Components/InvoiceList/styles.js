import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  listItem: {
    height: "3.5rem",
  },
  listItemText: {
    marginRight: "3rem",
    fontSize: "12px",
  },
  list: {
    listStyleType: "none",
  },
  money: {
    fontWeight: 700,
    marginRight: "2rem",
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
}));
