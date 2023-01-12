import React from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

import VideoCard from "../testimonials-video-card";
import VideoData from "../../data/vIdeos.json";
import PageBanner from "../../containers/global/page-banner";
import SectionTitle from "../section-title";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

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

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                }}
            >
                {VideoData &&
                    VideoData.map((video) => {
                        return (
                            <>
                                <Box xs={12}>
                                    <VideoCard key={video.key} data={video}>
                                        {" "}
                                    </VideoCard>
                                </Box>
                            </>
                        );
                    })}
            </Box>
        </Container>
    );
}

export default index;
