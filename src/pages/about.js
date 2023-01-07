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
import ServiceListContainer from "../containers/service/service-list";
import VideoContainer from "../components/testimonials-video-container";

import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const AboutPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ssebowa – About" />
                <div className="wrapper text-center">
                    <Header />
                    <PageBanner
                        className="text-center"
                        title="About us"
                        excerpt="Get to know us"
                        image="./images/banner/1.png"
                    />
                    <IconBoxContainer classOption="section-pt" />
                    <FunFactContainer classOption="mt-0 mt-lg-0" />
                    {/* <BrandContainer /> */}
                    <AboutContainer />
                    {/* <ServiceListContainer /> */}
                    {/* <TestimonialReverse /> */}
                    <VideoContainer></VideoContainer>
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default AboutPage;
