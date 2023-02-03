import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import AboutContainer from "../containers/about";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import IconBoxContainer from "../containers/global/icon-box";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TestimonialReverse from "../containers/global/testimonial-reverse";
import TeamContainer from "../containers/global/team";
import ServiceListContainer from "../containers/service/service-list";
import VideoContainer from "../components/testimonials-video-container";
import MissionAndVision from "../components/mission-and-vision";

import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";

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
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
