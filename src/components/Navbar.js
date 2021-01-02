import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Link, useHistory } from "react-router-dom";
import { UserCheck } from "./utils";
import { API_LOG_OUT } from "../API_endpoints";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    UserCheck().then((status) => {
      setLoginStatus(status);
    });
  }, []);

  const handleMenu = async (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = async () => {
    await axios.get(API_LOG_OUT, { withCredentials: true });
  };

  const handleProduct = () => {
    history.push("/shop");
  };

  const handleLogin = () => {};

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Project Thread
          </Typography>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleProduct}
            color="inherit"
          >
            <LocalMallIcon />
          </IconButton>
          {loginStatus ? (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link to="Profile"> Profile </Link>
                </MenuItem>
                <MenuItem onClick={logOut}>
                  <Link to="/"> LogOut </Link>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Link to="/login">
              <AccountCircle />
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
