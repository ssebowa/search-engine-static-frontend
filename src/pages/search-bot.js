import React from "react";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import Layout from "../layouts/index";
import SearchHeader from "../layouts/SearchHeader";
import SearchResults from "../components/SearchResults/SearchResults";
import Footer from "../layouts/footer";
import SearchTypeHeader from "../components/SearchResults/SearchTypeHeader";
import SearchBotHeader from "../layouts/SearchHeader/index-bot";
import ChatBot from "../components/ChatBot/ChatBot";

const SearchBotPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ssebowa Search" />
                <meta
                    name="description"
                    content="Ssebowa turns your searches to trees, food for hungry children and sanitary  pads for girls without pads. Search now to mitigate climate change and change lives."
                />
                <div className="wrapper">
                    <div className="hero-shape1 navbar fixed-top">
                        <img src={`${process.env.PUBLIC_URL}/images/slider/shape/shape1.png`} alt="shape" />
                    </div>
                    <SearchBotHeader />
                    <ChatBot />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default SearchBotPage;
