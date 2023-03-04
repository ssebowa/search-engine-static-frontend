import { Box } from "@mui/material";

import React from "react";
import GallaryImageList from "../components/GallaryImageList/GallaryImageList";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";

function gallary(props) {
    return (
        <>
            <Box>
                <SEO title="Ssebowa – Gallery" />
                <NavBarUpdated2></NavBarUpdated2>
                <PageBanner
                    title="Our Gallery"
                    excerpt="
                    Welcome to Our Gallery! </br>
                    We are so proud of the work our Ssebowa community has done to make our world a better place. Our gallery showcases the greatest moments of our journey, the people and organizations we'have helped, the incredible stories we've told, and the impact our work has had.
</br>
We invite you to explore our gallery and see how we've made a difference. Together, we can continue transforming our world and empower individuals to create a brighter future.

Thank you for your support!"
                    image="./images/service/2.png"
                />
                <GallaryImageList></GallaryImageList>
                <Footer></Footer>
                <StickyChatBot />
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
            <ScrollToTop /> */} {/* */}
            </Box>
        </>
    );
}

export default gallary;
