import { Box, Container, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import HomeData from "../../data/home.json";

import CardSlideAnimation from "../CardWithAnimations/CardSlideAnimation";
import SectionTitle from "../section-title";

function todos({ classOption }) {
    return (
        <>
            <Container>
                <Grid alignItems="center" justifyContent="center" spacing={{ xs: 2, md: 3 }} container>
                    {HomeData[2].iconBox &&
                        HomeData[2].iconBox.map((data, key) => {
                            return (
                                <Grid xs={4} sx={{ py: 4 }} className="bg-danger" key={key} item>
                                    <CardSlideAnimation data={data}></CardSlideAnimation>
                                </Grid>
                            );
                        })}
                </Grid>
            </Container>
        </>
    );
}

export default todos;
