import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GallaryImageList from "../components/GallaryImageList/GallaryImageList";
import NavBarUpdated from "../components/NavBarUpdated/NavBarUpdated";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";

function gallary(props) {
    return (
        <>
            <Box>
                <SEO title="Ssebowa – Gallery" />
                <NavBarUpdated></NavBarUpdated>
                <PageBanner
                    title="Our Gallery"
                    excerpt="With Ssebowa, you can push the human race forward"
                    image="./images/service/2.png"
                />
                <GallaryImageList></GallaryImageList>
                <Footer></Footer>
                <ScrollToTop></ScrollToTop>
                {/* <SEO title="Ssebowa – Gallery" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title="Our Gallary"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/service/2.png"
                    />
                    {/* <ServiceListContainer />
                    <TestimonialReverse />
                    <FunFactContainer classOption="mt-0 mt-lg-0" />
                    <TeamContainer classOption="null" />
                    <BrandContainer />
                    <NewsletterArea /> */}
                {/* <GallaryImagesContainer></GallaryImagesContainer>
            <Footer />
            <ScrollToTop /> */}{" "}
                {/* */}
            </Box>
        </>
    );
}

export default gallary;
