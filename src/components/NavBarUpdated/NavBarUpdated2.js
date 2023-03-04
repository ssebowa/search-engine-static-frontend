import { AppBar, Box, Button, Grid, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import StoreIcon from "@mui/icons-material/Store";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavbarDrawer from "./NavbarDrawer";
import Logo from "../../assets/images/download.png";

const NavBarUpdated = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchBarOpen, setSearchBarOpen] = React.useState(false);

    const handleSearchBarOpen = () => {
        setSearchBarOpen(true);
    };
    const handleSearchBarClose = () => {
        setSearchBarOpen(false);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const location = useLocation();

    const [value, setValue] = useState();

    const linksArray = [
        { id: 0, navName: "Home", navLink: "/" },
        { id: 1, navName: "Contact Us", navLink: "/contact" },
        { id: 2, navName: "Gallery", navLink: "/gallery" },
        { id: 3, navName: "Projects", navLink: "/projects" },
        { id: 4, navName: "Team", navLink: "/team" },
        // { id: 5, navName: "About", navLink: "/about" },
    ];

    const linksArrayForDrawer = [
        { id: 0, icon: "fa-solid fa-house", navName: "Home", navLink: "/" },
        { id: 1, icon: "fa-solid fa-phone", navName: "Contact Us", navLink: "/contact" },
        { id: 2, icon: "fa-solid fa-image", navName: "Gallery", navLink: "/gallery" },
        { id: 3, icon: "fa-solid fa-history", navName: "Projects", navLink: "/projects" },
        { id: 4, icon: "fa-solid fa-people-group", navName: "Team", navLink: "/team" },
        { id: 5, icon: "fa-solid fa-comment", navName: "Faq", navLink: "/faq" },
        { id: 6, icon: "fa-solid fa-circle-info", navName: "About", navLink: "/about" },
    ];

    const limitToMoreNavs = 3;
    const normalNavs = linksArray;
    const moreNavs = linksArray.slice(limitToMoreNavs, linksArray.length);

    return (
        <>
            <AppBar
                style={{
                    background: "#011627",
                }}
            >
                <Toolbar
                    sx={{
                        height: "76px",
                        width: "98vw",
                    }}
                >
                    {isMatch ? (
                        <>
                            <Grid sx={{ placeItems: "center" }} container>
                                <Grid item xs={2}>
                                    <NavbarDrawer className="bg-white text-white" style={{ color: "white" }} linksArray={linksArrayForDrawer}></NavbarDrawer>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={5} sx={{ p: 4, overflow: "hidden" }}></Grid>
                                <Grid item x={2} />
                                <Grid className="ps-5" item xs={2} sx={{ ml: "auto" }}>
                                    <Link to="/">
                                        <img style={{ width: "40px" }} src="https://i.ibb.co/mFC48c8/Capture-removebg-preview.png" alt="" />
                                    </Link>
                                </Grid>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid sx={{ placeItems: "center" }} container>
                                <Grid item xs={1}>
                                    <a className="navbar-brand" href="/">
                                        <img src={Logo} alt="" className="nav-logo" />
                                    </a>
                                </Grid>

                                <Grid
                                    item
                                    xs={7}
                                    sx={{
                                        display: "flex",
                                        marginLeft: "auto",
                                    }}
                                >
                                    <Tabs
                                        indicatorColor="secondary"
                                        color="white"
                                        textColor="inherit"
                                        value={value}
                                        onChange={(e, val) => setValue(val)}
                                        sx={{
                                            color: "white",
                                        }}
                                    >
                                        {normalNavs.map((linkInfo) => (
                                            <Tab
                                                sx={{
                                                    fontWeight: "bold",
                                                    fontSize: 14,
                                                    ":hover": {
                                                        color: "#2e7d32",
                                                        opacity: 1,
                                                    },
                                                }}
                                                key={linkInfo.id}
                                                label={linkInfo.navName}
                                                component={Link}
                                                to={linkInfo.navLink}
                                            ></Tab>
                                        ))}
                                    </Tabs>

                                    <Menu id="tab-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                        {moreNavs.map((linksInfo) => (
                                            <MenuItem sx={{ color: "white" }} key={linksInfo.key} component={Link} to={linksInfo.navLink} onClick={handleClose}>
                                                {linksInfo.navName}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Grid>

                                <Grid item xs={4} className="d-flex justify-content-end">
                                    <a href="https://blog.ssebowa.org/" target="_blank" rel="noopener noreferrer">
                                        <img style={{ width: "40px" }} src="https://i.ibb.co/mFC48c8/Capture-removebg-preview.png" alt="" />
                                    </a>
                                </Grid>
                            </Grid>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};

export default NavBarUpdated;
