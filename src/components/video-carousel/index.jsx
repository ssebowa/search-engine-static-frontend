import React from "react";
import Carousel from "react-bootstrap/Carousel";

import VideoData from "../../data/vIdeos.json";

import ReactPlayer from "react-player/youtube";
import SectionTitle from "../section-title";

const index = () => {
    return (
        <div className=" my-5 py-5 mx-4 h-75">
            <div className="col-xl-6 col-lg-8 mx-auto">
                <SectionTitle
                    classOption="title-section mt-10 p-5 text-center"
                    title="<span class='text-primary'>Testimonials</span> "
                    excerptClassOption="null"
                    excerpt="What our user says"
                />
            </div>
            <Carousel variant="dark">
                <Carousel.Item interval={500}>
                    <ReactPlayer
                        className="w-50  mx-auto"
                        url="https://youtu.be/5Zyc_fqsLqc"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <ReactPlayer
                        className="w-50  mx-auto"
                        url="https://youtu.be/Ag6Cn0lT_ys"
                    />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <ReactPlayer
                        className="w-50  mx-auto"
                        url="https://youtu.be/5J-wCwuLJuU"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default index;
