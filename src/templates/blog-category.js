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

const BlogCategory = ({
    match: {
        params: { slug },
    },
}) => {
    const data = BlogData.map((blog) => {
        return {
            ...blog,
            categories: blog.categories.filter((cat) => slugify(cat) === slug),
        };
    }).filter((blog) => blog.categories.length > 0);
    const categoryTitle = data[0].categories[0];
    return (
        <React.Fragment>
            <Layout>
                <SEO title="Buznex – Blog Categories" />
                <div className="wrapper">
                    <Header />
                    <PageBanner
                        title={categoryTitle}
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

BlogCategory.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string,
        }),
    }),
};

export default BlogCategory;
