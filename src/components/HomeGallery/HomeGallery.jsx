import React from "react";
import "../../utils/style.css";
import { Container, Card, Row, Col, CardBody, CardHeader } from "reactstrap";
// import imgg from "../../assets/images/BannerImg/imgg.jpeg";
import child from "../../assets/images/BannerImg/child.png";

const HomeGallery = () => {
    return (
        <>
            <br></br>
            <Container fluid={true}>
                <Row style={{ marginTop: 20 }}>
                    <div className="text-center">
                        <h1 className="home-title">
                            What Your <span style={{ color: "#4AB421" }}>Searches</span> Do
                        </h1>
                        <p className="home-para font-normal mt-0">
                            Your searches make our planet pristine, verdant and comfortable just as it is intended to be.
                        </p>
                    </div>
                </Row>

                <Row>
                    <Col>
                        <div className="card-div">
                            <img className="card-image" src="https://i.ibb.co/W2R82Y2/what-our-searches-do-1.jpg" alt="" />

                            <div className="top-left">
                                <div>
                                    <p className=" fw-bold card-main-header">Become Climate Active </p>
                                    <p className="card-paragraph">
                                        Be a solution to the disastrous effects of climate change as you
                                        <br /> beautify the environment with your green searches.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                {/* <div className="d-flex justify-items-center justify-content-center gap-4 two_images mt-5">
                    <div>
                        <img
                            style={{ borderRadius: "10%" }}
                            className="images mg-fluid "
                            // style={{ height: "594px", width: "599px" }}
                            src="https://i.ibb.co/gPCLxdc/rsz-whatsapp-image-2023-03-04-at-152137.jpg"
                            alt=""
                        />


                        <div className="text-center bg-white gellary-infos">
                            <h6 className=" infos-tilte">Feed a Hungry Child</h6>
                            <p className="infos-pra">
                                Create an active mind and body that could break a chain of a particular poverty cycle through your hunger-free searches
                            </p>
                        </div>
                    </div>

                    <div >
                        <img style={{ borderRadius: "10%" }} className="images img-fluid" src="https://i.ibb.co/g7jtCtW/image-2303.png" alt="" />

                        <div className="text-center bg-white gellary-infos">
                            <h6 className="infos-tilte">Give A Sanitary Pad</h6>
                            <p className="infos-pra">
                                Create an active mind and body that could break a chain of a particular poverty cycle through your hunger-free searches
                            </p>
                        </div>
                    </div>
                </div> */}

                <div className="d-flex justify-items-center justify-content-center mx-auto mt-5">
                    <div className="me-4">
                        <img
                            style={{ borderRadius: "10%" }}
                            className="mg-fluid"
                            // style={{ height: "594px", width: "599px" }}
                            src="https://i.ibb.co/FsW0s8X/what-our-searches-do-2.jpg"
                            alt=""
                        />

                        <div className="text-center bg-white gellary-infos">
                            <h6 className="infos-tilte">Feed a Hungry Child</h6>
                            <p className="infos-pra">
                                Create an active mind and body that could break a chain of a particular poverty cycle through your hunger-free searches
                            </p>
                        </div>
                    </div>

                    <div className="ms-4">
                        <img style={{ borderRadius: "10%" }} className="img-fluid" src="https://i.ibb.co/D4RGsn3/what-our-searches-do-3-1.jpg" alt="" />

                        <div className="text-center bg-white gellary-infos">
                            <h6 className="infos-tilte">Give A Sanitary Pad</h6>
                            <p className="infos-pra">
                                Shape a girl into a change maker or an inspiration that the world can not wait to have by making your searches girl-power
                                oriented.
                            </p>
                        </div>
                    </div>
                </div>

                {/* <Row style={{ marginBottom: 80 }}>
                    <Col
                        className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
                        style={{
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="container1 mt-5">
                            <div className="card1 mt-5">
                                <div className="image mt-5">
                                    {" "}
                                    <img
                                        alt=""
                                        src="https://i.ibb.co/R4WNZBr/Whats-App-Image-2023-03-04-at-12-04-45-1.jpg"
                                        style={{ borderRadius: 30, height: "300px", width: "300px" }}
                                    />{" "}
                                </div>

                                <div className="content " style={{ border: "transparent" }}>
                                    <h6 style={{ fontWeight: "bold", fontSize: 20, marginBottom: "10px" }}>Feed a Hungry Child</h6>
                                    <p>
                                        Create an active mind and body that could break a chain of a particular poverty cycle through your hunger-free searches
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 ">
                        <div className="container1 mt-5">
                            <div className="card1 mt-5">
                                <div
                                    className="image mt-5"
                                    style={{
                                        borderRadius: "47.8981px",
                                    }}
                                >
                                    <img alt="" src={child} style={{ borderRadius: 30 }} />{" "}
                                </div>
                                <div className="content" style={{ border: "transparent" }}>
                                    <h6 style={{ fontWeight: "bold", fontSize: 20 }}>Give A Sanitary Pad</h6>
                                    <p>
                                        Create an active mind and body that could break a chain of a particular poverty cycle through your hunger-free searches
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row> */}
            </Container>
            {/* <div className='flex flex-col justify-center m-0' >
            <div className='text-center mt-24 mb-14 pt-1 pb-1'>
                <h1 className=' text-5xl font-semibold'>What Your <span style={{ color: "#4AB421" }}>Searches</span> Do</h1>
                <p className=' text-xl font-normal mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua. Lorem ipsum dolor sit amet,</p>
            </div>
            <div className='text-center mx-auto mb-12'>
                <div className='text-white text-center relative left-05 top-36 rounded-tl-3xl rounded-br-3xl homegallery-active ' style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}>
                    <h1 className=' text-3xl font-semibold pt-3 mb-3'>Become Climate Active</h1>
                    <p className=' text-xl font-medium '>Everytime you search with Ssebowa, you plant a needed <br /> tree in a needed place.</p>
                </div>
                <img className='rounded-3xl ' src="https://i.ibb.co/nLsQQM6/support-skbwpy-jpg.png" alt="" />
            </div>
            <div className='flex mx-auto'>
                <div>
                    <img className=' image-full rounded-3xl mr-6 ' src="https://i.ibb.co/g7jtCtW/image-2303.png" alt="" />

                    <div className='bg-white rounded-3xl text-center relative left-6 bottom-16' style={{ width: "554px", height: '201px' }}>
                        <h1 className=' text-3xl font-semibold pt-6'>Feed A Hungry Child</h1>
                        <p className='pt-3 ml-10 mr-10 text-xl'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>

                <div>
                    <img className='rounded-3xl ml-6' src="https://i.ibb.co/g7jtCtW/image-2303.png" alt="" />

                    <div className='bg-white rounded-3xl text-center relative left-12 bottom-16' style={{ width: "554px", height: '201px' }}>
                        <h1 className=' text-3xl font-semibold pt-6'>Feed A Hungry Child</h1>
                        <p className='pt-3 ml-10 mr-10 text-xl'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
            </div>
            <div className='text-center mb-36'>
                <button className="btn btn-active btn-secondary">{"Know More About US > > >"} </button>
            </div>
        </div> */}
        </>
    );
};

export default HomeGallery;
