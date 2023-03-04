import { Container, Box, ImageList, ImageListItem, Fade } from "@mui/material";
import React from "react";
import GallaryImagesData from "../../data/gallaryImages.json";

function GallaryImageList(props) {
    return (
        <Container>
            <Box sx={{ mt: 15 }}>
                <ImageList variant="masonry" cols={3} gap={16}>
                    {GallaryImagesData.map((item) => (
                        <ImageListItem
                            key={item.id}
                            sx={{ boxShadow: 10, borderRadius: "2%" }}
                            TransitionComponent={Fade}
                        >
                            <img
                                src={`${item.thumb}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.thumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.id}
                                loading="lazy"
                                style={{ borderRadius: "2%" }}
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </Container>
    );
}

export default GallaryImageList;
