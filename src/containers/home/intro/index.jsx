import React from "react";
import Intro from "../../../components/intro";

const IntroContainer = () => {
    return (
        <>
            {/* <VideoBackgroundSection> </VideoBackgroundSection> */}
            <div className="section position-relative">
                <div className="hero-shape1">{/* <img src={`${process.env.PUBLIC_URL}/images/slider/shape/shape1.png`} alt="shape" /> */}</div>
                <div className="hero-shape2">{/* <img src={`${process.env.PUBLIC_URL}/images/slider/shape/shape2.png`} alt="shape" /> */}</div>
                <Intro />
            </div>
        </>
    );
};

export default IntroContainer;
