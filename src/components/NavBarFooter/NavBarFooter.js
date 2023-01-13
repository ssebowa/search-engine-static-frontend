import React from "react";
import PropTypes from "prop-types";

import { AppBar, Toolbar, withStyles, IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const styles = {
    appBar: {
        top: "auto",
        bottom: 0,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: -12,
    },
    actionButtons: {
        marginLeft: "auto",
    },
};

const NavBarUpdated = () => {
    return (
        <React.Fragment>
            <AppBar
                position="fixed"
                color="secondary"
                className={classes.appBar}
            >
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <div className={classes.actionButtons}>
                        <IconButton color="inherit" aria-label="Search">
                            <SearchIcon />
                        </IconButton>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                        >
                            <MoreVertIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar key="spacer" />
        </React.Fragment>
    );
};

export default NavBarUpdated;
