import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { getClosest, getSiblings, slideToggle, slideUp } from "../../../utils";
import Logo from "../../logo";

const MobileMenu = ({ show, onClose }) => {
    const onClickHandler = (e) => {
        const target = e.currentTarget;
        const parentEl = target.parentElement;
        if (parentEl?.classList.contains("menu-expand") || target.classList.contains("menu-expand")) {
            const element = target.classList.contains("icon") ? parentEl : target;
            const parent = getClosest(element, "li");
            const childNodes = parent.childNodes;
            const parentSiblings = getSiblings(parent);
            parentSiblings.forEach((sibling) => {
                const sibChildNodes = sibling.childNodes;
                sibChildNodes.forEach((child) => {
                    if (child.nodeName === "UL") {
                        slideUp(child, 1000);
                    }
                });
            });
            childNodes.forEach((child) => {
                if (child.nodeName === "UL") {
                    slideToggle(child, 1000);
                }
            });
        }
    };
    return (
        <div className={`offcanvas-modal ${show ? "show" : ""}`}>
            <div className="offcanvas-dialog">
                <div className="menu-content">
                    <div className="offcanvas-header">
                        <Logo
                            classOption="offcanvas-logo d-inline-block"
                            image="https://res.cloudinary.com/dicgvondb/image/upload/v1674668332/ssebowa/ssebowa.org/search-engine-static-frontend/images/logo/logo_jybeu2.png"
                        />
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>

                    <nav id="offcanvasNav" className="offcanvas-menu">
                        <ul style={{ marginLeft: 20 }}>
                            <li>
                                <NavLink exact to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={process.env.PUBLIC_URL + "/about"}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to={process.env.PUBLIC_URL + "/gallery"}>Gallery</NavLink>
                                {/* <span
                                    className="menu-expand"
                                    onClick={onClickHandler}
                                    aria-hidden="true"
                                ></span>
                                <ul>
                                    <li>
                                        <NavLink
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/service"
                                            }
                                        >
                                            service
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/service-details/1"
                                            }
                                        >
                                            single service
                                        </NavLink>
                                    </li>
                                </ul> */}
                            </li>
                            {/* <li>
                                <NavLink to="/">Pages</NavLink>
                                <span
                                    className="menu-expand"
                                    onClick={onClickHandler}
                                    aria-hidden="true"
                                ></span>
                                <ul>
                                    <li>
                                        <NavLink
                                            to={process.env.PUBLIC_URL + "/faq"}
                                        >
                                            faq
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                process.env.PUBLIC_URL + "/team"
                                            }
                                        >
                                            team
                                        </NavLink>
                                    </li>
                                </ul>
                            </li> */}
                            <li>
                                <NavLink to={process.env.PUBLIC_URL + "/projects"}>Projects</NavLink>
                                {/* <span
                                    className="menu-expand"
                                    onClick={onClickHandler}
                                    aria-hidden="true"
                                ></span>
                                <ul>
                                    <li>
                                        <NavLink
                                            to={
                                                process.env.PUBLIC_URL + "/blog"
                                            }
                                        >
                                            blog
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/blog-left-sidebar"
                                            }
                                        >
                                            blog grid left sidebar
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/blog-right-sidebar"
                                            }
                                        >
                                            blog grid right sidebar
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to={
                                                process.env.PUBLIC_URL +
                                                "/blog-details/1"
                                            }
                                        >
                                            blog details
                                        </NavLink>
                                    </li>
                                </ul> */}
                            </li>
                            <li>
                                <NavLink to={process.env.PUBLIC_URL + "/contact"}>Contact</NavLink>
                            </li>
                            {/* <li>
                                <a href="https://blog.ssebowa.org" target="_blank" rel="noopener noreferrer">Blog</a>
                            </li>
                            <li>
                                <a href="https://store.ssebowa.org" target="_blank" rel="noopener noreferrer">Store</a>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

MobileMenu.propTypes = {
    show: PropTypes.bool,
    onClose: PropTypes.func,
};

export default MobileMenu;
