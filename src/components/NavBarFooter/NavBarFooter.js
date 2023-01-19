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
    { id: 5, navName: "Privacy Policy", navLink: "/privacy-policy" },
    { id: 6, navName: "Terms and Conditions", navLink: "/terms-and-conditions" },
];

const NavBarFooter = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ height: "100px" }}>
            <Container>
                <Nav className="ml-4  w-100 d-flex justify-content-around">
                    {linksArray &&
                        linksArray.map((link) => {
                            return (
                                <>
                                    <Nav.Link key={link.id}>
                                        <Link
                                            style={{
                                                color: "#343fd1",
                                                fontSize: "0.8rem",
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
