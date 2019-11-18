import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import { NavLink } from "react-router-dom";
import { logout } from "../../../redux/action/authUserAction";
import { ValidatorForm } from "react-material-ui-form-validator";
// import Input from "../../../Factory/Input";
import { submitSearch } from "../../../redux/action/searchAction";

const useStyles = makeStyles(theme => ({
  navLinkStyle: {
    textDecoration: "none",
    color: "white",
    paddingRight: "10px",
    alignSelf: "center"
  },
  activeStyles: {
    color: "white",
    textDecoration: "underline white"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  }
}));

export default function PrimarySearchAppBar(props) {
  const [searchInput, setSearchInput] = useState({
    searchInput: ""
  });

  let history = useHistory();

  // useSelector(state => console.log(state.search));

  const classes = useStyles();
  const activeStyles = { color: "white", textDecoration: "underline white" };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isAuth = useSelector(state => state.authUser);
  const dispatch = useDispatch();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    dispatch(logout());
    handleMenuClose();
  };

  const handleSubmit = () => {
    dispatch(submitSearch(searchInput));
    setSearchInput({ searchInput: "" });
    history.push("/search-result");
  };

  const handleInput = event => {
    event.preventDefault();
    setSearchInput({
      searchInput: event.target.value
    });
  };

  const menuId = "primary-search-account-menu";
  const renderSignin = () => {
    if (isAuth.isAuthenticated) {
      return (
        <>
          <div className={classes.sectionDesktop}>
            <NavLink
              to="/albums"
              className={classes.navLinkStyle}
              activeStyle={activeStyles}
            >
              Albums
            </NavLink>
            <NavLink
              to="/upload"
              className={classes.navLinkStyle}
              activeStyle={activeStyles}
            >
              Upload
            </NavLink>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </>
      );
    } else {
      return (
        <NavLink
          exact
          to="/sign-in"
          className={classes.navLinkStyle}
          activeStyle={activeStyles}
        >
          <Typography>Sign In</Typography>
        </NavLink>
      );
    }
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>
        <NavLink to="user-profile" onClick={handleMenuClose}>
          Profile
        </NavLink>
      </MenuItem>
      {/* <MenuItem>
        <NavLink to="albums" onClick={handleMenuClose}>
          Albums
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to="upload" onClick={handleMenuClose}>
          Upload
        </NavLink>
      </MenuItem> */}
      <MenuItem>
        <NavLink to="/" onClick={handleLogout}>
          Logout
        </NavLink>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {/* <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem>
        <NavLink
          to="/albums"
          // className={classes.navLinkStyle}
          // activeStyle={activeStyles}
        >
          Albums
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink
          to="/upload"
          // className={classes.navLinkStyle}
          // activeStyle={activeStyles}
        >
          Upload
        </NavLink>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <NavLink
            exact
            to="/"
            className={classes.navLinkStyle}
            activeStyle={activeStyles}
          >
            <Typography className={classes.title} variant="h6" noWrap>
              PicHub
            </Typography>
          </NavLink>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <ValidatorForm className="Form" onSubmit={handleSubmit}>
              <InputBase
                value={searchInput.searchInput}
                onChange={handleInput}
                placeholder="Search User or Album ..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </ValidatorForm>
          </div>
          <div className={classes.grow} />
          {renderSignin()}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
