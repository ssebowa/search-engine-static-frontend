import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Typography,
} from "@mui/material";
import { MenuRounded } from "@mui/icons-material";

import { Link } from "react-router-dom";

import React, { useState } from "react";

const NavbarDrawer = ({ linksArray }) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Drawer
                PaperProps={{
                    sx: {
                        background: "rgb(240,255,244)",
                        background:
                            "linear-gradient(90deg, rgba(240,255,244,1) 0%, rgba(240,255,244,1) 35%, rgba(240,255,244,1) 100%)",
                        width: "40%",
                    },
                }}
                anchor="right"
                open={open}
                onClose={() => setOpen(false)}
            >
                <List>
                    {linksArray.map((linkInfo) => (
                        <ListItem
                            onClick={() => setOpen(false)}
                            key={linkInfo.id}
                            component={Link}
                            to={linkInfo.navLink}
                            divider
                        >
                            <ListItemText variant="h1">
                                <Typography
                                    sx={{
                                        color: "#181C51 ",
                                        fontWeight: "bold",
                                        fontSize: "1.2rem",
                                        fontFamily: "Raleway",
                                        ":hover": {
                                            color: "coral",
                                        },
                                    }}
                                >
                                    {linkInfo.navName}
                                </Typography>
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
        </>
    );
};

export default NavbarDrawer;
