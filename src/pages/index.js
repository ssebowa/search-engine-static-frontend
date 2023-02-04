import React from "react";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import VideoCaorusel from "../components/video-carousel";
import AboutContainer from "../containers/about";
import FunFactContainer from "../containers/global/funfact";
import IconBoxContainer from "../containers/global/icon-box";
import IntroContainer from "../containers/home/intro";
import Footer from "../layouts/footer";
import Layout from "../layouts/index";

// Import the Cloudinary classes.

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
                    {/* <TodosSlideAnimation classOption="section-pb"></TodosSlideAnimation>  */}

                    {/* <CardFlipBook></CardFlipBook> */}

                    {/* <BookCard1></BookCard1> */}

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
