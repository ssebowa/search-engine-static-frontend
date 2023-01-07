import React from "react";
import PropTypes from "prop-types";
import NewsletterArea from "../containers/global/newsletter";
import PageBanner from "../containers/global/page-banner";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Layout from "../layouts/index";
import BlogData from "../data/blog.json";
import BlogItemContainer from "../containers/blog/blog-item";
import { slugify } from "../utils";
import ScrollToTop from "../components/scroll-to-top";
import SEO from "../components/seo";

const BlogAuthor = ({
    match: {
        params: { author },
    },
}) => {
    const data = BlogData.filter((blog) => slugify(blog.author) === author);
    const authorTitle = data[0].author;
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Buznex – Blog Author" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title={authorTitle}
                        excerpt="Pleasure rationally encounter consequences <br />
                        are extremely painful great oppurtunity"
                        image="/images/blog/banner.png"
                    />
                    <BlogItemContainer data={data} />
                    <NewsletterArea />
                    <Footer />
                    <ScrollToTop />
                </div>
            </Layout>
        </React.Fragment>
    );
};

BlogAuthor.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            author: PropTypes.string,
        }),
    }),
};

export default BlogAuthor;
