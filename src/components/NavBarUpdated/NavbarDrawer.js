import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Tab, Tabs, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import { MenuRounded } from "@mui/icons-material";

import { Link } from "react-router-dom";

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    drawerBackground: {
        backgroundImage:
            "url(https://res.cloudinary.com/dicgvondb/image/upload/v1674668331/ssebowa/ssebowa.org/search-engine-static-frontend/images/backgrounds/drawerBGGreen_l9seap.jpg)",
        backgroundSize: "cover",
        color: "white",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "200px",
        padding: theme.spacing(2),
    },
}));

const NavbarDrawer = ({ linksArray }) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    let componentName = "Link";

    return (
        <>
            <Box>
                <Drawer
                    PaperProps={{
                        className: classes.drawerBackground,
                    }}
                    anchor="right"
                    open={open}
                    onClose={() => setOpen(false)}
                    style={{ color: "white" }}
                >
                    {/* {linksArray.map((linkInfo) => (
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
                ))} */}

                    <List>
                        {linksArray.map((linkInfo) => (
                            <>
                                <ListItem onClick={() => setOpen(false)} key={linkInfo.id} component={Link} to={linkInfo.navLink} divider>
                                    <ListItemText variant="h1" sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", my: 0.5 }}>
                                            <FontAwesomeIcon icon={linkInfo.icon} color="royalblue"></FontAwesomeIcon>

                                            <Typography
                                                sx={{
                                                    color: "#181C51 ",
                                                    fontWeight: "bold",
                                                    fontSize: "1.2rem",
                                                    fontFamily: "Raleway",

                                                    ":hover": {
                                                        color: "coral",
                                                    },
                                                    mx: 3,
                                                }}
                                            >
                                                {linkInfo.navName}
                                            </Typography>
                                        </Box>
                                    </ListItemText>
                                </ListItem>
                            </>
                        ))}
                        {/* <>
                            <ListItem onClick={() => setOpen(false)} divider>
                                <a href="https://blog.ssebowa.org/" target="_blank" rel="noopener noreferrer">
                                    <ListItemText variant="h1" sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", my: 0.5 }}>
                                            <FontAwesomeIcon icon="fa-solid fa-blog" color="royalblue"></FontAwesomeIcon>

                                            <Typography
                                                sx={{
                                                    color: "#181C51 ",
                                                    fontWeight: "bold",
                                                    fontSize: "1.2rem",
                                                    fontFamily: "Raleway",

                                                    ":hover": {
                                                        color: "coral",
                                                    },
                                                    mx: 3,
                                                }}
                                            >
                                                Blog
                                            </Typography>
                                        </Box>
                                    </ListItemText>
                                </a>
                            </ListItem>
                        </>

                        <>
                            <ListItem onClick={() => setOpen(false)} divider>
                                <a href="https://store.ssebowa.org/" target="_blank" rel="noopener noreferrer">
                                    <ListItemText variant="h1" sx={{ display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
                                        <Box sx={{ display: "flex", alignItems: "center", my: 0.5 }}>
                                            <FontAwesomeIcon icon="fa-solid fa-store" color="royalblue"></FontAwesomeIcon>

                                            <Typography
                                                sx={{
                                                    color: "#181C51 ",
                                                    fontWeight: "bold",
                                                    fontSize: "1.2rem",
                                                    fontFamily: "Raleway",

                                                    ":hover": {
                                                        color: "coral",
                                                    },
                                                    mx: 3,
                                                }}
                                            >
                                                Store
                                            </Typography>
                                        </Box>
                                    </ListItemText>
                                </a>
                            </ListItem>
                        </> */}
                    </List>
                </Drawer>

                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        marginLeft: "auto",
                        width: "80%",
                        color: "white",
                        borderColor: "greenyellow",
                    }}
                >
                    <MenuRounded sx={{ fontSize: 40 }} />
                </IconButton>
            </Box>
        </>
    );
};

export default NavbarDrawer;
