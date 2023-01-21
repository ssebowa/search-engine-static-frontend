import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    
    Tab,
    
    Tabs,
    
    Typography,
} from "@mui/material";
import { flexbox } from "@mui/system";
import { MenuRounded } from "@mui/icons-material";

import { Link } from "react-router-dom";


import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
    drawerBackground: {
        backgroundImage: "url(./images/backgrounds/drawerBG.jpg)",
        
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        width: "48%",
        padding: theme.spacing(2),
    }
    
}));


const NavbarDrawer = ({ linksArray }) => {
     const classes = useStyles();
     
    const [open, setOpen] = useState(false);

    return (
        <>
            <Box>
                <Drawer
                    PaperProps={{
                        className: classes.drawerBackground, 
                    }}
                    
                    anchor="left"
                    open={open}
                    onClose={() => setOpen(false)}
                    style={{}}
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
                        ))}
                    </List>
                </Drawer>

                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        marginLeft: "auto",
                        width: "80%",
                        color: "#0E1133",
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
