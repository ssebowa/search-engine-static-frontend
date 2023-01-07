import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faHome,
    faInfoCircle,
    faImages,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import SearchBarHome from "../../searchbarhome/SearchBarHome";

const MainMenu = () => {
    return (
        <nav className="main-menu d-none d-lg-block">
            <ul className="d-flex">
                <li>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/gallery"}>
                        Gallery
                    </NavLink>

                    {/* <ul className="sub-menu">
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/service"}
                            >
                                Gallery
                            </NavLink>
                        </li>
                        {/* <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    process.env.PUBLIC_URL +
                                    "/service-details/1"
                                }
                            >
                                single service
                            </NavLink>
                        </li> */}
                    {/* </ul>*/}
                </li>
                {/* <li>
                        <NavLink to="/">Contacts</NavLink>
                        <ul className="sub-menu">
                            <li className="sub-menu-item">
                                <NavLink
                                    className="sub-menu-link"
                                    to={process.env.PUBLIC_URL + "/faq"}
                                >
                                    faq
                                </NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink
                                    className="sub-menu-link"
                                    to={process.env.PUBLIC_URL + "/team"}
                                >
                                    team
                                </NavLink>
                            </li>
                        </ul>
                    </li> */}
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/projects"}>
                        Projects
                    </NavLink>
                    {/* <ul className="sub-menu"> */}
                    {/* <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/blog"}
                            >
                                Gallery
                            </NavLink>
                        </li> */}
                    {/* <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    process.env.PUBLIC_URL +
                                    "/blog-left-sidebar"
                                }
                            >
                                blog grid left sidebar
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={
                                    process.env.PUBLIC_URL +
                                    "/blog-right-sidebar"
                                }
                            >
                                blog grid right sidebar
                            </NavLink>
                        </li>
                        <li className="sub-menu-item">
                            <NavLink
                                className="sub-menu-link"
                                to={process.env.PUBLIC_URL + "/blog-details/1"}
                            >
                                blog details
                            </NavLink>
                        </li> */}
                    {/* </ul> */}
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/team"}>
                        Team
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;

export const MenuForSearch = () => {
    return (
        <nav className="w-100">
            <ul className="d-flex justify-content-evenly d-flex">
                <li>
                    <NavLink exact to="/">
                        <FontAwesomeIcon
                            icon={faHome}
                            className="pt-1 "
                            size="xl"
                            style={{
                                color: "#181c51",
                            }}
                        />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}>
                        <FontAwesomeIcon
                            icon={faInfoCircle}
                            className="pt-1 "
                            size="xl"
                            style={{
                                color: "#181c51",
                            }}
                        />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}>
                        <FontAwesomeIcon
                            icon={faImages}
                            className="pt-1 "
                            size="xl"
                            style={{
                                color: "#181c51",
                            }}
                        />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/blog"}>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            className="pt-1 "
                            size="xl"
                            style={{
                                color: "#181c51",
                            }}
                        />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
