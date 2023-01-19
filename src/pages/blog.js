import React from "react";
import BlogItemContainer from "../containers/blog/blog-item";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import BlogData from "../data/blog.json";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";
import NavBarUpdated2 from "../components/NavBarUpdated/NavBarUpdated2";


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
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default BlogPage;
