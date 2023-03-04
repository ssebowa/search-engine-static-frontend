import React from "react";
import { Link } from "react-router-dom";
import appleStore from "../../assets/images/footer/appleStore.png";
import playStore from "../../assets/images/footer/playStore.png";
import Logo from "../../components/logo";
import SocialIcon from "../../components/social-icon";

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-top position-relative mt-10">
                <img
                    className="footer-shape"
                    src={
                        process.env.PUBLIC_URL +
                        "https://res.cloudinary.com/dicgvondb/image/upload/v1674668359/ssebowa/ssebowa.org/search-engine-static-frontend/images/footer/1_g8ohpc.png"
                    }
                    alt="shape"
                />
                <div className="container">
                    <div className="row mb-n7">
                        <div className="col-lg-3 col-sm-6 mt-5">
                            <div className="footer-widget">
                                <Logo
                                    classOption="footer-logo mb-9 sm"
                                    image="https://res.cloudinary.com/dicgvondb/image/upload/v1674668332/ssebowa/ssebowa.org/search-engine-static-frontend/images/logo/logo-footer_c5axiu.png"
                                />
                                <p>Make your daily searches with Ssebowa and see how you will make this 21st century not look like this 21th century</p>
                                <ul className="footer-social-links">
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.facebook.com/profile.php?id=100086051799350"
                                            icon="fa-brands fa-square-facebook"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.instagram.com/ssebowa_official/"
                                            icon=" fa-brands fa-instagram"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.linkedin.com/showcase/ssebowa/"
                                            icon="fa-brands fa-linkedin"
                                        />
                                    </li>
                                    <li>
                                        <SocialIcon
                                            classOption="footer-social-link"
                                            path="https://www.tiktok.com/@disanssebowabasal"
                                            icon="fa-brands fa-tiktok"
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 offset-xl-1 mt-10">
                            <div className="footer-widget">
                                <h4 className="title">Quick Link</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link className="footer-link" to={process.env.PUBLIC_URL + "/terms-and-conditions"}>
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="footer-link" to={process.env.PUBLIC_URL + "/privacy-policy"}>
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="footer-link" to={process.env.PUBLIC_URL + "/team"}>
                                            Our team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="footer-link" to={process.env.PUBLIC_URL + "/contact"}>
                                            Contact us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="footer-link" to={process.env.PUBLIC_URL + "/about"}>
                                            About us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <div className="col-lg-2 col-sm-6">
                            <div className="footer-widget">
                                <h4 className="title">Services</h4>
                                <ul className="footer-menu">
                                    <li>
                                        <Link className="footer-link" to={process.env.PUBLIC_URL + `/service-details/2`}>
                                            Planting Trees
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="footer-link" to={process.env.PUBLIC_URL + `/service-details/3`}>
                                            Serving Meals
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-sm-6 mt-10">
                            <div className="footer-widget">
                                <h4 className="title">Contact info</h4>
                                <p>30 N Gould St, Sheridan, WY 82801, USA</p>
                                <ul className="address">
                                    {/* <li>
                                        <a className="address-link" href="tel:+32474171274">
                                            {" "}
                                            +32474171274
                                        </a>
                                    </li> */}

                                    <li>
                                        <a className="address-link" href="mailto:info@ssebowa.org">
                                            info@ssebowa.org
                                        </a>
                                    </li>
                                </ul>
                                {/*  */}
                            </div>
                        </div>

                        {/* ------------ Mobile Apps -------------- */}

                        <div className="col-lg-2 col-sm-6 mt-10">
                            <div className="footer-widget">
                                <h4 className="title">Mobile Apps</h4>
                                <ul className="footer-menu ">
                                    <li>
                                        <a target="_blank" href="https://play.google.com/store/apps/details?id=org.ssebowa&hl=en&gl=US" rel="noreferrer">
                                            <img width={136} src={playStore} alt="play-store" />
                                        </a>
                                    </li>

                                    <li style={{ marginLeft: "8px" }}>
                                        <a target="_blank" href="https://apps.apple.com/app/ssebowa-search-engine/id1666356131" rel="noreferrer">
                                            <img width={120} src={appleStore} alt="play-store" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="copyright-info text-center">
                                <p>
                                    Copyright &copy; 2023 Made with {/* <i className="icofont-heart-alt"></i> */}
                                    By{" "}
                                    <a href="https://themeforest.net/user/codecarnival/portfolio" target="_blank" rel="noreferrer">
                                        Ssebowa
                                    </a>
                                    , All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
