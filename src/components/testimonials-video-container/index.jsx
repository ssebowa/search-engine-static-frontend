import React from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import VideoCard from "../testimonials-video-card";
import VideoData from "../../data/vIdeos.json";
import PageBanner from "../../containers/global/page-banner";
import SectionTitle from "../section-title";

function index() {
    return (
        <Container>
            <div className="col-xl-6 col-lg-8 mx-auto">
                <SectionTitle
                    classOption="title-section mt-10 p-5 text-center"
                    title="<span class='text-primary'>Testimonials</span> "
                    excerptClassOption="null"
                    excerpt="What our user says"
                />
            </div>

            <Row>
                {VideoData &&
                    VideoData.map((video) => {
                        return (
                            <VideoCard key={video.key} data={video}></VideoCard>
                        );
                    })}
            </Row>
        </Container>
    );
}

export default index;
