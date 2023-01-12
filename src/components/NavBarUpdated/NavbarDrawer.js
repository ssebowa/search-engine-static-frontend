import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
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
                        background: "rgb(82, 210, 131)",
                        background:
                            "radial-gradient(circle, rgba(82,210,131,1) 0%, rgba(82,210,131,1) 35%, rgba(82,210,131,1) 100%)",

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
                            <ListItemText
                                sx={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: 16,
                                    fontFamily: "monospace",
                                }}
                            >
                                {linkInfo.navName}
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
                <MenuRounded />
            </IconButton>
        </>
    );
};

export default NavbarDrawer;
