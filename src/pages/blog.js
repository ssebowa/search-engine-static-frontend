import React from "react";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import StickyChatBot from "../components/stickyChatBot";
import BlogItemContainer from "../containers/blog/blog-item";
import PageBanner from "../containers/global/page-banner";
import BlogData from "../data/blog.json";
import Footer from "../layouts/footer";
import Layout from "../layouts/index";

const BlogPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Ssebowa – Projects" />
                <div className="wrapper">
                    <NavBarUpdated2></NavBarUpdated2>

                    <PageBanner title="Current Campaings" excerpt="Projects around the world" image="./images/blog/banner.png" />
                    <BlogItemContainer data={BlogData} />
                    {/* <NewsletterArea /> */}
                    <Footer />
                    <ScrollToTop />
                    <StickyChatBot />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default BlogPage;
