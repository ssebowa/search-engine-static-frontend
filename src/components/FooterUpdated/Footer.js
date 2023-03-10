import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Label, Input, Row, Col } from "reactstrap";
import Logo from "../../assets/images/download.png";

const Footer = () => {
    return (
        <>
            <div>
                <Row style={{ backgroundColor: "#011627", color: "white" }}>
                    <Col className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div style={{ padding: 10, marginTop: 20, marginBottom: 20, paddingLeft: 20 }}>
                            <img src={Logo} alt="logo"></img>
                            <p>Make your daily searches with Ssebowa and see how you will make this 21st century not look like this 21th century</p>

                            <div className="row">
                                <i className="bi bi-instagram" style={{ fontSize: 14, color: "white" }}></i>
                                <i className="bi bi-facebook" />
                                <i className="bi bi-twitter"></i>
                                <i className="bi bi-youtube"></i>
                                <i className="bi bi-telegram"></i>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div style={{ padding: 10, marginTop: 20, marginBottom: 20, paddingLeft: 20 }}>
                            <h4 style={{ color: "white", fontWeight: "bold" }}>Quick Link</h4>
                            <p>Terms and Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Out Team</p>
                            <p>Contact Us</p>
                            <p>About Us</p>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div style={{ padding: 10, marginTop: 20, marginBottom: 20, paddingLeft: 20 }}>
                            <h4 style={{ color: "white", fontWeight: "bold" }}>Contact Info</h4>
                            <p>30 N Gould St, Sheridan, WY 82801, USA</p>
                            <p>info@ssebowa.org</p>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div style={{ padding: 10, marginTop: 20, marginBottom: 20, paddingLeft: 20 }}>
                            <h4 style={{ color: "white", fontWeight: "bold" }}>Join A Newsletter</h4>
                            <Label>Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter Your Email" />

                            <button
                                style={{
                                    background: "#3faf04",
                                    padding: "16px 40px",
                                    marginTop: "20px",
                                    boxShadow: " 0px 24px 64px rgb(0 0 0 / 12%)",
                                    borderRadius: "8px",
                                    color: "white",
                                }}
                                className="header-banner-search-button"
                                // style={{ marginTop: 20 }}
                            >
                                Send
                            </button>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
        // <div>
        //     <footer className="footer p-10 bg-base-200 text-base-content">
        //         <div>
        //             <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
        //             <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
        //         </div>

        //         <div>
        //             <span className="footer-title">Quick Link</span>
        //             <a className="link link-hover" href='/' >Terms & Conditions</a>
        //             <a className="link link-hover" href='/' >Privacy Policy</a>
        //             <a className="link link-hover" href='/'>Our team</a>
        //             <a className="link link-hover" href='/' >Contact us</a>
        //             <a className="link link-hover" href='/' >About us</a>
        //         </div>

        //         <div>
        //             <span className="footer-title">Contact Info</span>
        //             <a className="link link-hover" href='/' >30 N Gould St, Sheridan. <br />WY 82801, USA</a>
        //             <a className="link link-hover" href='/'>info@ssebowa.org</a>

        //         </div>

        //         <div>
        //             <span className="footer-title">Join A Newsletter</span>
        //             <div className="">
        //                 <Label className="label">
        //                     <span className="label-text">Your Email</span>
        //                 </Label>
        //                 <div className="">
        //                     <input type="text" placeholder="Enter Your Email" className="input input-bordered w-52 pr-16" />
        //                     <div>
        //                         <button className="btn btn-primary rounded" style={{ marginTop: '20px' }}>Subscribe</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </footer>
        // </div>
    );
};

export default Footer;
