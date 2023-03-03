import React from "react";
import Intro from "../../../components/intro";
import VideoBackgroundSection from "../../../components/VideoBackgroundSection/VideoBackgroundSection";
// import smallCircleImg from "../../../assets/images/BannerImg/smallCircle.png";
import CirlceImg from "../../../assets/images/BannerImg/ssebowains.jpeg";
import CirlceVideo from "../../../assets/images/BannerImg/plant.mp4";

const IntroContainer = () => {
    return (
        <>
            <VideoBackgroundSection> </VideoBackgroundSection>
            <div className="section position-relative banner-back-img">
                <div className="img-Cirlce">
                    {/* <img src={smallCircleImg} alt="" /> */}
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        width="100%"
                        height="100%"
                        style={{
                            borderRadius: "50%",
                            objectFit: "cover",
                        }}
                    >
                        <source
                            src={CirlceVideo}
                            type="video/mp4"
                            style={{
                                borderRadius: "50%",
                                height: "100",
                            }}
                        />
                    </video>
                </div>
                {/* <div className="small-Circle"> */}
                {/* <img src={CirlceImg} alt="" /> */}
                {/* </div> */}
                <div className="hero-shape1">{/* <img src={`${process.env.PUBLIC_URL}/images/slider/shape/shape1.png`} alt="shape" /> */}</div>
                <div className="hero-shape2">{/* <img src={`${process.env.PUBLIC_URL}/images/slider/shape/shape2.png`} alt="shape" /> */}</div>
                <Intro />
            </div>
        </>
    );
};

export default IntroContainer;
