import React from "react";
import "../../utils/style.css";
import { Container, Card, Row, Col, CardBody, CardHeader } from "reactstrap";
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
                        <p className=" text-xl font-normal mt-0">
                            Your searches make our planet pristine, verdant and <br /> comfortable just as it is intended to be.
                        </p>
                    </div>
                </Row>
                <Row style={{ marginBottom: "20%" }}>
                    <Col>
                        <div className="card-div">
                            <img className="card-image" src="https://i.ibb.co/nLsQQM6/support-skbwpy-jpg.png" alt="" />
                            <div className="top-left">
                                <p className="card-main-header">Become Climate Active </p>
                                <p className="card-paragraph">
                                    Be a solution to the disastrous effects of climate change as you
                                    <br /> beautify the environment with your green searches.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row style={{ marginBottom: 80, marginTop: 50 }}>
                    <Col
                        className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6"
                        style={{
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <div className="container1">
                            <div className="card1">
                                <div className="image">
                                    {" "}
                                    <img alt="" src={child} style={{ borderRadius: 30 }} />{" "}
                                </div>
                                <div className="content" style={{ border: "transparent" }}>
                                    <h6 style={{ fontWeight: "bold", fontSize: 20 }}>Feed a Hungry Child</h6>
                                    <p>
                                        Create an active mind and body that could break a chain of a particular poverty cycle through your hunger-free searches
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <div className="container1">
                            <div className="card1">
                                <div
                                    className="image"
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
                </Row>
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
