import React from "react";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import PageBanner from "../containers/global/page-banner";
import TeampPageContainer from "../containers/team-page-container";
import Footer from "../layouts/footer";
import Layout from "../layouts/index";

const TeamPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ssebowa – Team" />
                <div className="wrapper">
                    <NavBarUpdated2></NavBarUpdated2>
                    <PageBanner
                        title="Our Team"
                        excerpt="Our team is composed of talented, dedicated professionals who strive to bring the best possible experience to our customers. We believe in collaboration, creativity, and commitment to excellence. We take pride in our work, and are passionate about delivering outstanding user experience to our customers as we support soil, climate, starving children and also support the girl child"
                        image="./images/team/5.png"
                    />
                    <TeampPageContainer />

                    <Footer />
                    <ScrollToTop />
                    <StickyChatBot />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default TeamPage;
