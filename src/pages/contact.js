import React from "react";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import ContactContainer from "../containers/contact";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Layout from "../layouts/index";

const ContactPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ssebowa – Contact" />
                <div className="wrapper">
                    <NavBarUpdated2></NavBarUpdated2>
                    <PageBanner
                        title="Contact us"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/contact/1.png"
                    />
                    <ContactContainer />

                    <Footer />
                    <ScrollToTop />
                    <StickyChatBot />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default ContactPage;
