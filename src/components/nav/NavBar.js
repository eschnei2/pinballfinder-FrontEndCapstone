import React from "react"
import { Link } from "react-router-dom"
import './NavBar.css'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import MenuItem from '@material-ui/core/MenuItem';
import { List, ListitemIcon, ListItemText, Grid } from "@material-ui/core";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    paper: {
      marginRight: theme.spacing(2),
    },
  }));


export const NavBar = () => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
        };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
        }
    }

    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
        }

        prevOpen.current = open;
        }, [open]);


    

    return (
        <>
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu"
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}>
                    <MenuIcon />
                </IconButton>
 
            <Typography variant="h6" color="inherit" alignItem ="center">
                        Menu
            </Typography>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}><Link className="nav-link" to="/">
                        Home
                    </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="nav-link" to="/arcades">
                        Arcades
                    </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="nav-link" to="/machines">
                        Pinball Machines
                    </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link className="nav-link" to="/favorites">
                        Favorites
                    </Link></MenuItem>
                    <MenuItem onClick={handleClose}><Link
                        className="nav-link"
                        to="/login"
                        onClick={() =>sessionStorage.removeItem("pinball_user")}>
                        Logout
                    </Link></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
                    
    </Toolbar>
    </AppBar>
        </>
    )
}
