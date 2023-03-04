import { Box, Container, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import HomeData from "../../data/home.json";
import BookCard1 from "../CardWithAnimations/BookCard1";

import CardSlideAnimation from "../CardWithAnimations/CardSlideAnimation";
import SectionTitle from "../section-title";

function todos({ classOption }) {
    return (
        <>
            <Container sx={{ my: 8 }}>
                <Grid alignItems="center" justifyContent="center" spacing={{ xs: 2, md: 3 }} container>
                    {HomeData[2].iconBox &&
                        HomeData[2].iconBox.map((data, key) => {
                            return (
                                <Grid xs={4} sx={{ py: 4 }} key={key} item>
                                    <CardSlideAnimation data={data}></CardSlideAnimation>
                                    {/* <BookCard1 data={data} ></BookCard1> */}
                                </Grid>
                            );
                        })}
                </Grid>
            </Container>
        </>
    );
}

export default todos;
