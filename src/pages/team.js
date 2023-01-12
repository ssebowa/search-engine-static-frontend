import React from "react";
import NavBarUpdated from "../components/NavBarUpdated/NavBarUpdated";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import TeampPageContainer from "../containers/team-page-container";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";

const TeamPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ssebowa – Team" />
                <div className="wrapper">
                    <NavBarUpdated></NavBarUpdated>
                    <PageBanner
                        title="Our Team"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/team/5.png"
                    />
                    <TeampPageContainer />

                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default TeamPage;
