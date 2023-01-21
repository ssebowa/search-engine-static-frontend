import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppBar, Button, IconButton ,Grid, Tab, Tabs, Menu, MenuItem, Toolbar, Typography, Box, Item, useTheme, useMediaQuery, Drawer } from "@mui/material";
import { flexbox } from "@mui/system";

import { makeStyles } from "@material-ui/styles";


import SouthEastIcon from "@mui/icons-material/SouthEast";
import SearchIcon from '@mui/icons-material/Search';
import Modal from "@mui/material/Modal";

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../logo";
import SearchBarForNavbar from "../SearchBarforNavbar/SearchBarForNavbar";
import SearchBarHome from "../searchbarhome/SearchBarHome";
import NavbarDrawer from "./NavbarDrawer";


const style = {
    position: "absolute",
    top: "20%",
    left: "85%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "transparent",
    // border: "2px solid #000",
    // boxShadow: 24,
    // p: 4,
};


const NavBarUpdated = () => {


     const [anchorEl, setAnchorEl] = useState(null);
     const [searchBarOpen, setSearchBarOpen] = React.useState(false);

        const handleSearchBarOpen = () =>{ setSearchBarOpen(true)};
        const handleSearchBarClose = () =>{ setSearchBarOpen(false)};

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
        { id: 1, navName: "About", navLink: "/about" },
        { id: 2, navName: "Gallery", navLink: "/gallery" },
        { id: 3, navName: "Projects", navLink: "/projects" },
        { id: 4, navName: "Contact", navLink: "/contact" },
        { id: 5, navName: "Team", navLink: "/team" },
    ];

     const linksArrayForDrawer = [
         { id: 0, icon: "fa-solid fa-house", navName: "Home", navLink: "/" },
         { id: 1, icon: "fa-solid fa-circle-info", navName: "About", navLink: "/about" },
         { id: 2, icon: "fa-solid fa-image", navName: "Gallery", navLink: "/gallery" },
         { id: 3, icon: "fa-solid fa-history", navName: "Projects", navLink: "/projects" },
         { id: 4, icon: "fa-solid fa-phone", navName: "Contact", navLink: "/contact" },
         { id: 5, icon: "fa-solid fa-people-group", navName: "Team", navLink: "/team" },
         { id: 6, icon: "fa-solid fa-comment", navName: "Faq", navLink: "/faq" },
        
     ];


    

    const limitToMoreNavs = 3;
    const normalNavs = linksArray.slice(0,limitToMoreNavs);
    const moreNavs = linksArray.slice(limitToMoreNavs,linksArray.length)


    return (
        <>
            <AppBar
                style={{
                    background: "#fff",
                }}
            >
                <Toolbar
                    sx={{
                        height: "16vh",
                    }}
                >
                    {isMatch ? (
                        <>
                            <Grid sx={{ placeItems: "center" }} container>
                                <Grid item xs={2}>
                                    <NavbarDrawer linksArray={linksArrayForDrawer}></NavbarDrawer>
                                </Grid>
                                <Grid item xs={1} />
                                <Grid item xs={5} sx={{ p: 4, overflow: 'hidden' }}>
                                    <Link to="/">
                                        <img   src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="" />
                                    </Link>
                                </Grid>
                                <Grid item x={2} />
                                <Grid item xs={2} sx={{ml: 'auto'}} >
                                    <IconButton onClick={handleSearchBarOpen} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                    <Modal open={searchBarOpen} onClose={handleSearchBarClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                                        <Box sx={style}>
                                        <SearchBarForNavbar></SearchBarForNavbar>
                                        </Box>
                                    </Modal>
                                </Grid>
                            </Grid>
                        </>
                    ) : (
                        <>
                            <Grid sx={{ placeItems: "center" }} container>
                                <Grid
                                    item
                                    xs={5}
                                    sx={{
                                        display: "flex",
                                        marginLeft: "auto",
                                    }}
                                >
                                    <Tabs
                                        indicatorColor="secondary"
                                        textColor="inherit"
                                        value={value}
                                        onChange={(e, val) => setValue(val)}
                                        sx={{
                                            color: "black",
                                        }}
                                    >
                                        {normalNavs.map((linkInfo) => (
                                            <Tab
                                                sx={{
                                                    fontWeight: "bold",
                                                    fontSize: 14,
                                                    ":hover": {
                                                        color: "#9CDCFE",
                                                    },
                                                }}
                                                key={linkInfo.id}
                                                label={linkInfo.navName}
                                                component={Link}
                                                to={linkInfo.navLink}
                                            ></Tab>
                                        ))}

                                        <Tab
                                            aria-controls="tab-menu"
                                            aria-haspopup="true"
                                            onClick={handleClick}
                                            sx={{
                                                fontWeight: "bold",
                                                fontSize: 14,
                                                ":hover": {
                                                    color: "#9CDCFE",
                                                },
                                            }}
                                            label="More"
                                            icon={<SouthEastIcon fontSize="small"></SouthEastIcon>}
                                            iconPosition="end"
                                        ></Tab>
                                    </Tabs>

                                    <Menu id="tab-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                        {moreNavs.map((linksInfo) => (
                                            <MenuItem key={linksInfo.key} component={Link} to={linksInfo.navLink} onClick={handleClose}>
                                                {linksInfo.navName}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Grid>

                                <Grid item xs={2} sx={{ px: 4 }}>
                                    <Link to="/">
                                        <img src={`${process.env.PUBLIC_URL}/images/logo/logo.png`} alt="" />
                                    </Link>
                                </Grid>

                                <Grid item xs={1} />
                                <Grid item xs={4}>
                                    <Box
                                        style={{ width: "500px" }}
                                        sx={{
                                            display: "flex",

                                            mx: "auto",
                                        }}
                                    >
                                        <SearchBarForNavbar></SearchBarForNavbar>
                                    </Box>
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
