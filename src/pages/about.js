import React from "react";
import MissionAndVision from "../components/mission-and-vision";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import FunFactContainer from "../containers/global/funfact";
import IconBoxContainer from "../containers/global/icon-box";
import PageBanner from "../containers/global/page-banner";
import TeamContainer from "../containers/global/team";

import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import StickyChatBot from "../components/stickyChatBot";
import Footer from "../layouts/footer";
import Layout from "../layouts/index";
// import { Carousel } from "react-daisyui";
import CardCarousel from "../components/CardCarousel/CardCarousel";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ssebowa – About" />
                <div className="wrapper text-center">
                    <NavBarUpdated2></NavBarUpdated2>

                    <PageBanner
                        className="text-center"
                        title="About us"
                        Titlecolor="rgb(255 255 255)"
                        subVariant="h6"
                        excerpt="Ssebowa changes your searches in to meals for starving children, plants trees where needed most and give sanitary pads to young women"
                        image="https://res.cloudinary.com/dicgvondb/image/upload/v1674668336/ssebowa/ssebowa.org/search-engine-static-frontend/images/banner/about_banner_bamxbg.jpg"
                    />

                    <MissionAndVision></MissionAndVision>

                    <IconBoxContainer classOption="section-pt" />
                    <FunFactContainer classOption="mt-0 mt-lg-0" />
                    {/* <BrandContainer /> */}

                    {/* <ServiceListContainer /> */}
                    {/* <TestimonialReverse /> */}
                    <TeamContainer classOption="section-pb" />
                    {/* <CardCarousel></CardCarousel> */}

                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                    <StickyChatBot />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
