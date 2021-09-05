import {
  AppBar,
  Box,
  makeStyles,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import plus from "../../assets/plus.png";
import HeaderButton from "./HeaderButton";
import SearchBar from "./SearchBar";
const useStyles = makeStyles({
  header: {
    background: "#2874f0",
    height: 55,
  },
  logo: {
    width: 75,
  },
  plus: {
    width: 10,
    marginLeft: 4,
    height: 10,
  },
  container: {
    display: "flex",
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    textDecoration: "none",
    color: "#fff",
  },
  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
  },
});
const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);
function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <Link to="/" className={classes.component}>
          <img src={logo} alt="" className={classes.logo} />
          <Box className={classes.container}>
            <Typography className={classes.subHeading}>
              Explore{" "}
              <Box component="span" style={{ color: "#FFe500" }}>
                Plus
              </Box>{" "}
            </Typography>
            <img src={plus} alt="" className={classes.plus} />
          </Box>
        </Link>
        <SearchBar />
        <HeaderButton />
      </ToolBar>
    </AppBar>
  );
}

export default Header;
