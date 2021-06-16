import { makeStyles } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

const drawerWidth = 103;

export const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: 0,
    backgroundColor: "#1e2139",
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
