import { Box, Container } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

import MissionAndVisionData from "../../data/missionAndVision.json";

import CardMui from "../cardsMui/CardMui";
import BookCard1 from "../CardWithAnimations/BookCard1";
import SectionTitle from "../section-title";

const index = () => {
    return (
        <Container>
            {" "}
            <div className="col-xl-6 col-lg-8 mx-auto">
                <SectionTitle
                    classOption="title-section mt-10 p-3 text-center"
                    title="<span class='text-dark'>Mission and Vision</span> "
                    excerptClassOption="null"
                    excerpt="Just a look at"
                />
            </div>
            <Grid2 sx={{ mx: "auto" }} container>
                {MissionAndVisionData &&
                    MissionAndVisionData.map((data) => {
                        return (
                            <>
                                <Grid2
                                    sx={{ mx: "auto", p: 1 }}
                                    xs={8}
                                    md={6}
                                    lg={3}
                                    item
                                >
                                    {/* <CardMui data={data}></CardMui> */}
                                    <BookCard1 data={data} ></BookCard1>
                                </Grid2>
                            </>
                        );
                    })}
            </Grid2>
        </Container>
    );
};

export default index;
