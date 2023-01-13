import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const linksArray = [
    { id: 0, navName: "Home", navLink: "/" },
    { id: 1, navName: "About", navLink: "/about" },
    { id: 2, navName: "Gallery", navLink: "/gallery" },
    { id: 3, navName: "Projects", navLink: "/projects" },
    { id: 4, navName: "Contact", navLink: "/contact" },
];

const NavBarFooter = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ height: "100px" }}>
            <Container>
                <Nav className="ml-4  w-75 d-flex justify-content-around">
                    {linksArray &&
                        linksArray.map((link) => {
                            return (
                                <>
                                    <Nav.Link>
                                        <Link
                                            style={{
                                                color: "#343fd1",
                                                fontSize: "0.9rem",
                                            }}
                                            to={link.navLink}
                                        >
                                            {link.navName}
                                        </Link>
                                    </Nav.Link>
                                </>
                            );
                        })}
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavBarFooter;
