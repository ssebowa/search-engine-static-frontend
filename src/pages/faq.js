import React from "react";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import AccordionContainer from "../containers/accordion";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Layout from "../layouts/index";

const FaqPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Buznex – Faq" />
                <div className="wrapper">
                    <NavBarUpdated2></NavBarUpdated2>
                    <PageBanner
                        title="FAQ"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/faq/1.png"
                    />
                    <AccordionContainer />
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                    <StickyChatBot />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default FaqPage;
