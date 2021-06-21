import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

const drawerWidth = 103;

export const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1400,
  },
  logo: {
    background: "#7c5dfa",
    padding: "2rem 0",
    borderRadius: "0 20px 20px 0",
  },
  icon: {
    marginBottom: "1rem",
  },
  divider: {
    backgroundColor: "#000",
    marginBottom: "1rem",
  },
  grid: {
    marginBottom: "2rem",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRadius: "0 20px 20px 0",
    backgroundColor: "#1e2139",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
