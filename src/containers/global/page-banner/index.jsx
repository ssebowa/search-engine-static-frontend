import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";
import VideoBackgroundSection from "../../../components/VideoBackgroundSection/VideoBackgroundSection";

const PageBanner = ({ title, excerpt, image, Titlecolor = "#55FE3F", subVariant = "subtitle1" }) => {
    return (
        <div className="banner-section position-relative " style={{ height: "90vh" }}>
            <VideoBackgroundSection></VideoBackgroundSection>
            {/* <img className="banner-shape" src={process.env.PUBLIC_URL + "/images/banner/shape1.png"} alt="shape" /> */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12" style={{ position: "relative" }}>
                        <Typography
                            variant="h2"
                            align="center"
                            color={Titlecolor}
                            fontFamily="'Playfair Display', serif"
                            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                        >
                            {" "}
                            {title}
                        </Typography>
                        <Typography
                            variant={subVariant}
                            align="center"
                            color="#fff"
                            fontFamily="'Playfair Display', serif"
                            style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                            dangerouslySetInnerHTML={{ __html: excerpt }}
                        ></Typography>
                    </div>

                    {/* <div className="col-md-6 mt-7 mt-md-0">
                        <PageBannerImage image={image} />
                    </div> */}
                </div>
            </div>
        </div>
    );
};

PageBanner.propTypes = {
    title: PropTypes.string,
    excerpt: PropTypes.string,
    image: PropTypes.string,
};

export default PageBanner;
