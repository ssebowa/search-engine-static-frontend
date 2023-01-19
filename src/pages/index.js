import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import BrandContainer from "../containers/global/brand/index";
import FunFactContainer from "../containers/global/funfact";
import IconBoxContainer from "../containers/global/icon-box";
import NewsletterArea from "../containers/global/newsletter";
import TeamContainer from "../containers/global/team";
import TestimonialContainer from "../containers/global/testimonial";
import AboutContainer from "../containers/about";
import HomeAboutContainer from "../containers/home/about";
import HomeBlog from "../containers/home/blog";
import IntroContainer from "../containers/home/intro";
import ServiceListContainer from "../containers/service/service-list";
import VideoContainer from "../components/testimonials-video-container";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import VideoCaorusel from "../components/video-carousel";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";

import { Box } from "@mui/material";
import VideoBackgroundSection from "../components/VideoBackgroundSection/VideoBackgroundSection";

import TodosSlideAnimation from "../components/ToDos/index";
import CardFlipBook from "../components/CardWithAnimations/CardFlipBook";

const HomePage = () => {
    const linksArray = [
        { id: 0, navName: "Home", navLink: "/" },
        { id: 1, navName: "About", navLink: "/about" },
        { id: 2, navName: "Gallery", navLink: "/gallery" },
        { id: 3, navName: "Projects", navLink: "/projects" },
        { id: 4, navName: "Contact", navLink: "/contact" },
        { id: 5, navName: "Team", navLink: "/team" },
    ];
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ssebowa Home" />
                <div className="wrapper">
                    {/* <Header /> */}
                    {/* <NavBarUpdated></NavBarUpdated>  */}
                    <NavBarUpdated2></NavBarUpdated2>

                    {/* <div className="d-flex justify-content-end" style={{ background: "transparent" }}>
                        <div className="m-1 p-2 " style={{ width: "6rem", height: "5rem" }}>
                            <NavbarDrawer linksArray={linksArray}></NavbarDrawer>
                        </div>
                    </div> */}

                    <IntroContainer />
                    {/* <BrandContainer /> */}

                    {/* <HomeAboutContainer /> */}
                    {/* <ServiceListContainer />
                    <TestimonialContainer /> */}

                    <IconBoxContainer classOption="section-pb"></IconBoxContainer>

                    {/* <TodosSlideAnimation classOption="section-pb"></TodosSlideAnimation> */}

                    <FunFactContainer classOption="mt-10 mt-lg-0" />
                    <AboutContainer></AboutContainer>
                    <VideoCaorusel></VideoCaorusel>
                    {/* <VideoContainer></VideoContainer> */}
                    {/* <HomeBlog />
                    <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default HomePage;
