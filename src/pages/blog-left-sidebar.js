import React from "react";
import BlogItemLeftContainer from "../containers/blog/blog-item-left";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import BlogData from "../data/blog.json";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const BlogLeftSidebarPage = () => {
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Buznex – Blog Left Sidebar" />
                <div className="wrapper" style={{ width: "98vw" }}>
                    <Header />
                    <PageBanner
                        title="Blog Post"
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="./images/blog/banner.png"
                    />
                    <BlogItemLeftContainer data={BlogData} />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

export default BlogLeftSidebarPage;
